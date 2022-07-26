import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty
        className="br3 shadow-2"
        scale={1.2}
        perspective={500}
        reset={true}
        style={{ height: 50, width: 50 }}
      >
        <div className="center f1 lh-title lh-solid white fw7">C</div>
      </Tilty>
    </div>
  );
};

export default Logo;
