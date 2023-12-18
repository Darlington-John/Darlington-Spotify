import React, { useEffect } from 'react';

import { useMusic } from './MusicContext';

import SearchIcon from './../Assets/Icons/Search.svg';

const Search = () => {
  const {
    searchQuery,

    handleSearch,
    handleChange,
  } = useMusic();

  useEffect(() => {
    handleSearch(searchQuery);
  }, [searchQuery]);

  return (
    <div
      className="search-container flex gap-2 p-3 rounded-full  bg-grey "
      tabIndex="0"
    >
      <img src={SearchIcon} className="w-5" />
      <input
        type="text"
        placeholder="What do you want to listen to"
        value={searchQuery}
        onChange={handleChange}
        className="search-input w-56 bg-grey"
      />
    </div>
  );
};

export default Search;
