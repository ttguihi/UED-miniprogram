"use strict";
const common_vendor = require("../common/vendor.js");
const useInformationStore = common_vendor.defineStore("news", () => {
  const informationData = common_vendor.ref([]);
  const fetchData = (data) => {
    informationData.value = data;
  };
  return {
    informationData,
    fetchData
  };
}, {
  persist: true
  // 正确传递持久化选项
});
exports.useInformationStore = useInformationStore;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/news.js.map
