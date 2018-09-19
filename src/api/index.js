/*
包含n个接口请求函数的模块
函数的返回值为: promise
 */
import ajax from './ajax'

const BASE = ''

//请求注册接口
export const reqRegister = ({username, password, type}) => ajax(BASE + '/register', {username, password, type}, 'POST')

//请求登录接口
export const reqLogin = (username, password) => ajax(BASE + '/login', {username, password}, 'POST')

//请求跟新用户接口
export const reqUpdateUser = (user) => ajax(BASE + '/update', user, 'POST')