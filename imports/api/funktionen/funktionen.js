import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Funktionen = new Mongo.Collection('funktionen');

Funktionen.deny({
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



const FunktionSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Titel",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  color: {
    type: String,
    label: "Hintergrund-Farbe",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  copy: {
    type: String,
    label: "Copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },
  alignLeft: {
    type: Boolean,
    label: "Ausrichtung Links?",
    defaultValue: true,
    optional: true,
    materialForm: {
      switcher: 'Toggle',
      fullWidth: false,
      labelPosition: 'right'
    }
  },
  image: {
    type: String,
    optional: true,
    label: "Image",
    materialForm: {
       
    }
  }
});


const FunktionenSchema = new SimpleSchema({
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




  bullet1active: {
    type: Boolean,
    label: "Feature 1 Active",
    optional: true
  },
  bullet1head: {
    type: String,
    label: "Feature 1 Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  bullet1color: {
    type: String,
    label: "Feature 1 Background-Color",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  bullet1copy: {
    type: String,
    label: "Feature 1 Copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },

  bullet2active: {
    type: Boolean,
    label: "Feature 2 Active",
    optional: true
  },
  bullet2head: {
    type: String,
    label: "Feature 2 Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  bullet2copy: {
    type: String,
    label: "Feature 2 Copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },
  bullet2color: {
    type: String,
    label: "Feature 2 Background-Color",
    optional: true,
    materialForm: textFieldMaterialForm
  },

  bullet3head: {
    type: String,
    label: "Feature 3 Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  bullet3copy: {
    type: String,
    label: "Feature 3 Copy",
    optional: true,
    materialForm: textAreaMaterialForm
  },
  bullet3color: {
    type: String,
    label: "Feature 3 Background-Color",
    optional: true,
    materialForm: textFieldMaterialForm
  },


  funktionen: {
    type: [FunktionSchema],
    label: "Funktionen",
    optional: true
  },


  settingshead: {
    type: String,
    label: "Title",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  settingscopy: {
    type: String,
    label: "Copy",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  settingsctalabel: {
    type: String,
    label: "Call-To-Action Label",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  settingsctaurl: {
    type: String,
    label: "Call-To-Action URL",
    optional: true,
    materialForm: textFieldMaterialForm
  },
  settingsimg: {
    type: String,
    label: "Image",
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

Funktionen.attachSchema ( FunktionenSchema );

export { Funktionen, FunktionenSchema, FunktionSchema };

