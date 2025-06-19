"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  (_easycom_uni_easyinput2 + _easycom_uni_data_select2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
if (!Math) {
  (CustomNavBar + _easycom_uni_easyinput + _easycom_uni_data_select + ProjectCard)();
}
const CustomNavBar = () => "../../components/CustomNavBar/CustomNavBar.js";
const ProjectCard = () => "../../components/ProjectCard.js";
const _sfc_main = {
  __name: "projects_management",
  setup(__props) {
    const tabs = [
      {
        name: "全部项目",
        status: "all"
      },
      {
        name: "审核中",
        status: "shenhezhong"
      },
      {
        name: "待审核",
        status: "daishenhe"
      },
      {
        name: "进行中",
        status: "jinxingzhong"
      },
      {
        name: "已生效",
        status: "yishengxiao"
      },
      {
        name: "已失效",
        status: "yishixiao"
      }
    ];
    const allProjects = common_vendor.ref([
      {
        id: 1,
        name: "项目A",
        status: "yishengxiao"
      },
      {
        id: 2,
        name: "项目B",
        status: "yishixiao"
      },
      {
        id: 3,
        name: "项目C",
        status: "jinxingzhong"
      },
      {
        id: 4,
        name: "项目C",
        status: "jinxingzhong"
      }
      // ...更多数据
    ]);
    const filteredProjects = common_vendor.computed(() => {
      const currentTab = tabs[current.value];
      return currentTab.status === "all" ? allProjects.value : allProjects.value.filter((p) => p.status === currentTab.status);
    });
    const banner = common_vendor.index.getStorageSync("bannerList");
    const now = common_vendor.ref();
    const date = common_vendor.ref();
    const current = common_vendor.ref(0);
    setInterval(() => {
      now.value = common_vendor.dayjs().format("HH:mm:ss");
    }, 1e3);
    date.value = common_vendor.dayjs().format("YYYY年MM月DD日");
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          title: "项目管理"
        }),
        b: common_vendor.f(common_vendor.unref(banner), (item, index, i0) => {
          return {
            a: item.image,
            b: item.linkurl,
            c: index
          };
        }),
        c: common_vendor.t(now.value),
        d: common_vendor.t(date.value),
        e: common_vendor.f(tabs, (tab, index, i0) => {
          return {
            a: common_vendor.t(tab.name),
            b: index,
            c: current.value === index ? 1 : "",
            d: common_vendor.o(($event) => current.value = index, index)
          };
        }),
        f: common_vendor.p({
          placeholder: "请输入关键词",
          placeholderStyle: "font-size:26rpx;"
        }),
        g: common_vendor.p({
          placeholder: "近七天"
        }),
        h: common_vendor.p({
          placeholder: "请选择行业"
        }),
        i: common_vendor.f(filteredProjects.value, (project, k0, i0) => {
          return {
            a: project.id,
            b: "d5d972d8-4-" + i0,
            c: common_vendor.p({
              data: project
            })
          };
        }),
        j: filteredProjects.value.length === 0
      }, filteredProjects.value.length === 0 ? {
        k: common_vendor.t(tabs[current.value].name)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d5d972d8"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/projects_management/projects_management.js.map
