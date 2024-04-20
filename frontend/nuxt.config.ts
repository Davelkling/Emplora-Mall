// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Emplora',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined' },
        { rel: "icon", type: "image/x-icon", href: "/logo.svg" }
      ],
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',

  ],
  tailwindcss:{
    config:{
      theme: {
        extend: {
          colors: {
            primary: '#00ADB5',
            darkbg:'#181B20',
            textprimary:'#2F414F',
          },
        },
      },
    }
  }
})
