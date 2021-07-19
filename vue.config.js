/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
/* eslint-enable @typescript-eslint/no-var-requires */

module.exports = {
  lintOnSave: false,
  publicPath: '/esu-app/',
  // process.env.NODE_ENV === 'production' ? '/esu-app/' : '/',
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
};
