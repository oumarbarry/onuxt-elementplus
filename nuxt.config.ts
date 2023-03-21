export default defineNuxtConfig({
  typescript: { shim: false },

  experimental: { inlineSSRStyles: false },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/scss/index.scss',
  ],

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@element-plus/nuxt',
    '@nuxt/devtools',
  ],

  elementPlus: {
    importStyle: 'scss',
    themes: ['dark'],
    // icon: false
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: { additionalData: '@use "@/assets/scss/element/index.scss" as element;' },
      },
    },
  },

  sourcemap: false,
})
