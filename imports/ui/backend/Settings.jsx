import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactAutoForm from 'meteor-react-autoform';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ContentWrapper from './../components/ContentWrapper.jsx';
import ImageSelector from './uploads/ImageSelector.jsx';

import { UserFiles } from '../../api/user_files/UserFiles.js';
import { update } from './../../api/settings/methods.js';
import { Settings, SettingsSchema } from './../../api/settings/settings';

class SettingsPage extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      sociallink1img: null,
      sociallink2img: null,
      sociallink3img: null,
      sociallink4img: null,
      sociallink5img: null,
      sociallink6img: null
    }
  }
  
  render() {
    const { loading, settings } = this.props;
    if (loading) { 
      return <div>Wird geladen...</div>;
    }
    return (
      <ContentWrapper className="backend">
        <h1>Einstellungen</h1>
        <div className="backend__form">


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Links" />
            </Toolbar>
            {
              [1,2,3,4,5,6].map( i => {
                return (
                  <Paper key={`l${i}`}>
                    <ReactAutoForm
                      onSubmit={this.props.handleUpdate}
                      buttonProps={ {disabled: false} }
                      schema={this.props.schema._schema}
                      doc={this.props.data}
                      type="update"
                      buttonLabel="Speichern"
                      useFields={[ 
                        `link${i}active`, `link${i}target`, `link${i}`, `link${i}url`
                      ]}
                    />
                  </Paper>
                )
              })  
            }
          </Paper>



          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Social Links" />
            </Toolbar>
            {
              [1,2,3,4,5,6].map( i => {
                const extraObj ={};
                extraObj[`sociallink${i}img`] = this.state[`sociallink${i}img`];
                return (
                  <Paper key={`s${i}`}>
                    <ReactAutoForm
                      formClass="autoform has-image-selector"
                      key={`s${i}`}
                      onSubmit={this.props.handleUpdate}
                      onSubmitExtra={extraObj}
                      buttonProps={ {disabled: false} }
                      schema={this.props.schema._schema}
                      doc={this.props.data}
                      type="update"
                      buttonLabel="Speichern"
                      useFields={[ 
                        `sociallink${i}active`, `sociallink${i}target`, `sociallink${i}`, `sociallink${i}url`
                      ]}
                    />
                    <ImageSelector 
                      files={ this.props.files } 
                      current={ this.state[`sociallink${i}img`] || this.props.data[`sociallink${i}img`] }
                      setField={ link => {
                        const stateObj = {};
                        stateObj[`sociallink${i}img`] = link;
                        console.log(stateObj);
                        this.setState( stateObj ); 
                      }} 
                    />
                  </Paper>
                
                )
              })
            }
          </Paper>








          
          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Header-Links" />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              buttonProps={ {disabled: false} }
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={[ 
                'linklogin',
                'linkhelp'
              ]}
            />
          </Paper>

          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Seite Login mit Telekom" />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              buttonProps={ {disabled: false} }
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={[ 
                'loginwithtelekom'
              ]}
            />
          </Paper>

          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Copyright" />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              buttonProps={ {disabled: false} }
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={[ 
                'copyright'
              ]}
            />
          </Paper>


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Social" />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              buttonProps={ {disabled: false} }
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={[ 
                'linkfb', 'showlinkfb',
                'linktw', 'showlinktw', 
                'linkgoogle', 'showlinkgoogle',
                'linkshare', 'showlinkshare'
              ]}
            />
          </Paper>




        </div>
      </ContentWrapper>
    );
  }
}

const handleUpdate = (doc, updatedFields, extraFields) => {
  const allFields = Object.assign({}, updatedFields, extraFields);
  console.log('update', allFields);
  update.call( {
    docId: doc._id,
    doc: allFields
  }, (err, res) => {
    if (err) {
      Bert.alert( err.reason, 'danger', 'growl-top-right' ); 
    } else {
      Bert.alert( 'Die Seite wurde aktualisiert.', 'success', 'growl-top-right' ); 
    }
  });
};


export default createContainer( ({ params }) => {
  const dataHandle = Meteor.subscribe('settings');
  const filesHandle = Meteor.subscribe('user_files.all');
  const loading = !dataHandle.ready();
  const data = Settings.findOne();
  const schema = SettingsSchema;
  const files = UserFiles.find();
  return {
    loading,
    data,
    schema,
    files,
    handleUpdate
  }
}, SettingsPage);

