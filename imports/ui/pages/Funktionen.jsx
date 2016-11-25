import React from 'react';
import { Link } from 'react-router';

import Hero from './../components/Hero.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';

import './Funktionen.scss';

const Funktionen = ({data}) => (
  <div className="funktionen">
    <Hero img="header-funktionen.jpg">
      <span>EIN LOGIN.<br/>VIELE MÖGLICHKEITEN.</span>
    </Hero>

    <ContentWrapper className="funktionen__intro">

      <h1 className="title--center">{data.funktionen.title}</h1>
      <p className="title__copy">{data.funktionen.titlecopy}</p>

    </ContentWrapper>


    <ContentWrapper 
       style={{backgroundColor: data.funktionen.bullet1color}} 
        className="content-wrapper-full funktionen__functions-list">

      <div className="content-wrapper function align-left" >
        <div className="function__img">
          <img src="/images/functions1-everywhere.jpg" width="557" alt="Alle Telekom Produkte jederzeit und überall" /> 
        </div>
        <div className="function__copy">
          <h2>{data.funktionen.bullet1head}</h2>
          <p>{data.funktionen.bullet1copy}</p>
        </div>
      </div>
    </ContentWrapper>


    <ContentWrapper 
        style={{backgroundColor: data.funktionen.bullet2color}} 
        className="content-wrapper-full funktionen__functions-list">
      <div className="content-wrapper function align-left">
        <div className="function__img">
          <img src="/images/functions2-pin.png" width="412" alt="Jugendschutz bei Entertain stärken: Mit der Benutzer-Pin" /> 
        </div>
        <div className="function__copy">
          <h2>{data.funktionen.bullet2head}</h2>
          <p>{data.funktionen.bullet2copy}</p>
        </div>
      </div>
    </ContentWrapper>


    <ContentWrapper className="login-settings">
      <div className="login-settings__img">
        <img src="/images/login-settings.jpg" alt="Login Einstellungen: Ihr Telekom Login Kontrollzentrum" />
      </div>
      <div className="login-settings__copy">
        <h2>Login Einstellungen: Ihr Telekom Login Kontrollzentrum</h2>
        <p>
          Verwalten Sie Benutzerdaten, Freigaben und Funktionen zentral in den Einstellungen Ihres Telekom Logins.
        </p>
        <p>
          <a href="https://accounts.login.idm.telekom.com/oauth2/auth?scope=openid&response_type=code&client_id=10LIVESAM30000004901PHOENIX0000000000000&redirect_uri=https%3A%2F%2Fwww.telekom.de%2Fstart&logout_uri=https%3A%2F%2Fwww.telekom.de%2Funterwegs%2Ftbslogoutservlet" className="button button-gray">Login Einstellungen</a>
        </p>
      </div>
    </ContentWrapper>

    
  </div>
);

export default Funktionen;
