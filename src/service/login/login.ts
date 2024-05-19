import hyRequest from "../index.ts"
import { Account, LoginInfo } from './type'
enum LoginAPI {
    AccountLogin = '/login',
    UserInfo = '/users/userInfo/',
    Register = '/users/'
}

export function ServerLogin(account: Account) {

    return hyRequest.post({
        url: LoginAPI.AccountLogin,
        data: account
    })
}
export function ServerInfo(userId: number) {
    // console.log(userId)
    return hyRequest.get({
        url: LoginAPI.UserInfo + userId,

    })
}
export function ServerRegister(account: Account) {
    return hyRequest.post({
        url: LoginAPI.Register,
        data: account
    })
}