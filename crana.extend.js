module.exports = {
  name: 'test-plugin',
  eslint: 'config/eslint.config.json',
  client: {
    webpack: {
      dev: 'config/webpack.dev.js',
      common: 'config/webpack.common.js',
      prod: 'config/webpack.prod.js'
    },
    babel: 'config/babel.config.json',
  }
}