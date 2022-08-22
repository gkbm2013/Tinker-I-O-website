export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'new-website',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",
        body: true,
      },
      {
        src: "/js/bootstrap.min.js",
        body: true,
      },
      {
        src: "https://buttons.github.io/buttons.js",
        body: true,
        async: true,
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/bootstrap-social.css",
    "~/assets/css/font-awesome.min.css",
    "~/assets/css/style-carousel.css",
    "~/assets/css/style-cover.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
  ],

  i18n: {
    lazy: true,
    langDir: "~/locales/",
    defaultLocale: "en",
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'auto' },
      { code: 'zh_tw', iso: 'zh-TW', file: 'zh_tw.js', dir: 'auto' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    }
  },

  googleAnalytics: {
    id: 'UA-54046944-3'
  },

  sitemap: {
    hostname: 'https://tio.gkbsite.org',
    gzip: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
