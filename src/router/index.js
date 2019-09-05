import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Key from '@/components/key'
import Promise1 from '@/components/promise'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/key',
      name: 'Key',
      component: Key
    },
    {
      path: '/promise1',
      name: 'Promise1',
      component: Promise1
    }
  ]
})
