import React from 'react';

import ContentWrapper from './ContentWrapper.jsx';
import './Hero.scss';


const Hero = ({ children, img, className = "", aspectClass = "aspect16-5" }) => {
  
  const styles = {
    backgroundImage: "url('/images/" + img + "')"
  }

  return(
    <div className={`hero ${className}`}>

      <div style={styles} className={`hero__image--wrapper ${aspectClass}`}>
      </div>

      <ContentWrapper className="hero__display--wrapper">
        <div className="hero__display">
          {children}
        </div>
      </ContentWrapper>








    </div>
  )

};

export default Hero;
