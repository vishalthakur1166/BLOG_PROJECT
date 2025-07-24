import React from 'react';
import MyNavbar from './MyNavbar';

const Base = ({ children }) => {
  return (
    <div>
      <MyNavbar />
      <div className="container mt-4">
        {children}
      </div>
    </div>
  );
};

export default Base;
