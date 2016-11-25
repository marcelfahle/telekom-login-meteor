import React from 'react';
import { Link } from 'react-router';

import Hero from './../components/Hero.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';
import Faq from './../components/Faq.jsx';

import './SoGehts.scss';

const SoGehts = ({data}) => {


  const faqs = (!data.sogehts.faqlist)? null : data.sogehts.faqlist.map( (faq, i) => {
    return <Faq faq={faq} key={`faq${i}`} />
  });

  const html = (markup) => {
    return {__html: markup};
  } 


  return (
    <div className="so-gehts">
      <Hero img="header-sogehts.jpg">
        <span>ERSTE SCHRITTE MIT <br/>DEM TELEKOM LOGIN</span>
      </Hero>

      <ContentWrapper className="sogehts__intro">
        <h1 className="title--center" dangerouslySetInnerHTML={html(data.sogehts.title)}></h1>
        <p className="title__copy">{data.sogehts.titlecopy}</p>
      </ContentWrapper>

      <ContentWrapper className="sogehts__faqs">
        <ul className="faqs">
          {faqs}
        </ul>
      </ContentWrapper>

      <ContentWrapper className="content-wrapper-full services__slider">
        <ul>
          <li>
            <h2 className="title--center">Alle Telekom Dienste im Überblick</h2>
            <p className="title__copy">
              Ganz egal welchen unserer Dienste Sie nutzen möchten:<br/>
              Mit der Übersicht sind Sie schneller am Ziel – und eingeloggt.
              <br/><br/>
              <a href="//telekom.com">Zu den Diensten</a>
            </p>
            <img src="/images/services01.png" alt="Alle Telekom Dienste im Überblick" />
          </li>
        </ul>
        <div className="services__slider-controls">
          <a className="slider__controls--prev" href="#">
            <img src="/images/slider-trigger.svg" alt="Previous" />
          </a>
          <a className="slider__controls--next" href="#">
            <img src="/images/slider-trigger.svg" alt="Next" />
          </a>
        </div>
      </ContentWrapper>



      <ContentWrapper className="telekom-hilft">
        <img src="/images/logo-telekom-hilft.png" alt="Telekom Hilft Community" />

        <h2 className="title--center">Telekom Hilft Community</h2>
        <p className="title__copy">Schnelle Antworten auf alle Fragen zum Telekom Login.</p>

        <div className="telekom-hilft__links">
          <a className="telekom-hilft__links--fb"
            href="https://www.facebook.com/telekomhilft/" 
            target="_blank">
              Telekom-hilft auf Facebook
          </a>
          <a className="telekom-hilft__links--tw"
            href="https://www.twitter.com/telekomhilft/" 
            target="_blank">
              Telekom-hilft auf Twitter
          </a>
        </div>
      </ContentWrapper>



    </div>
  )

};

export default SoGehts;
