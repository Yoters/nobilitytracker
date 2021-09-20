import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import './styles/app.css';
import router from './router'
import VueCookies from 'vue3-cookies';

createApp(App).use(VueCookies).use(store).use(router).mount('#app')
