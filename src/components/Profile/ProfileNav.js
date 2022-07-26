import React from 'react';

const ProfileNav = () => {
  const navStyle = 'pa1 b blue link dim pointer';
  const profileUrl =
    'https://www.thesprucepets.com/thmb/EAU60oC1d_bm-81ErOgM760RjGs=/434x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/35616731_1598735883572052_5494475739635908608_n-5b45332ec9e77c0037110989.jpg';

  return (
    <div className="flex bg-white dib br--bottom shadow-1 ">
      <img
        className="br-100"
        alt="profile"
        src={profileUrl}
        width="300px"
        height="300px"
      />
      <nav className="flex dib">
        <p className={navStyle}>Home</p>
        <p className={navStyle}>Profile</p>
        <p className={navStyle}>About</p>
        <p className={navStyle}>Sign Out</p>
      </nav>
    </div>
  );
};

export default ProfileNav;
