import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div>
      <div className="horizontally">
        <Logo />
        <Navigation />
      </div>

      {/*
    <Logo/>
    <Profile/>
    <Posts/>
      */}
    </div>
  );
}

export default App;
