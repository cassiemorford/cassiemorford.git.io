// next.config.js
const withSass = require('@zeit/next-sass')
module.exports = withSass({
//   cssModules: true
    exportPathMap: function() {
        return {
        '/': { page: '/' },
        '/about': { page: '/about' },
        '/pokemon': {page: '/pokemon'}
        };
    }
})