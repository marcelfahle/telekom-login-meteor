import React from 'react';

import ReactAutoForm from 'meteor-react-autoform';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import ImageSelector from './uploads/ImageSelector.jsx';

import { ServicesSchema } from '../../api/services/services.js';


class DiensteAdminForm extends React.Component {
  constructor( props ) {
    super ( props );

    this.state = {
      icon: this.props.doc.icon || ""
    }


  }


  render() {
    const {
      confirmHandler,
      cancelHandler,
        doc
    } = this.props;

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={cancelHandler}
      />
    ];

    return (
      <Dialog
        title={`Edit`}
        actions={actions}
        modal={false}
        open={true}
        onRequestClose={cancelHandler}
      >

    
        <ReactAutoForm
          formClass="autoform has-image-selector service-form"
          onSubmit={confirmHandler}
          onSubmitExtra={ {icon: this.state.icon}  }
          schema={ServicesSchema._schema}
          buttonProps={ {disabled: false} }
          type="update"
          doc={doc}
          buttonLabel="Speichern"
          useFields={['title', 'description', 'featured', 'category']}
        />
        <ImageSelector 
          files={ this.props.files } 
          current={ this.state.icon }
          setField={ link => this.setState({ icon: link} ) } 
        />



      </Dialog>
      
    )
  }
};

export default DiensteAdminForm;
