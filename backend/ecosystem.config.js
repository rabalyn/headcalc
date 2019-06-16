module.exports = {
  apps: [
    {
      name: 'headcalc-dev',
      script: './app.js',
      watch: ['lib', 'app.js', 'routes', '../locales', 'ecosystem.config.js'],
      interpreter: 'babel-node',
      env: {
        NODE_ENV: 'development',
        DEBUG: 'headcalc:*'
      },
      // eslint-disable-next-line camelcase
      env_production: {
        NODE_ENV: 'production',
        DEBUG: 'headcalc:*'
      }
    }
  ]
}
