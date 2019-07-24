## 快速掌握vuex常用的所有api用法

## vuex中，有默认的五种基本的对象

1.state：存储状态（变量）
2.getters：对数据获取之前的再次编译，可以理解为state的计算属性。我们在组件中使用 $sotre.getters.fun()
3.mutations：修改状态，并且是同步的。在组件中使用$store.commit('',params)。这个和我们组件中的自定义事件类似。
4.actions：异步操作。在组件中使用是$store.dispath('')
5.modules：store的子模块，为了开发大型项目，方便状态管理而使用的。这里我们就不解释了，用起来和上面的一样。

首先新建一个vue项目，用来测试：
```
vue init webpack vuex
cd app/
npm run dev
src 下创建文件夹vuex
vuex 文件夹下创建 store.js 文件夹modules
modules 文件夹下创建app.js user.js
```
目录如下：
![blockchain](https://raw.githubusercontent.com/xiaosongread/vuex/master/img-folder/1.png)

安装vuex
```
npm install vuex --save
```
安装成功之后，将vuex引入项目中：
store.js
```javascript
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    name: '小张'
}

const store = new Vuex.Store({
  state
})
export default store
```
自此你可以开始用vuex了

接下来，在main.js中引入store.js
```javascript
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store' // 引入store
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
```
完整APIdemo地址：[GitHub](https://github.com/xiaosongread/vuex)
store.js
```javascript
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
```
app.js
```javascript
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
```
user.js
```javascript
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
```
HelloWorld.vue
```html
<template>
  <div class="hello">
    <div>
      <div>mapState简写：{{ name }}</div>
      <div>app中的appConut：{{ $store.state.app.appConut}}</div>
      <div>mapState简写：{{ appConut }}</div>
      <div>app中计算属性(appConut+100)watchAppConut：{{ $store.getters.watchAppConut}}</div>
      <div>watchAppConut(mapGetters简写)：{{ watchAppConut}}</div>
      <button @click="clickAppAdd(100)">+</button>
      <button @click="clickAppDelete">-</button>
      <button @click="clickActionsApp('置空')">actions</button>
    </div>
    <div>
      <div>user中的userConut：{{ $store.state.user.userConut}}</div>
      <button @click="clickUserAdd">+</button>
      <button @click="clickUserDelete">-</button>
      <button @click="clickActionsUser">actions</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  // computed: mapState(['name']), // 这样写更简单
  computed: {
    ...mapState({
      name: 'name',
      appConut: state => state.app.appConut
    }),
    ...mapGetters(
      ['watchAppConut']
    )
  },
  methods: {
     ...mapMutations({
       clickAppAdd: 'ADD_APP_COUNT'
     }),
    // clickAppAdd() {
    //   this.$store.commit('ADD_APP_COUNT', 1)
    // },
    clickAppDelete() {
      this.$store.commit('DELETE_APP_COUNT', 1)
    },
    ...mapActions({
      clickActionsApp: 'ACCTION_APP_COUNT'
    }),
    // clickActionsApp() {
    //   this.$store.dispatch('ACCTION_APP_COUNT')
    // },
    clickUserAdd() {
      this.$store.commit('ADD_USER_COUNT', 2)
    },
    clickUserDelete() {
      this.$store.commit('DELETE_USER_COUNT', 2)
    },
    clickActionsUser() {
      this.$store.dispatch('ACCTION_USER_COUNT', '置空')
    },
  }
}
</script>
```
### state
























