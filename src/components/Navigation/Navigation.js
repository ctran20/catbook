import React from 'react';
import Logo from '../Logo/Logo';
import './Navigation.style.css';
const Navigation = () => {
  const navStyle = 'nav_text link dim pointer';

  return (
    <nav className="flex bg-blue dib br--bottom mb4 ">
      <Logo />
      <p className={navStyle}>Home</p>
      <p className={navStyle}>Profile</p>
      <p className={navStyle}>About</p>
      <p className={navStyle}>Sign Out</p>
    </nav>
  );
};

export default Navigation;
