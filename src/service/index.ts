import HYRequest from './request/index'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/localCache'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config:any) => {
      const token = localCache.getCache('token')
      console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },

    responseInterceptor: (res) => {
      return res.data
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
