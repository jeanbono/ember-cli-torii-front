import Ember from 'ember';
import ToriiAuthenticator from 'simple-auth-torii/authenticators/torii';
import config from '../config/environment';
import { request } from 'ic-ajax';

export default ToriiAuthenticator.extend({
  providers: {
    'google-api': function(authResponse) {
      return request('/auth/google_oauth2/callback', {
        data: { code: authResponse.code },
        type: 'POST'
      }).then((response) => {
        return { accessToken: response.access_token };
      });
    },
    'facebook-api': function(authResponse) {
      return request('/auth/facebook/callback', {
        type: 'GET'
      }).then((response) => {
        return { accessToken: response.access_token };
      });
    }
  },

  authenticate: function(provider, options) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      _this.torii.open(provider, options || {}).then(function(authResponse) {
        return _this.get('providers')[provider](authResponse);
      }).then(function(data) {
        _this.resolveWith(provider, data, resolve);
      }, reject);
    });
  }
});
