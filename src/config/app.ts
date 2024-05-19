import { createApp } from 'vue'
import router from "@/router/index"
import { createPinia } from 'pinia'
const pinia = createPinia()
import App from '@/App.vue'

const app = createApp(App)


app.use(pinia)
app.use(router)
app.mount('#app')

export default app
