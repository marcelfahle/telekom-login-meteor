import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import HomeForm from './HomeForm.jsx';
import { Home, HomeSchema } from '../../api/home/home.js';
import { UserFiles } from '../../api/user_files/UserFiles.js';
import { update } from './../../api/home/methods.js';


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



export default HomeFormContainer = createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe('home');
  const filesHandle = Meteor.subscribe('user_files.all');
  const loading = !dataHandle.ready() || !filesHandle.ready();
  const data  = Home.findOne();
  const files = UserFiles.find();
  return {
    loading, 
    data,
    files,
    handleUpdate,
    schema: HomeSchema
  }
}, HomeForm);


