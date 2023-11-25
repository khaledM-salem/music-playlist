import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import Playlist from './components/Playlist';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    // Assume a function to fetch default search results from an API or other source
    const defaultResults = [
      { id: 1, title: 'Song 1', singer: 'Artist 1', album: 'Album 1', date: '2023-01-01', duration: '3:45' },
      { id: 2, title: 'Song 2', singer: 'Artist 2', album: 'Album 2', date: '2023-02-01', duration: '4:15' },
      { id: 3, title: 'Song 3', singer: 'Artist 3', album: 'Album 3', date: '2023-03-01', duration: '5:45' },
      { id: 4, title: 'Song 4', singer: 'Artist 4', album: 'Album 4', date: '2023-04-01', duration: '2:15' },
      { id: 5, title: 'Song 5', singer: 'Artist 5', album: 'Album 5', date: '2023-05-01', duration: '1:45' },
      { id: 6, title: 'Song 6', singer: 'Artist 6', album: 'Album 6', date: '2023-06-01', duration: '2:25' },
    ];
    setSearchResults(defaultResults);
  }, []);


  const handleSearch = (query) => {
    // For simplicity, let's create dummy data here
    const results = [
      { id: 1, title: 'Song 1', singer: 'Artist 1', album: 'Album 1', date: '2023-01-01', duration: '3:45' },
      { id: 2, title: 'Song 2', singer: 'Artist 2', album: 'Album 2', date: '2023-02-01', duration: '4:15' },
      { id: 3, title: 'Song 3', singer: 'Artist 3', album: 'Album 3', date: '2023-03-01', duration: '5:45' },
      { id: 4, title: 'Song 4', singer: 'Artist 4', album: 'Album 4', date: '2023-04-01', duration: '2:15' },
      { id: 5, title: 'Song 5', singer: 'Artist 5', album: 'Album 5', date: '2023-05-01', duration: '1:45' },
      { id: 6, title: 'Song 6', singer: 'Artist 6', album: 'Album 6', date: '2023-06-01', duration: '2:25' },
    ];
    const filteredResults = results.filter((song) =>
      song.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleAddToPlaylist = (song) => {
    // Check if the song is not already in the playlist
    if (!playlist.some((pSong) => pSong.id === song.id)) {
      setPlaylist([...playlist, song]);
    }
  };

  const handleRemoveFromPlaylist = (song) => {
    // Remove the song from the playlist
    const updatedPlaylist = playlist.filter((pSong) => pSong.id !== song.id);
    setPlaylist(updatedPlaylist);
  };

  return (
    <div>
      <h1>Music Playlist App</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResult results={searchResults} onAddToPlaylist={handleAddToPlaylist} />
      <Playlist playlist={playlist} onRemoveFromPlaylist={handleRemoveFromPlaylist} />
    </div>
  );
}

export default App;
