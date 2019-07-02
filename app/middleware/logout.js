const Logout = require('@anthinkingcoder/keycloak-koa-connect/middleware/logout')
module.exports = (options, app) => {
  return Logout(app.keycloak, app.config.keycloak.middleware.logout || '/logout')
}
