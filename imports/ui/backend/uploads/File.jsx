import React from 'react';

import { GridTile } from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';





const File = ( {file, deleteFile} ) => (
  <GridTile
    key={file.link()}
    title={(file.meta && file.meta.name)? file.meta.name : file.name}
    actionIcon={<IconButton><FontIcon className="material-icons" color="#FFF">delete_forever</FontIcon></IconButton>}
    onTouchTap={(e) => deleteFile( file )}
  >
    <img src={file.link()} />
  </GridTile>
);

export default File;
