const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
        Icons: path.join(__dirname, 'public/image/icons')
      }
    }
  },
  chainWebpack: (config: any) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    config.resolve.alias.set('icons', path.resolve(__dirname, 'public'))
  }
}
