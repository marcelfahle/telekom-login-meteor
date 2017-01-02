import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import rootRoute from 'pages/routes';

import App from './../imports/ui/App.jsx';
import Test  from './../imports/ui/Test';
import HomeContainer from './../imports/ui/pages/HomeContainer.jsx';
import LoginMitTelekomPage from './../imports/ui/pages/LoginMitTelekomPage.jsx';
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
import LoginMitTelekomContainer from './../imports/ui/backend/LoginMitTelekomContainer.jsx';
import SettingsPage from './../imports/ui/backend/Settings';

import { Settings } from './../imports/api/settings/settings';

//import './index.html';



const onUpdate = () => {
  window.scrollTo( 0, 0 );
}


Meteor.startup( () => {
  render(
    <Router onUpdate={ () => onUpdate() } history={ browserHistory }>
      <Route path="/"  component={ AppContainer }>
        <IndexRoute pagename="Start" component={ HomeContainer } />
        <Route path="/funktionen" component={ FunktionenContainer } />
        <Route path="/so-gehts" component={ SoGehtsContainer } />
        <Route path="/dienste-uebersicht" component={ Dienste } />
        <Route path="/login-mit-telekom" component={ LoginMitTelekomPage } />
      </Route>
      <Route path="/admin" component={ BackendContainer }>
        <IndexRoute component={ Dashboard } />
        <Route path="home" component={ HomeFormContainer } />
        <Route path="funktionen" component={ FunktionenFormContainer } />
        <Route path="so-gehts" component={ SogehtsFormContainer } />
        <Route path="dienste" component={ DiensteContainer } />
        <Route path="login-mit-telekom" component={ LoginMitTelekomFormContainer } />
        <Route path="settings" component={ SettingsPage } />

        <Route path="uploads" component={ FileUploadsContainer } />

      </Route>
    </Router>
    , document.getElementById('root')
  );
});

const AppContainer = createContainer( ({ children }) => {
  const dataHandle = Meteor.subscribe('settings');
  const loading = !dataHandle.ready();
  const settings = Settings.findOne();
  return {
    children,
    loading,
    settings
  }
}, App);
const BackendContainer = createContainer( ({ children }) => {
  const dataHandle = Meteor.subscribe('settings');
  const loading = !dataHandle.ready();
  const settings = Settings.findOne();
  return {
    children,
    loading,
    settings
  }
}, BackendLayout);

