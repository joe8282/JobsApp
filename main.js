import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//自定义，接口地址
Vue.prototype.$serverUrl = 'http://121.4.74.187:8081'

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()
