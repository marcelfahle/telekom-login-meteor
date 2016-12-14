import { Funktionen } from './../funktionen.js';

Meteor.publish('funktionen', () => {
  return Funktionen.find();
});
