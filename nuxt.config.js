import colors from 'vuetify/es5/util/colors'
import nuxtStyledResources from "@nuxtjs/style-resources";

export default {
	mode: 'universal',
	// target: 'static',
	optimization: {
		minimize: true
	},
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Vue/Nuxt를 활용한 게시판',
    title: 'Vue/Nuxt를 활용한 게시판',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],


  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/_common.scss'],
    theme: {
			options: {
				customProperties: true
			},
			dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
					booldook: colors.amber.base,
        },
				light: {
					primary: colors.blue.lighten2,
					accent: colors.grey.lighten3,
					secondary: colors.amber.lighten3,
					info: colors.teal.darken1,
					warning: colors.amber.base,
					error: colors.deepOrange.accent4,
					success: colors.green.accent3,
					booldook: colors.lime.darken3,
				}
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
		extractCSS: true
  },

  dir: {
    layouts: 'views/layouts',
    pages: 'views/pages'
  },

	server: {
		port: 5000,
		host: '127.0.0.1'
	}
}
