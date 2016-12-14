import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Funktionen } from './funktionen.js';


export const update = new ValidatedMethod({
  name: 'funktionen.update',
  validate: new SimpleSchema({
    docId: { type: String },
    doc: { type: Funktionen.simpleSchema() }
  }).validator(),
  run( { docId, doc} ) {
    Funktionen.update( docId, {
      $set: doc
    });

  }
});

