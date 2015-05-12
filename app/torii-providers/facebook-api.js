import Ember from 'ember';
import Provider from 'torii/providers/base';
import { configurable } from 'torii/configuration';

export default Provider.extend({
  name:  'facebook-api',
  scope: configurable('scope', 'email'),
  appId: configurable('appId'),
  version: configurable('version', 'v2.2'),
  xfbml: configurable('xfbml', false),
  channelUrl: configurable('channelUrl', null),
  locale: configurable('locale', 'en_US'),
  loadPromise: null,

  open: function() {
    return this.load().then(this.authorize.bind(this));
  },

  load: function() {
    var loadPromise = this.get('loadPromise');

    if (loadPromise == null) {
      loadPromise = this._load();
      this.set('loadPromise', loadPromise);
    }

    return loadPromise;
  }.on('init'),

  _load: function() {
    var locale = this.get('locale');
    var settings = {
      status: true,
      cookie: true,
      xfbml: this.get('xfbml'),
      version: this.get('version'),
      appId: this.get('appId'),
      channelUrl: this.get('channelUrl')
    };

    return new Ember.RSVP.Promise(function(resolve, reject) {
      window.fbAsyncInit = function() {
        FB.init(settings);
        Ember.run(null, resolve);
      };

      Ember.$.getScript('//connect.facebook.net/' + locale + '/sdk.js').
        fail(function(_, __, exception) {
          Ember.run(null, reject, exception);
        });
    });
  },

  authorize: function() {
    var scope = this.get('scope');

    return new Ember.RSVP.Promise((resolve, reject) => {
      FB.login(function(response){
        if (response.authResponse) {
          Ember.run(null, resolve, response.authResponse);
        } else {
          Ember.run(null, reject, response.status);
        }
      }, { scope: scope });
    });
  }
});
