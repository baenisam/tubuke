import { messages } from './lang/message.js'

export const i18n = createI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'fr', // set fallback locale
  messages, // our translations
});
