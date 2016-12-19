import React from 'react';
import{ createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import Hero from './../components/Hero.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';

import { LoginMitTelekom } from '../../api/loginmittelekom/loginmittelekom.js';

import './Home.scss';


function createMarkup( content  ) {
  return {__html: content};
}

const LoginMitTelekomPage = ({ loading, data } ) => {
  if (loading) {
    return <div>Ladevorgang...</div>;
  }
  return(
    <div className="home">
      <Helmet
        title={data.seotitle}
        meta={[
          {"name": "description", "content": data.seodescription}
        ]}
      />
      <Hero 
        img={ data.heroimage }
        aspectClass="aspect16-5plus"
        >
        <p><span dangerouslySetInnerHTML={ createMarkup( data.herobold ) } /></p>
        <p dangerouslySetInnerHTML={ createMarkup( data.heroregular ) } />
      </Hero>




      <ContentWrapper className="home__intro">

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


      </ContentWrapper>

      <div className="login-partners">
      
      
      </div>



      <Hero 
        img={ data.footerheroimage }
        className="last-action-hero"
        aspectClass="aspect16-7 last-hero"
        >
        <p><span dangerouslySetInnerHTML={ createMarkup( data.footerherobold ) } /></p>
        <p dangerouslySetInnerHTML={ createMarkup( data.footerheroregular ) } />
        {
          data.footerherohascta
            ? <p className="hero-cta"><Link to={data.footerheroctaurl} className="button button-gray">{data.footerheroctalabel}</Link></p>
            : ''
        }
      </Hero>

    </div>
  )

};



export default createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe('loginmittelekom');
  const loading = !dataHandle.ready();
  const data  = LoginMitTelekom.findOne();
  return {
    loading, 
    data
  }
}, LoginMitTelekomPage);



