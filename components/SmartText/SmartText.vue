<template>
	<div class="smart-text-container" ref="container" @mouseenter="showFullText" @mouseleave="hideFullText">
		<div class="smart-text-content" :class="{ 'need-ellipsis': showEllipsis }" ref="textContent">
			{{ displayText }}
		</div>

		<!-- 浮窗显示完整内容 -->
		<transition name="fade">
			<div v-show="isPopupVisible" class="smart-text-popup" :style="popupStyle" ref="popup">
				<div class="popup-content">
					{{ text }}
					<div class="popup-arrow"></div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	// 防抖处理
	import {
		debounce
	} from "lodash";

	export default {
		name: "SmartText",
		props: {
			text: {
				type: String,
				required: true,
			},
			maxLines: {
				type: Number,
				default: 2,
			},
		},
		data() {
			return {
				showEllipsis: false,
				isPopupVisible: false,
				containerWidth: 0,
				popupStyle: {},
				resizeObserver: null,
				isObserving: false,
			};
		},
		computed: {
			displayText() {
				if (!this.showEllipsis) return this.text;
				const maxChars = Math.floor(this.text.length * 0.6);
				return this.text.substring(0, maxChars) + "...";
			},
		},
		mounted() {
			this.initTextOverflowCheck();
		},
		beforeDestroy() {
			this.uninstallResizeObserver();
		},
		methods: {
			initTextOverflowCheck() {
				this.$nextTick(() => {
					this.checkTextOverflow();
				});
			},

			checkTextOverflow() {
				this.$nextTick(() => {
					const textElement = this.$refs.textContent;
					if (!textElement) return;

					// 设置为单行不换行以检测宽度
					textElement.style.whiteSpace = "nowrap";
					textElement.style.webkitLineClamp = "unset";

					// 比较内容的实际宽度和容器宽度
					const isOverflowing = textElement.scrollWidth > textElement.clientWidth;
					this.showEllipsis = isOverflowing;

					// 恢复原始样式
					textElement.style.whiteSpace = "";
					textElement.style.webkitLineClamp = "";

					// 仅在需要时开启观察
					if (isOverflowing && !this.isObserving) {
						this.isObserving = true;
						this.setupResizeObserver();
					} else if (!isOverflowing && this.isObserving) {
						this.uninstallResizeObserver();
						this.isObserving = false;
					}
				});
			},

			showFullText() {
				if (!this.showEllipsis) return;

				this.isPopupVisible = true;
				this.$nextTick(() => {
					this.positionPopup();
				});
			},

			hideFullText() {
				this.isPopupVisible = false;
			},

			positionPopup() {
				const containerRect = this.$refs.container.getBoundingClientRect();
				const popup = this.$refs.popup;

				if (!popup) return;

				// 计算浮窗位置（居中显示）
				const popupWidth = popup.offsetWidth;
				const left = containerRect.left + (containerRect.width - popupWidth) / 2;
				const top = containerRect.top - popup.offsetHeight - 10;

				this.popupStyle = {
					left: `${Math.max(10, left)}px`, // 确保不超出屏幕左侧
					top: `${Math.max(10, top)}px`, // 确保不超出屏幕上侧
					maxWidth: `${window.innerWidth - 20}px`, // 限制最大宽度
				};
			},

			setupResizeObserver() {
				// 使用ResizeObserver监听容器/父容器大小变化;
				if (typeof ResizeObserver !== "undefined") {
					this.resizeObserver = new ResizeObserver(
						debounce(() => {
							this.checkTextOverflow();
						}, 100)
					);

					if (this.$refs.container) {
						this.resizeObserver.observe(this.$refs.container);
					}
				} else {
					// 兼容旧浏览器回退方案监听窗口resize
					window.addEventListener("resize", this.checkTextOverflow);
				}
			},

			uninstallResizeObserver() {
				if (this.resizeObserver) {
					this.resizeObserver.disconnect();
					this.resizeObserver = null;
				} else {
					window.removeEventListener("resize", this.checkTextOverflow);
				}
			},
		},
		watch: {
			text() {
				this.initTextOverflowCheck();
			},
		},
	};
</script>

<style scoped>
	.smart-text-container {
		position: relative;
		width: 100%;
		cursor: default;
	}

	.smart-text-content {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		line-height: 1.4;
	}

	.smart-text-content.need-ellipsis {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		white-space: normal;
	}

	/* 浮窗样式 */
	.smart-text-popup {
		position: fixed;
		z-index: 9999;
		padding: 8px 0;
		width: 300px;
		pointer-events: none;
	}

	.popup-content {
		position: relative;
		background: rgba(0, 0, 0, 0.85);
		color: white;
		padding: 12px 16px;
		border-radius: 4px;
		max-width: 100%;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
		word-break: break-word;
	}

	.popup-arrow {
		position: absolute;
		bottom: -6px;
		left: 50%;
		transform: translateX(-50%);
		width: 0;
		height: 0;
		border-left: 6px solid transparent;
		border-right: 6px solid transparent;
		border-top: 6px solid rgba(0, 0, 0, 0.85);
	}

	/* 过渡动画 */
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.2s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>