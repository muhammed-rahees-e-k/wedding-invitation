import React from 'react';
import { Heart } from 'lucide-react';

export default function CreativeLoader() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#211915',
      background: 'radial-gradient(circle at center, #2e231d 0%, #16110e 100%)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#c5a059',
      transition: 'opacity 0.5s ease, visibility 0.5s ease'
    }}>
      
      {/* Outer Rotating Gold Ring */}
      <div style={{ position: 'relative', width: '90px', height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="loader-spinner-ring"></div>

        {/* Heart Icon in center */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          animation: 'pulseGlow 2s infinite ease-in-out'
        }}>
          <Heart size={24} fill="#c5a059" stroke="#c5a059" />
        </div>
      </div>

      {/* Loading Title without names */}
      <div style={{ marginTop: '1.8rem', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.78rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: '#f4efe6',
          marginBottom: '0.4rem',
          fontWeight: '500'
        }}>
          WEDDING INVITATION
        </p>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.9rem',
          fontStyle: 'italic',
          color: '#c5a059',
          opacity: 0.85
        }}>
          Loading Celebration...
        </p>
      </div>

      {/* Bottom Heart pulse */}
      <div style={{ marginTop: '1.2rem', animation: 'heartBeat 1.4s infinite ease-in-out' }}>
        <Heart size={16} fill="#c5a059" stroke="#c5a059" />
      </div>

    </div>
  );
}
