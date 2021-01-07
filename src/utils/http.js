import axios from 'axios'
import qs from 'qs'
import { Loading } from 'element-ui'
import config from '@/utils/config'
import router from '@/router'
import store from '@/store'

const DEFAULT_OPTION = config.httpDefaultOption

axios.defaults.timeout = 20000
axios.defaults.baseURL = config.apiBaseUrl

export default {
  post(url, data, options) {
    const opt = Object.assign(
      {},
      DEFAULT_OPTION,
      { loadingTitle: '提交中...' },
      options
    )
    let loadingInstance

    if (opt.showLoading) {
      loadingInstance = Loading.service({
        text: opt.loadingTitle
      })
    }
    return axios({
      method: 'POST',
      url,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: qs.stringify({
        token: store.state.user.token,
        ...data
      })
    })
      .then(res => {
        return res.data
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response)
        } else {
          console.log('Error', error.message)
        }
      })
      .finally(() => {
        opt.showLoading && loadingInstance.close()
      })
  },
  get(url, data, options) {
    const opt = Object.assign(
      {},
      DEFAULT_OPTION,
      { loadingTitle: '加载中...' },
      options
    )
    let loadingInstance

    if (opt.showLoading) {
      loadingInstance = Loading.service({
        text: opt.loadingTitle
      })
    }
    return axios({
      method: 'GET',
      url,
      params: {
        token: store.state.user.token,
        ...data
      }
    })
      .then(res => {
        if (res.code === 201) {
          store.commit('logout')

          opt.authLogin && router.push('/login')
        }
        return res.data
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response)
        } else {
          console.log('Error', error.message)
        }
      })
      .finally(() => {
        opt.showLoading && loadingInstance.close()
      })
  }
}
