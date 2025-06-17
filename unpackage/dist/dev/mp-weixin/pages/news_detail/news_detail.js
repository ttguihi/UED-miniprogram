"use strict";
const common_vendor = require("../../common/vendor.js");
const api_news_api = require("../../api/news/api.js");
const store_news = require("../../store/news.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_icons + NewsCard)();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const NewsCard = () => "../../components/NewsCard.js";
const _sfc_main = {
  __name: "news_detail",
  setup(__props) {
    const informationStore = store_news.useInformationStore();
    const newsData = common_vendor.ref([]);
    newsData.value = informationStore.informationData;
    const InformationId = common_vendor.ref();
    const params = common_vendor.ref();
    common_vendor.onLoad(async (e) => {
      InformationId.value = e.id;
      let res = await api_news_api.apiGetNewsDetail({
        InformationId: InformationId.value
      });
      params.value = res;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: ""
        }),
        b: common_vendor.t(params.value.title),
        c: common_vendor.t(params.value.updateTime),
        d: common_vendor.p({
          type: "redo-filled",
          color: "#FF7700"
        }),
        e: common_vendor.t(params.value.texts),
        f: common_vendor.f(newsData.value, (item, k0, i0) => {
          return {
            a: "34343ac9-2-" + i0,
            b: common_vendor.p({
              newsCard: item
            })
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-34343ac9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/news_detail/news_detail.js.map
