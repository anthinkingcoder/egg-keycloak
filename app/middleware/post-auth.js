const PostAuth = require('@anthinkingcoder/keycloak-koa-connect/middleware/post-auth')
module.exports = (options, app) => {
  return PostAuth(app.keycloak)
}
