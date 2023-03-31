//二次封装
import axios from "axios";
import { getToken } from '@/utils/setToken.js'
import { Message } from "element-ui";
const service = axios.create({
    baseURL: '/api',//baseUrl自动加载请求地址
    timeout: 5000

})

//添加请求拦截
service.interceptors.request.use(config => {
    //请求之前操作
    config.headers['token'] = getToken('token')
    return config
}), (error => {
    return Promise.reject(error)
})

//添加响应拦截器
service.interceptors.response.use((response) => {
    //响应数据操作
    let { status, message } = response.data
    if (status != 200) {
        Message({ message: message || 'error', type: 'warning' })
    }
    return response
}, (error => {
    return Promise.reject(error)
}))

export default service