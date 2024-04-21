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
  spaLoadingTemplate: "./spa-loading-template.html",
  runtimeConfig: {
    public: {
      API: (process.env.API || "http://localhost:8080"),
    },
  },

  auth: {
    baseURL: `${process.env.API}/auth`,
    provider: {
      type: 'local', endpoints: {
        getSession: false, signIn: { path: '/login', method: 'post' }, signOut: { path: '/logout', method: 'post' }, signUp: { path: '/signup', method: 'post' },
      },
      token: { signInResponseTokenPointer: "/access_token" }
    }
  },
  
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', '@sidebase/nuxt-auth'],
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