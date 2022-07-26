import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma2">
      <Tilty
        className="br2 shadow-2 Tilt"
        scale={1.2}
        perspective={500}
        reset={true}
        style={{ height: 42, width: 42 }}
      >
        <div className="center pl1 blue logo_char">C</div>
      </Tilty>
    </div>
  );
};

export default Logo;
