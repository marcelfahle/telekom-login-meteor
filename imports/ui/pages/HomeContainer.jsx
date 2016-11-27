import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import HomePage from './HomePage.jsx';
import { Home } from '../../api/home/home.js';

export default HomeContainer = createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe('home');
  const loading = !dataHandle.ready();
  const data  = Home.findOne();
  return {
    loading, 
    data
  }
}, HomePage);


