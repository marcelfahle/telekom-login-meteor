import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Settings } from './settings.js';


export const update = new ValidatedMethod({
  name: 'settings.update',
  validate: new SimpleSchema({
    docId: { type: String },
    doc: { type: Settings.simpleSchema() }
  }).validator(),
  run( { docId, doc} ) {
    Settings.update( docId, {
      $set: doc
    });

  }
});

