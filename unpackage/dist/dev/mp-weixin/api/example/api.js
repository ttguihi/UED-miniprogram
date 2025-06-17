"use strict";
const utils_request = require("../../utils/request.js");
function apiGetExampleDetail(data = {}) {
  return utils_request.request({
    url: "/firm/getCaseDetail",
    data
  });
}
function apiGetExamples(data = {}) {
  return utils_request.request({
    url: "/firm/getAllCase",
    data
  });
}
exports.apiGetExampleDetail = apiGetExampleDetail;
exports.apiGetExamples = apiGetExamples;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/api/example/api.js.map
