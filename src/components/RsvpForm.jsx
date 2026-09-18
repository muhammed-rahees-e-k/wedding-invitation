import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Check, Heart } from 'lucide-react';

export default function RsvpForm() {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [attending, setAttending] = useState('yes');
  const [needTransport, setNeedTransport] = useState('no');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Trigger confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#f4efe6', '#c5a059', '#ffffff', '#8b262a']
      });
    } catch (err) {
      console.log('Confetti error:', err);
    }

    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="rsvp-dark-section">
      {/* Top SVG Wavy Divider */}
      <svg 
        className="rsvp-wavy-top" 
        viewBox="0 0 440 25" 
        preserveAspectRatio="none"
      >
        <path d="M0,0 C150,25 290,0 440,20 L440,25 L0,25 Z" fill="#211915" />
      </svg>

      <h2 className="rsvp-title">PLEASE COMPLETE THE FORM</h2>

      {/* Heart Flourish */}
      <div className="section-divider" style={{ margin: '0.4rem auto 1.8rem auto', opacity: 0.5 }}>
        <div className="divider-line" style={{ width: '25px', backgroundColor: '#f4efe6' }}></div>
        <span style={{ fontSize: '8px', color: '#f4efe6' }}>♥</span>
        <div className="divider-line" style={{ width: '25px', backgroundColor: '#f4efe6' }}></div>
      </div>

      {isSubmitted ? (
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '2rem 1.5rem',
          borderRadius: '4px',
          border: '1px solid rgba(244, 239, 230, 0.2)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'rgba(244, 239, 230, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem auto'
          }}>
            <Check size={24} color="#f4efe6" />
          </div>
          
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: '#f4efe6', marginBottom: '0.5rem', fontStyle: 'italic' }}>
            Thank You, {name}!
          </h3>
          
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', color: '#d1c7bc', lineHeight: '1.5', marginBottom: '1.5rem' }}>
            {attending === 'yes' ? (
              <>We have recorded your RSVP for <strong>{guests} {guests > 1 ? 'guests' : 'guest'}</strong>. We can't wait to celebrate with you!</>
            ) : (
              <>We will miss you! Thank you for letting us know.</>
            )}
          </p>

          <button 
            onClick={resetForm}
            style={{
              background: 'transparent',
              border: '1px solid rgba(244, 239, 230, 0.4)',
              color: '#f4efe6',
              padding: '0.5rem 1rem',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-sans)',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              cursor: 'pointer'
            }}
          >
            EDIT RSVP RESPONSE
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: '340px', margin: '0 auto' }}>
          
          {/* Guest Name */}
          <div className="form-group">
            <label className="form-label">First and last name</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Eleanor Vance"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
          </div>

          {/* Number of guests */}
          <div className="form-group">
            <label className="form-label">Number of guests</label>
            <div className="counter-widget">
              <button 
                type="button"
                className="counter-btn"
                onClick={() => setGuests(Math.max(1, guests - 1))}
              >
                −
              </button>
              <div className="counter-value">{guests}</div>
              <button 
                type="button"
                className="counter-btn"
                onClick={() => setGuests(guests + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Attendance Choice */}
          <div className="form-group" style={{ marginTop: '1.5rem' }}>
            <label className="form-label">Will you attend?</label>
            <div className="radio-group">
              <label className="radio-label" onClick={() => setAttending('yes')}>
                <span className={`radio-custom ${attending === 'yes' ? 'checked' : ''}`}></span>
                <span>Yes, with pleasure</span>
              </label>
              <label className="radio-label" onClick={() => setAttending('no')}>
                <span className={`radio-custom ${attending === 'no' ? 'checked' : ''}`}></span>
                <span>Regretfully decline</span>
              </label>
            </div>
          </div>

          {/* Transportation seat requirement */}
          <div className="form-group" style={{ marginTop: '1.5rem' }}>
            <label className="form-label">
              Do you require a seat on transportation or another service?
            </label>
            <div className="radio-group">
              <label className="radio-label" onClick={() => setNeedTransport('yes')}>
                <span className={`radio-custom ${needTransport === 'yes' ? 'checked' : ''}`}></span>
                <span>Yes</span>
              </label>
              <label className="radio-label" onClick={() => setNeedTransport('no')}>
                <span className={`radio-custom ${needTransport === 'no' ? 'checked' : ''}`}></span>
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn-submit">
            SEND
          </button>

        </form>
      )}
    </div>
  );
}
