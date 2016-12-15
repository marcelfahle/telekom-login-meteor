import React from 'react';
import IconButton from 'material-ui/IconButton';

import './Service.scss';


const Service = ( {data, hasActions, removeService} ) => {
  const actions = (
    <div className="actions">
      <IconButton onClick={ () => removeService({_id: data._id, name: data.title}) }>
        <i className="material-icons">delete_forever</i>
    </IconButton>
      <a href="#"><i className="material-icons">mode_edit</i></a>
    </div>
  )
  return (
    <li className={(hasActions)? 'service has-actions': 'service'}>
      <img src={data.icon} alt={ data.title } className="service__icon" />
      <div className="service__info">
        <h3>{ data.title }</h3>
        <p>{ data.description }</p>
      </div>
      { (hasActions)? actions : '' }
    </li>
  )
}
export default Service;
