import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import Hero from './../components/Hero.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';
import Faq from './../components/Faq.jsx';

import { Sogehts } from './../../api/sogehts/sogehts.js';

import './SoGehts.scss';

function createMarkup( content  ) {
  return {__html: content};
}

const SogehtsPage = ({loading, data}) => {


    /*
  const faqs = (!data.sogehts.faqlist)? null : data.sogehts.faqlist.map( (faq, i) => {
    return <Faq faq={faq} key={`faq${i}`} />
  });
  */


  if ( loading ) {
    return <div>Ladevorgang...</div>
  }

  return (
    <div className="so-gehts">
      <Hero img={data.heroimage}>
        <p><span dangerouslySetInnerHTML={ createMarkup( data.herobold ) } /></p>
        <p dangerouslySetInnerHTML={ createMarkup( data.heroregular ) } />
      </Hero>

      <ContentWrapper className="sogehts__intro">
        <h1 className="title--center" dangerouslySetInnerHTML={createMarkup(data.title)}></h1>
        <p className="title__copy">{data.titlecopy}</p>
      </ContentWrapper>

      <ContentWrapper className="sogehts__faqs">
        <ul className="faqs">
          <Faq body={data.faq1copy} head={data.faq1head} />
          <Faq body={data.faq2copy} head={data.faq2head} />
          <Faq body={data.faq3copy} head={data.faq3head} />
          <Faq body={data.faq4copy} head={data.faq4head} />

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

const SogehtsContainer = createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe( 'sogehts' );
  const loading = !dataHandle.ready();
  const data = Sogehts.findOne();
  return {
    loading,
    data
  }
}, SogehtsPage );


export default SogehtsContainer;

