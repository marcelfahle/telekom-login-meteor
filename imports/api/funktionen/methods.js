import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Funktionen, FunktionSchema } from './funktionen.js';


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
export const addFunktion = new ValidatedMethod({
  name: 'funktionen.add',
  validate: new SimpleSchema({
    docId: { type: String },
    doc: {type: [FunktionSchema] }
  }).validator({clean:true}),
  run( {doc, docId} ) {

    Funktionen.update( docId, {
      $set: {funktionen: doc}
    }, {upsert: true});  
  }
});
export const updateFunktion = new ValidatedMethod({
  name: 'funktion.update',
  validate: new SimpleSchema({
    docId: { type: String },
    fId: { type: Number },
    funktion: { type: FunktionSchema }
  }).validator({clean: true}),
  run( {docId, fId, funktion}) {
    const f = {};
    f[`funktionen.${fId}`] = funktion;
    Funktionen.update( docId, {
      $set: f
    });
  }
});
export const removeFunktion = new ValidatedMethod({
  name: 'funktion.remove',
  validate: new SimpleSchema({
    docId: { type: String },
    fId: { type: Number }
  }).validator(),
  run( { docId, fId } ) {
    const f = {};
    f[`funktionen.${fId}`] = 1;
    Funktionen.update( docId, { $unset: f });
    Funktionen.update( docId, { $pull: {"funktionen": null} });
  }
});

