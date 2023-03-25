const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        // 'auto' | 'all' [string] here
        allowedHosts: 'all',
    },
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
