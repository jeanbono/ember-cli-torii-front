import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    loginWithGoogle: function() {
      this.get('session').authenticate('authenticator:application', 'google-api');
    },
    loginWithFacebook: function() {
      this.get('session').authenticate('authenticator:application', 'facebook-api');
    }
  }
});
