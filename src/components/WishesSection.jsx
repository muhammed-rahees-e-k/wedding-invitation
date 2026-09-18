import React from 'react';

export default function WishesSection() {
  return (
    <section className="inv-section" style={{ paddingTop: '1.5rem', paddingBottom: '2rem' }}>
      <h2 className="month-title" style={{ letterSpacing: '3px' }}>WISHES</h2>

      {/* Heart Separator */}
      <div className="section-divider" style={{ margin: '0.4rem auto 1.5rem auto' }}>
        <div className="divider-line" style={{ width: '25px' }}></div>
        <span style={{ fontSize: '8px' }}>♥</span>
        <div className="divider-line" style={{ width: '25px' }}></div>
      </div>

      <div className="wishes-card">
        <h3 className="wishes-title">GIFTS</h3>
        <p className="wishes-body">
          Your presence is the greatest gift for us. If you wish to give a gift, monetary gifts or contributions are welcome and appreciated.
        </p>
      </div>

      <div className="wishes-card" style={{ marginBottom: 0 }}>
        <h3 className="wishes-title">A WISH</h3>
        <p className="wishes-body">
          We wish you love, joy and many beautiful moments. Thank you for being a part of our story.
        </p>
      </div>

      {/* Decorative Wavy Line with Heart at end */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        <svg width="220" height="24" viewBox="0 0 220 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 10 12 C 40 4, 80 20, 110 12 C 140 4, 180 20, 205 12" stroke="#2b231f" strokeWidth="0.8" fill="none" />
          <path d="M 205 12 C 203 10, 200 11, 200 13 C 200 15, 205 18, 205 18 C 205 18, 210 15, 210 13 C 210 11, 207 10, 205 12 Z" fill="#2b231f" />
        </svg>
      </div>
    </section>
  );
}
