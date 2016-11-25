import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

import './Faq.scss';

export default class Faq extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      open: false
    }

    this.toggleFaq = this.toggleFaq.bind(this);
  }

  toggleFaq() {
    this.setState({open: !this.state.open});
  } 

  render() {
    const faq = this.props.faq;

    const faqClasses = classNames({
      'open': this.state.open,
      'faq__wrapper': true
    });

    return(
      <li className={faqClasses}>
        <dl className="faq">
          <dt className="faq__title" onClick={this.toggleFaq}>{faq.title}</dt>
          <dd className="faq__body">
            <ReactMarkdown 
              source={faq.content} 
             />
            {
              (faq.showlink === true) ?
                <a href={faq.linkurl} className="button button-gray button-small">{faq.linktitle}</a> :
                null
            }
          </dd>
        </dl>
      </li>
    );
  }
}
