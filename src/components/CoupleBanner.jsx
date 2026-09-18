import React from 'react';

export default function CoupleBanner() {
  return (
    <section style={{
      position: 'relative',
      width: '100%',
      backgroundColor: 'transparent',
      overflow: 'hidden',
      padding: '1rem 1rem 1rem 0',
      display: 'flex',
      alignItems: 'center',
      minHeight: '340px'
    }}>
      {/* Left side peeking couple photo */}
      <div style={{
        width: '55%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>
        <img 
          src="/images/arshad.png" 
          alt="Arshad & Athika" 
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '380px',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>

      {/* Right Content - Names */}
      <div style={{
        width: '45%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: '0.5rem'
      }}>
        <div style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h2 style={{
            fontFamily: 'var(--font-script)',
            fontSize: '3rem',
            fontWeight: '400',
            lineHeight: '1',
            color: 'var(--text-primary)',
            margin: 0
          }}>
            Arshad
          </h2>

          <span style={{
            fontFamily: 'var(--font-pinyon), var(--font-script)',
            fontSize: '1.8rem',
            lineHeight: '1.2',
            color: 'var(--text-primary)',
            opacity: 0.8,
            margin: '0.2rem 0'
          }}>
            &amp;
          </span>

          <h2 style={{
            fontFamily: 'var(--font-script)',
            fontSize: '3rem',
            fontWeight: '400',
            lineHeight: '1',
            color: 'var(--text-primary)',
            margin: 0
          }}>
            Athika
          </h2>
        </div>
      </div>
    </section>
  );
}
