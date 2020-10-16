export default {
  target: "static", // default: 'server'
  ssr: false,
  components: true,
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "DOLCA Stake Pool",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" },
      {
        rel: "apple-touch-icon-precomposed",
        sizes: "57x57",
        href: "/images/apple-touch-icon-57x57.png",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css",
      },
    ],
  },
  modules: [
    "nuxt-buefy",
    "@nuxtjs/sitemap",
    "@nuxt/components",
    'nuxt-i18n',
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-113467444-4",
      },
    ],
  ],
  sitemap: {
    hostname: "https://www.dolcapool.eu/",
    gzip: true,
  },

  /**
   * Optimize Images during build
   */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
  ],

  optimizedImages: {
    optimizeImages: true,
    optimizeImagesInDev: true
  },

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/core.scss'
  ],
  plugins: [
    '@/plugins/particles'
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      },
      {
        code: 'cs',
        file: 'cz-CZ.js'
      },
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
    lazy: true,
    langDir: 'lang/',
    vueI18n: {
      fallbackLocale: 'en'
    }
  }
}
