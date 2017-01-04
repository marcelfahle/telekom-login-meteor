import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const Faqs = new Mongo.Collection('faqs');

Faqs.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

SimpleSchema.extendOptions({
  materialForm: Match.Optional(Object)
});


const FaqsSchema = new SimpleSchema({
  head: {
    type: String,
    optional: true,
    label: "Frage",
    materialForm: {
      fullWidth: true 
    }
  },
  copy: {
    type: String,
    optional: true,
    label: "Antwort",
    materialForm: {
      fullWidth: true,
      multiLine: true,
      rows: 6
    }
  }
});

Faqs.attachSchema( FaqsSchema );
export { Faqs, FaqsSchema };
