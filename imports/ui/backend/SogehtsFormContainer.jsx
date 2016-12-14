import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import SogehtsForm from './SogehtsForm.jsx';
import { Sogehts, SogehtsSchema } from './../../api/sogehts/sogehts.js';
import { UserFiles } from './../../api/user_files/UserFiles.js';
import { update } from './../../api/sogehts/methods.js';


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

export default SogehtsFormContainer = createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe('sogehts');
  const filesHandle = Meteor.subscribe('user_files.all');
  const loading = !dataHandle.ready() || !filesHandle.ready();
  const data  = Sogehts.findOne();
  const files = UserFiles.find();
  return {
    loading, 
    data,
    files,
    handleUpdate,
    schema: SogehtsSchema
  }
}, SogehtsForm);

