import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'


const Settings = new Mongo.Collection('settings');



Settings.deny({
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
const tf = {
  fullWidth: true,
}
const textAreaMaterialForm = {
  fullWidth: true,
  multiLine: true,
  rows: 2
}


const SettingsSchema = new SimpleSchema({
 
  loginwithtelekom: {
    type: Boolean,
    label: 'Seite "Login mit Telekom" aktiv?',
    optional: true,
    materialForm: {
      switcher: "Checkbox"
    }
  },



  link1active:  { type: Boolean , label: 'Link 1 Aktiv', optional: true, materialForm: tf },
  link1target:  { type: Boolean, label: 'Link 1 Neues Fenster', optional: true },
  link1:        { type: String, label: 'Link 1 Label', optional: true, materialForm: tf },
  link1url:     { type: String, label: 'Link 1 URL', optional: true, materialForm: tf },

  link2active:  { type: Boolean, label: 'Link 2 Aktiv', optional: true, materialForm: tf },
  link2target:  { type: Boolean, label: 'Link 2 Neues Fenster', optional: true },
  link2:        { type: String, label: 'Link 2 Label', optional: true, materialForm: tf },
  link2url:     { type: String, label: 'Link 2 URL', optional: true, materialForm: tf },

  link3active:  { type: Boolean, label: 'Link 3 Aktiv', optional: true, materialForm: tf },
  link3target:  { type: Boolean, label: 'Link 3 Neues Fenster', optional: true },
  link3:        { type: String, label: 'Link 3 Label', optional: true, materialForm: tf },
  link3url:     { type: String, label: 'Link 3 URL', optional: true, materialForm: tf },

  link4active:  { type: Boolean, label: 'Link 4 Aktiv', optional: true, materialForm: tf },
  link4target:  { type: Boolean, label: 'Link 4 Neues Fenster', optional: true },
  link4:        { type: String, label: 'Link 4 Label', optional: true, materialForm: tf },
  link4url:     { type: String, label: 'Link 4 URL', optional: true, materialForm: tf },

  link5active:  { type: Boolean, label: 'Link 5 Aktiv', optional: true, materialForm: tf },
  link5target:  { type: Boolean, label: 'Link 5 Neues Fenster', optional: true },
  link5:        { type: String, label: 'Link 5 Label', optional: true, materialForm: tf },
  link5url:     { type: String, label: 'Link 5 URL', optional: true, materialForm: tf },

  link6active:  { type: Boolean, label: 'Link 6 Aktiv', optional: true, materialForm: tf },
  link6target:  { type: Boolean, label: 'Link 6 Neues Fenster', optional: true },
  link6:        { type: String, label: 'Link 6 Label', optional: true, materialForm: tf },
  link6url:     { type: String, label: 'Link 6 URL', optional: true, materialForm: tf },


  sociallink1active:  { type: Boolean , label: 'Social Link 1 Aktiv', optional: true, materialForm: tf },
  sociallink1target:  { type: Boolean, label: 'Social Link 1 Neues Fenster', optional: true },
  sociallink1:        { type: String, label: 'Social Link 1 Label', optional: true, materialForm: tf },
  sociallink1url:     { type: String, label: 'Social Link 1 URL', optional: true, materialForm: tf },
  sociallink1img:     { type: String, label: 'Social Link 1 Image', optional: true, materialForm: tf },

  sociallink2active:  { type: Boolean, label: 'Social Link 2 Aktiv', optional: true, materialForm: tf },
  sociallink2target:  { type: Boolean, label: 'Social Link 2 Neues Fenster', optional: true },
  sociallink2:        { type: String, label: 'Social Link 2 Label', optional: true, materialForm: tf },
  sociallink2url:     { type: String, label: 'Social Link 2 URL', optional: true, materialForm: tf },
  sociallink2img:     { type: String, label: 'Social Link 2 Image', optional: true, materialForm: tf },

  sociallink3active:  { type: Boolean, label: 'Social Link 3 Aktiv', optional: true, materialForm: tf },
  sociallink3target:  { type: Boolean, label: 'Social Link 3 Neues Fenster', optional: true },
  sociallink3:        { type: String, label: 'Social Link 3 Label', optional: true, materialForm: tf },
  sociallink3url:     { type: String, label: 'Social Link 3 URL', optional: true, materialForm: tf },
  sociallink3img:     { type: String, label: 'Social Link 3 Image', optional: true, materialForm: tf },

  sociallink4active:  { type: Boolean, label: 'Social Link 4 Aktiv', optional: true, materialForm: tf },
  sociallink4target:  { type: Boolean, label: 'Social Link 4 Neues Fenster', optional: true },
  sociallink4:        { type: String, label: 'Social Link 4 Label', optional: true, materialForm: tf },
  sociallink4url:     { type: String, label: 'Social Link 4 URL', optional: true, materialForm: tf },
  sociallink4img:     { type: String, label: 'Social Link 4 Image', optional: true, materialForm: tf },

  sociallink5active:  { type: Boolean, label: 'Social Link 5 Aktiv', optional: true, materialForm: tf },
  sociallink5target:  { type: Boolean, label: 'Social Link 5 Neues Fenster', optional: true },
  sociallink5:        { type: String, label: 'Social Link 5 Label', optional: true, materialForm: tf },
  sociallink5url:     { type: String, label: 'Social Link 5 URL', optional: true, materialForm: tf },
  sociallink5img:     { type: String, label: 'Social Link 5 Image', optional: true, materialForm: tf },

  sociallink6active:  { type: Boolean, label: 'Social Link 6 Aktiv', optional: true, materialForm: tf },
  sociallink6target:  { type: Boolean, label: 'Social Link 6 Neues Fenster', optional: true },
  sociallink6:        { type: String, label: 'Social Link 6 Label', optional: true, materialForm: tf },
  sociallink6url:     { type: String, label: 'Social Link 6 URL', optional: true, materialForm: tf },
  sociallink6img:     { type: String, label: 'Social Link 6 Image', optional: true, materialForm: tf },


  linklogin: {
    type: String,
    label: 'Link "Login"',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  linkhelp: {
    type: String,
    label: 'Link "?"',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  linkimpressum: {
    type: String,
    label: 'Link "Impressum"',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  linkdatenschutz: {
    type: String,
    label: 'Link "Datenschutz"',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  linktelekomhilft: {
    type: String,
    label: 'Link "Telekom Hilft"',
    optional: true,
    materialForm: textFieldMaterialForm
  },


  copyright: {
    type: String,
    label: 'Copyright',
    optional: true,
    materialForm: textFieldMaterialForm
  },

  
  linkfb: {
    type: String,
    label: 'Link "Facebook"',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  showlinkfb: {
    type: Boolean,
    label: 'Link "Facebook" anzeigen?',
    optional: true,
    materialForm: {
      switcher: "Checkbox"
    }
  },

  linktw: {
    type: String,
    label: 'Link "Twitter"',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  showlinktw: {
    type: Boolean,
    label: 'Link "Twitter" anzeigen?',
    optional: true,
    materialForm: {
      switcher: "Checkbox"
    }
  },

  linkgoogle: {
    type: String,
    label: 'Link "Google Plus"',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  showlinkgoogle: {
    type: Boolean,
    label: 'Link "Google Plus" anzeigen?',
    optional: true,
    materialForm: {
      switcher: "Checkbox"
    }
  },

  linkshare: {
    type: String,
    label: 'Link "Share"',
    optional: true,
    materialForm: textFieldMaterialForm
  },
  showlinkshare: {
    type: Boolean,
    label: 'Link "Share" anzeigen?',
    optional: true,
    materialForm: {
      switcher: "Checkbox"
    }
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

});


Settings.attachSchema( SettingsSchema );

export { Settings, SettingsSchema };
