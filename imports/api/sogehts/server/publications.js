import { Sogehts } from './../sogehts.js';

Meteor.publish('sogehts', () => {
  return Sogehts.find();
});
