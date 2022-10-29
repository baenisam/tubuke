import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import { messages } from './lang/message.js'
import FlagIcon from 'vue-flag-icon';
import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import LanguageDetector from 'i18next-browser-languagedetector'
import { onMounted } from 'vue'
import { getSettings } from './config/serviceProvider'
import TimeAgo from 'vue2-timeago'
import axios from 'axios'
import Toaster from "@meforma/vue-toaster";
import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'







const i18n = createI18n({
    locale: localStorage.getItem('lang'), // set locale
    messages, // our translations
  });



const app = createApp(App)
app.use(i18n)

app.use(FlagIcon)
app.use(Toaster, {
  position: "top-right",
  timeout:5000
})
app.use(VueViewer)
app.use(TimeAgo)
app.use(createPinia())
app.use(router)


app.mount('#app')

i18n.global.locale.value = 'en'

// otherwise - when using legacy: true, we set it like this:
i18n.global.locale = 'en'


