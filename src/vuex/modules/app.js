const app = {
  state: {
    appConut: 0
  },
  getters: {
    watchAppConut: state => {
      return state.appConut + 100
    }
  },
  mutations: {
    ADD_APP_COUNT: (state, n) => {
      state.appConut += n
    },
    DELETE_APP_COUNT: (state, n) => {
      state.appConut -= n
    },
    RESET_APP_COUNT: (state, n) => {
      state.appConut = n
    }
  },
  actions: {
    ACCTION_APP_COUNT: ({ commit }, mes) => {
      commit('RESET_APP_COUNT', mes)
    }
  }
}

export default app
