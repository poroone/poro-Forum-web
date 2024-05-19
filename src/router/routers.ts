import type { RouteRecordRaw } from "vue-router"
const routes: RouteRecordRaw[] = [{
    path: "/",
    redirect: "/home",
    children: [{
        path: "/home",
        name: "home",
        component: () => import("@/views/home/index.vue")
    }]
},
{
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue")
}]

export default routes