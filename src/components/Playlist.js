import React from 'react';

function Playlist({ playlist, onRemoveFromPlaylist }) {
  return (
    <div className="playlist">
      <h2>Your Playlist</h2>
      <ul>
        {playlist.map((song) => (
          <li key={song.id}>
            {song.title} - {song.artist}
            <button onClick={() => onRemoveFromPlaylist(song)}>Remove from Playlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playlist;
