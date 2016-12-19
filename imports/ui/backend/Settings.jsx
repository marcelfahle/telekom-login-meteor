import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ReactAutoForm from 'meteor-react-autoform';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ContentWrapper from './../components/ContentWrapper.jsx';

import { update } from './../../api/settings/methods.js';
import { Settings, SettingsSchema } from './../../api/settings/settings';

class SettingsPage extends React.Component {
  constructor( props ) {
    super( props );
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
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              buttonProps={ {disabled: false} }
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={[ 
                'linklogin', 
                'linkhelp', 
                'linkimpressum', 
                'linkdatenschutz', 
                'linktelekomhilft' 
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


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="SEO (Site)"  />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              buttonProps={ {disabled: false} }
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={[ 
                'seotitle', 'seodescription'
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
  const loading = !dataHandle.ready();
  const data = Settings.findOne();
  const schema = SettingsSchema;
  return {
    loading,
    data,
    schema,
    handleUpdate
  }
}, SettingsPage);

