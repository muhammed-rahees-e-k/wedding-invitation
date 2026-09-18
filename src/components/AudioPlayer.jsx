import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // High-quality romantic wedding instrumental MP3 track
  const songUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3";

  useEffect(() => {
    audioRef.current = new Audio(songUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio playback error:", err);
      });
    }
  };

  return (
    <>
      <button 
        className="floating-audio-btn" 
        onClick={toggleMusic}
        title={isPlaying ? "Mute Romantic Wedding Music" : "Play Romantic Wedding Music"}
        aria-label="Toggle background music"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#211915',
          color: '#c5a059',
          border: '1.5px solid #c5a059',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 18px rgba(0, 0, 0, 0.35)',
          cursor: 'pointer',
          zIndex: 1000,
          transition: 'transform 0.25s ease, background-color 0.25s ease'
        }}
      >
        {isPlaying ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Volume2 size={22} color="#c5a059" />
            <span style={{ fontSize: '11px', animation: 'pulseGlow 1.5s infinite' }}>♪</span>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            <VolumeX size={20} color="#f4efe6" opacity={0.7} />
            <Music size={12} color="#c5a059" style={{ position: 'absolute', top: '8px', right: '8px' }} />
          </div>
        )}
      </button>
    </>
  );
}
