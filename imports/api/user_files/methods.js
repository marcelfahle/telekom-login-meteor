import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { UserFiles } from './UserFiles.js';

export const deleteUserFile = new ValidatedMethod({
  name: 'user_file.delete',
  validate: new SimpleSchema({
    id: { type: String }
  }).validator(),
  run( { id } ) {
    return UserFiles.remove( {_id: id} );
    // TODO: Bert Notification
  }
});
