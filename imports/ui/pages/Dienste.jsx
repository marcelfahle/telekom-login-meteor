import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';

import Hero from './../components/Hero.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';
import Service from './../components/Service.jsx';

import { Services } from './../../api/services/services.js';


import './Dienste.scss';

const DienstePage = ({loading, servicesTelekom, servicesOthers}) => {



  const html = (markup) => {
    return {__html: markup};
  } 

  if (loading) {
    return <div>Ladevorgang...</div>
  }


  return (
    <div className="dienste-page">

      <ContentWrapper className="dienste_dienste">
        <h1 className="title--underlined">
          Telekom Dienste
        </h1>
        <ul className="services dienste">
          { servicesTelekom.map( (service, i) => <Service key={`t${i}`} data={service} />)  }
        </ul>
      </ContentWrapper>

      <ContentWrapper className="dienste_dienste">
        <h1 className="title--underlined">
          Partner Dienste
        </h1>
        <ul className="services dienste">
          { servicesOthers.map( (service, i) => <Service key={`o${i}`} data={service} />)  }
        </ul>
      </ContentWrapper>



    </div>
  )

};

const Dienste = createContainer( ({}) => {
  const dataHandleTelekom = Meteor.subscribe('services.telekom');
  const dataHandleOthers = Meteor.subscribe('services.others');
  const loading = !dataHandleTelekom.ready() || !dataHandleOthers.ready();
  // TODO: sort
  const servicesTelekom = Services.find({category: 'telekom'}, {sort: {title:1}}).fetch();
  const servicesOthers = Services.find({category: 'others'}, {sort: {title:1}}).fetch();
  return {
    loading,
    servicesTelekom,
    servicesOthers
  }
}, DienstePage);

export default Dienste;
