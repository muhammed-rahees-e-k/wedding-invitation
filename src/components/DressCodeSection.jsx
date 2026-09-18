import React, { useState } from 'react';

export default function DressCodeSection() {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    { name: 'Espresso', hex: '#2b211a', border: 'none' },
    { name: 'Taupe', hex: '#6e5d51', border: 'none' },
    { name: 'Warm Sand', hex: '#aa998a', border: 'none' },
    { name: 'Black Velvet', hex: '#161413', border: 'none' },
    { name: 'Linen Cream', hex: '#eae3d5', border: '1px solid rgba(0,0,0,0.1)' },
    { name: 'Champagne Silver', hex: '#d5d2cc', border: '1px solid rgba(0,0,0,0.1)' },
  ];

  return (
    <section className="inv-section" style={{ paddingTop: '1.5rem', paddingBottom: '2.5rem' }}>
      <h2 className="month-title" style={{ letterSpacing: '3px' }}>DRESS CODE</h2>
      
      <p className="dear-text" style={{ fontSize: '0.95rem', marginBottom: '1.2rem' }}>
        We kindly ask you to support the aesthetic of our wedding with your outfit in neutral colors.
      </p>

      {/* Ribbons hanging on string */}
      <div className="ribbon-container">
        <img 
          src="/images/dresscode_bows.jpg" 
          alt="Dress Code Ribbon Bows" 
          className="ribbon-img"
        />
      </div>

      {/* Interactive Color Palette Swatches */}
      <div style={{ marginTop: '1rem' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.65rem', letterSpacing: '1.5px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
          {selectedColor ? `PALETTE: ${selectedColor.name.toUpperCase()}` : 'RECOMMENDED COLOR PALETTE'}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', alignItems: 'center' }}>
          {colors.map((c, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedColor(c)}
              title={c.name}
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                backgroundColor: c.hex,
                border: c.border,
                cursor: 'pointer',
                boxShadow: selectedColor?.name === c.name ? '0 0 0 2px var(--bg-cream), 0 0 0 4px #2b231f' : '0 2px 5px rgba(0,0,0,0.15)',
                transition: 'all 0.2s ease',
                transform: selectedColor?.name === c.name ? 'scale(1.15)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
