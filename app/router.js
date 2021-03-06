import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('contact-us');
  this.route('terms-condition');
  this.route('privacy-policy');
});

export default Router;
