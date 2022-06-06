import React from 'react';
import Tilty from 'react-tilty';
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilty
        className="br2 shadow-2 Tilt"
        scale={1.2}
        perspective={500}
        reset={true}
        style={{ height: 100, width: 100 }}
      >
        <div className="center f-headline lh-solid white fw7">C</div>
      </Tilty>
    </div>
  );
};

export default Logo;
