import React from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';

import UserFiles from './../../../api/user_files/UserFiles.js';



class ImageSelector extends React.Component {
  constructor( props ) {
    super( props );
    
    this.state = {
      open: false
    }
  }

  selectImage ( field ) {
    console.log('select', field );
  }

  handleOpen() {
    this.setState( { open: true } );
  }
  handleClose() {
    this.setState( { open: false } );
  }

  selectImage(file, e) {
    this.setState( { open: false } );
    console.log('id', file._id);
    console.log('link', file.link());

  }


  render() {

    const styles = {
      gridList: {
        marginRight: '60px',
        overflowY: 'auto',
      }
    }
    if (this.props.loading) {
      return <h1>Ladevorgang</h1>
    } 


    const files = this.props.files.each();

    return (

      <div>
        <RaisedButton
          onClick={ () => this.handleOpen() }
        >Select Image</RaisedButton>

        <Dialog
          title="Image Select"
          modal={false}
          open={this.state.open}
          autoScrollBodyContent={true}
          onRequestClose={() => this.handleClose()}
        >
        	<GridList
            cellHeight={180}
            style={styles.gridList}
            cols={4}
          >
            {files.map((file) => (
              <GridTile
                key={file._id}
                title={file.meta.name}
                onTouchTap={(e) => this.selectImage(file, e) }
              >
                <img src={file.link()} />
              </GridTile>
            ))}
          </GridList> 


        </Dialog>
      </div>
    );
  }
}

export default ImageSelector;
