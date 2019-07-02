const GrantAttacher = require('@anthinkingcoder/keycloak-koa-connect/middleware/grant-attacher')
module.exports = (options, app) => {
  return GrantAttacher(app.keycloak)
}
