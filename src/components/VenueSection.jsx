import React from 'react';
import { MapPin } from 'lucide-react';

export default function VenueSection({ onOpenMap }) {
  return (
    <section className="inv-section" style={{ paddingTop: '1.5rem', paddingBottom: '2.5rem' }}>
      <h2 className="month-title" style={{ letterSpacing: '2px' }}>
        WHERE EVERYTHING WILL HAPPEN
      </h2>

      {/* Heart Separator */}
      <div className="section-divider" style={{ margin: '0.4rem auto 1.2rem auto' }}>
        <div className="divider-line" style={{ width: '25px' }}></div>
        <span style={{ fontSize: '8px' }}>♥</span>
        <div className="divider-line" style={{ width: '25px' }}></div>
      </div>

      <div style={{ fontFamily: 'var(--font-serif)', lineHeight: '1.5', color: 'var(--text-primary)' }}>
        <p style={{ fontSize: '1.25rem', fontWeight: '500' }}>Maplewood Estate</p>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>123 Willow Lane</p>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>Greenfield, NY 12345</p>
      </div>

      {/* Hand-drawn Sketch Image */}
      <div className="venue-sketch-container">
        <img 
          src="/images/estate_sketch.jpg" 
          alt="Maplewood Estate Illustration" 
          className="venue-sketch"
        />
      </div>

      <button onClick={onOpenMap} className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
        <MapPin size={14} />
        OPEN MAP
      </button>
    </section>
  );
}
