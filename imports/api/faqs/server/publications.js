import { Faqs } from './../faqs.js';

Meteor.publish('faqs', () => {
  return Faqs.find();
});
