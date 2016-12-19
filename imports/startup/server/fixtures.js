import { Home } from './../../api/home/home.js';
import './../../api/home/methods.js';

import { Funktionen } from './../../api/funktionen/funktionen.js';
import './../../api/funktionen/methods.js';

import { Sogehts } from './../../api/sogehts/sogehts.js';
import './../../api/sogehts/methods.js';

import { Settings } from './../../api/settings/settings.js';
import './../../api/settings/methods.js';

import Data from './../../api/data.json';

Meteor.startup( () => {

  const homeExists = Home.find().count() !== 0;
  if (!homeExists) {
    Home.insert(Data.home);
  }

  const FunktionenExists = Funktionen.find().count() !== 0;
  if (!FunktionenExists) {
    Funktionen.insert(Data.funktionen);
  }

  const SogehtsExists = Sogehts.find().count() !== 0;
  if (!SogehtsExists) {
    Sogehts.insert(Data.sogehts);
  }


  const SettingsExists = Settings.find().count() !== 0;
  if (!SettingsExists) {
    Settings.insert(Data.settings);
  }
});
