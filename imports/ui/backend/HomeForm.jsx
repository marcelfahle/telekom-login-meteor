import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ContentWrapper from './../components/ContentWrapper.jsx';
import ImageSelector from './uploads/ImageSelector.jsx';


const errors = [];

/*
const updateThisShit = (fields, changedFields, extraFields ) => {
  console.log( 'updaaaaate', fields);
  console.log( 'changedfields', changedFields);
  console.log( 'extraFields', extraFields);
  console.log( 'moar', moar);
  console.log( 'arguments', arguments );
}
*/



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

          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Header" />
            </Toolbar>


            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={['herobold', 'heroregular', 'heroimage']}
            />
            
            <ImageSelector files={ this.props.files } field={ 'heroimage' } />

            
          </Paper>


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="News" />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={['newsactive', 'newstitle', 'newscopy', 'newscta', 'newsctalabel', 'newsctaurl']}
            />
          </Paper>



          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Key Features" />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={['title', 'titlecopy', 'bullet1head', 'bullet1copy', 'bullet2head', 'bullet2copy', 'bullet3head', 'bullet3copy']}
            />
          </Paper>

          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Services Teaser" />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={['serviceshead', 'servicescopy']}
            />
          </Paper>


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Footer Hero" />
            </Toolbar>


            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={['footerherobold', 'footerheroregular', 'footerherohascta', 'footerheroctalabel', 'footerheroctaurl']}
            />
          </Paper>


        </div>
      </ContentWrapper>
    )
  }
}
