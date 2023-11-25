import React, { useState } from 'react';
import Playlist from './components/Playlist';
import SearchBar from './components/SearchBar';
import SearchResult from './components/SearchResult';
import './styles/App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const handleSearch = async () => {
    // Implement your search logic, fetch from API or use a pre-defined list
    // Update the searchResults state
  };

  const addToPlaylist = (song) => {
    setPlaylist([...playlist, song]);
  };

  const removeFromPlaylist = (song) => {
    const updatedPlaylist = playlist.filter((item) => item.id !== song.id);
    setPlaylist(updatedPlaylist);
  };

  return (
    <div className="app">
      <h1>Music Playlist</h1>
      <SearchBar
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        onSearch={handleSearch}
      />
      <div className="app__content">
        <SearchResult results={searchResults} onAddToPlaylist={addToPlaylist} />
        <Playlist playlist={playlist} onRemoveFromPlaylist={removeFromPlaylist} />
      </div>
    </div>
  );
}

export default App;
