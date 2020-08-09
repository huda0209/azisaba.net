import Vue from 'vue'
import App from './App.vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faDiscord,
  faTwitter,
  faYoutube,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faDiscord,
  faTwitter,
  faYoutube,
  faGithub
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
// ---

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
