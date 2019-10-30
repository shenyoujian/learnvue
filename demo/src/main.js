import Vue from 'vue'
import App from './App.vue'

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "./assets/css/index.css"
import VueRouter from 'vue-router' //加载路由模块

  // 配置路由表
  const appRouter = new VueRouter({
    // routes 选项用来配置路由表
    // 当请求 /xxx 的时候，渲染 xxx 组件
    // routes 是一个数组，数组中存储一些固定格式的对象
    // 对象 path 表示请求的路径
    // 对象的 component 用来指定当你请求 path 路径的时候，渲染该组件
    // 现在的问题是？匹配到 path 的时候，组件往哪里渲染？
    // 在你的根组件预留一个路由的出口，用来告诉路由到匹配到某个 path 的时候，把该组件渲染到哪里
    routes: [
      {
        path: '/foo',
        component: {
          template: `<div>foo 组件阿</div>`
        }
      },
      {
        path: '/bar',
        component: {
          template: `<div>bar 组件阿</div>`
        }

      }]
  })

new Vue({
  el: '#app',
  render: h => h(App),
  // 配置实例选项 router 为你在上面new VueRouter实例对象
  router: appRouter
})
