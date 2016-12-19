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


export default class LoginMitTelekomForm extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      heroimage: props.heroimage, 
      footerheroimage: props.footerheroimage
    }
  }

  render() {
    if (this.props.loading) {
      return <ContentWrapper className="backend"><h1>Ladevorgang</h1></ContentWrapper>
    }

    return(
      <ContentWrapper className="backend">
        <h1>Login mit Telekom</h1>
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
              current={ this.state.footerheroimage || this.props.data.footerheroimage }
              setField={ link => this.setState({ footerheroimage: link} ) } 
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
