import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import FunktionenForm from './FunktionenForm.jsx';
import { Funktionen, FunktionenSchema, FunktionSchema } from './../../api/funktionen/funktionen.js';
import { UserFiles } from './../../api/user_files/UserFiles.js';
import { 
  update,
  addFunktion,
  updateFunktion,
  removeFunktion
} from './../../api/funktionen/methods.js';


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

const handleFunktionUpdate = (doc, updatedFields, extraFields) => {
  const updatedFunktion = Object.assign({}, doc, updatedFields, {image: extraFields.image});
  updateFunktion.call({
    docId: extraFields.doc._id,
    fId: extraFields.index,
    funktion: updatedFunktion
  }, (err, res) => {
    if (err) {
      Bert.alert( err.reason, 'danger', 'growl-top-right' ); 
    } else {
      Bert.alert( 'Die Seite wurde aktualisiert.', 'success', 'growl-top-right' ); 
    }
  });
};

const add = (doc, funktionen) => {
    addFunktion.call({
      docId: doc._id,
      doc: [...doc.funktionen, funktionen]
    }, (err, res) => {
      if (err) {
        Bert.alert( err.reason, 'danger', 'growl-top-right' ); 
      } else {
        Bert.alert( 'Neue Funktion angelegt.', 'success', 'growl-top-right' ); 
      }
    });
}

const handleFunktionRemove = ( docId, fId ) => {
  removeFunktion.call({docId, fId}, (err, res) => {
    if (err) {
      Bert.alert( err.reason, 'danger', 'growl-top-right' ); 
    } else {
      Bert.alert( 'Funktion entfernt.', 'success', 'growl-top-right' ); 
    }
  });
}

export default FunktionenFormContainer = createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe('funktionen');
  const filesHandle = Meteor.subscribe('user_files.all');
  const loading = !dataHandle.ready() || !filesHandle.ready();
  const data  = Funktionen.findOne();
  const files = UserFiles.find();
  const funktionen = (data && data.funktionen)? data.funktionen : [];
  return {
    loading, 
    data,
    files,
    funktionen,
    handleUpdate,
    handleFunktionUpdate,
    handleFunktionRemove,
    add,
    schema: FunktionenSchema,
    funktionSchema: FunktionSchema
  }
}, FunktionenForm);

