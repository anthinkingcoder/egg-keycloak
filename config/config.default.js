'use strict';

/**
 * egg-keycloak default config
 * @member Config#keycloak
 * @property {String} SOME_KEY - some description
 */
exports.keycloak = {
  middleware: {
    logout: '/logout',
    admin: '/',
  },
  base: {
    store: true,
    cookies: false,
    idpHint: null,
    scope: null
  },
  kcConfig: { //keycloak.json
    clientId: '',
    serverUrl: '',
    realm: '',
    bearerOnly: false
  }
};
