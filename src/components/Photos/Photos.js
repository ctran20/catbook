import React from 'react';
import './Photos.style.css';

const Photos = () => {
  const sampleUrl =
    'https://d.newsweek.com/en/full/1984450/kitten-perched-persons-shoulder.jpg';
  const sampleUrl2 = 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg';
  const sampleUrl3 =
    'https://media.vanityfair.com/photos/5e27310def889c00087c7928/master/pass/taylor-swift-cats.jpg';

  return (
    <div className="sidebox">
      <div className="sidebox-title">Photos</div>
      <div className="photos-container">
        <div className="mb1" style={{ width: '32%' }}>
          <img
            alt="friend_pic"
            src={sampleUrl}
            width="100%"
            style={{ objectFit: 'cover', aspectRatio: '1/1' }}
          />
        </div>
        <div className="mb1 ml2 mr2" style={{ width: '32%' }}>
          <img
            alt="friend_pic"
            src={sampleUrl2}
            width="100%"
            style={{ objectFit: 'cover', aspectRatio: '1/1' }}
          />
        </div>
        <div className="mb1" style={{ width: '32%' }}>
          <img
            alt="friend_pic"
            src={sampleUrl3}
            width="100%"
            style={{ objectFit: 'cover', aspectRatio: '1/1' }}
          />
        </div>
        <div className="mb2" style={{ width: '32%' }}>
          <img
            alt="friend_pic"
            src={sampleUrl3}
            width="100%"
            style={{ objectFit: 'cover', aspectRatio: '1/1' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Photos;
