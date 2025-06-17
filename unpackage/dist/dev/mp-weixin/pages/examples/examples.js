"use strict";
const common_vendor = require("../../common/vendor.js");
const store_news = require("../../store/news.js");
const api_example_api = require("../../api/example/api.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_search_bar + ExampleCard + NewsCard)();
}
const ExampleCard = () => "../../components/ExampleCard.js";
const NewsCard = () => "../../components/NewsCard.js";
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const _sfc_main = {
  __name: "examples",
  setup(__props) {
    common_vendor.ref(" ");
    const examleList = common_vendor.ref([]);
    const getExamples = async () => {
      let res = await api_example_api.apiGetExamples();
      examleList.value = res.data;
      common_vendor.index.__f__("log", "at pages/examples/examples.vue:58", examleList.value);
    };
    getExamples();
    common_vendor.ref(["精选案例", "最新资讯"]);
    store_news.useInformationStore();
    const informationData = common_vendor.ref([]);
    informationData.value = common_vendor.index.getStorageSync("informationList");
    const current = common_vendor.ref(1);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "公司动态"
        }),
        b: common_vendor.p({
          focus: true,
          placeholder: "输入要搜索的关键词",
          radius: 50,
          cancelText: "",
          clearButton: "none",
          cancelButton: "none"
        }),
        c: current.value === 1 ? 1 : "",
        d: common_vendor.o(($event) => current.value = 1),
        e: current.value === 2 ? 1 : "",
        f: common_vendor.o(($event) => current.value = 2),
        g: current.value == 1
      }, current.value == 1 ? {
        h: common_vendor.f(examleList.value, (item, index, i0) => {
          return {
            a: index,
            b: "854ecef0-2-" + i0,
            c: common_vendor.p({
              exampleCard: item
            })
          };
        })
      } : {
        i: common_vendor.f(informationData.value, (item, k0, i0) => {
          return {
            a: "854ecef0-3-" + i0,
            b: common_vendor.p({
              newsCard: item
            })
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-854ecef0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/examples/examples.js.map
