import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'


Vue.use(Vuex)

const state = {
    name: '小张'
}

// export default new Vuex.Store({
//     state1
// })

const store = new Vuex.Store({
  state,
  modules: {
    app,
    user
  }
})
export default store
