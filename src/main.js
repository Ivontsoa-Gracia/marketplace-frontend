import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import './assets/tailwind.css' 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './scroll.css'; 


const app = createApp(App);
app.use(router);
app.mount('#app');

