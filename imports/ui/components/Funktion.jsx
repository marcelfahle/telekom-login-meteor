import React from 'react';
import ContentWrapper from './ContentWrapper.jsx';

const img = (data) => (
  <div className="function__img">
    <img src={data.image} width="557" alt={data.title} /> 
  </div>
)
const copy = (data) => (
  <div className="function__copy">
    <h2>{data.title}</h2>
    <p>{data.copy}</p>
  </div>
)



const alignLeft = (data) => (
  <div className="content-wrapper function" >
    { img(data) }
    { copy(data) }
  </div>
);
const alignRight = (data) => (
  <div className="content-wrapper function" >
    { copy(data) }
    { img(data) }
  </div>
);



const Funktion = ({ data }) => (
  <ContentWrapper 
     style={{backgroundColor: data.color}} 
      className="content-wrapper-full funktionen__functions-list">
    { data.alignLeft ? alignLeft(data) : alignRight(data) }
  </ContentWrapper>
);
export default Funktion;
