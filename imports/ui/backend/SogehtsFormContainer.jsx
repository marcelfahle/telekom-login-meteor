import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SogehtsForm from './SogehtsForm.jsx';
import { Sogehts, SogehtsSchema } from './../../api/sogehts/sogehts.js';
import { Faqs, FaqsSchema } from './../../api/faqs/faqs.js';
import { UserFiles } from './../../api/user_files/UserFiles.js';
import { update } from './../../api/sogehts/methods.js';
import { 
  addFaq,
  updateFaq,
  removeFaq
} from './../../api/faqs/methods.js';


const handleUpdate = (doc, updatedFields, extraFields) => {
  const allFields = Object.assign({}, updatedFields, extraFields);
  update.call( {
    docId: doc._id,
    doc: allFields
  }, (err, res) => {
    if (err) {
      Bert.alert( err.reason, 'danger', 'growl-top-right' ); 
    } else {
      Bert.alert( 'Die Seite wurde aktualisiert.', 'success', 'growl-top-right' ); 
    }
  });
};



const handleFaqUpdate = (doc, updatedFields, extraFields) => {
  const updatedFaq = Object.assign({}, doc, updatedFields);
  updateFaq.call({
    docId: extraFields.doc._id,
    fId: extraFields.index,
    faq: updatedFaq
  }, (err, res) => {
    if (err) {
      Bert.alert( err, 'danger', 'growl-top-right' ); 
    } else {
      Bert.alert( 'Faq wurde aktualisiert.', 'success', 'growl-top-right' ); 
    }
  });
};

const add = (doc, faqs = []) => {
    addFaq.call({
      docId: doc._id,
      doc: doc.faqs ? [...doc.faqs, faqs] : [faqs]
    }, (err, res) => {
      if (err) {
        console.log(err);
        Bert.alert( err.reason, 'danger', 'growl-top-right' ); 
      } else {
        Bert.alert( 'Neue Faq angelegt.', 'success', 'growl-top-right' ); 
      }
    });
}

const handleFaqRemove = ( docId, fId ) => {
  removeFaq.call({docId, fId}, (err, res) => {
    if (err) {
      Bert.alert( err.reason, 'danger', 'growl-top-right' ); 
    } else {
      Bert.alert( 'Faq entfernt.', 'success', 'growl-top-right' ); 
    }
  });
}








export default SogehtsFormContainer = createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe('sogehts');
  const faqHandle = Meteor.subscribe('faqs');
  const filesHandle = Meteor.subscribe('user_files.all');
  const loading = !dataHandle.ready() || !filesHandle.ready() || !faqHandle.ready();
  const data  = Sogehts.findOne();
  const files = UserFiles.find();
  const faqs = (data && data.faqs)? data.faqs : [];
  return {
    loading, 
    data,
    files,
    faqs,
    handleUpdate,
    add,
    handleFaqRemove,
    handleFaqUpdate,
    schema: SogehtsSchema,
    faqsSchema: FaqsSchema
  }
}, SogehtsForm);

