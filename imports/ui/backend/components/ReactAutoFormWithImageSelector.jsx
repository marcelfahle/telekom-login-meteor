import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';
import ImageSelector from './../uploads/ImageSelector.jsx';


class ReactAutoFormWithImageSelector extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      currentImage: this.props.data.image
    }
  }

  render() {
    const { data, extras, handleUpdate, schema, files, fields } = this.props;
    return (
      <div>
        <ReactAutoForm
          formClass="autoform"
          onSubmit={ handleUpdate }
          onSubmitExtra={ Object.assign( {}, extras, {image: this.state.currentImage} ) }
          schema={ schema }
          doc={data}
          buttonProps={ {disabled: false} }
          type="update"
          buttonLabel="Speichern"
          buttonType="FlatButton"
          useFields={ fields }
        />
        <ImageSelector 
          files={ files } 
          current={ data.image || this.state.currentImage }
          setField={ link => this.setState({ currentImage: link }) } 
        />
      </div> 
    )
  }
}

export default ReactAutoFormWithImageSelector;
