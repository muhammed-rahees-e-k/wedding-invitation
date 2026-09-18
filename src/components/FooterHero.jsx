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
        <path d="M0,0 L440,0 L440,10 C290,30 150,0 0,25 Z" fill="#211915" />
      </svg>

      <section className="inv-section" style={{ paddingTop: '2rem', paddingBottom: '1.5rem' }}>
        
        {/* Dark Red / Crimson Heart Icon */}
        <div className="footer-heart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#8b262a" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>

        {/* Text */}
        <h2 className="footer-title">
          WE ARE WAITING FOR YOU,<br />DEAR ONES!
        </h2>

      </section>

      {/* Bottom Couple Photo */}
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img 
          src="/images/arshu.png" 
          alt="Rashad & Shifa Sibin portrait" 
          className="bottom-photo"
        />
      </div>

    </div>
  );
}
