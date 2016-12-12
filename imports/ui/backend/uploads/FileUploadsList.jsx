import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';

import ConfirmationDialog from '../components/ConfirmationDialog.jsx';

import File from './File.jsx';

export default class FileUploadsList extends React.Component {
  constructor( props ) {
    super ( props );

    this.state = {
      showConfirmDelete: false,
      fileToDelete: {}
    }
    
    this.cancelConfirmDelete = this.cancelConfirmDelete.bind( this );
    this.showConfirmDelete = this.showConfirmDelete.bind( this );
    this.confirmDelete = this.confirmDelete.bind ( this );
  }

  // CONFIRM MODAL
  cancelConfirmDelete() {
    this.setState( { showConfirmDelete: false, fileToDelete: {} } );
  }
  showConfirmDelete( file ) {
    this.setState( { fileToDelete: file, showConfirmDelete: true } );
  }
  confirmDelete() {
    this.props.deleteFile( this.state.fileToDelete._id );
    this.setState( { showConfirmDelete: false, fileToDelete: {} } );
  }


  render() {
    const files = this.props.files;
    const styles = {
      listWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
    };

    return(

      <div className="fileuploads__list" style={styles.listWrapper}>
        <GridList
          cellHeight={180}
          cols={4}
        >
          { files.map( (file, i) => 
            <File 
              file={file} 
              deleteFile={ this.showConfirmDelete }
              key={`file_${i}`} 
            /> 
          ) }

        </GridList>
          { 
            this.state.showConfirmDelete ? 
              <ConfirmationDialog
                cancel={ this.cancelConfirmDelete }
                onConfirm={ this.confirmDelete }
                info={ this.state.fileToDelete }
              /> :
              ''
          }
      </div>

    ) 
  }
}
