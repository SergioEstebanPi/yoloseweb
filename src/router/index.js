import Vue from 'vue'
import Router from 'vue-router'
import Noticias from '@/components/Noticias'
import Publicaciones from '@/components/Publicaciones'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Noticias',
      component: Noticias
    },
    {
      path: '/publicaciones',
      name: 'Publicaciones',
      component: Publicaciones
    }
  ]
})
