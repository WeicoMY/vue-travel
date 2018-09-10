import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
import fastClick from 'fastclick'

import 'styles/main.styl'
// vue-awesome-swiper styles
import 'swiper/dist/css/swiper.css'

// use global swiper
Vue.use(VueAwesomeSwiper)

fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
