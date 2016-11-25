import React from 'react';

import './Service.scss';


const Service = ( {data} ) => {
  return (
    <li className="service">
      <img src={data.icon} alt={ data.title } className="service__icon" />
      <div className="service__info">
        <h3>{ data.title }</h3>
        <p>{ data.description }</p>
      </div>

    </li>
  )
}
export default Service;
