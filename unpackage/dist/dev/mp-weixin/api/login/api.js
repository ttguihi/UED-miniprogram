"use strict";
const utils_request = require("../../utils/request.js");
function apiSendCode(data = {}) {
  return utils_request.request({
    url: "/auth/captcha",
    method: "POST",
    data
  });
}
exports.apiSendCode = apiSendCode;
//# sourceMappingURL=../../../.sourcemap/mp-weixin/api/login/api.js.map
