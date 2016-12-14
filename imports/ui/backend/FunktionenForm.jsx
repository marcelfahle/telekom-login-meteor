import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ContentWrapper from './../components/ContentWrapper.jsx';
import ImageSelector from './uploads/ImageSelector.jsx';



export default class FunktionenForm extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      heroimage: {},
    }
  }

  currentImage( field ) {
    if(Object.keys(this.state[field]).length === 0 && this.state[field].constructor === Object) {
      return this.props.data[field];
    } else {
      return this.state[field];
    }
  }

  render() {
    if (this.props.loading) {
      return <ContentWrapper className="backend"><h1>Ladevorgang</h1></ContentWrapper>
    }

    return(
      <ContentWrapper className="backend">
        <h1>Funktionen</h1>
        <div className="backend__form">


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Header" />
            </Toolbar>
            <ReactAutoForm
              formClass="autoform has-image-selector"
              onSubmit={this.props.handleUpdate}
              onSubmitExtra={{ heroimage: this.state.heroimage }}
              schema={this.props.schema._schema}
              doc={this.props.data}
              buttonProps={ {disabled: false} }
              type="update"
              ref={(form) => { this.headerform = form; }}
              buttonLabel="Speichern"
              useFields={['herobold', 'heroregular']}
            />

            <ImageSelector 
              files={ this.props.files } 
              current={ this.currentImage('heroimage') }
              field="heroimage" 
              setField={ link => this.setState({ heroimage: link} ) } />
            
          </Paper>



          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Funktionen" />
            </Toolbar>
            <ReactAutoForm
              formClass="autoform"
              onSubmit={this.props.handleUpdate}
              schema={this.props.schema._schema}
              doc={this.props.data}
              buttonProps={ {disabled: false} }
              type="update"
              ref={(form) => { this.funktionenform = form; }}
              buttonLabel="Speichern"
              useFields={[
                'bullet1active', 'bullet1head', 'bullet1color', 'bullet1copy',
                'bullet2active', 'bullet2head', 'bullet2color', 'bullet2copy'
              ]}
            />
          </Paper>


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Login Funktion" />
            </Toolbar>
            <ReactAutoForm
              formClass="autoform"
              onSubmit={this.props.handleUpdate}
              schema={this.props.schema._schema}
              doc={this.props.data}
              buttonProps={ {disabled: false} }
              type="update"
              buttonLabel="Speichern"
              useFields={[
                'settingshead', 'settingscopy', 'settingsctalabel', 'settingsctaurl'
              ]}
            />
          </Paper>



          
        </div>
      </ContentWrapper>
    )
  }
}
