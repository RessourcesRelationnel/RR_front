import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './style.css';
import axios from  'axios';

//axios.defaults.baseURL = import.meta.env.VUE_APP_API_ENDPOINT;
axios.defaults.baseURL = "http://10.134.128.164:8000";
createApp(App).use(router).mount('#app');