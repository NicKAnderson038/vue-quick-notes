module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-quick-notes/' : '/',
  outputDir: 'docs',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/styles/_variables.scss";',
      },
    },
    sourceMap: true,
  },
}
