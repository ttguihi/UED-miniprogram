"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const api_api = require("../../api/api.js");
const api_index_api = require("../../api/index/api.js");
const store_news = require("../../store/news.js");
const store_verify = require("../../store/verify.js");
if (!Math) {
  (CustomNavBar + ExampleCard + NewsCard + PopUp + CustomTabBar)();
}
const CustomTabBar = () => "../../components/CustomTabBar.js";
const ExampleCard = () => "../../components/ExampleCard.js";
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const NewsCard = () => "../../components/NewsCard.js";
const PopUp = () => "../../components/PopUp.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const verifyStore = store_verify.useVerifyStore();
    const pop = common_vendor.ref(null);
    const openPop = (index) => {
      if (pop.value) {
        pop.value.open();
      }
    };
    const informationStore = store_news.useInformationStore();
    let itemList = common_vendor.ref([]);
    const flag = common_vendor.ref(false);
    const projectsNum = common_vendor.ref();
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
        homeData.value.informationList.map((item) => {
          item.create_time = item.create_time.slice(0, 10);
        });
        information.value = homeData.value.informationList;
        informationStore.fetchData(information.value);
        common_vendor.index.setStorageSync("informationList", information.value);
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
    const getProjectsNum = () => {
      api_index_api.apiGetProjectsNum().then((res) => {
        projectsNum.value = res.projectNumber;
      });
    };
    itemList.value = [{
      iconPath: "/common/images/index/service.jpg",
      text: "平台客服",
      navigateUrl: "/pages/examples/examples"
    }, {
      iconPath: "/common/images/index/order_green.jpg",
      text: "我的业务线",
      navigateUrl: "/pages/business_line/business_line"
    }, {
      iconPath: "/common/images/index/order_purple.jpg",
      text: "公司动态",
      navigateUrl: "/pages/examples/examples"
    }];
    getHomeData();
    getProjectsNum();
    return (_ctx, _cache) => {
      return common_vendor.e({
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
        d: common_vendor.t(projectsNum.value),
        e: common_vendor.unref(verifyStore).ifLogin
      }, common_vendor.unref(verifyStore).ifLogin ? {
        f: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: item + "item"
          };
        })
      } : {
        g: common_vendor.f(10, (item, k0, i0) => {
          return {
            a: item + "item"
          };
        })
      }, {
        h: common_vendor.o((...args) => _ctx.scroll && _ctx.scroll(...args)),
        i: common_assets._imports_1,
        j: common_assets._imports_2,
        k: common_assets._imports_3,
        l: common_vendor.f(common_vendor.unref(itemList), (item, index, i0) => {
          return {
            a: common_vendor.n(`iconBox${index + 1}`),
            b: common_vendor.t(item.text),
            c: index === 0 ? "" : item.navigateUrl,
            d: index + "index",
            e: common_vendor.o(($event) => index === 0 ? openPop() : null, index + "index")
          };
        }),
        m: common_vendor.t(information.value[0].title),
        n: common_vendor.t(information.value[0].create_time),
        o: common_vendor.o(gotoNews),
        p: common_vendor.f(orderList.value, (item, index, i0) => {
          return {
            a: index,
            b: "1cf27b2a-1-" + i0,
            c: common_vendor.p({
              exampleCard: item
            })
          };
        }),
        q: common_vendor.f(informationLeft.value, (item, index, i0) => {
          return {
            a: index + `${item.id}`,
            b: "1cf27b2a-2-" + i0,
            c: common_vendor.p({
              newsCard: item
            })
          };
        }),
        r: common_vendor.f(informationRight.value, (item, index, i0) => {
          return {
            a: index + `${item.id}`,
            b: "1cf27b2a-3-" + i0,
            c: common_vendor.p({
              newsCard: item
            })
          };
        }),
        s: flag.value ? 1 : "",
        t: common_vendor.o(goTop),
        v: flag.value,
        w: common_vendor.sr(pop, "1cf27b2a-4", {
          "k": "pop"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
