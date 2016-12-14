import { Services } from './../services.js';

Meteor.publish( 'services', () => {
  return Services.find();
});
