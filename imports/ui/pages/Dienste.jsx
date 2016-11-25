import React from 'react';
import { Link } from 'react-router';

import Hero from './../components/Hero.jsx';
import ContentWrapper from './../components/ContentWrapper.jsx';
import Service from './../components/Service.jsx';

import './Dienste.scss';

const Dienste = ({data}) => {


  //const faqs = (!data.sogehts.faqlist)? null : data.sogehts.faqlist.map( (faq, i) => {
  //  return <Faq faq={faq} key={`faq${i}`} />
  //});

  const services = what =>  data.dienste[what].map( (service, i) => {
    return (
      <Service 
        key={`s_${what}_${i}`} 
        data={ service }
      />
    );
  });

  const html = (markup) => {
    return {__html: markup};
  } 


  return (
    <div className="dienste">

      <ContentWrapper className="dienste_dienste">
        <h1 className="title--underlined">
          Telekom Dienste
        </h1>
        <ul className="services dienste">
          { services('telekom')  }
        </ul>
      </ContentWrapper>

      <ContentWrapper className="dienste_dienste">
        <h1 className="title--underlined">
          Partner Dienste
        </h1>
        <ul className="services dienste">
          { services('partners')  }
        </ul>
      </ContentWrapper>



    </div>
  )

};

export default Dienste;
