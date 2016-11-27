import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Home = new Mongo.Collection('home');

Home.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});


// material-ui
SimpleSchema.extendOptions({
  materialForm: Match.Optional(Object)
});

const textFieldMaterialForm = {
  fullWidth: true,
}
const textAreaMaterialForm = {
  fullWidth: true,
  multiLine: true,
  rows: 3
}


const HomeSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  titlecopy: {
    type: String,
    label: "Title copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },
  bullet1head: {
    type: String,
    label: "Key-Feature 1 Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  bullet1copy: {
    type: String,
    label: "Key-Feature 1 Copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },
  bullet2head: {
    type: String,
    label: "Key-Feature 2 Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  bullet2copy: {
    type: String,
    label: "Key-Feature 2 Copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },
  bullet3head: {
    type: String,
    label: "Key-Feature 3 Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  bullet3copy: {
    type: String,
    label: "Key-Feature 3 Copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },

  serviceshead: {
    type: String,
    label: "Dienste Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  servicescopy: {
    type: String,
    label: "Dienste Copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },


  "updated": {
    type: Date,
    label: "Letztes Update",
    optional: true,
    autoValue: function() {
      if ( this.isUpdate ) {
        return new Date;
      } 
    }
  }
});
Home.attachSchema( HomeSchema );









export { Home, HomeSchema };
