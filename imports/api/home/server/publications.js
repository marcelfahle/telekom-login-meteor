import { Home } from './../home.js';

Meteor.publish('home', () => {
  return Home.find();
});
