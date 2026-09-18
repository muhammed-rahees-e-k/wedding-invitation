import React from 'react';
import { X, MapPin, Navigation, ExternalLink } from 'lucide-react';

export default function MapModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const mapUrl = "https://maps.google.com/maps?q=Maplewood+Estate,Greenfield,NY&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const externalMapUrl = "https://www.google.com/maps/search/?api=1&query=Maplewood+Estate+123+Willow+Lane+Greenfield+NY";

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
          Maplewood Estate
        </h3>

        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>
          123 Willow Lane, Greenfield, NY 12345
        </p>

        {/* Map Embed Frame */}
        <div style={{
          width: '100%',
          height: '260px',
          borderRadius: '4px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          border: '1px solid rgba(43, 35, 31, 0.15)',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          <iframe 
            title="Maplewood Estate Location Map"
            src={mapUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
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
