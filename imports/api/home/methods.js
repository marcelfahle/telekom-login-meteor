import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Home } from './home.js';


export const update = new ValidatedMethod({
  name: 'home.update',
  validate: new SimpleSchema({
    docId: { type: String },
    doc: { type: Home.simpleSchema() }
  }).validator(),
  run( { docId, doc} ) {
    Home.update( docId, {
      $set: doc
    });

  }
});

