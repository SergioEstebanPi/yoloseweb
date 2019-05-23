import Vue from 'vue'
import Router from 'vue-router'
import List from '@/components/List'
import Publicaciones from '@/components/Publicaciones'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/publicaciones',
      name: 'Publicaciones',
      component: Publicaciones
    }
  ]
})
