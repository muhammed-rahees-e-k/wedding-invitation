import React from 'react';
import { MapPin, Heart, Home, Utensils, Camera, Clock } from 'lucide-react';

export default function VenueSection({ onOpenMap }) {
  const scheduleEvents = [
    {
      time: '5:00 PM',
      title: 'WELCOME & GUEST ARRIVAL',
      Icon: Heart
    },
    {
      time: '5:30 PM',
      title: 'GRAND ENTRANCE OF COUPLE',
      Icon: Home
    },
    {
      time: '6:30 PM',
      title: 'DINNER & FEAST',
      Icon: Utensils
    },
    {
      time: '8:00 PM',
      title: 'BLESSINGS & PHOTO SESSION',
      Icon: Camera
    },
    {
      time: '9:30 PM',
      title: 'CLOSING & FAREWELL',
      Icon: Clock
    }
  ];

  return (
    <section className="inv-section" style={{ paddingTop: '1.5rem', paddingBottom: '3rem' }}>
      
      {/* Top Location Marker Icon */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem', color: '#211915' }}>
        <MapPin size={22} strokeWidth={1.5} />
      </div>

      {/* Script Title */}
      <h2 style={{
        fontFamily: 'var(--font-script)',
        fontSize: '2.8rem',
        fontWeight: '400',
        lineHeight: '1.1',
        color: 'var(--text-primary)',
        margin: '0.2rem 0'
      }}>
        Evening Reception
      </h2>

      {/* Subtitle Time */}
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1rem',
        fontStyle: 'italic',
        color: 'var(--text-secondary)',
        marginBottom: '1rem'
      }}>
        5:00 PM Onwards
      </p>

      {/* Venue Name & Location */}
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: '1.05rem',
          letterSpacing: '2.5px',
          textTransform: 'uppercase',
          fontWeight: '600',
          color: 'var(--text-primary)',
          marginBottom: '0.3rem'
        }}>
          TK GARDEN AUDITORIUM
        </h3>

        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1rem',
          fontStyle: 'italic',
          color: 'var(--text-secondary)'
        }}>
          Wandoor, Kerala
        </p>
      </div>

      {/* TK Garden Auditorium Photo */}
      <div style={{
        width: '100%',
        maxWidth: '360px',
        margin: '0 auto 1.5rem auto',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(33, 25, 21, 0.1)'
      }}>
        <img 
          src="/images/tk-garden.jpg" 
          alt="TK Garden Auditorium Wandoor" 
          style={{
            width: '100%',
            height: '220px',
            objectFit: 'cover',
            display: 'block'
          }}
        />
      </div>

      {/* Embedded Google Maps Location */}
      <div style={{
        width: '100%',
        maxWidth: '360px',
        height: '240px',
        margin: '0 auto 1.5rem auto',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid rgba(33, 25, 21, 0.15)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
      }}>
        <iframe 
          title="TK Garden Auditorium Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.857640668476!2d76.2303536!3d11.198167000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6316c4dee0701%3A0x9eb85cc96b6a1603!2sTK%20Garden!5e0!3m2!1sen!2sin!4v1789723409819!5m2!1sen!2sin"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      {/* View Location Map Pill Button */}
      <button 
        onClick={onOpenMap} 
        style={{
          backgroundColor: '#211915',
          color: '#ffffff',
          border: '1px solid #211915',
          borderRadius: '24px',
          padding: '0.7rem 1.8rem',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.78rem',
          fontWeight: '600',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(33, 25, 21, 0.25)',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'transform 0.2s ease, background-color 0.2s ease'
        }}
      >
        <MapPin size={14} />
        Open Full Map &amp; Directions
      </button>

      {/* Spacing & Event Schedule Header */}
      <div style={{ marginTop: '3.5rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-script)',
          fontSize: '3.2rem',
          fontWeight: '400',
          color: 'var(--text-primary)',
          marginBottom: '2rem'
        }}>
          Event Schedule
        </h2>

        {/* Vertical Dotted Timeline */}
        <div style={{
          position: 'relative',
          maxWidth: '320px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>

          {/* Central Vertical Dashed Line */}
          <div style={{
            position: 'absolute',
            top: '20px',
            bottom: '20px',
            left: '50%',
            width: '2px',
            borderLeft: '2px dashed rgba(33, 25, 21, 0.3)',
            transform: 'translateX(-50%)',
            zIndex: 1
          }}></div>

          {/* Timeline Nodes */}
          {scheduleEvents.map((item, index) => {
            const IconComponent = item.Icon;
            return (
              <div 
                key={index} 
                style={{
                  position: 'relative',
                  zIndex: 2,
                  marginBottom: index === scheduleEvents.length - 1 ? 0 : '2.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '100%'
                }}
              >
                {/* Circle Icon Badge */}
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #211915',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#211915',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                  marginBottom: '0.8rem'
                }}>
                  <IconComponent size={18} strokeWidth={1.5} />
                </div>

                {/* Event Card Box */}
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: '0.75rem 1.2rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0,0,0,0.02)',
                  border: '1px solid rgba(33, 25, 21, 0.12)',
                  width: '85%',
                  maxWidth: '280px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: '#8c857b',
                    marginBottom: '0.2rem'
                  }}>
                    {item.time}
                  </div>

                  <div style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                    color: '#2b231f'
                  }}>
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}
