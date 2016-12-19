import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'


const Sogehts = new Mongo.Collection('sogehts');



Sogehts.deny({
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
  rows: 2
}

const faqHead = {
  type: String,
  optional: true,
  materialForm: textFieldMaterialForm
}
const faqCopy = {
  type: String,
  optional: true,
  materialForm: textAreaMaterialForm
}


const SogehtsSchema = new SimpleSchema({
  herobold: {
    type: String,
    label: "Header Bold",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  heroregular: {
    type: String,
    label: "Header Regular",
    optional: true,
    materialForm: textAreaMaterialForm
  },
  heroimage: {
    type: String,
    label: "Header Photo",
    optional: true,
    materialForm: {
      id: 'heroimage'
    }
  },

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


  faq1head: Object.assign({}, faqHead, {label: "1 Q"}), 
  faq1copy: Object.assign({}, faqCopy, {label: "1 A"}),
  faq2head: Object.assign({}, faqHead, {label: "1 Q"}), 
  faq2copy: Object.assign({}, faqCopy, {label: "1 A"}),
  faq3head: Object.assign({}, faqHead, {label: "1 Q"}), 
  faq3copy: Object.assign({}, faqCopy, {label: "1 A"}),
  faq4head: Object.assign({}, faqHead, {label: "1 Q"}), 
  faq4copy: Object.assign({}, faqCopy, {label: "1 A"}),


  showTeaser: {
    type: Boolean,
    label: "Show Teaser",
    optional: true
  },
  teaserTitle: {
    type: String,
    label: "Teaser Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  teaserCopy: {
    type: String,
    label: "Teaser Copy",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  teaserctalabel: {
    type: String,
    label: "Teaser Call-to-Action Label",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  teaserctaurl: {
    type: String,
    label: "Teaser Call-to-Action URL",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  teaserimage: {
    type: String,
    label: "Teaser Image",
    optional: true,
    materialForm: textFieldMaterialForm
  },


  seotitle: {
    type: String,
    label: "Page-Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  seodescription: {
    type: String,
    label: "Page-Description",
    optional: true,
    materialForm: textFieldMaterialForm
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

Sogehts.attachSchema( SogehtsSchema );
export { Sogehts, SogehtsSchema }

