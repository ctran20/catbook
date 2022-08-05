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
        <BiBriefcase className="mr2" />
        {'Product Manager at Tuxoreosis'}
      </p>
      <p>
        <BiBuildingHouse className="mr2" />
        {'Lives in Binhamton, NY'}
      </p>
      <p>
        <BiHeart className="mr2" />
        {'In relationship with Next Door Cat'}
      </p>
      <p>
        <BiBookBookmark className="mr2" />
        {'Studied at Top Cat University'}
      </p>
    </div>
  );
};

export default Bio;
