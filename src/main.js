import Vue from 'vue'
import router from './router'
import store from './store'
import axios from './components/axios'
import * as filters from './filters'

 
// 全局引入vux组件库
/*import Group from './components/Group'
Vue.component('Group', Group)
import Cell from './components/Cell'
Vue.component('Cell', Cell)*/


// 全局引入vux提供的插件
import {LoadingPlugin ,AlertPlugin, ToastPlugin} from 'vux'
Vue.use(LoadingPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

// 表单验证插件，不需要请注释掉
import verify from "vue-verify-plugin";
var myRules = {
    phone: {
        test: /^1[34578]\d{9}$/,
        message: "电话号码格式不正确"
    }
}
Vue.use(verify, {
    blur: true,// 是否失去焦点后开始验证
    rules: myRules
});

const FastClick = require('fastclick')
FastClick.attach(document.body)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 在组件中可以直接使用this.$axios访问
Vue.prototype.$axios = axios;

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
router.beforeEach((to, from, next) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex || !fromIndex || (toIndex === '0' && fromIndex === '0')) {
      store.commit('SET_DIRECTION', 'forward')
    } else {
      store.commit('SET_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('SET_DIRECTION', 'forward')
  }
    next()
})
router.afterEach((to, from, next) => {
     
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
})
