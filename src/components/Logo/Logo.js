import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo">
      <Tilty scale={1.3} reset={true}>
        <span className="logo-cat-color">cat</span>
        <span className="logo-book-color">book</span>
      </Tilty>
    </div>
  );
};

export default Logo;
