"use strict";
const utils_request = require("../utils/request.js");
function apiGetUserInfo() {
  return utils_request.request({
    url: "/user/getUser"
  });
}
function apiGetEnterpriseInfo() {
  return utils_request.request({
    url: "/company/getCompany"
  });
}
function apiGetHomeData() {
  return utils_request.request({
    url: "/index/getHomeData"
  });
}
exports.apiGetEnterpriseInfo = apiGetEnterpriseInfo;
exports.apiGetHomeData = apiGetHomeData;
exports.apiGetUserInfo = apiGetUserInfo;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/api.js.map
