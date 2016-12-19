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
