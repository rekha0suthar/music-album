import React, { useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playlist = [
    {
      title: 'Midnight Dreams',
      artist: 'Luna Eclipse',
      cover:
        'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80',
      audio: 'path-to-audio-1.mp3',
    },
    {
      title: 'Neon Lights',
      artist: 'Stellar Wave',
      cover:
        'https://images.unsplash.com/photo-1616356607338-fd87169ecf1a?w=400&q=80',
      audio: 'path-to-audio-2.mp3',
    },
    {
      title: 'Urban Sunset',
      artist: 'Metro Pulse',
      cover:
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80',
      audio: 'path-to-audio-3.mp3',
    },
  ];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === playlist.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSong = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? playlist.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="music-player">
      <div className="album-cover">
        <img src={playlist[currentSongIndex].cover} alt="Album Cover" />
      </div>

      <div className="song-info">
        <h2>{playlist[currentSongIndex].title}</h2>
        <p>{playlist[currentSongIndex].artist}</p>
      </div>

      <div className="controls">
        <button onClick={previousSong}>
          <i className="fas fa-step-backward"></i>
        </button>
        <button onClick={togglePlay}>
          {isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>
        <button onClick={nextSong}>
          <i className="fas fa-step-forward"></i>
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
