//封装对应接口
import service from "../services";

//登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}