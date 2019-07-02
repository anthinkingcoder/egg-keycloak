'use strict';

const mock = require('egg-mock');

describe('test/keycloak.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/keycloak-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, keycloak')
      .expect(200);
  });
});
