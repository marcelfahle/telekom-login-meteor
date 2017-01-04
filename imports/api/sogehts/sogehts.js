import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

import { FaqsSchema } from './../faqs/faqs';

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
    label: "Header Bold (Zeilenumbruch erlaubt)",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  heroregular: {
    type: String,
    label: "Header Regular (Zeilenumbruch erlaubt)",
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
    label: "Title (Zeilenumbruch erlaubt)",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  titlecopy: {
    type: String,
    label: "Title copy (Zeilenumbruch erlaubt)",
    optional: true,
    materialForm: textAreaMaterialForm
  },


  faqs: {
    type: [FaqsSchema],
    label: "Faqs",
    optional: true
  },

  faq1head: Object.assign({}, faqHead, {label: "Frage"}), 
  faq1copy: Object.assign({}, faqCopy, {label: "Antwort (Markdown erlaubt)"}),
  faq2head: Object.assign({}, faqHead, {label: "Frage"}), 
  faq2copy: Object.assign({}, faqCopy, {label: "Antwort (Markdown erlaubt"}),
  faq3head: Object.assign({}, faqHead, {label: "Frage"}), 
  faq3copy: Object.assign({}, faqCopy, {label: "Antwort (Markdown erlaubt"}),
  faq4head: Object.assign({}, faqHead, {label: "Frage"}), 
  faq4copy: Object.assign({}, faqCopy, {label: "Antwort (Markdown erlaubt"}),


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

