import React from 'react';
import { Link } from 'react-router';

import Hero from './../components/Hero.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';

//import { Home } from '../../api/home/home.js';

import './Home.scss';



const HomePage = ({ loading, home, data } ) => {
  if (loading) {
    return <div>Ladevorgang...</div>;
  }
  return(
    <div className="home">
      <Hero 
        img="header-home.jpg"
        aspectClass="aspect16-5plus"
        >
        <span>TELEKOM LOGIN:</span><br/>
        WEIL EINFACH EINLOGGEN EINFACHER IST
      </Hero>



      <ContentWrapper className="content-wrapper-full news">
        <h2>Nutze die Vorteile von Telekom Login jetzt auch mit Spotify!</h2>
        <p>Spotify ist ein digitaler Musikdienst, der dir Zugriff auf Millionen von Songs ermöglicht.</p>
        <p>
          <a className="button button-gray" href="#">Mehr Infos</a>
        </p>
      </ContentWrapper>

      <ContentWrapper className="home__intro">
        <p className="home__intro--login-button">
          <img src="/images/login-button-big.png" 
            alt="Ein Login für Ihre Telekom Dienste"
            width="216"
          />
        </p>

        <h1 className="title--center">{data.title}</h1>
        <p className="title__copy">{data.titlecopy}</p>


        <div className="home__intro--keyfeatures">
          <div className="home__intro--keyfeature">
            <div className="keyfeature-imgwrapper">
              <img src="/images/home-feature1-bequem.svg" 
                alt="Einfach bequem" />
            </div>
            <h2>{data.bullet1head}</h2>
            <p>{data.bullet1copy}</p>
          </div>
          <div className="home__intro--keyfeature">
            <div className="keyfeature-imgwrapper">
              <img src="/images/home-feature2-flexibel.svg" 
                alt="Einfach flexibel" />
            </div>
            <h2>{data.bullet2head}</h2>
            <p>{data.bullet2copy}</p>
          </div>
          <div className="home__intro--keyfeature">
            <div className="keyfeature-imgwrapper">
              <img src="/images/home-feature3-sicher.svg" alt="Einfach sicher" />
            </div>
            <h2>{data.bullet3head}</h2>
            <p>{data.bullet3copy}</p>
          </div>
        </div>
        <div className="keyfeatures_cta cta">
          <Link to="/funktionen" className="button button-gray">Alle Funktionen entdecken</Link>
        </div>




        <div className="services__intro">
          <h1 className="title--center">{data.serviceshead}</h1>
          <p className="title__copy">
            {data.servicescopy}
          </p>
          <div className="services__intro-imgwrapper">
            <img src="/images/home-services-intro.png" 
              alt="Alle Telekom Dienste im Überblick" 
            />
          </div>
          <div className="services_cta cta">
            <button className="button button-gray">Zu den Diensten</button>
          </div>
          
        </div>


      </ContentWrapper>


      <Hero 
        img="hero-notyetregistered.jpg"
        className="last-action-hero"
        aspectClass="aspect16-7 last-hero"
        >
        <span>
          NOCH NICHT REGISTRIERT?<br/>
          IHRE ERSTEN SCHRITTE MIT DEM TELEKOM LOGIN
        </span>
        <p className="hero-cta">
          <Link to="/so-gehts" className="button button-gray">So geht's !</Link>
        </p>
      </Hero>

    </div>
  )

};

export default HomePage;
