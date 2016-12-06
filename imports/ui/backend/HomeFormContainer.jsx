import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import HomeForm from './HomeForm.jsx';
import { Home, HomeSchema } from '../../api/home/home.js';
import { UserFiles } from '../../api/user_files/UserFiles.js';
import { update } from './../../api/home/methods.js';


const handleUpdate = (doc, updatedFields) => {
  update.call( {
    docId: doc._id,
    doc: updatedFields
  }, (err, res) => {
    if (err) {
      console.log('error saving: ', err);
    } else {
      // console.log('success. change route');
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


