import React from 'react';

import ReactAutoForm from 'meteor-react-autoform';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ContentWrapper from './../components/ContentWrapper.jsx';
import ImageSelector from './uploads/ImageSelector.jsx';
import Service from './../components/Service.jsx';
import ConfirmationDialog from './components/ConfirmationDialog.jsx';
import DiensteAdminForm from './DiensteAdminForm';

import './DiensteAdmin.scss';


class DiensteAdmin extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {
      icon: "",
      showConfirmDelete: false,
      editMode: false,
      toDelete: {},
      toEdit: {}
    }

    this.showEditForm= this.showEditForm.bind( this );
    this.confirmEdit = this.confirmEdit.bind( this );
    this.cancelConfirmDelete = this.cancelConfirmDelete.bind( this );
    this.showConfirmDelete = this.showConfirmDelete.bind( this );
    this.confirmDelete = this.confirmDelete.bind ( this );
  }


  // CONFIRM MODAL
  cancelConfirmDelete() {
    this.setState( { showConfirmDelete: false, toDelete: {} } );
  }
  showConfirmDelete( file ) {
    this.setState( { toDelete: file, showConfirmDelete: true } );
  }
  confirmDelete() {
    this.props.handleRemoveService( this.state.toDelete._id );
    this.setState( { showConfirmDelete: false, toDelete: {} } );
  }


  // EDIT MODAL
  showEditForm( file ) {
    this.setState({ editMode: true, toEdit: file });
  }
  cancelEditForm() {
    this.setState({editMode: false, toEdit: {}  });
  }
  confirmEdit( originalService, updatedFields, extraFields) {
    // that's a bit weird, but essentially we create a new object sans ID
    // which represents our modifier of the original data. We then tack that
    // onto a brand new object which just consists of an ID property and the
    // modifier. That way it's easier to validate.
    const allUpdatedFields = Object.assign({}, updatedFields, extraFields);
    this.props.handleUpdateService( {id: originalService._id, modifier: allUpdatedFields }, originalService  );
    this.setState({editMode: false, toEdit: {}  });
  }

  render() {
    const { 
      loading, 
      ServicesSchema, 
      servicesTelekom, 
      servicesOthers
    } = this.props;

    if (loading) {
      return <div>Ladevorgang...</div>
    }

    return (
      <ContentWrapper className="backend">
        <h1>Dienste</h1>
        <div className="backend__form">

          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Neuen Dienst anlegen" />
            </Toolbar>

            <ReactAutoForm
              formClass="autoform has-image-selector service-form"
              onSubmit={this.props.handleAddService}
              onSubmitExtra={ {icon: this.state.icon}  }
              schema={ServicesSchema._schema}
              buttonProps={ {disabled: false} }
              type="insert"
              buttonLabel="Speichern"
              useFields={['title', 'description', 'featured', 'category']}
            />
            <ImageSelector 
              files={ this.props.files } 
              current={ this.state.icon }
              setField={ link => this.setState({ icon: link} ) } 
            />


          </Paper>



          <Paper className="form-section services-wrapper">
            <Toolbar>
              <ToolbarTitle text="Telekom Dienste" />
            </Toolbar>
            <ul className="services-list">
              {
                (servicesTelekom.length > 0)?
                  servicesTelekom.map( (service) => {
                    return <Service 
                            key={service._id} 
                            data={ service } 
                            hasActions={true} 
                            removeService={this.showConfirmDelete}
                            editService={ this.showEditForm }
                            />
                  }) :
                  <p>Es wurden bislang keine Dienste eingetragen.</p>
              }
            </ul>
          </Paper>  
          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Partner Dienste" />
            </Toolbar>
            <ul className="services-list">
              {
                (servicesOthers.length > 0)?
                  servicesOthers.map( (service) => {
                    return <Service 
                            key={service._id} 
                            data={ service } 
                            hasActions={true} 
                            removeService={this.showConfirmDelete}
                            editService={ this.showEditForm }
                          /> 
                  }) :
                  <p>Es wurden bislang keine Dienste eingetragen.</p>
              }
            </ul>
          </Paper>  
          { 
            this.state.showConfirmDelete ? 
              <ConfirmationDialog
                cancel={ this.cancelConfirmDelete }
                onConfirm={ this.confirmDelete }
                info={ this.state.toDelete }
              /> :
              ''
          }
          {
            this.state.editMode ?
              <DiensteAdminForm
                confirmHandler={ this.confirmEdit }
                cancelHandler={ () => this.cancelEditForm() }
                doc={ this.state.toEdit }
                files={ this.props.files }
              /> :
              ''
          }
        </div>
      </ContentWrapper>
    )
  }

}

export default DiensteAdmin;
