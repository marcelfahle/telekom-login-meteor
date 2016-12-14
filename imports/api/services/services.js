import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Services = new Mongo.Collection('services');

Services.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

  
SimpleSchema.extendOptions({
  materialForm: Match.Optional(Object)
});

const textFieldMaterialForm = {
  fullwidth: true,
}
const textAreaMaterialForm = {
  fullwidth: true,
  multiline: true,
  rows: 2
}

const ServicesSchema = new SimpleSchema({
  title: {
    type: String,
    label: 'Title',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  icon: {
    type: String,
    label: 'Title',
    optional: true,
  },
  description: {
    type: String,
    label: 'Title',
    optional: true,
    materialForm: textAreaMaterialForm

  },
  category: {
    type: String,
    label: 'Title',
    optional: true

  },
  url: {
    type: String,
    label: 'Title',
    optional: true,
    materialForm: textFieldMaterialForm
  }
});

Services.attachSchema(ServicesSchema);
export { Services, ServicesSchema }
