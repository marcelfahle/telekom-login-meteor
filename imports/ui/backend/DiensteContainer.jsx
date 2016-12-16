import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Services, ServicesSchema } from './../../api/services/services.js';
import { UserFiles } from '../../api/user_files/UserFiles.js';
import DiensteAdmin from './DiensteAdmin.jsx';

import { 
  insertService,
  removeService,
  updateService
} from './../../api/services/methods.js';


const handleAddService = ( newService, extra ) => {
  const service = Object.assign({}, newService, extra );
  insertService.call( service, (err) => {
    if ( err )
      Bert.alert(err.reason, 'danger');
    else
      Bert.alert('Dienst hinzugefügt', 'success');
  }); 
};
const handleRemoveService = ( serviceId ) => {
  removeService.call( {id: serviceId}, (err) => {
    if (err){
      Bert.alert(err.reason, 'danger');
    } else {
      Bert.alert('Dienst erfolgreich entfernt.', 'success');
    }
  });
};
const handleUpdateService = ( modifiedService, originalService ) => {
  updateService.call( modifiedService, (err) => {
    if (err)
      Bert.alert(err.reason, 'danger');
    else
      Bert.alert(`Der Dienst ${modifiedService.modifier.title || originalService.title} wurde aktualisert.`, 'success');
  });
};


export default DiensteContainer = createContainer( ({ params }) => {
  const dataHandleTelekom = Meteor.subscribe('services.telekom');
  const dataHandleOthers = Meteor.subscribe('services.others');
  const filesHandle = Meteor.subscribe('user_files.all');
  const loading = !dataHandleTelekom.ready() || !dataHandleOthers.ready() || !filesHandle.ready();
  const servicesTelekom = Services.find({category: 'telekom'}).fetch();
  const servicesOthers = Services.find({category: 'others'}).fetch();
  const files = UserFiles.find();

  return {
    loading,
    ServicesSchema,
    handleAddService,
    handleRemoveService,
    handleUpdateService,
    servicesTelekom,
    servicesOthers,
    files
  }
}, DiensteAdmin);
