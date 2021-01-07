const user = {
  state: {
    userInfo: {},
    token: ''
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    },
    setToken(state, token) {
      state.token = token
    },
    login(state, data) {
      state.userInfo = data.userInfo
      state.token = data.token
    },
    logout(state) {
      state.userInfo = {}
      state.token = ''
    }
  }
}

export default user
