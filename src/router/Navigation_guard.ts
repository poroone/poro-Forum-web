import router from "./index";

const WhiteList = ["/home","/login"]

router.beforeEach((to) => {
    console.log(WhiteList.includes(to.path))
    // 是否在白名单中如果在不需要token
    if (!WhiteList.includes(to.path)) {
        // 获取token
        const token = ""
        if (!token) {
            // 弹出提示请登录
            alert("请登录")
            // 然后返回home页面
            return '/home'
        }
    }
})

