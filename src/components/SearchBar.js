import React from 'react';

function SearchBar({ searchTerm, onSearchChange, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a song..."
        value={searchTerm}
        onChange={onSearchChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
