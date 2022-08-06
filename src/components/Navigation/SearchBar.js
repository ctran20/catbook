import React from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input
        aria-label="Search Robot"
        type="text"
        className={'search-box'}
        placeholder="Search Catbook"
      />
      <button className="search-button" type="submit">
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchBar;
