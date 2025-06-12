"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_api = require("../../api/api.js");
new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "events" has been externalized for browser compatibility. Cannot access "events.${key}" in client code.  See https://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
  }
});
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup + CustomTabBar)();
}
const CustomTabBar = () => "../../components/CustomTabBar.js";
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userInfo = common_vendor.ref({});
    const enterpriseInfo = common_vendor.ref({});
    const popup = common_vendor.ref();
    const open = () => {
      common_vendor.index.__f__("log", "at pages/user/user.vue:252", 1);
      popup.value.open("center");
    };
    const goBack = () => {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    };
    const getUserInfo = () => {
      api_api.apiGetUserInfo().then((res) => {
        userInfo.value = res.data.userInfo;
      });
    };
    const getEnterpriseInfo = () => {
      api_api.apiGetEnterpriseInfo().then((res) => {
        enterpriseInfo.value = res;
      });
    };
    getUserInfo();
    getEnterpriseInfo();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(goBack),
        b: common_vendor.t(userInfo.value.nickname),
        c: common_vendor.p({
          type: "gear",
          size: "24",
          color: "#fff"
        }),
        d: common_vendor.t(userInfo.value.phone),
        e: common_vendor.t(userInfo.value.address),
        f: common_vendor.t(userInfo.value.industryId),
        g: common_vendor.t(enterpriseInfo.value.companyName),
        h: common_vendor.t(enterpriseInfo.value.businessId),
        i: common_vendor.t(enterpriseInfo.value.account),
        j: common_vendor.t(enterpriseInfo.value.accountAddress),
        k: enterpriseInfo.value.imageurl,
        l: common_assets._imports_0$2,
        m: common_assets._imports_1$1,
        n: common_assets._imports_2$1,
        o: common_vendor.o(open),
        p: common_assets._imports_3$1,
        q: common_vendor.sr(popup, "0f7520f0-1", {
          "k": "popup"
        }),
        r: common_vendor.p({
          type: "center",
          ["border-radius"]: "10px 10px 0 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
