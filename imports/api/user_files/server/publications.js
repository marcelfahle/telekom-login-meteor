import { UserFiles } from './../UserFiles.js';

Meteor.publish('user_files.all', () => {
  return UserFiles.find().cursor;
});

