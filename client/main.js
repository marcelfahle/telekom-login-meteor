import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import rootRoute from 'pages/routes';

import App from './../imports/ui/App.jsx';
import Test  from './../imports/ui/Test';
import HomeContainer from './../imports/ui/pages/HomeContainer.jsx';
import FunktionenContainer from './../imports/ui/pages/Funktionen.jsx';
import SoGehtsContainer from './../imports/ui/pages/SoGehts.jsx';
import Dienste from './../imports/ui/pages/Dienste.jsx';

import { BackendLayout } from './../imports/ui/layouts/BackendLayout.jsx';
import Dashboard from './../imports/ui/backend/Dashboard.jsx';
import HomeFormContainer from './../imports/ui/backend/HomeFormContainer.jsx';
import FunktionenFormContainer from './../imports/ui/backend/FunktionenFormContainer.jsx';
import SogehtsFormContainer from './../imports/ui/backend/SogehtsFormContainer.jsx';
import FileUploadsContainer from './../imports/ui/backend/uploads/FileUploadContainer.jsx';
import DiensteContainer from './../imports/ui/backend/DiensteContainer.jsx';

//import './index.html';



const onUpdate = () => {
  window.scrollTo( 0, 0 );
}


Meteor.startup( () => {
  render(
    <Router onUpdate={ () => onUpdate() } history={ browserHistory }>
      <Route path="/"  component={ App }>
        <IndexRoute component={ HomeContainer } />
        <Route path="/funktionen" component={ FunktionenContainer } />
        <Route path="/so-gehts" component={ SoGehtsContainer } />
        <Route path="/dienste-uebersicht" component={ Dienste } />
      </Route>
      <Route path="/admin" component={ BackendLayout }>
        <IndexRoute component={ Dashboard } />
        <Route path="home" component={ HomeFormContainer } />
        <Route path="funktionen" component={ FunktionenFormContainer } />
        <Route path="so-gehts" component={ SogehtsFormContainer } />
        <Route path="dienste" component={ DiensteContainer } />

        <Route path="uploads" component={ FileUploadsContainer } />

      </Route>
    </Router>
    , document.getElementById('root')
  );
});
