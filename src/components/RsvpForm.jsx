import React from 'react';
import { MapPin, Navigation, Heart } from 'lucide-react';

export default function RsvpForm() {
  const mapsDirectionsUrl = "https://www.google.com/maps/place/TK+Garden/@11.198167,76.2303536,17z";

  return (
    <div className="rsvp-dark-section" style={{ backgroundColor: '#211915', color: '#f4efe6', padding: '3.5rem 1.8rem 3rem 1.8rem' }}>
      {/* Top SVG Wavy Divider */}
      <svg 
        className="rsvp-wavy-top" 
        viewBox="0 0 440 25" 
        preserveAspectRatio="none"
      >
        <path d="M0,0 C150,25 290,0 440,20 L440,25 L0,25 Z" fill="#211915" />
      </svg>

      <div style={{ maxWidth: '340px', margin: '0 auto', textAlign: 'center' }}>
        
        {/* MapPin Icon Badge */}
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          border: '1px solid rgba(244, 239, 230, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem auto',
          color: '#f4efe6'
        }}>
          <MapPin size={22} strokeWidth={1.5} />
        </div>

        <h2 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.25rem',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          fontStyle: 'italic',
          marginBottom: '0.4rem',
          color: '#f4efe6'
        }}>
          JOIN US AT THE VENUE
        </h2>

        {/* Heart Flourish */}
        <div className="section-divider" style={{ margin: '0.4rem auto 1.5rem auto', opacity: 0.5 }}>
          <div className="divider-line" style={{ width: '25px', backgroundColor: '#f4efe6' }}></div>
          <span style={{ fontSize: '8px', color: '#f4efe6' }}>♥</span>
          <div className="divider-line" style={{ width: '25px', backgroundColor: '#f4efe6' }}></div>
        </div>

        {/* Venue Information Box */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.04)',
          borderRadius: '8px',
          padding: '1.5rem 1.2rem',
          border: '1px solid rgba(244, 239, 230, 0.15)',
          marginBottom: '1.8rem'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            color: '#f4efe6',
            marginBottom: '0.4rem'
          }}>
            TK GARDEN AUDITORIUM
          </h3>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '1rem',
            color: '#d1c7bc',
            fontStyle: 'italic',
            marginBottom: '0.8rem'
          }}>
            Wandoor, Malappuram, Kerala
          </p>

          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: '#c5a059',
            fontWeight: '500'
          }}>
            18 OCTOBER 2026 | 5:00 PM ONWARDS
          </p>
        </div>

        {/* Navigation Directions Button */}
        <a 
          href={mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justify: 'center',
            gap: '8px',
            width: '100%',
            padding: '0.85rem 1.4rem',
            background: '#f4efe6',
            color: '#211915',
            borderRadius: '24px',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.78rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
            transition: 'all 0.25s ease'
          }}
        >
          <Navigation size={15} />
          GET DIRECTIONS ON GOOGLE MAPS
        </a>

        {/* Warm Note */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '0.95rem',
          fontStyle: 'italic',
          color: '#d1c7bc',
          marginTop: '1.6rem',
          lineHeight: '1.5'
        }}>
          We eagerly look forward to seeing you and celebrating this special occasion together!
        </p>

      </div>
    </div>
  );
}
