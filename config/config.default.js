'use strict';

/**
 * egg-keycloak default config
 * @member Config#keycloak
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
