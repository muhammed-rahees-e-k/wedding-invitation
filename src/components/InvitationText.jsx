import React from 'react';

export default function InvitationText() {
  return (
    <section className="inv-section" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
      <h2 className="dear-title">DEAR FAMILY AND FRIENDS!</h2>
      
      <p className="dear-text">
        We are so happy to invite you to share this meaningful day with us. 
        Your presence will make our wedding even more special.
      </p>

      <div style={{ marginTop: '1.8rem' }}>
        <p className="dear-signoff">With love,</p>
        <p className="dear-names">
          <span>Rashad</span>
          <span className="ampersand">&amp;</span>
          <span>Shifa Sibin</span>
        </p>
      </div>

      {/* Heart Separator */}
      <div className="section-divider" style={{ marginTop: '2rem' }}>
        <div className="divider-line" style={{ width: '30px' }}></div>
        <span style={{ fontSize: '8px' }}>♥</span>
        <div className="divider-line" style={{ width: '30px' }}></div>
      </div>
    </section>
  );
}
