import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import router from "./router";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import App from './App.vue'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

createApp(App).use(router).use(Quasar).use(createPinia()).component("PulseLoader", PulseLoader).mount('#app');
