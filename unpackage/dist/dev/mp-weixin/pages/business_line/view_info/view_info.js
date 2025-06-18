"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_CustomNavBar2 = common_vendor.resolveComponent("CustomNavBar");
  _easycom_CustomNavBar2();
}
const _easycom_CustomNavBar = () => "../../../components/CustomNavBar/CustomNavBar.js";
if (!Math) {
  (_easycom_CustomNavBar + MySelect + DatePicker)();
}
const MySelect = () => "../../../components/MySelect/components/uni-data-select/uni-data-select.js";
const DatePicker = () => "../../../components/DatePicker/DatePicker.js";
const _sfc_main = {
  __name: "view_info",
  setup(__props) {
    const value = common_vendor.ref(0);
    const currentIndex = common_vendor.ref(0);
    const goPre = () => {
      currentIndex.value = (currentIndex.value - 1 + 4) % 4;
    };
    const goNext = () => {
      currentIndex.value = (currentIndex.value + 1) % 4;
    };
    const onSwiperChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const range = common_vendor.ref([
      {
        value: 0,
        text: "KIMI"
      },
      {
        value: 1,
        text: "DeepSeek"
      },
      {
        value: 2,
        text: "Chatgpt"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: ""
        }),
        b: common_vendor.o(($event) => value.value = $event),
        c: common_vendor.p({
          localdata: range.value,
          clear: false,
          modelValue: value.value
        }),
        d: common_vendor.o(goPre),
        e: common_vendor.f(4, (item, k0, i0) => {
          return {};
        }),
        f: currentIndex.value,
        g: common_vendor.o(onSwiperChange),
        h: common_vendor.o(goNext)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-53d505d5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/business_line/view_info/view_info.js.map
