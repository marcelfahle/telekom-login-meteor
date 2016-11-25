import React from 'react';
import { browserHistory } from 'react-router'

import ContentWrapper from './ContentWrapper.jsx';

//import TelekomLogo from '/images/logo-telekom.svg';
//import TelekomClaim from '/images/brand-claim.png';
import './BrandBar.scss';




const BrandBar = ( props ) => {
  const goHome = (e) => {
    e.preventDefault();
    browserHistory.push('/');
  }

  return (
    <div className="header__brand">
      <ContentWrapper>
        <img 
          onClick={goHome}
          src='/images/logo-telekom.svg' 
          alt="Deutsche Telekom AG" 
          className="header__brand--logo" />
        <div className="header__brand--claim">Erleben, was verbindet.</div>
      </ContentWrapper>
    </div>
  );
};

export default BrandBar;
