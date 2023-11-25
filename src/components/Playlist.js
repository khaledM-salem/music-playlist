import React from 'react';

const Playlist = ({ playlist, onRemoveFromPlaylist }) => {
  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h2>Your Playlist</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #333' }}>
            <th>Title</th>
            <th>Singer</th>
            <th>Album</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {playlist.map((song) => (
            <tr key={song.id} style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
              <td>{song.title}</td>
              <td>{song.singer}</td>
              <td>{song.album}</td>
              <td>{song.date}</td>
              <td>{song.duration}</td>
              <td>
                <button onClick={() => onRemoveFromPlaylist(song)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Playlist;
