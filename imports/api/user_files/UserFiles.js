// Users FilesCollectipn from
// https://github.com/VeliovGroup/Meteor-Files#new-filescollectionconfig-isomorphic

import { FilesCollection } from 'meteor/ostrio:files';


export const UserFiles = new FilesCollection({
  // TODO: check out the config file setting of this. Need to come from 
  // settings file and probably shouldnt be on the server
  storagePath: Meteor.settings.storagePath,
  collectionName: 'user_files',
  downloadRoute: Meteor.settings.downloadRoute,
  allowClientCode: false, // Disallow removal from client
  onBeforeUpload: (file) => {
    //console.log('onBeforeUpload.... server or client', Meteor.settings.storagePath);
    if ( file.size <= 10485760 && /png|svg|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Maximum file size exceeeded. Files should be 10MB or less.';
    }
  }
});

