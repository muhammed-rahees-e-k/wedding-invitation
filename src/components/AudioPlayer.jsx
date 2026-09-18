import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  // Soft romantic piano note melody generator using Web Audio API
  const startRomanticSynth = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // Gentle chord progression: Fmaj7 - Cmaj7 - Am7 - G
    const notes = [
      // Fmaj7
      { freq: 349.23, time: 0, duration: 1.8 },
      { freq: 440.00, time: 0.3, duration: 1.8 },
      { freq: 523.25, time: 0.6, duration: 1.8 },
      { freq: 659.25, time: 0.9, duration: 1.8 },
      // Cmaj7
      { freq: 261.63, time: 2.0, duration: 1.8 },
      { freq: 329.63, time: 2.3, duration: 1.8 },
      { freq: 392.00, time: 2.6, duration: 1.8 },
      { freq: 493.88, time: 2.9, duration: 1.8 },
      // Am7
      { freq: 220.00, time: 4.0, duration: 1.8 },
      { freq: 261.63, time: 4.3, duration: 1.8 },
      { freq: 329.63, time: 4.6, duration: 1.8 },
      { freq: 392.00, time: 4.9, duration: 1.8 },
      // G
      { freq: 196.00, time: 6.0, duration: 1.8 },
      { freq: 246.94, time: 6.3, duration: 1.8 },
      { freq: 293.66, time: 6.6, duration: 1.8 },
      { freq: 392.00, time: 6.9, duration: 1.8 },
    ];

    const playSequence = () => {
      const now = ctx.currentTime;
      notes.forEach((note) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, now + note.time);

        // Soft attack & decay envelope
        gain.gain.setValueAtTime(0, now + note.time);
        gain.gain.linearRampToValueAtTime(0.06, now + note.time + 0.15);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + note.time + note.duration);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + note.time);
        osc.stop(now + note.time + note.duration);
      });
    };

    playSequence();
    timerRef.current = setInterval(playSequence, 8200);
  };

  const stopRomanticSynth = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopRomanticSynth();
      setIsPlaying(false);
    } else {
      startRomanticSynth();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      stopRomanticSynth();
    };
  }, []);

  return (
    <button 
      className="floating-audio-btn" 
      onClick={toggleMusic}
      title={isPlaying ? "Mute Background Music" : "Play Ambient Wedding Music"}
      aria-label="Toggle background music"
    >
      {isPlaying ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <Volume2 size={20} />
          <span className="music-pulse" style={{ fontSize: '10px' }}>♪</span>
        </div>
      ) : (
        <VolumeX size={20} opacity={0.6} />
      )}
    </button>
  );
}
