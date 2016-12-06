// Users FilesCollectipn from
// https://github.com/VeliovGroup/Meteor-Files#new-filescollectionconfig-isomorphic

import { FilesCollection } from 'meteor/ostrio:files';


export const UserFiles = new FilesCollection({
  storagePath: '/Users/mf/code/login-meteor-uploads',
  collectionName: 'user_files',
  downloadRoute: '/uploads/',
  allowClientCode: false, // Disallow removal from client
  onBeforeUpload: (file) => {
    if ( file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    } else {
      return 'Maximum file size exceeeded. Files should be 10MB or less.';
    }
  }
});

