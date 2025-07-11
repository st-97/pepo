import { createApp } from 'vue'
import './styles/tailwind.css'
import App from './pages/App.vue'
import router from './router/index.js'

createApp(App).use(router).mount('#app')
