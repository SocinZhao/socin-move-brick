import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import thumbnailsView from '@/view/image/thumbnailsView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/img',
      name: 'img',
      // component: () => import('@/view/layout/layout.vue'),
      component: thumbnailsView,
      // children: [{
      //   path: '/viewer',
      //   name: 'viewer',
      //   component: () => import('@/view/image/thumbnailsView.vue'),
      // }]
    }
  ]
})
