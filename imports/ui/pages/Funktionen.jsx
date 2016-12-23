import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import Helmet from 'react-helmet';

import { Funktionen } from './../../api/funktionen/funktionen.js';

import Hero from './../components/Hero.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';
import Funktion from './../components/Funktion';

import './Funktionen.scss';

function createMarkup( content  ) {
  return {__html: content};
}

const FunktionenPage = ({loading, data}) => {
   
  if ( loading ) {
    return <div>Ladevorgang...</div>
  }
  return (
    <div className="funktionen">
      <Helmet
        title={data.seotitle}
        meta={[
          {"name": "description", "content": data.seodescription}
        ]}
      />
      <Hero img={data.heroimage}>
        <p><span dangerouslySetInnerHTML={ createMarkup( data.herobold ) } /></p>
        <p dangerouslySetInnerHTML={ createMarkup( data.heroregular ) } />
      </Hero>

      <ContentWrapper className="funktionen__intro">

        <h1 className="title--center">{data.title}</h1>
        <p className="title__copy">{data.titlecopy}</p>

      </ContentWrapper>


      {
        (data.funktionen && data.funktionen.length > 0) ?
          data.funktionen.map( (funktion, i) => <Funktion data={funktion} key={`f${i}`} /> ) :
          ''
      }

      <ContentWrapper className="login-settings">
        <div className="login-settings__img">
          <img src="/images/login-settings.jpg" alt="Login Einstellungen: Ihr Telekom Login Kontrollzentrum" />
        </div>
        <div className="login-settings__copy">
          <h2>{ data.settingshead }</h2>
          <p>{ data.settingscopy }</p>
          <p>
            <a href={ data.settingsctaurl } className="button button-gray">{ data.settingsctalabel }</a>
          </p>
        </div>
      </ContentWrapper>

      
    </div>
  )
};

const FunktionenContainer = createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe( 'funktionen' );
  const loading = !dataHandle.ready();
  const data = Funktionen.findOne();
  return {
    loading,
    data
  }
}, FunktionenPage );


export default FunktionenContainer;
