import React from 'react';
import Logo from '../Logo/Logo';
import { AiFillBell, AiFillHome } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import SearchBar from './SearchBar';
import './Navigation.style.css';
const Navigation = () => {
  return (
    <div className="main-nav">
      <div className="left-nav">
        <Logo />
        <SearchBar />
      </div>

      <div className="right-nav">
        <div className="main-nav-button">
          <AiFillBell />
        </div>
        <div className="main-nav-button">
          <AiFillHome />
        </div>
        <div className="main-nav-button">
          <BsInfoCircle />
        </div>
        <div className="main-nav-button sign-in">Sign In</div>
      </div>
    </div>
  );
};

export default Navigation;
