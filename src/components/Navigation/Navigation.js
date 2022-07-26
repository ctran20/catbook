import React from 'react';
import Logo from '../Logo/Logo';

const Navigation = () => {
  const navStyle = 'f3 link dim black pa2 pt0 pointer';

  return (
    <nav className="flex bg-light-blue dib br--bottom br4 mb4 pa3">
      <Logo />
      <p className={navStyle}>Home</p>
      <p className={navStyle}>Profile</p>
      <p className={navStyle}>About</p>
      <p className={navStyle}>Sign Out</p>
    </nav>
  );
};

export default Navigation;
