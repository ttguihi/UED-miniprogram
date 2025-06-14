"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
const _sfc_main = {
  __name: "CustomNavBar",
  props: {
    title: {
      type: String,
      default: "友益典·AI营销管理系统"
    },
    //确定跳转方式
    navigateType: {
      type: String,
      default: "navigateBack"
    },
    ifShowIcon: {
      type: Boolean,
      default: false
    },
    ifShowArrow: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        b: __props.ifShowIcon
      }, __props.ifShowIcon ? {} : {}, {
        c: __props.ifShowArrow
      }, __props.ifShowArrow ? {
        d: __props.navigateType
      } : {}, {
        e: common_vendor.t(__props.title),
        f: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        g: common_vendor.unref(utils_system.getNavBarHeight)() + "px"
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eb837262"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/CustomNavBar/CustomNavBar.js.map
