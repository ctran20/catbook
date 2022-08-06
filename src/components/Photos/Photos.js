import React from 'react';
import Photo from './Photo';
import './Photos.style.css';

const Photos = () => {
  const sampleUrl =
    'https://d.newsweek.com/en/full/1984450/kitten-perched-persons-shoulder.jpg';
  const sampleUrl2 = 'https://i.ytimg.com/vi/1Ne1hqOXKKI/maxresdefault.jpg';
  const sampleUrl3 =
    'https://media.vanityfair.com/photos/5e27310def889c00087c7928/master/pass/taylor-swift-cats.jpg';
  const sampleUrl4 =
    'https://cdn.theatlantic.com/thumbor/yHhIvkBiGvKKubxVHTNXvU4nCKQ=/1x122:2554x1452/1200x625/media/img/mt/2017/06/shutterstock_319985324/original.jpg';

  // Slice it to 9
  const photos = [sampleUrl, sampleUrl2, sampleUrl3, sampleUrl4];

  return (
    <div className="sidebox">
      <div className="sidebox-title">Photos</div>
      <div className="photos-container">
        {photos.map((photo, index) => {
          return <Photo key={index} photoUrl={photo} index={index} />;
        })}
      </div>
    </div>
  );
};

export default Photos;
