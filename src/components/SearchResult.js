import React from 'react';

function SearchResult({ results, onAddToPlaylist }) {
  return (
    <div>
      <h2>Search Results</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Singer</th>
            <th>Album</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {results.map((song) => (
            <tr key={song.id}>
              <td>{song.title}</td>
              <td>{song.singer}</td>
              <td>{song.album}</td>
              <td>{song.date}</td>
              <td>{song.duration}</td>
              <td>
                <button onClick={() => onAddToPlaylist(song)}>Add to Playlist</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SearchResult;
