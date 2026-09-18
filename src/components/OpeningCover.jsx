import React from 'react';
import { Mail, Sparkles, Heart } from 'lucide-react';

export default function OpeningCover({ onOpen }) {
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#211915',
      background: 'radial-gradient(circle at center, #2e231d 0%, #1c1512 70%, #120e0c 100%)',
      color: '#f4efe6',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
      zIndex: 999
    }}>
      {/* Decorative Gold Arch Border Frame */}
      <div style={{
        position: 'absolute',
        top: '1rem',
        bottom: '1rem',
        left: '1rem',
        right: '1rem',
        border: '1px solid rgba(197, 160, 89, 0.3)',
        borderRadius: '8px',
        pointerEvents: 'none'
      }}></div>

      {/* Decorative Inner Corner Accents */}
      <div style={{
        position: 'absolute',
        top: '1.6rem',
        left: '1.6rem',
        width: '18px',
        height: '18px',
        borderTop: '2px solid #c5a059',
        borderLeft: '2px solid #c5a059',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '1.6rem',
        right: '1.6rem',
        width: '18px',
        height: '18px',
        borderTop: '2px solid #c5a059',
        borderRight: '2px solid #c5a059',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '1.6rem',
        left: '1.6rem',
        width: '18px',
        height: '18px',
        borderBottom: '2px solid #c5a059',
        borderLeft: '2px solid #c5a059',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '1.6rem',
        right: '1.6rem',
        width: '18px',
        height: '18px',
        borderBottom: '2px solid #c5a059',
        borderRight: '2px solid #c5a059',
        pointerEvents: 'none'
      }}></div>

      {/* Main Cover Container */}
      <div style={{
        maxWidth: '360px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        position: 'relative',
        zIndex: 2
      }}>

        {/* Top Gold Crest / Heart Symbol */}
        <div style={{
          color: '#c5a059',
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '8px'
        }}>
          <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.4)' }}></div>
          <Heart size={18} fill="#c5a059" stroke="#c5a059" />
          <div style={{ width: '30px', height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.4)' }}></div>
        </div>

        {/* Bismillah Arabic Calligraphy */}
        <div>
          <h1 style={{
            fontFamily: "'Traditional Arabic', 'Amiri', 'Scheherazade New', 'Amiri Quran', serif",
            fontSize: 'clamp(1.7rem, 6vw, 2.2rem)',
            fontWeight: '600',
            color: '#c5a059',
            lineHeight: '1.8',
            direction: 'rtl',
            margin: '0 0 0.4rem 0',
            letterSpacing: '0px',
            textShadow: '0 2px 8px rgba(197, 160, 89, 0.25)'
          }}>
            بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
          </h1>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.98rem',
            fontStyle: 'italic',
            color: '#e5ddd2',
            opacity: 0.9,
            lineHeight: '1.4'
          }}>
            "In the name of Allah, the Most Gracious, the Most Merciful"
          </p>
        </div>

        {/* Diamond Flourish Separator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '12px',
          color: '#c5a059',
          margin: '0.4rem 0'
        }}>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.4)' }}></div>
          <span style={{ fontSize: '10px', color: '#c5a059' }}>◆</span>
          <div style={{ width: '40px', height: '1px', backgroundColor: 'rgba(197, 160, 89, 0.4)' }}></div>
        </div>

        {/* Surah Ar-Rum Quranic Verse */}
        <div style={{ padding: '0 0.5rem' }}>
          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1.08rem',
            fontStyle: 'italic',
            lineHeight: '1.7',
            color: '#f4efe6',
            marginBottom: '1rem',
            fontWeight: '300'
          }}>
            "And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
          </p>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: '#c5a059',
            fontWeight: '600'
          }}>
            — Surah Ar-Rum (30:21)
          </p>
        </div>

        {/* Soft Gold Line Divider */}
        <div style={{
          width: '60px',
          height: '1px',
          backgroundColor: 'rgba(197, 160, 89, 0.4)',
          margin: '0.8rem 0'
        }}></div>

        {/* Enter Invitation Button */}
        <button
          onClick={onOpen}
          style={{
            backgroundColor: '#c5a059',
            background: 'linear-gradient(135deg, #c5a059 0%, #d4af66 50%, #b8934b 100%)',
            color: '#211915',
            border: 'none',
            borderRadius: '30px',
            padding: '0.9rem 2.2rem',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.82rem',
            fontWeight: '700',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            cursor: 'pointer',
            boxShadow: '0 6px 20px rgba(197, 160, 89, 0.35), 0 2px 6px rgba(0, 0, 0, 0.2)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            transition: 'transform 0.25 ease, boxShadow 0.25s ease'
          }}
        >
          <Mail size={16} strokeWidth={2} />
          <span>OPEN INVITATION</span>
        </button>

      </div>
    </div>
  );
}
