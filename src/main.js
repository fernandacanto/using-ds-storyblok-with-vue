import Vue from 'vue'
import App from './App.vue'
import BlokInk from 'storyblok-design-system'
import 'storyblok-design-system/dist/storyblok-design-system.css'

Vue.use(BlokInk)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
