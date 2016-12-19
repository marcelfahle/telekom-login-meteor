import React from 'react';
import { Link, browserHistory } from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const BackendNav = () => (
  <Menu>
    <MenuItem primaryText="Dashboard" onTouchTap={(e) => browserHistory.push('/admin')} />
    <MenuItem primaryText="Home" onTouchTap={(e) => browserHistory.push('/admin/home')} />
    <MenuItem primaryText="Funktionen" onTouchTap={(e) => browserHistory.push('/admin/funktionen')} />
    <MenuItem primaryText="So geht's" onTouchTap={(e) => browserHistory.push('/admin/so-gehts')} />
    <MenuItem primaryText="Dienste" onTouchTap={(e) => browserHistory.push('/admin/dienste')} />
    <MenuItem primaryText="Login mit Telekom" onTouchTap={(e) => browserHistory.push('/admin/login-mit-telekom')} />
    <MenuItem primaryText="Einstellungen" onTouchTap={(e) => browserHistory.push('/admin/settings')} />
    <MenuItem primaryText="Uploads" onTouchTap={(e) => browserHistory.push('/admin/uploads')} />
  </Menu>
);
export default BackendNav;
