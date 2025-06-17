"use strict";
const common_vendor = require("../../common/vendor.js");
const api_example_api = require("../../api/example/api.js");
if (!Math) {
  (CustomNavBar + DetailExampleCard + AIKindCard)();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const DetailExampleCard = () => "../../components/DetailExampleCard.js";
const AIKindCard = () => "../../components/AIKindCard.js";
const _sfc_main = {
  __name: "example_detail",
  setup(__props) {
    const params = common_vendor.ref();
    const caseId = common_vendor.ref();
    const data = common_vendor.ref();
    common_vendor.onLoad(async (e) => {
      caseId.value = e.id;
      let res = await api_example_api.apiGetExampleDetail({
        caseId: caseId.value
      });
      params.value = res;
      data.value = {
        companyName: res.companyName,
        orderName: res.orderName,
        projectName: res.projectName,
        image: res.image
      };
    });
    const AIList = common_vendor.ref([
      "DeepSeek",
      "豆包",
      "腾讯元宝",
      "KIMI",
      "通义千问",
      "chatGPT",
      "KIMI",
      "KIMI",
      "DeepSeek"
    ]);
    if (AIList.value.length >= 9) {
      AIList.value[8] = "......";
      AIList.value = AIList.value.slice(0, 9);
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: ""
        }),
        b: data.value
      }, data.value ? {
        c: common_vendor.p({
          data: data.value
        })
      } : {}, {
        d: common_vendor.f(AIList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: "6cd3ce7b-2-" + i0
          };
        }),
        e: common_vendor.f(5, (item, k0, i0) => {
          return {};
        }),
        f: params.value.listImage
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6cd3ce7b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/example_detail/example_detail.js.map
