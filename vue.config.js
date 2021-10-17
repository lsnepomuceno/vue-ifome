module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-ifome'
    : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}
