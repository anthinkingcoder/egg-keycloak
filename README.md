# egg-keycloak

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-keycloak.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-keycloak
[travis-image]: https://img.shields.io/travis/eggjs/egg-keycloak.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-keycloak
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-keycloak.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-keycloak?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-keycloak.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-keycloak
[snyk-image]: https://snyk.io/test/npm/egg-keycloak/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-keycloak
[download-image]: https://img.shields.io/npm/dm/egg-keycloak.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-keycloak

<!--
Description here.
-->

## Install

```bash
$ npm i egg-keycloak --save
```

## Usage

```js

// {app_root}/config/plugin.js
exports.keycloak = {
  enable: true,
  package: 'egg-keycloak'
};

// application.js
const KEY_CLOAK = Symbol('Application#keycloak')
const Keycloak = require('@anthinkingcoder/keycloak-koa-connect')

module.exports = {
  get keycloak() {
    if (!this[KEY_CLOAK]) {
      this[KEY_CLOAK] = new Keycloak(this.config.keycloak.base, this.config.keycloak.kcConfig)
    }
    return this[KEY_CLOAK]
  }
```

## Configuration

```js
// {app_root}/config/config.default.js
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
```
Support all configurations in [keycloak-koa-connect](https://github.com/anthinkingcoder/keycloak-koa-connect).
see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
