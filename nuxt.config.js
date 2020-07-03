require('dotenv').config()

// const isDev = process.env.NODE_ENV !== 'production'


export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Voron Black Application',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Система каршеринга бизнес-класса «Ворон»' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  // env: {
  //   frontend_base_url: process.env.FRONTEND_BASE_URL || 'http://localhost:3000/ ',
  //   backend_base_url: process.env.BACKEND_BASE_URL || 'http://localhost:3000',
  //   node_env: process.env.NODE_ENV || 'development'
  // },

  /*
  ** Customize the progress-bar color
  */


  loading: {
    name: 'chasing-dots',
    color: 'rgba(0,0,0,0.3)',
    background: 'white',
    height: '3px'
  },

  // loading: '@/components/loading.vue',

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/iview',
    '@/plugins/components',
    '@/plugins/filters',
    '@/plugins/methods',
    '@/plugins/axios',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/style-resources'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BACKEND_BASE_URL,
  },


  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'data.token' },
          user: { url: '/user/info', method: 'get', propertyName: 'data' },
          logout: { url: '/auth/logout', method: 'post'}
        }
      },
    },

    redirect: {
      login: '/login',
      logout: '/login',
      // callback: '/login',
      home: '/'
    },

    resetOnError: true,
  },

  styleResources: {
    scss: ['./assets/styles/variables.scss'] // *.scss
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/fonts/fa/css/all.min.css',
    '@/assets/fonts/ProximaNova/stylesheet.css',

    { src: '@/assets/styles/theme.less', lang: 'less' },

    '@/assets/styles/variables.scss',
    '@/assets/styles/app.scss'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */

    extend(config, ctx) { },
    loaders: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        }
      }
    }

  }
}
