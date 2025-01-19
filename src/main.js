import { createApp } from 'vue'
import App from './App.vue'
import store from './store/eCommerceStore'; // Import the defined store instance

const app = createApp(App);
app.use(store); // Register the store instance
app.mount('#app');
