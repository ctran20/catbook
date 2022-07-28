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
  //<img alt="profile" src={profileUrl} width="100%" height="auto" />
  const profileUrl =
    'https://i.pinimg.com/originals/72/e6/d6/72e6d6809356a48d1d6f65d79216eb7e.jpg';
  // REMOVE ALL SHADOWS FROM COMPONENTS
  return (
    <div>
      <Navigation />
      <div className="center">
        <div className="profile_body">
          <div
            className="top_body mb4"
            style={{
              backgroundImage: `url(${profileUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100%',
              height: '580px',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <div
              className="center bg-yellow f1 lh-title white"
              style={{
                position: 'sticky',
                top: 0,
                height: '50px',
                width: '100%',
              }}
            >
              WORK IN PROGRESS
            </div>
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
