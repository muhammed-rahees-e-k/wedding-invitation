import React from 'react';
import { Heart } from 'lucide-react';

export default function WishesSection() {
  return (
    <section style={{ padding: '0 0.8rem 2.5rem 0.8rem' }}>
      <div style={{
        backgroundColor: '#211915',
        color: '#ffffff',
        borderRadius: '6px',
        padding: '3rem 1.8rem 3rem 1.8rem',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(33, 25, 21, 0.25)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* White Heart Icon */}
        <div style={{ marginBottom: '0.4rem' }}>
          <Heart size={26} fill="#ffffff" stroke="#ffffff" />
        </div>

        {/* Script Title */}
        <h2 style={{
          fontFamily: 'var(--font-script)',
          fontSize: '3.4rem',
          fontWeight: '400',
          color: '#ffffff',
          lineHeight: '1.1',
          margin: '0.2rem 0 1.2rem 0'
        }}>
          Warm Wishes
        </h2>

        {/* Message Body */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.1rem',
          lineHeight: '1.65',
          color: '#f4f7f0',
          maxWidth: '330px',
          margin: '0 auto',
          fontWeight: '300'
        }}>
          Your presence, prayers, and warm blessings are the greatest gifts to us as we begin our journey together.
        </p>

      </div>
    </section>
  );
}
