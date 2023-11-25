import React from 'react';

function SearchResult({ results, onAddToPlaylist }) {
  return (
    <div className="search-result">
      <h2>Search Results</h2>
      <ul>
        {results.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist}
            <button onClick={() => onAddToPlaylist(song)}>Add to Playlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResult;
