import { Services } from './../services.js';

Meteor.publish( 'services', () => {
  return Services.find();
});
Meteor.publish( 'services.telekom', () => {
  return Services.find({category: 'telekom'});
});
Meteor.publish( 'services.others', () => {
  return Services.find({category: 'others'});
});
