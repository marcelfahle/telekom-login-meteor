import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import FunktionenForm from './FunktionenForm.jsx';
import { Funktionen, FunktionenSchema } from './../../api/funktionen/funktionen.js';
import { UserFiles } from './../../api/user_files/UserFiles.js';
import { update } from './../../api/funktionen/methods.js';


const handleUpdate = (doc, updatedFields, extraFields) => {
  const allFields = Object.assign({}, updatedFields, extraFields);
  update.call( {
    docId: doc._id,
    doc: allFields
  }, (err, res) => {
    if (err) {
      console.log('error saving: ', err);
    } else {
      // console.log('success. change route');
    }
  });
};

export default FunktionenFormContainer = createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe('funktionen');
  const filesHandle = Meteor.subscribe('user_files.all');
  const loading = !dataHandle.ready() || !filesHandle.ready();
  const data  = Funktionen.findOne();
  const files = UserFiles.find();
  return {
    loading, 
    data,
    files,
    handleUpdate,
    schema: FunktionenSchema
  }
}, FunktionenForm);

