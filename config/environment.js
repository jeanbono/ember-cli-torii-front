/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'nebulous',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' https://apis.google.com http://apis.google.com http://connect.facebook.net",
      'font-src': "'self'",
      'connect-src': "'self'",
      'img-src': "'self' http://csi.gstatic.com https://www.facebook.com",
      'style-src': "'self' 'unsafe-inline'",
      'media-src': "'self'",
      'frame-src': "'self' https://accounts.google.com http://static.ak.facebook.com https://s-static.ak.facebook.com https://www.facebook.com"
    },

    torii: {
      providers: {
        'google-api': {
          clientId: '1064081317304-i7ab224ru8lm6e4dbf9k51vpfe1ds937.apps.googleusercontent.com'
        },
        'facebook-api': {
          appId: '1389118841313051'
        },
        'salesforce': {
          clientId: '3MVG99qusVZJwhsklxpXkIhCoU6AgswudMSgm4EJn12d79fupe_fauayN9giDdQKW9iPZ0mSrLuJl9rwQXXCF'/*,
          redirectUri: 'http://localhost:9292/auth/salesforce/callback'*/
        }
      }
    },

    'simple-auth': {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      crossOriginWhitelist: ['http://localhost:3000']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
