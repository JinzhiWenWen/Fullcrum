// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import router from './index.js'
import Axios from 'axios'
import 'jquery'
import './index.css'
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.prototype.axios=Axios;
// Vue.prototype.$oUrl='http://52.69.162.140:8080';
/* eslint-disable no-new */
router.afterEach((to,from,next) => {
  setTimeout(()=>{
    window.scrollTo(0,0);
  },100)

})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
