import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import './AppPanel.scss';

import PanelApp from './PanelApp.jsx';

import { Services } from './../../api/services/services.js';

const AppPanel = ( { loading, services} ) => {

  if (loading) {
    return <div>Ladevorgang...</div>
  }

  return (
    <div className="app-panel">
      <ul className="app-panel__apps">
        { services.map( (service, i) => <PanelApp key={i} data={service} />) }
      </ul>

      <p className="app-panel__more-link">
        <Link to="/dienste-uebersicht">
          Alle Dienste anzeigen
        </Link>
      </p>
    </div>
  )
}

const AppPanelContainer = createContainer( ({}) => {
  const dataHandle = Meteor.subscribe('services.telekom.top');
  const loading = !dataHandle.ready();
  const services = Services.find({category: 'telekom', featured: true}, {limit: 6, sort: {title: 1}}).fetch();
  
  return {
    loading,
    services
  }
}, AppPanel)



export default AppPanelContainer;
