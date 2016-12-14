import React from 'react';


const DiensteAdmin = ({ loading }) => {
  if (loading) {
    return <div>Ladevorgang...</div>
  }

  return (
    <div>Ist geladen</div>
  )

};

export default DiensteAdmin;
