const path = require('path')

module.exports = {
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {

    } else {
      config.resolve.alias.styles = path.join(__dirname, './src/assets/styles')
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/variables.styl'),
        path.resolve(__dirname, './src/assets/styles/mixins.styl')
      ]
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // target host
          changeOrigin: true, // needed for virtual hosted sites
          ws: true, // proxy websockets
          pathRewrite: {
            '^/api': '/data', // rewrite path
          }
      }
    }
  }
}