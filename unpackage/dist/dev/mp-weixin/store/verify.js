"use strict";
const common_vendor = require("../common/vendor.js");
const useVerifyStore = common_vendor.defineStore("verify", () => {
  const ifLogin = common_vendor.ref(false);
  const ifVerify = common_vendor.ref(false);
  const login = () => {
    ifLogin.value = true;
  };
  const verify = () => {
    ifVerify.value = true;
  };
  return {
    ifLogin,
    ifVerify,
    login,
    verify
  };
}, {
  persist: true
  // 正确传递持久化选项
});
exports.useVerifyStore = useVerifyStore;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/verify.js.map
