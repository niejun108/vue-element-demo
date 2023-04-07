import { createApp } from 'vue'
import elementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from '@/config/router'
import axios from '@/config/axios'

import App from './App.vue'

//import './assets/main.css'

const app = createApp(App)
app.config.globalProperties.$axios=axios

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(elementPlus, {locale: zhCn})
app.use(router)
app.mount('#app')