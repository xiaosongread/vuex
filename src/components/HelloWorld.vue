<template>
  <div class="hello">
    <div>
      <div>mapState简写：{{ name }} / {{$store.state.name}}</div>
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
