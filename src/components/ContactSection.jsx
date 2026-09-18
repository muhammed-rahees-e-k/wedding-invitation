import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="inv-section" style={{ paddingTop: '1.5rem', paddingBottom: '3rem' }}>
      <h2 className="month-title" style={{ letterSpacing: '2.5px', marginBottom: '0.8rem' }}>
        WITH CARE FOR YOU
      </h2>

      <p className="dear-text" style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>
        If you have any questions about the wedding, our coordinator will be happy to help.
      </p>

      {/* Coordinator Contact */}
      <div style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
          <div className="contact-icon">
            <Phone size={12} />
          </div>
          <a 
            href="tel:+15559876543" 
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '0.5px' }}
          >
            +1 (555) 987-6543
          </a>
        </div>
        <div style={{ marginTop: '2px' }}>
          <a 
            href="mailto:wedding@rashadshifasibin.com" 
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            wedding@rashadshifasibin.com
          </a>
        </div>
      </div>

      {/* Heart Separator */}
      <div className="section-divider" style={{ margin: '1rem auto' }}>
        <div className="divider-line" style={{ width: '20px' }}></div>
        <span style={{ fontSize: '7px' }}>♥</span>
        <div className="divider-line" style={{ width: '20px' }}></div>
      </div>

      {/* Planner Contact */}
      <div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '0.9rem', color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '0.5rem' }}>
          For organizational inquiries, please contact our planner.
        </p>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--text-primary)' }}>
          <div className="contact-icon">
            <Mail size={12} />
          </div>
          <a 
            href="tel:+15553210987" 
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '0.5px' }}
          >
            +1 (555) 321-0987
          </a>
        </div>
        <div style={{ marginTop: '2px' }}>
          <a 
            href="mailto:planner@maplewoodestate.com" 
            style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none' }}
          >
            planner@maplewoodestate.com
          </a>
        </div>
      </div>
    </section>
  );
}
