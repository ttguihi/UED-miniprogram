"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_icons + MyDatePicker)();
}
const MyDatePicker = () => "../MyDatePicker/components/uni-datetime-picker/uni-datetime-picker.js";
const _sfc_main = {
  __name: "DatePicker",
  setup(__props, { expose: __expose }) {
    const currentDate = common_vendor.ref(common_vendor.dayjs().format("YYYY-MM-DD"));
    common_vendor.ref(false);
    common_vendor.computed(() => {
      return common_vendor.dayjs(currentDate.value).format("YYYY-MM-DD");
    });
    __expose({
      currentDate
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "left",
          size: "20",
          color: "#333"
        }),
        b: common_vendor.p({
          type: "date",
          ["clear-icon"]: false
        }),
        c: common_vendor.p({
          type: "right",
          size: "20",
          color: "#333"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f6a917b3"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/DatePicker/DatePicker.js.map
