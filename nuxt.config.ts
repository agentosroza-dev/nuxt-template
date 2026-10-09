// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
    vite: {
    plugins: [tailwindcss() as any],
  },
  css: ['~/assets/css/app.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})

