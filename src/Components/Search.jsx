import React, { useState } from 'react';
import Fuse from 'fuse.js';

const SearchComponent = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fuse = new Fuse(data, {
    keys: ['songName', 'songArtists', 'songAlbum'],
    includeScore: true,
  });

  const handleSearch = (query) => {
    const results = fuse.search(query);
    setSearchResults(results.map((result) => result.item));
  };

  const handleChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search songs..."
        value={searchQuery}
        onChange={handleChange}
      />

      <div className="card-container">
        {searchResults.map((result) => (
          <div key={result.id} className="song-card">
            {/* Render your card component with the result data */}

            <h3>{result.songName}</h3>
            <p>{result.songArtists}</p>
            {/* Add other card details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchComponent;
