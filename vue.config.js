const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
    allowedHosts: 'all',
    },

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    }
})
/*const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    devServer: {
        publicPath: process.env.NODE_ENV === 'production'
            ? '/Brickau/'
            : '/',
        transpileDependencies: true,
        // 'auto' | 'all' [string] here
        allowedHosts: 'all',

    },

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})*/
