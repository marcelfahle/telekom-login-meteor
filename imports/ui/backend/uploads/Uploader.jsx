import React from 'react';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Uploader = ({inProgress, startUpload, onFileSelect, filename, onFilenameChange}) => {
  return (
    <div className="uploader">
      <input type="file" 
        className="uploader__form"
        id="fileinput" 
        disabled={inProgress} 
        onChange={onFileSelect}/>
      <br/>
      <TextField 
        hintText="Dateiname" 
        value={filename} 
        onChange={onFilenameChange} 
        className="uploader__name"
      />
      <br/>
      <RaisedButton onClick={startUpload}>Upload</RaisedButton>
    </div>
  );
};
export default Uploader;
