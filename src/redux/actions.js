/*
包含n个action creator函数的模块
同步action: 对象
异步action: dispatch函数
 */

import {reqRegister, reqLogin, reqUpdateUser} from "../api"

// 有几个action type就会定义几个同步action
import {AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER} from './action-types'

//注册/登录成功的同步action
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})
//注册/登录失败的同步action
const errorMsg = (msg) => ({type: ERROR_MSG, data: msg})
//接收用户的同步action
const receiveUser = (user) => ({type: RECEIVE_USER, data: user})
//重置用户的同步action
const resetUser = (msg) => ({type: RESET_USER, data: msg})

/*
注册的异步action
 */
export function register({username, password, password2, type}) {
  //前台表单验证
  if (!username) {
    return errorMsg('必须指定用户名')
  } else if (!password) {
    return errorMsg('必须指定密码')
  } else if (password2 !== password) {
    return errorMsg('密码必须一致')
  } else if (!type) {
    return errorMsg('必须指定用户类型')
  }
  return async dispatch => {
    //发布异步的ajax请求
    const response = await reqRegister({username, password, type})

    const result = response.data

    if (result.code == 0) {
      //成功了
      const user = result.data
      //分发成功的同步action
      dispatch(authSuccess(user))
    } else {
      //失败
      const msg = result.msg
      //分发失败同步action
      dispatch(errorMsg(msg))
    }
  }
}

/*
登陆的异步action
 */
export function login(username, password) {
  return async dispatch => {
    if (!username) {
      //必须发一个同步action对象
      //此时的return代表结束
      return dispatch(errorMsg('必须指定用户名'))
    } else if (!password) {
      return dispatch(errorMsg('必须指定密码'))
    }
    //发布异步的ajax请求
    const response = await reqLogin(username, password)
    const result = response.data
    //成功了
    if (result.code == 0) {
      const user = result.data
      //分发成功的同步action
      dispatch(authSuccess(user))
    } else {
      //失败
      const msg = result.msg
      //分发失败同步action
      dispatch(errorMsg(msg))
    }
  }

}

/*
* 更新用户的异步action
* */
export function updateUser(user) {
  return async dispatch => {
    const response = await reqUpdateUser(user)
    const result = response.data
    if (result.code === 0) {
      //用户更新成功
      const user = result.data
      dispatch(receiveUser(user))
    } else {
      //用户更新失败
      const msg = result.msg
      dispatch(resetUser(msg))

    }
  }
}
