import React from 'react';
import ReactAutoForm from 'meteor-react-autoform';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import ContentWrapper from './../components/ContentWrapper.jsx';
import ImageSelector from './uploads/ImageSelector.jsx';



export default class SogehtsForm extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      heroimage: props.heroimage,
      teaserimage: props.teaserimage
    }
  }


  render() {
    if (this.props.loading) {
      return <ContentWrapper className="backend"><h1>Ladevorgang</h1></ContentWrapper>
    }

    return(
      <ContentWrapper className="backend">
        <h1>So Geht's</h1>
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
              <ToolbarTitle text="Header" />
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
                'faq1head', 'faq1copy',
                'faq2head', 'faq2copy',
                'faq3head', 'faq3copy',
                'faq4head', 'faq4copy',
              ]}
            />
          </Paper>


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Teaser" />
            </Toolbar>
            <ReactAutoForm
              formClass="autoform has-image-selector"
              onSubmit={this.props.handleUpdate}
              onSubmitExtra={{ teaserimage: this.state.teaserimage }}
              schema={this.props.schema._schema}
              doc={this.props.data}
              buttonProps={ {disabled: false} }
              type="update"
              buttonLabel="Speichern"
              useFields={[
                'showTeaser', 'teaserTitle', 'teaserCopy', 'teaserctalabel', 'teaserctaurl'
              ]}
            />
            <ImageSelector 
              files={ this.props.files } 
              current={ this.currentImage('teaserimage') }
              field="teaserimage" 
              setField={ link => this.setState({ teaserimage: link} ) } />
          </Paper>

        </div>
      </ContentWrapper>
    )
  }
}

