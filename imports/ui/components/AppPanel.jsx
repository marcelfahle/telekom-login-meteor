import React from 'react';
import { Link } from 'react-router';

import './AppPanel.scss';

import PanelApp from './PanelApp.jsx';

const AppPanel = ( { data } ) => {

  
  const apps = data.telekom.slice(0, 6).map( (app, i) => {
    return (
      <PanelApp 
        key={`PanelApp-${i}`} 
        data={app}
      />
    )
  });

  return (
    <div className="app-panel">
      <ul className="app-panel__apps">
        { apps }
      </ul>

      <p className="app-panel__more-link">
        <Link to="/dienste-uebersicht">
          Alle Dienste anzeigen
        </Link>
      </p>
    </div>
  )
}
export default AppPanel;
