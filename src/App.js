import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Profile from './components/Profile/Profile';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div>
      <div className="horizontally">
        <Logo />
        <Navigation />
      </div>
      <div className="ma4">
        <Profile />
      </div>

      {/*
    <Posts/>
      */}
    </div>
  );
}

export default App;
