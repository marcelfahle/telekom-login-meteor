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

    this.state = {
      heroimage: {},
      footerheroimage: {}
    }
  }

  setField( field, link ) {
    //
    //document.getElementById('heroimage').value = link;
    this.setState({heroimage: link});
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
        <h1>Home</h1>
        <div className="backend__form">

          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Header" />
            </Toolbar>


            {/*
              needs a state variable at the momment per image
              and needs to use the currentImage method to show the preview.
              This sucks, need something better. E.g. a fork of the ReactAutoForm 
              with an ImageSelector Component or so.

              also, the class for the autoform sucks, so the only way is probably 
              a fork with added image selector

              Or, IDEA: how about pushing children throygh the form and just
              render the children. That way we can incapsulate shit and render 
              it before the submit button

              Classes on ReactAutoForm should always keep the default `autoform`
            */}

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
              <ToolbarTitle text="News" />
            </Toolbar>
            <ReactAutoForm
              onSubmit={this.props.handleUpdate}
              buttonProps={ {disabled: false} }
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
              buttonProps={ {disabled: false} }
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
              buttonProps={ {disabled: false} }
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
              formClass="autoform has-image-selector"
              buttonProps={ {disabled: false} }
              onSubmit={this.props.handleUpdate}
              onSubmitExtra={{footerheroimage: this.state.footerheroimage}}
              buttonProps={ {disabled: false} }
              schema={this.props.schema._schema}
              doc={this.props.data}
              type="update"
              buttonLabel="Speichern"
              useFields={['footerherobold', 'footerheroregular', 'footerherohascta', 'footerheroctalabel', 'footerheroctaurl']}
            />
            <ImageSelector 
              files={ this.props.files } 
              current={ this.currentImage('footerheroimage') }
              field="footerheroimage" 
              setField={ link => this.setState({ footerheroimage: link} ) } />

          </Paper>


        </div>
      </ContentWrapper>
    )
  }
}
