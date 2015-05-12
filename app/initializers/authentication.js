import ApplicationAuthenticator from '../authenticators/application';

export default {
  name: 'authentication',
  before: 'simple-auth',

  initialize: function(container, application) {
    container.register('authenticator:application', ApplicationAuthenticator);
    application.inject('authenticator:application', 'torii', 'torii:main');
  }
};
