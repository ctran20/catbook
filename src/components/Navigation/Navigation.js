import React from 'react';

const Navigation = () => {
  const navStyle = 'f3 link dim white pa2 pointer';

  return (
    <nav style={{ display: 'flex' }}>
      <p className={navStyle}>Home</p>
      <p className={navStyle}>Profile</p>
      <p className={navStyle}>About</p>
      <p className={navStyle}>Sign Out</p>
    </nav>
  );
};

export default Navigation;
