import React from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import Hero from './../components/Hero.jsx';
import News from './../components/News.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';

//import { Home } from '../../api/home/home.js';

import './Home.scss';


function createMarkup( content  ) {
  return {__html: content};
}

const HomePage = ({ loading, data } ) => {
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



      { 
        data.newsactive 
          ? <News 
            title={data.newstitle}
            copy={data.newscopy}
            cta={ data.newscta }
            ctalabel={ data.newsctalabel }
            ctaurl={ data.newsctaurl }
          />
          : null
      }

      <ContentWrapper className="home__intro">
        <p className="home__intro--login-button">
          <img src="/images/login-button-big.png" 
            alt="Ein Login für Ihre Telekom Dienste"
            width="216"
          />
        </p>

        <h1 className="title--center" dangerouslySetInnerHTML={ createMarkup(data.title)} />
        <p className="title__copy" dangerouslySetInnerHTML={ createMarkup(data.titlecopy)} />


        <div className="home__intro--keyfeatures">
          <div className="home__intro--keyfeature">
            <div className="keyfeature-imgwrapper">
              <img src="/images/home-feature1-bequem.svg" 
                alt={data.bullet1head} />
            </div>
            <h2>{data.bullet1head}</h2>
            <p>{data.bullet1copy}</p>
          </div>
          <div className="home__intro--keyfeature">
            <div className="keyfeature-imgwrapper">
              <img src="/images/home-feature2-flexibel.svg" 
                alt={data.bullet2head} />
            </div>
            <h2>{data.bullet2head}</h2>
            <p>{data.bullet2copy}</p>
          </div>
          <div className="home__intro--keyfeature">
            <div className="keyfeature-imgwrapper">
              <img src="/images/home-feature3-sicher.svg" 
                alt={data.bullet3head} />
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
        img={ data.footerheroimage }
        className="last-action-hero"
        aspectClass="aspect16-7 last-hero"
        >
        <p><span dangerouslySetInnerHTML={ createMarkup( data.footerherobold ) } /></p>
        <p dangerouslySetInnerHTML={ createMarkup( data.footerheroregular ) } />
        {
          data.footerherohascta
            ? <p className="hero-cta"><Link to="/so-gehts" className="button button-gray">So geht's !</Link></p>
            : ''
        }
      </Hero>

    </div>
  )

};

export default HomePage;
