import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import HomeForm from './HomeForm.jsx';
import { Home, HiomeSchema } from '../../api/home/home.js';
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
  const loading = !dataHandle.ready();
  const data  = Home.findOne();
  return {
    loading, 
    data,
    handleUpdate,
    schema: HomeSchema
  }
}, HomeForm);


