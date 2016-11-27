import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';

import ContentWrapper from './../components/ContentWrapper.jsx';



const errors = [];


export default class HomeForm extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    if (this.props.loading) {
      return <ContentWrapper className="backend"><h1>Ladevorgang</h1></ContentWrapper>
    }
    return(
      
      <ContentWrapper className="backend">
        <h1>Home</h1>
        <div className="backend__form">
          <ReactAutoForm
            onSubmit={this.props.handleUpdate}
            schema={this.props.schema._schema}
            doc={this.props.data}
            type="update"
            buttonLabel="Speichern"
          />
        </div>
      </ContentWrapper>
    )
  }
}
