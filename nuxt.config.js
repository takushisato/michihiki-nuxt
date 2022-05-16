export default {
  data(){
    return{
      baseApiUrl: process.env.BASE_API_URL,
    }
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'グラフで潮が見えるサイト-みちひき-',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '潮の満潮時刻と干潮時刻をグラフで確認できるサイトです。釣りや海遊び、潮干狩りなどにご利用ください。' },
      { hid: 'keywords', name: 'keywords', content: '海、潮、満潮、干潮、潮見表' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'みちひき' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://sio-michihiki.com' },
      { hid: 'og:title', property: 'og:title', content: '-グラフで潮の満ち引きを確認するサイト-' },
      { hid: 'og:description', property: 'og:description', content: '潮の満潮時刻と干潮時刻をグラフで確認できるサイトです。釣りや海遊び、潮干狩りなどにご利用ください。' },
      { hid: 'og:image', property: 'og:image', content: 'static/ogp.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons8.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'https://api.tide736.net/get_tide.php/',
      pathRewrite: {'^/api/': ''}
    },
    '/img-api/': {
      target: 'https://api.tide736.net/tide_image.php/',
      pathRewrite: {'^/img-api/': ''}
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

}
