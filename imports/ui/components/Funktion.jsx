import React from 'react';
import ContentWrapper from './ContentWrapper.jsx';

const Funktion = ({ data }) => (
  <ContentWrapper 
     style={{backgroundColor: data.color}} 
      className="content-wrapper-full funktionen__functions-list">

    <div className={`content-wrapper function ${(data.alignLeft)? 'align-left': ''}`} >
      <div className="function__img">
        <img src={data.image} width="557" alt={data.title} /> 
      </div>
      <div className="function__copy">
        <h2>{data.title}</h2>
        <p>{data.copy}</p>
      </div>
    </div>
  </ContentWrapper>
);
export default Funktion;
