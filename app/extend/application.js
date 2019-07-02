'use strict'
const KEY_CLOAK = Symbol('Application#keycloak')
const Keycloak = require('@anthinkingcoder/keycloak-koa-connect')

module.exports = {
  get keycloak() {
    if (!this[KEY_CLOAK]) {
      this[KEY_CLOAK] = new Keycloak(this.config.keycloak.base, this.config.keycloak.kcConfig)
    }
    return this[KEY_CLOAK]
  }
