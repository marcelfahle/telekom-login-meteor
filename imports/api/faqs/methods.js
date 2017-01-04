import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Faqs, FaqsSchema } from './faqs.js';
import { Sogehts } from './../sogehts/sogehts';


export const addFaq = new ValidatedMethod({
  name: 'faqs.add',
  validate: new SimpleSchema({
    docId: { type: String },
    doc: {type: [FaqsSchema] }
  }).validator({clean:true}),
  run( {doc, docId} ) {
    console.log('run', docId, doc);
    Sogehts.update( docId, {
      $set: {"faqs": doc}
    });
  }
});
export const updateFaq = new ValidatedMethod({
  name: 'faq.update',
  validate: new SimpleSchema({
    docId: { type: String },
    fId: { type: Number },
    faq: { type: FaqsSchema }
  }).validator({clean: true}),
  run( {docId, fId, faq}) {
    const f = {};
    f[`faqs.${fId}`] = faq;
    Sogehts.update( docId, {
      $set: f
    });
  }
});
export const removeFaq = new ValidatedMethod({
  name: 'faq.remove',
  validate: new SimpleSchema({
    docId: { type: String },
    fId: { type: Number }
  }).validator(),
  run( { docId, fId } ) {
    const f = {};
    f[`faqs.${fId}`] = 1;
    Sogehts.update( docId, { $unset: f });
    Sogehts.update( docId, { $pull: {"faqs": null} });
  }
});

