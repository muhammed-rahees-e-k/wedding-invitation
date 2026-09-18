import React from 'react';

export default function FooterHero() {
  return (
    <div style={{ backgroundColor: 'var(--bg-cream)', position: 'relative' }}>
      
      {/* Wavy transition from Dark RSVP to Cream Footer */}
      <svg 
        className="footer-wavy-transition" 
        viewBox="0 0 440 30" 
        preserveAspectRatio="none"
      >
        <path d="M0,0 L440,0 L440,10 C290,30 150,0 0,25 Z" fill="var(--accent-dark)" />
      </svg>

      <section className="inv-section" style={{ paddingTop: '2.5rem', paddingBottom: '3.5rem', textAlign: 'center' }}>
        
        {/* Crimson Heart Icon */}
        <div className="footer-heart" style={{ marginBottom: '0.8rem' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="#8b262a" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        {/* Script Title */}
        <h2 style={{
          fontFamily: 'var(--font-script)',
          fontSize: '3.4rem',
          color: 'var(--text-primary)',
          fontWeight: '400',
          lineHeight: '1.1',
          margin: '0.2rem 0 0.5rem 0'
        }}>
          Thank You
        </h2>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '0.82rem',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
          marginBottom: '1.4rem',
          fontWeight: '600'
        }}>
          FOR BEING A PART OF OUR SPECIAL DAY
        </p>

        {/* Message Body */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.08rem',
          fontStyle: 'italic',
          color: 'var(--text-secondary)',
          maxWidth: '330px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          "Your presence, warm prayers, and blessings fill our hearts with endless joy as we begin our journey together."
        </p>

        {/* Heart Flourish Divider */}
        <div className="section-divider" style={{ marginTop: '2rem' }}>
          <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q 30 0, 50 10 T 60 10" stroke="#2b231f" strokeWidth="0.8" fill="none" />
            <path d="M60 10 Q 70 20, 90 10 T 120 10" stroke="#2b231f" strokeWidth="0.8" fill="none" />
            <path d="M60 7 C58 4, 54 5, 54 8 C54 11, 60 15, 60 15 C60 15, 66 11, 66 8 C66 5, 62 4, 60 7 Z" fill="#2b231f" />
          </svg>
        </div>

      </section>

    </div>
  );
}
