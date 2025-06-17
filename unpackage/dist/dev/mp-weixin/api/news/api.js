"use strict";
const utils_request = require("../../utils/request.js");
function apiGetNewsDetail(data = {}) {
  return utils_request.request({
    url: "/firm/getInformationDetail",
    data
  });
}
exports.apiGetNewsDetail = apiGetNewsDetail;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/api/news/api.js.map
