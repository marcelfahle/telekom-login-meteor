import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
//import rootRoute from 'pages/routes';

import App from './../imports/ui/App.jsx';
import Test  from './../imports/ui/Test';
import Home from './../imports/ui/pages/Home.jsx';
import Funktionen from './../imports/ui/pages/Funktionen.jsx';
import SoGehts from './../imports/ui/pages/SoGehts.jsx';
import Dienste from './../imports/ui/pages/Dienste.jsx';

//import './index.html';

const onUpdate = () => {
  window.scrollTo( 0, 0 );
}


Meteor.startup( () => {
  render(
    <Router onUpdate={ () => onUpdate() } history={ browserHistory }>
      <Route path="/"  component={ App }>
        <IndexRoute component={ Home } />
        <Route path="/funktionen" component={ Funktionen } />
        <Route path="/so-gehts" component={ SoGehts } />
        <Route path="/dienste-uebersicht" component={ Dienste } />
      </Route>
    </Router>
    , document.getElementById('root') 
  );
});
