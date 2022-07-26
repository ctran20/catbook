import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Profile from './components/Profile/Profile';
import PostList from './components/PostList/PostList';
import Ads from './components/Ads/Ads';
import Contacts from './components/Contacts/Contacts';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div>
      <Navigation />
      <div className="main_body">
        <div>
          <Profile />
        </div>
        <div>
          <PostList />
        </div>

        <div>
          <Ads />
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default App;
