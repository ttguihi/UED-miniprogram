"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Math) {
  CustomTabBar();
}
const CustomTabBar = () => "../../components/CustomTabBar.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const itemList = [{
      iconPath: "",
      text: "平台客服"
    }, {
      iconPath: "",
      text: "我的业务线"
    }, {
      iconPath: "",
      text: "公司动态"
    }];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(_ctx.bannerList, (item, k0, i0) => {
          return common_vendor.e({
            a: item.target == "miniProgram"
          }, item.target == "miniProgram" ? {
            b: item.picurl,
            c: item.appid,
            d: item.url
          } : {}, {
            e: item._id
          });
        }),
        b: common_assets._imports_0,
        c: common_vendor.f(5, (item, k0, i0) => {
          return {
            a: item + "item"
          };
        }),
        d: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        e: common_vendor.f(itemList, (item, index, i0) => {
          return {
            a: item + "index"
          };
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
