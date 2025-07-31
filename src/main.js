import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '@/router'

import naive from 'naive-ui' // Import naive-ui plugin

import VueAwesomePaginate from 'vue-awesome-paginate'
import 'vue-awesome-paginate/dist/style.css'

const app = createApp(App)
app.use(naive)
app.use(createPinia())
app.use(VueAwesomePaginate) // <-- dùng như plugin

app.use(router)
app.mount('#app')
