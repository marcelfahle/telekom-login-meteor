import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { UserFiles } from './../../../api/user_files/UserFiles.js';

import FileUploads from './FileUploads.jsx';

export default FileUploadsContainer = createContainer(({}) => {
  const handle = Meteor.subscribe('user_files.all');
  const loading = !handle.ready();
  const filesCursor = UserFiles.find();
  const files = filesCursor.fetch();
  return {
    handle,
    loading,
    files,
    filesCursor
  }
}, FileUploads);
