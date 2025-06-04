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
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    const userInfo = common_vendor.ref({});
    const enterpriseInfo = common_vendor.ref({});
    const getUserInfo = () => {
      api_api.apiGetUserInfo().then((res) => {
        userInfo.value = res.data.userInfo;
      });
    };
    const getEnterpriseInfo = () => {
      api_api.apiGetEnterpriseInfo().then((res) => {
        enterpriseInfo.value = res;
        common_vendor.index.__f__("log", "at pages/user/user.vue:182", enterpriseInfo.value);
      });
    };
    getUserInfo();
    getEnterpriseInfo();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(userInfo.value.nickname),
        b: common_vendor.p({
          type: "gear",
          size: "24",
          color: "#fff"
        }),
        c: common_vendor.t(userInfo.value.phone),
        d: common_vendor.t(userInfo.value.address.slice(0, 11)),
        e: common_vendor.t(userInfo.value.industryId),
        f: common_vendor.t(enterpriseInfo.value.companyName),
        g: common_vendor.t(enterpriseInfo.value.businessId),
        h: common_vendor.t(enterpriseInfo.value.account),
        i: common_vendor.t(enterpriseInfo.value.accountAddress),
        j: enterpriseInfo.value.imageurl,
        k: common_assets._imports_0$1,
        l: common_assets._imports_1$1,
        m: common_assets._imports_2$1,
        n: common_assets._imports_3$1
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
