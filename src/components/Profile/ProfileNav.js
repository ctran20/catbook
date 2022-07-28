import React from 'react';
import './Profile.style.css';

const ProfileNav = () => {
  const navStyle = 'pa3 ba b--light-gray b blue link dim pointer';
  const profileUrl =
    'https://www.thesprucepets.com/thmb/EAU60oC1d_bm-81ErOgM760RjGs=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg';

  return (
    <div>
      <img
        className="br-100 ba bw2 b--white ml3"
        alt="profile_pic"
        src={profileUrl}
        width="250px"
        height="250px"
        style={{
          position: 'relative',
          top: '50px',
        }}
      />

      <div className="bg-white flex ba b--light-silver">
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
