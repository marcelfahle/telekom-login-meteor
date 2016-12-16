import { Meteor } from 'meteor/meteor';
import { Services } from './services.js';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertService = new ValidatedMethod({
  name: 'Services.methods.insert',
  validate: new SimpleSchema(
    Services.simpleSchema()
  ).validator({clean: true}),
  run(service) {
    // TODO: check for user
    Services.insert(service);
  }
});

export const updateService = new ValidatedMethod({
  name: 'Services.methods.update',
  validate: new SimpleSchema(
    { 
      id: { type: String},
      modifier: { type: Services.simpleSchema() }
    }
  ).validator(),
  run( { id, modifier } ) {
    Services.update(id, {
      $set: modifier
    });
  }
});

export const removeService = new ValidatedMethod( {
  name: 'Services.methods.remove',
  validate: new SimpleSchema({
              id: { type: String }
            }).validator(),
  run( service ) {
    Services.remove(service.id);
  }
});
