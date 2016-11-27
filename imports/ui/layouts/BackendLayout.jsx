import React from 'react';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import BackendNav from './../backend/BackendNav.jsx';
import BrandBar from './../components/BrandBar.jsx';


import './../backend/backend.scss';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'TeleGroteskScreen',
  palette: {
    primary1Color: '#e20074',
  }
});


export const BackendLayout = ({ children }) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="viewport backend-wrapper">
        <header>
          <BrandBar />
          <AppBar
            title="Administration"
            showMenuIconButton={false}
            style={{backgroundColor: '#ededed'}}
            titleStyle={{color: '#383838'}}
            
          />
        </header>
          <main className="backend__content">
            <h1>Administration</h1>
            <div className="backend__sidebar">
              <BackendNav />
            </div>
            <div className="backend__main">
              { children } 
            </div>
          </main>
      </div>
    </MuiThemeProvider>
  )
}
