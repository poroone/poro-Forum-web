import { defineStore } from "pinia"
import router from "@/router"
import { ServerLogin, ServerRegister, ServerInfo } from '@/service/login/login'
import { ref, reactive } from "vue"
import LocalCache from "@/utils/localCache.ts"

export const useUserStore = defineStore('user', () => {
    let token = ref("")
    // 获取用户信息
    let userInfo = ref({})

    const userLogin = async (Account: { username: string, password: string }) => {
        // 登录接口
        const loginResult = await ServerLogin(Account)
        token.value = loginResult.token
        LocalCache.setCache('token', loginResult.token)
        console.log(loginResult, "*********123123")
        // 获取用户信息
        const userInfo = await ServerInfo(loginResult.id)
        userInfo.value = userInfo
        LocalCache.setCache('userInfo', userInfo)

        router.push('/home')
    }

    return { token, userLogin, userInfo }
})