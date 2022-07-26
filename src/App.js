import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/Profile/Profile';
import PostList from './components/PostList/PostList';
import Ads from './components/Ads/Ads';
import Contacts from './components/Contacts/Contacts';
import './App.css';
import 'tachyons';
import ProfileNav from './components/Profile/ProfileNav';

function App() {
  const profileUrl =
    'https://i.pinimg.com/originals/72/e6/d6/72e6d6809356a48d1d6f65d79216eb7e.jpg';
  // REMOVE ALL SHADOWS FROM COMPONENTS
  return (
    <div className="shadow-2">
      <Navigation />
      <div className="center">
        <div className="profile_body">
          <div className="top_body">
            <img alt="profile" src={profileUrl} width="100%" height="auto" />
            <ProfileNav />
          </div>

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
      </div>
    </div>
  );
}

export default App;
