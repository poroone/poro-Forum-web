// 挂载
import app from "./config/app";
import SvgIcon from "@/components/SvgIcon.vue";
// 导航守卫
import "./router/Navigation_guard";
// 全局css
import "@/styles/index.less";
// 全局组件
app.component("svg-icon", SvgIcon);
