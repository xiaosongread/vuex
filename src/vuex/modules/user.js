const user = {
  state: {
    userConut: 0
  },
  mutations: {
    ADD_USER_COUNT: (state, n) => {
      state.userConut += n
    },
    DELETE_USER_COUNT: (state, n) => {
      state.userConut -= n
    },
    RESET_USER_COUNT: (state, n) => {
      state.userConut = n
    }
  },
  actions: {
    ACCTION_USER_COUNT: ({ commit }, mes) => {
      commit('RESET_USER_COUNT', mes)
    }
  }
}

export default user
