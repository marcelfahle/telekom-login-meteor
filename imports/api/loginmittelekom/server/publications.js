import { LoginMitTelekom } from './../loginmittelekom.js';

Meteor.publish('loginmittelekom', () => {
  return LoginMitTelekom.find();
});
