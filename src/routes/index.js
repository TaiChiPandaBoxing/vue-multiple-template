import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/views/',
  routes: [
    {
      path: '/hello',
      name: 'hello',
      component: Hello
    }
  ]
})
