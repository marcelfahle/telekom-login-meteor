import React from 'react';

import './ContentWrapper.scss';

const ContentWrapper = ({children, className = "", style={}}) => (
  <div style={style} className={`content-wrapper ${className}`}>{children}</div>
);

export default ContentWrapper;
