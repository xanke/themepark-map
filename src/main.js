import Vue from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import initLeaflet from '@/core/leaflet'
import Antd from 'ant-design-vue';

initLeaflet(Vue)
Vue.use(Antd)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
