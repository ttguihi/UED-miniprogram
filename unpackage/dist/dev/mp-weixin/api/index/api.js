"use strict";
const utils_request = require("../../utils/request.js");
function apiGetProjectsNum() {
  return utils_request.request({
    url: "/project/getNumber"
  });
}
exports.apiGetProjectsNum = apiGetProjectsNum;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/api/index/api.js.map
