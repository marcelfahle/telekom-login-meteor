import React from 'react';
import { Link } from 'react-router';


const PanelApp = ( {data} ) => (
  <li className="app-panel__app">
    <Link to="#">
      <img src={ data.icon } alt={ data.title } />
      { data.title }
    </Link>
  </li>
)

export default PanelApp;
