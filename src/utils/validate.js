//用户名匹配
export function nameRule(rule, value, callback) {
    let reg = /(^[a-zA-Z0-9]{4})/
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else if (!reg.test(value)) {
        callback(new Error('请输入4-6位字符'))
    } else {
        callback()
    }
}
//密码匹配
export function passwordRule(rule, value, callback) {
    //请输入4到6位字符
    let pass = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/
    if (value === '') {
        callback(new Error('请输入密码'))
    } else if (!pass.test(value)) {
        callback(new Error('请输入6位密码'))
    } else {
        callback()
    }
}