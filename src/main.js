import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App.vue'
import routerConfig from './router.config.js'

Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(VueRouter)

const router=new VueRouter(routerConfig)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
