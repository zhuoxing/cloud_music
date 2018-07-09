import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/Index'
    },
    {
      path: '/Index',
      name: 'Index',
      component: (resolve) => import('@/view/MusicIndex').then(module => resolve(module))
    }
  ]
})
