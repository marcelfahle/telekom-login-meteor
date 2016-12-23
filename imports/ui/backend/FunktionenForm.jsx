import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ContentWrapper from './../components/ContentWrapper.jsx';
import ReactAutoFormWithImageSelector from './components/ReactAutoFormWithImageSelector';
import ImageSelector from './uploads/ImageSelector.jsx';



export default class FunktionenForm extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      heroimage: "",
      fImages: []
    }
  }


  funktionEditor( doc, funktion, i ) {
    return (
      <Paper zDepth={2} key={i} className="subform funktion-form">
        <ReactAutoFormWithImageSelector 
          data={funktion}
          extras={{doc: doc, index: i}}
          schema={this.props.funktionSchema._schema}
          data={funktion}
          files={this.props.files}
          fields={['title', 'copy', 'color', 'alignLeft']}
          handleUpdate={this.props.handleFunktionUpdate}
        />

        <FlatButton 
          label="Entfernen"  
          className="subform__destroy"
          onClick={() => this.props.handleFunktionRemove(doc._id, i)}
        />
        
      </Paper>
    )
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
              current={ this.state.heroimage || this.props.data.heroimage }
              setField={ link => this.setState({ heroimage: link} ) } 
            />
            
          </Paper>





          <Paper className="form-section has-subforms">
            <Toolbar>
              <ToolbarTitle text={`Funktionen (${this.props.funktionen.length})`} />
            </Toolbar>

            <div className="subform__actions">
              <RaisedButton 
                label="Neue Funktion" 
                onClick={() =>this.props.add(this.props.data, {title:"", copy:"", color:""})} 
              />
            </div>

            {
              (this.props.funktionen && this.props.funktionen.length > 0)
                ? this.props.funktionen.map( (funktion, i) => {
                  return this.funktionEditor( this.props.data, funktion, i );
                  }) :
                <p className="subform__notice">Bislang wurden keine Funktionen angelegt.</p>
            }
            <Paper>
            </Paper>
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


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="SEO" />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              buttonProps={ {disabled: false} }
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={['seotitle', 'seodescription']}
            />
          </Paper>

          
        </div>
      </ContentWrapper>
    )
  }
}
