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



export default class SogehtsForm extends React.Component {
  constructor( props ) {
    super( props );

    this.state = {
      heroimage: props.heroimage,
      teaserimage: props.teaserimage
    }
  }

  faqEditor( doc, faq, i ) {
    return (
      <Paper zDepth={2} key={i} className="subform ">
        <ReactAutoForm
          formClass="autoform"
          onSubmit={this.props.handleFaqUpdate}
          onSubmitExtra={{doc: doc, index: i}}
          schema={this.props.faqsSchema._schema}
          doc={faq}
          buttonProps={ {disabled: false} }
          type="update"
          buttonLabel="Speichern"
          useFields={[ 'head', 'copy' ]}
        />

        <FlatButton 
          label="Entfernen"  
          className="subform__destroy"
          onClick={() => this.props.handleFaqRemove(doc._id, i)}
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
              useFields={['herobold', 'heroregular' ]}
            />

            <ImageSelector 
              files={ this.props.files } 
              current={ this.state.heroimage || this.props.data.heroimage }
              setField={ link => this.setState({ heroimage: link} ) } 
            />
            
          </Paper>


          <Paper className="form-section">
            <Toolbar>
              <ToolbarTitle text="Intro" />
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
                'title', 'titlecopy',
              ]}
            />
          </Paper>




          <Paper className="form-section has-subforms">
            <Toolbar>
              <ToolbarTitle text={`Faqs (${this.props.faqs.length})`} />
            </Toolbar>

            <div className="subform__actions">
              <RaisedButton 
                label="Neue Faq" 
                onClick={() =>this.props.add(this.props.data, {head:"", copy:""})} 
              />

          
              <div className="dashboard backend">
                <h3>Texthervorhebung</h3>
                <pre><code>
                  <ul>
                    <li><strong>Bold</strong> -- **Bold**</li>
                    <li><em>Italic</em> -- *Italic*</li>
                  </ul>
                </code></pre>
                
                <h3>Listen</h3>
                <pre><code>
                  <p>
                    1. Erster Listeneintrag<br/>
                    2. Zweiter Listeneintrag<br/>
                    3. Dritter Listeneintrag<br/>
                  </p>
                </code></pre>
                
                <h3>Buttons</h3>
                <pre><code>
                  <p>
                    [Linktext](http://telekom.de)
                  </p>
                </code></pre>
              </div>


            </div>

            {
              (this.props.faqs && this.props.faqs.length > 0)
                ? this.props.faqs.map( (faq , i) => {
                  return this.faqEditor( this.props.data, faq, i );
                  }) :
                <p className="subform__notice">Bislang wurden keine Faq angelegt.</p>
            }
            <Paper>
            </Paper>
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
              current={ this.state.teaserimage || this.props.data.teaserimage }
              setField={ link => this.setState({ teaserimage: link} ) } 
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

