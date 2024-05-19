// 1.区分环境变量方式一:
// export const API_BASE_URL = 'xxx'
// export const API_BASE_URL = 'xxx'

// 2.区分环境变量方式二:
// let baseURL = ''
// if (process.env.NODE_ENV === 'production') {
    // 生产环境
//   baseURL = 'xxx'
// } else if (process.env.NODE_ENV === 'development') {
    // 开发环境
//   baseURL = 'xxx'
// } else {
    // 测试环境
//   baseURL = 'xxx'
// }

// 3.区分环境变量方式三: 加载.env文件
export const BASE_URL = import.meta.env.VITE_APP_BASE_URL
console.log(BASE_URL)
export const TIME_OUT = 10000
