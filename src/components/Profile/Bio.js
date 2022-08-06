import React from 'react';
import {
  BiBriefcase,
  BiBuildingHouse,
  BiHeart,
  BiBookBookmark,
} from 'react-icons/bi';

const Bio = () => {
  const userBio = {
    workPosition: 'Product Manager',
    workplace: 'Tuxoreosis',
    city: 'Binghamton',
    state: 'NY',
    relationship: 'dating',
    partner: 'Cat Next Door',
    school: 'Top Cat University',
  };

  const {
    workPosition,
    workplace,
    city,
    state,
    relationship,
    partner,
    school,
  } = userBio;

  return (
    <div className="sidebox">
      <div className="sidebox-title">Intro</div>
      <p>
        <BiBriefcase className="bio-icon" />
        {workPosition} at {workplace}
      </p>
      <p>
        <BiBuildingHouse className="bio-icon" />
        Lives in {city}, {state}
      </p>
      <p>
        <BiHeart className="bio-icon" />
        In relationship with {partner}
      </p>
      <p>
        <BiBookBookmark className="bio-icon" />
        Studied at {school}
      </p>
    </div>
  );
};

export default Bio;
