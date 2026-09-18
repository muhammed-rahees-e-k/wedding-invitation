import React from 'react';

export default function HeaderHero() {
  return (
    <section className="inv-section-header">
      {/* Top Header Text with Side Padding */}
      <div className="header-text-block">
        <h1 className="header-names">
          <span>Arshad</span>
          <span className="ampersand">&amp;</span>
          <span>Athika</span>
        </h1>
      </div>

      {/* Edge-to-Edge 100% Full Width Hero Couple Photo */}
      <div className="hero-photo-fullwidth">
        <img 
          src="/images/rishu.png" 
          alt="Arshad & Athika" 
          className="hero-photo"
        />
      </div>

      {/* Bottom Divider */}
      <div className="header-text-block">
        {/* Heart Flourish Divider */}
        <div className="section-divider" style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>
          <svg width="120" height="20" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10 Q 30 0, 50 10 T 60 10" stroke="#2b231f" strokeWidth="0.8" fill="none" />
            <path d="M60 10 Q 70 20, 90 10 T 120 10" stroke="#2b231f" strokeWidth="0.8" fill="none" />
            <path d="M60 7 C58 4, 54 5, 54 8 C54 11, 60 15, 60 15 C60 15, 66 11, 66 8 C66 5, 62 4, 60 7 Z" fill="#2b231f" />
          </svg>
        </div>
      </div>
    </section>
  );
}
