"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
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
        d: common_vendor.p({
          type: "left",
          color: "#fff",
          size: "30"
        })
      } : {}, {
        e: __props.navigateType,
        f: common_vendor.t(__props.title),
        g: common_vendor.unref(utils_system.getTitleBarHeight)() + "px",
        h: common_vendor.unref(utils_system.getNavBarHeight)() + "px"
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-eb837262"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/CustomNavBar/CustomNavBar.js.map
