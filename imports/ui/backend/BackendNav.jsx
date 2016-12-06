import React from 'react';
import { Link, browserHistory } from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';


const BackendNav = () => (
  <Menu>
    <MenuItem primaryText="Dashboard" onTouchTap={(e) => browserHistory.push('/admin')} />
    <MenuItem primaryText="Home" onTouchTap={(e) => browserHistory.push('/admin/home')} />
    <MenuItem primaryText="So geht's" onTouchTap={(e) => browserHistory.push('/admin/so-gehts')} />
    <MenuItem primaryText="Funktionen" onTouchTap={(e) => browserHistory.push('/admin/funktionen')} />
    <MenuItem primaryText="Dienste" onTouchTap={(e) => browserHistory.push('/admin/dienste')} />
    <MenuItem primaryText="Uploads" onTouchTap={(e) => browserHistory.push('/admin/uploads')} />
  </Menu>
);
export default BackendNav;
