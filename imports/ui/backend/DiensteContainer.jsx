import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Services, ServicesSchema } from './../../api/services/services.js';
import DiensteAdmin from './DiensteAdmin.jsx';


export default DiensteContainer = createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe('services');
  const loading = !dataHandle.ready();
  return {
    loading
  }
}, DiensteAdmin);
