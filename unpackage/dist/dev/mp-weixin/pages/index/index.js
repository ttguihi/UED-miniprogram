"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_api = require("../../api/api.js");
if (!Math) {
  (CustomNavBar + ExampleCard + NewsCard + CustomTabBar)();
}
const CustomTabBar = () => "../../components/CustomTabBar.js";
const ExampleCard = () => "../../components/ExampleCard.js";
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const NewsCard = () => "../../components/NewsCard.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let itemList = common_vendor.ref([]);
    const flag = common_vendor.ref(false);
    const gotoNews = () => {
      common_vendor.index.navigateTo({
        url: "/pages/news_detail/news_detail"
      });
    };
    const homeData = common_vendor.ref();
    const banner = common_vendor.ref([]);
    const information = common_vendor.ref([]);
    const informationLeft = common_vendor.ref([]);
    const informationRight = common_vendor.ref([]);
    const orderList = common_vendor.ref([]);
    const project = common_vendor.ref({});
    const goTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0,
        //滚动到距离顶部为0
        duration: 300
        //滚动时长
      });
    };
    common_vendor.onPageScroll((e) => {
      if (e.scrollTop > 500) {
        flag.value = true;
      } else {
        flag.value = false;
      }
    });
    const getHomeData = () => {
      api_api.apiGetHomeData().then((res) => {
        homeData.value = res;
        banner.value = homeData.value.banner;
        common_vendor.index.setStorageSync("bannerList", banner.value);
        homeData.value.information.map((item) => {
          item.create_time = item.create_time.slice(0, 10);
        });
        information.value = homeData.value.information;
        informationLeft.value = information.value.filter((item, index) => {
          return index % 2 == 0;
        });
        informationRight.value = information.value.filter((item, index) => {
          return index % 2 == 1;
        });
        orderList.value = homeData.value.caseList;
        project.value = homeData.value.project;
      });
    };
    itemList.value = [{
      iconPath: "/common/images/index/service.jpg",
      text: "平台客服",
      navigateUrl: "/pages/examples/examples"
    }, {
      iconPath: "/common/images/index/order_green.jpg",
      text: "我的业务线",
      navigateUrl: "/pages/examples/examples"
    }, {
      iconPath: "/common/images/index/order_purple.jpg",
      text: "公司动态",
      navigateUrl: "/pages/examples/examples"
    }];
    getHomeData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ifShowIcon: true,
          ifShowArrow: false
        }),
        b: common_vendor.f(banner.value, (item, index, i0) => {
          return {
            a: item.image,
            b: item.linkurl,
            c: index
          };
        }),
        c: common_assets._imports_0,
        d: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: item + "item"
          };
        }),
        e: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        f: common_assets._imports_1,
        g: common_assets._imports_2,
        h: common_assets._imports_3,
        i: common_vendor.f(common_vendor.unref(itemList), (item, index, i0) => {
          return {
            a: common_vendor.n(`iconBox${index + 1}`),
            b: common_vendor.t(item.text),
            c: item.navigateUrl,
            d: index + "index"
          };
        }),
        j: common_vendor.t(information.value[0].title),
        k: common_vendor.t(information.value[0].create_time),
        l: common_vendor.o(gotoNews),
        m: common_vendor.f(orderList.value, (item, index, i0) => {
          return {
            a: item.id,
            b: index,
            c: "1cf27b2a-1-" + i0,
            d: common_vendor.p({
              companyName: item.companyName,
              orderIcon: item.image,
              id: item.id,
              orderName: item.orderName
            })
          };
        }),
        n: common_vendor.f(informationLeft.value, (item, index, i0) => {
          return {
            a: index,
            b: "1cf27b2a-2-" + i0,
            c: common_vendor.p({
              title: item.title,
              createTime: item.create_time,
              imageUrl: item.imageurl
            })
          };
        }),
        o: common_vendor.f(informationRight.value, (item, index, i0) => {
          return {
            a: index,
            b: "1cf27b2a-3-" + i0,
            c: common_vendor.p({
              title: item.title,
              createTime: item.create_time,
              imageUrl: item.imageurl
            })
          };
        }),
        p: flag.value ? 1 : "",
        q: common_vendor.o(goTop),
        r: flag.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
