import React from 'react';

import ContentWrapper from './ContentWrapper.jsx';



//const cta = (


const News = ( { title, copy, cta, ctalabel, ctaurl } ) => (
  <ContentWrapper className="content-wrapper-full news">
    <h2>{title}</h2>
    <p>{copy}</p>
    { 
      cta
        ? <p><a className="button button-gray" href={ ctaurl }>{ ctalabel }</a></p>
        : null
    }
  </ContentWrapper>
);
export default News;
