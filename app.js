module.exports = function(app) {
  app.config.coreMiddleware.push('setup');
  app.config.coreMiddleware.push('postAuth');
  app.config.coreMiddleware.push('admin');
  app.config.coreMiddleware.push('grantAttacher');
  app.config.coreMiddleware.push('logout');

};
