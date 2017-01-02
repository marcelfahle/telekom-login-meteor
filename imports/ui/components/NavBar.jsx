import React from 'react';
import { Link } from 'react-router';

import ContentWrapper from './ContentWrapper.jsx';

import './NavBar.scss';

const NavBar = ({settings, toggleMenu, toggleAppMenu, pageName}) => {
  

  return (
    <div className="header__nav">
      <ContentWrapper>
        <button 
          className="header__nav--menu-toggle"
          onClick={toggleMenu}
          >&nbsp;</button>
        <p className="header__nav--breadcrumbs">{pageName}</p>


        <div className="header__nav--icon-menu">
          <a href={settings.linklogin || '#'} className="button button-small button-magenta button-login">
            <img src="/images/icon-login.svg" alt="Login"/>
            <span>
              Login
            </span>
          </a>
          <a href="#" onClick={toggleAppMenu} className="app-link">
            <img src="/images/icon-apps.svg" alt="Dienste" />
          </a>
          <a href={settings.linkhelp || '#'} className="help-link">
            <img src="/images/icon-help.svg" alt="Hilfe" />
          </a>
          {/*
          <a href="#" className="lang-link">
            DE
          </a>
          */}
        </div>
      </ContentWrapper>
      <div className="header__main-menu">
        <ContentWrapper>
          <nav>
            <ul>
              <li><Link onClick={toggleMenu} to="/">Start</Link></li>
              <li><Link onClick={toggleMenu} to="/funktionen">Funktionen</Link></li>
              <li><Link onClick={toggleMenu} to="/so-gehts">So geht's</Link></li>
              {
                settings.loginwithtelekom ? 
                  <li><Link onClick={toggleMenu} to="/login-mit-telekom">Login mit Telekom</Link></li> :
                  ''
              }
            </ul>
          </nav>
        </ContentWrapper>
      </div>
    </div>
  )
}

export default NavBar;
