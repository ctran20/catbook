import React from 'react';
import Logo from '../Logo/Logo';
import SearchBar from './SearchBar';
import './Navigation.style.css';
const Navigation = () => {
  const navStyle = 'nav_text main-nav-button link dim pointer';

  return (
    <div className="main-nav">
      <div className="left-nav">
        <Logo />
        <SearchBar />
      </div>

      <div className="right-nav">
        <div className={navStyle}>Home</div>
        <div className={navStyle}>Profile</div>
        <div className={navStyle}>About</div>
        <div className={navStyle}>Sign In</div>
      </div>
    </div>
  );
};

export default Navigation;
