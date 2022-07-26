import React from 'react';

const Profile = () => {
  const profileUrl =
    'https://www.litter-robot.com/media/magefan_blog/2020/09/tatiana-rodriguez-VDaTIMWsc_8-unsplash.jpg';

  //Remove shadow-2 when done
  return (
    <div className="shadow-2">
      <div className="pa4">
        <img alt="profile" src={profileUrl} width="300px" height="auto" />
      </div>
      <div className="ph3 mh3">
        <h2>{'Tux Jr'}</h2>
        <p>{'Product Manager at Tuxoreosis'}</p>
        <p>{'Lives in Binhamton, NY'}</p>
        <p>{'In relationship with Next Door Cat'}</p>
        <p>{'Studied at Cat University'}</p>
      </div>
    </div>
  );
};

export default Profile;
