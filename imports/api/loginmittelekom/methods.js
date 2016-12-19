import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { LoginMitTelekom } from './loginmittelekom.js';


export const update = new ValidatedMethod({
  name: 'loginmittelekom.update',
  validate: new SimpleSchema({
    docId: { type: String },
    doc: { type: LoginMitTelekom.simpleSchema() }
  }).validator(),
  run( { docId, doc} ) {
    LoginMitTelekom.update( docId, {
      $set: doc
    });

  }
});

