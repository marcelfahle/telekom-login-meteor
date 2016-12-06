import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';
import Divider from 'material-ui/Divider';
import ContentWrapper from  './../components/ContentWrapper.jsx';

import { UserFiles } from '././../../../api/user_files/UserFiles.js';

import Uploader from './Uploader.jsx';
import File from './File.jsx';

import './FileUploads.scss';

class FileUploads extends React.Component {
  constructor( props ) {
    super(props);

    this.state = {
      uploading: [],
      progress: 0,
      inProgress: false,
      filename: '',
      selectedFile: false
      
    }

    this.startUpload = this.startUpload.bind( this );
    this.uploadProgress = this.uploadProgress.bind( this );
    this.onFilenameChange = this.onFilenameChange.bind( this );
    this.onFileSelect = this.onFileSelect.bind( this );
  }

  onFileSelect(e) {
    this.setState({ selectedFile: e.currentTarget.files[0] });
  }

  onFilenameChange(e) {
    this.setState({filename: e.currentTarget.value});
  }

  startUpload(e) {
    //console.log('start', this.state.selectedFile);

    // have a file?
    if (!this.state.selectedFile || this.state.filename === '') {
      if (!this.state.selectedFile)
        alert('Bitte Datei auswaehlen!');
      else
        alert('Bitte Dateinamen eingeben!');
    } else {

      let uploaderInstance = UserFiles.insert({
        file: this.state.selectedFile,
        streams: 'dynamic',
        chunkSize: 'dynamic',
        allowWebWorkers: true,
        meta: {
          name: this.state.filename
        }
      }, false);

      this.setState({
        uploading: uploaderInstance,
        inProgress: true
      });

      uploaderInstance.on('start', () => {
        console.log('starting');
      });

      uploaderInstance.on('end', (err, fileObj) => {
        console.log('On end:', fileObj);
      });

      uploaderInstance.on('uploaded', (err, fileObj) => {
        console.log('uploaded', fileObj);

        this.setState({
          uploading: [],
          progress: 0,
          inProgress: false,
          filename: ''
        });
      });

      uploaderInstance.on('error', (err, fileObj) => {
        console.log('ERROR', err);
      });

      uploaderInstance.start()

    }

  }

  uploadProgress () {
    console.log( 'upload progress' );
  }

  render() {
    if (this.props.loading) {
      return <h1>Ladevorgang</h1>
    }


    const files = this.props.filesCursor.each();
    return (
      <ContentWrapper className="backend">
        <h1>File Uploads</h1>
        <div className="fileuploads__wrapper">
          <div className="fileuploads__uploader">
            { 
              !this.state.inProgress
                ? <Uploader 
                    startUpload={this.startUpload} 
                    inProgress={this.state.inProgress} 
                    filename={this.state.filename}
                    onFileSelect={this.onFileSelect}
                    onFilenameChange={this.onFilenameChange}
                  />
                : <LinearProgress mode="determinate" value={this.state.progress} />
            }
          </div>

          <Divider />

          <div className="fileuploads__list">
            <ul>
              { files.map( (file, i) => <File file={file} key={`file_${i}`} /> ) }
            </ul>
          </div>
        </div>
      </ContentWrapper>
    )
  }
}
export default FileUploads;
