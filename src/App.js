import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Bio from './components/Profile/Bio';
import PostList from './components/PostList/PostList';
import Ads from './components/Ads/Ads';
import Photos from './components/Photos/Photos';
import './App.css';
import 'tachyons';
import Friends from './components/Friends/Friends';
import ProfileHeader from './components/Profile/ProfileHeader';
import { userData } from './data_test';

const App = () => {
  const user = userData[0];

  return (
    <div>
      <Navigation />
      <div className="center">
        <div className="profile_body">
          <ProfileHeader userInfo={user} />
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
};

export default App;
