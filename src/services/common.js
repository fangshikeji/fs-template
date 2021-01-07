import http from '@/utils/http'
import store from '@/store/index'
import { Message } from 'element-ui'

export function sendCaptcha(phone) {
  return http.get(
    'code',
    {
      loginName: phone
    },
    {
      showLoading: false,
      isAuth: false
    }
  )
}

export function register(data, autoLogin = true) {
  return http
    .post('register', data, {
      isAuth: false
    })
    .then(res => {
      if (res.code === 200) {
        autoLogin &&
          login({
            ...data,
            loginType: 1
          })
      } else {
        Message.error({
          message: res.msg
        })
      }
    })
}

export function login(data) {
  return http
    .post('login', data, {
      isAuth: false,
      loadingTitle: '登录中...'
    })
    .then(res => {
      console.log(res)
      if (res.code === 200) {
        store.commit('login', res.data)
      } else {
        Message.error({
          message: res.msg
        })
      }
    })
}

export function logout(data) {
  store.commit('logout')

  return http.post('logout', data, {
    isAuth: false,
    showLoading: false
  })
}

export function updatePwd(data) {
  return http.get('user/updatePwd', data, {
    loadingTitle: '提交中...'
  })
}

export function forgetPwd(data) {
  return http.post('forgetPwd', data)
}
