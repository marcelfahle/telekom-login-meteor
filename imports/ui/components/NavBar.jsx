import React from 'react';
import { Link } from 'react-router';

import ContentWrapper from './ContentWrapper.jsx';

import './NavBar.scss';

const NavBar = ({toggleMenu, toggleAppMenu}) => {
  

  return (
    <div className="header__nav">
      <ContentWrapper>
        <button 
          className="header__nav--menu-toggle"
          onClick={toggleMenu}
          >&nbsp;</button>
        <p className="header__nav--breadcrumbs">Start</p>


        <div className="header__nav--icon-menu">
          <a href="https://accounts.login.idm.telekom.com/idmip?openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.return_to=https%3A%2F%2Faccount.idm.telekom.com%2Faccount-manager%2Fj_spring_openid_security_check&openid.realm=https%3A%2F%2Faccount.idm.telekom.com%2Faccount-manager%2F&openid.assoc_handle=Sa8bcca47-7d84-4dde-bc76-abec298b5b16&openid.mode=checkid_setup&openid.ns.ext1=http%3A%2F%2Fopenid.net%2Fsrv%2Fax%2F1.0&openid.ext1.mode=fetch_request&openid.ext1.type.all=urn%3Atelekom.com%3Aall&openid.ext1.required=all&openid.ns.ext2=http%3A%2F%2Fidm.telekom.com%2Fopenid%2Fext%2F2.0&openid.ext2.logout_endpoint=https%3A%2F%2Faccount.idm.telekom.com%2Faccount-manager%2Flogout" className="button button-small button-magenta button-login">
            <img src="/images/icon-login.svg" alt="Login"/>
            <span>
              Login
            </span>
          </a>
          <a href="#" onClick={toggleAppMenu} className="app-link">
            <img src="/images/icon-apps.svg" alt="Dienste" />
          </a>
          <a href="#" className="help-link">
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
            </ul>
          </nav>
        </ContentWrapper>
      </div>
    </div>
  )
}

export default NavBar;
