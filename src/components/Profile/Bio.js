import React from 'react';
import {
  BiBriefcase,
  BiBuildingHouse,
  BiHeart,
  BiBookBookmark,
} from 'react-icons/bi';

const Bio = () => {
  //Remove shadow-2 when done
  return (
    <div className="ba b--light-silver shadow-4 br2 bg-white mb3 pa3">
      <div className="b f4">Intro</div>
      <p>
        <BiBriefcase className="pr2" />
        {'Product Manager at Tuxoreosis'}
      </p>
      <p>
        <BiBuildingHouse className="pr2" />
        {'Lives in Binhamton, NY'}
      </p>
      <p>
        <BiHeart className="pr2" />
        {'In relationship with Next Door Cat'}
      </p>
      <p>
        <BiBookBookmark className="pr2" />
        {'Studied at Top Cat University'}
      </p>
    </div>
  );
};

export default Bio;
