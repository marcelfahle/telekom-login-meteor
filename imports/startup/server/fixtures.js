import { Home } from './../../api/home/home.js';
import './../../api/home/methods.js';

import Data from './../../api/data.json';

Meteor.startup( () => {

  const homeExists = Home.find().count() !== 0;
  if (!homeExists) {
    Home.insert(Data.home);
  }
});
