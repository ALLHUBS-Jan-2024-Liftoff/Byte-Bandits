import React from 'react';
import MuiLoginComp from './MuiLoginComp';

export const MuiLoginPage = ({ setAuthenticated }) => {

  return (
    <div className="mt-5 px-0 container-fluid">
      <MuiLoginComp setAuthenticated={setAuthenticated} />
    </div>
  );
}