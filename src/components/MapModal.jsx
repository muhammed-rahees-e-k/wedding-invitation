import React from 'react';
import { X, MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function MapModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.857640668476!2d76.2303536!3d11.198167000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6316c4dee0701%3A0x9eb85cc96b6a1603!2sTK%20Garden!5e0!3m2!1sen!2sin!4v1789723409819!5m2!1sen!2sin";
  const externalMapUrl = "https://www.google.com/maps/place/TK+Garden/@11.198167,76.2303536,17z";

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-gold)', marginBottom: '0.4rem' }}>
          <MapPin size={18} />
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            LOCATION & DIRECTIONS
          </span>
        </div>

        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
          TK Garden Auditorium
        </h3>

        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>
          Wandoor, Malappuram, Kerala
        </p>

        {/* Map Embed Frame */}
        <div style={{
          width: '100%',
          height: '280px',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          border: '1px solid rgba(43, 35, 31, 0.15)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          <iframe 
            title="TK Garden Auditorium Location Map"
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <a 
            href={externalMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: 0 }}
          >
            <Navigation size={14} />
            GET DIRECTIONS
          </a>
          
          <button 
            onClick={onClose}
            className="btn-outline"
            style={{ background: 'var(--text-primary)', color: '#f4efe6', marginTop: 0 }}
          >
            CLOSE MAP
          </button>
        </div>

      </div>
    </div>
  );
}
