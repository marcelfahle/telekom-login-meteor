import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import Helmet from 'react-helmet';

import { Funktionen } from './../../api/funktionen/funktionen.js';

import Hero from './../components/Hero.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';

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


      <ContentWrapper 
         style={{backgroundColor: data.bullet1color}} 
          className="content-wrapper-full funktionen__functions-list">

        <div className="content-wrapper function align-left" >
          <div className="function__img">
            <img src="/images/functions1-everywhere.jpg" width="557" alt={data.bullet1head} /> 
          </div>
          <div className="function__copy">
            <h2>{data.bullet1head}</h2>
            <p>{data.bullet1copy}</p>
          </div>
        </div>
      </ContentWrapper>


      <ContentWrapper 
          style={{backgroundColor: data.bullet2color}} 
          className="content-wrapper-full funktionen__functions-list">
        <div className="content-wrapper function align-left">
          <div className="function__img">
            <img src="/images/functions2-pin.png" width="412" alt={data.bullet2head} /> 
          </div>
          <div className="function__copy">
            <h2>{data.bullet2head}</h2>
            <p>{data.bullet2copy}</p>
          </div>
        </div>
      </ContentWrapper>


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
