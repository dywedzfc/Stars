import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from 'components/HelloWorld'
import Login from 'components/login/Login'
import Desktop from 'components/Desktop'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Desktop',
      component: Desktop
    }
  ]
})
