// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/styles/main.scss"],
    runtimeConfig: {
        public: {
            baseUrl: process.env.BASE_URL || 'http://localhost:3000'
        }
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/styles/_vars.scss" as *;',
                },
            },
        },
    }
})