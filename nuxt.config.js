
export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [

    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '~/plugins/masonry.js', ssr: false }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
        // Doc: https://github.com/nuxt-community/dotenv-module
        '@nuxtjs/dotenv',
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: 'http://wordpress.test/wp-json/wp/v2',
        // proxyHeaders: false,
        //credentials: false,
        //proxy: true,
        debug: true,


    },

    router: {
        extendRoutes(routes, resolve) {
            const indexIndex = routes.findIndex(route => route.name === 'index')
            let index = routes[indexIndex].children.findIndex(route => route.name === 'index-child-id')
            routes[indexIndex].children[index] = {
                ...routes[indexIndex].children[index],
                components: {
                    default: routes[indexIndex].children[index].component,
                    sidebar: resolve(__dirname, 'components/childSidebar.vue')
                },
                chunkNames: {
                    sidebar: 'components/childSidebar'
                }
            }

            index = routes.findIndex(route => route.name === 'main')
            routes[index] = {
                ...routes[index],
                components: {
                    default: routes[index].component,
                    top: resolve(__dirname, 'components/mainTop.vue')
                },
                chunkNames: {
                    top: 'components/mainTop'
                }
            }
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}
