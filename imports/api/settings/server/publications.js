import { Settings } from './../settings.js';

Meteor.publish('settings', () => {
  return Settings.find();
});
