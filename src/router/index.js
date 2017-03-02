import Vue from 'vue'
import Router from 'vue-router'

const ArticleList = resolve => require(['../views/ArticleList'], resolve)
const ArticleDetail = resolve => require(['../views/ArticleDetail'], resolve)
Vue.use(Router)



export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve=> require(['../views/ArticleList'], resolve)
    },
    {
      path: '/detail',
      name: 'detail',
      component: ArticleDetail,
      meta: {
        scrollToTop: true
      }
    }

  ]
})
