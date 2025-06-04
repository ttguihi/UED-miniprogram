"use strict";
const common_vendor = require("../common/vendor.js");
const BASE_URL = "https://m1.apifoxmock.com/m1/6066905-5757134-default/api/user/v1";
function request(config = {}) {
  let {
    url,
    method = "GET",
    header = {},
    data = {}
    //接收一下data 
  } = config;
  url = BASE_URL + url;
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url,
      data,
      method,
      header,
      success: (res) => {
        if (res.data.errCode != 0) {
          resolve(res.data);
        } else if (res.data.errCode === 400) {
          common_vendor.index.showModal({
            title: "错误提示",
            content: res.data.errMsg,
            showCancel: false
          });
          reject(res.data);
        } else {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.request = request;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/request.js.map
