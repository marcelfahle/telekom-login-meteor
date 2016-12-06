import React from 'react';



const File = ({file}) => (
  <li>
    <div style={ {backgroundImage: `url(${file.link()})`} }></div>
    <p>{(file.meta && file.meta.name)? file.meta.name : file.name}</p>
  </li>
);

export default File;
