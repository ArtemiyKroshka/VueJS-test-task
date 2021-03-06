import Vue from 'vue'
import VueRouter from 'vue-router'
import AllPosts from '../pages/AllPosts'
import PostPage from '../pages/PostPage'
import NotFound from '../pages/404'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'posts',
      component: AllPosts
    },
    {
      path: '/post/:id',
      name: 'postPage',
      component: PostPage
    },
    {
      path: '*',
      name : 'notFound',
      component: NotFound
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
