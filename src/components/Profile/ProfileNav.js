import React from 'react';
import './Profile.style.css';

const ProfileNav = ({ name, profileUrl }) => {
  const navStyle =
    'nav_text pa3 ba b--light-gray b temp-profile-nav-text mid-gray link dim pointer';

  return (
    <div>
      <div
        className="f2 fw4 white nav_text"
        style={{
          position: 'relative',
          top: '280px',
          left: '290px',
        }}
      >
        <p>{name}</p>
      </div>
      <img
        className="br-100 ba bw2 b--white ml3"
        alt="profile_pic"
        src={profileUrl}
        width="250px"
        height="250px"
        style={{
          objectFit: 'cover',
          position: 'relative',
          top: '40px',
        }}
      />

      <div className="bg-white flex ba br3 br--bottom bt0 b--light-silver">
        <div className="profile_pic_space"></div>
        <nav className="flex dib">
          <div className={navStyle}>Home</div>
          <div className={navStyle}>About</div>
          <div className={navStyle}>Friends</div>
          <div className={navStyle}>Photos</div>
          <div className={navStyle}>More</div>
        </nav>
      </div>
    </div>
  );
};

export default ProfileNav;
