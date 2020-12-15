import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './quasar'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as utils from "@/api/utils.js"
import * as ApiUser from "@/api/user.js"

Vue.use(ElementUI);

Vue.config.productionTip = false



let initVue = function () {
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}


let token = utils.getToken()
let userId = utils.getUserId()

if (token !== false && userId !== false) {
  (async () => {
    let res = await ApiUser.getUserInfo(userId);
    utils.setUserInfo(res)
    initVue();
  })()
} else {
  initVue()
}