import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import rootRoute from 'pages/routes';

import App from './../imports/ui/App.jsx';
import Test  from './../imports/ui/Test';
import HomeContainer from './../imports/ui/pages/HomeContainer.jsx';
import Funktionen from './../imports/ui/pages/Funktionen.jsx';
import SoGehts from './../imports/ui/pages/SoGehts.jsx';
import Dienste from './../imports/ui/pages/Dienste.jsx';

import { BackendLayout } from './../imports/ui/layouts/BackendLayout.jsx';
import Dashboard from './../imports/ui/backend/Dashboard.jsx';
import HomeFormContainer from './../imports/ui/backend/HomeFormContainer.jsx';
import FileUploadsContainer from './../imports/ui/backend/uploads/FileUploadContainer.jsx';

//import './index.html';

const onUpdate = () => {
  window.scrollTo( 0, 0 );
}


Meteor.startup( () => {
  render(
    <Router onUpdate={ () => onUpdate() } history={ browserHistory }>
      <Route path="/"  component={ App }>
        <IndexRoute component={ HomeContainer } />
        <Route path="/funktionen" component={ Funktionen } />
        <Route path="/so-gehts" component={ SoGehts } />
        <Route path="/dienste-uebersicht" component={ Dienste } />


      </Route>
      <Route path="/admin" component={ BackendLayout }>
        <IndexRoute component={ Dashboard } />
        <Route path="home" component={ HomeFormContainer } />

        <Route path="uploads" component={ FileUploadsContainer } />
        
      </Route>
    </Router>
    , document.getElementById('root') 
  );
});
