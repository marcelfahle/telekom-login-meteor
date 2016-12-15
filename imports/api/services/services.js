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
  fullWidth: true,
}
const textAreaMaterialForm = {
  fullWidth: true,
  multiLine: true,
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
    label: 'Icon',
    optional: true,
  },
  description: {
    type: String,
    label: 'Description',
    optional: true,
    materialForm: textAreaMaterialForm

  },
  category: {
    type: String,
    label: 'Category',
    optional: true,
    allowedValues: ['telekom', 'others'],
    materialForm: {
      options: [
        { label: 'Telekom Dienste', value: 'telekom' },
        { label: 'Partner Dienste', value: 'others' }
      ]
    }

  },
  url: {
    type: String,
    label: 'URL',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  featured: {
    type: Boolean,
    label: 'Top-Menu',
    optional: true,
    materialForm: {
    }
  }
});

Services.attachSchema(ServicesSchema);
export { Services, ServicesSchema }
