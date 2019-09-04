// next.config.js
const debug = process.env.NODE_ENV !== "production";
const withSass = require('@zeit/next-sass')

module.exports = withSass({
//   cssModules: true
    assetPrefix: !debug ? 'https://cassiemorford.github.io/' : '',

})