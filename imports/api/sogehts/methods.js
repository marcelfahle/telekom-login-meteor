import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Sogehts } from './sogehts.js';


export const update = new ValidatedMethod({
  name: 'sogehts.update',
  validate: new SimpleSchema({
    docId: { type: String },
    doc: { type: Sogehts.simpleSchema() }
  }).validator(),
  run( { docId, doc} ) {
    Sogehts.update( docId, {
      $set: doc
    });

  }
});
