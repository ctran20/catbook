import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Tilty scale={1.3} reset={true}>
        <span className="black">cat</span>
        <span className="white">book</span>
      </Tilty>
    </div>
  );
};

export default Logo;
