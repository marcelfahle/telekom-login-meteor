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
    const { head, body } = this.props;

    const faqClasses = classNames({
      'open': this.state.open,
      'faq__wrapper': true
    });

    return(
      <li className={faqClasses}>
        <dl className="faq">
          <dt className="faq__title" onClick={this.toggleFaq}>{ head }</dt>
          <dd className="faq__body">
            <ReactMarkdown 
              source={ body } 
             />
          </dd>
        </dl>
      </li>
    );
  }
}
