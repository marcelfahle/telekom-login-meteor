import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'


const LoginMitTelekom = new Mongo.Collection('loginmittelekom');



LoginMitTelekom.deny({
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


const LoginMitTelekomSchema = new SimpleSchema({
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
      disabled: true,
      id: 'heroimage',
    }
  },


  partnerstitle: {
    type: String,
    label: "Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  partnerscopy: {
    type: String,
    label: "Copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },
  partnerslogos: {
    type: String,
    label: "Logos",
    optional: true,
    materialForm: {
      disabled: true,
      id: 'heroimage',
    }
  },
  partnerscta: {
    type: String,
    label: "Call-to-Action (Markdown)",
    optional: true,
    materialForm: textAreaMaterialForm
  },

  
  
  


  footerheroactive: {
    type: Boolean,
    label: "Footer Hero Aktiv?",
    optional: true,
    materialForm: {
      switcher: 'Checkbox'
    }
  },
  footerherobold: {
    type: String,
    label: "Footer Image Text Bold (Zeilenumbruch erlaubt)",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  footerheroregular: {
    type: String,
    label: "Footer Image Text Regular (Zeilenumbruch erlaubt)",
    optional: true,
    materialForm: textAreaMaterialForm
  },
  footerheroimage: {
    type: String,
    label: "Header Photo",
    optional: true,
    materialForm: {
      id: 'footerheroimage'
    }
  },
  footerherohascta: {
    type: Boolean,
    label: "Footer Hero Call-To-Action",
    optional: true,
    materialForm: {
      switcher: 'Checkbox'
    }
  },
  footerheroctalabel: {
    type: String,
    label: "Call-To-Action Label",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  footerheroctaurl: {
    type: String,
    label: "Call-To-Action URL",
    optional: true,
    materialForm: textFieldMaterialForm
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
  bullet1image: {
    type: String,
    label: "Key-Feature 1 Bild",
    optional: true,
    materialForm: textFieldMaterialForm
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
  bullet2image: {
    type: String,
    label: "Key-Feature 2 Bild",
    optional: true,
    materialForm: textFieldMaterialForm
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
  bullet3image: {
    type: String,
    label: "Key-Feature 3 Bild",
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

  pagename: {
    type: String,
    label: "Page-Name (fuer Navigation)",
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
LoginMitTelekom.attachSchema( LoginMitTelekomSchema );


export { LoginMitTelekom, LoginMitTelekomSchema } ;
