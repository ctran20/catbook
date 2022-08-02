import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Bio from './components/Profile/Bio';
import ProfileNav from './components/Profile/ProfileNav';
import PostList from './components/PostList/PostList';
import Ads from './components/Ads/Ads';
import Photos from './components/Photos/Photos';
import './App.css';
import 'tachyons';
import Friends from './components/Friends/Friends';

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
            <ProfileNav />
          </div>

          <div className="main_body">
            <div className="left_sidebar">
              <Bio />
              <Friends />
              <Photos />
              <Ads />
            </div>
            <div className="posts">
              <PostList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
