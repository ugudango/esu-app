module.exports = {
  lintOnSave: false,
  publicPath:
    process.env.NODE_ENV === 'production' ? '/esu-app/' : '/',
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
