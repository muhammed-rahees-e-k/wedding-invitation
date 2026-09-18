import React from 'react';

export default function InvitationText() {
  return (
    <section className="inv-section" style={{ paddingTop: '1.5rem', paddingBottom: '1.5rem' }}>
      <p style={{
        fontFamily: 'var(--font-serif)',
        fontSize: '1.15rem',
        fontStyle: 'italic',
        lineHeight: '1.6',
        color: 'var(--text-primary)',
        maxWidth: '340px',
        margin: '0 auto'
      }}>
        "Together is a wonderful place to be. We cordially invite you to celebrate our union."
      </p>
    </section>
  );
}
