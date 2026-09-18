import React, { useState } from 'react';
import HeaderHero from './components/HeaderHero';
import InvitationText from './components/InvitationText';
import CalendarSchedule from './components/CalendarSchedule';
import VenueSection from './components/VenueSection';
import DressCodeSection from './components/DressCodeSection';
import WishesSection from './components/WishesSection';
import ContactSection from './components/ContactSection';
import RsvpForm from './components/RsvpForm';
import FooterHero from './components/FooterHero';
import MapModal from './components/MapModal';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [viewMode, setViewMode] = useState('card'); // 'card' or 'full'

  return (
    <div className="desktop-wrapper">
      {/* Outer Watermark Branding seen on desktop template view */}
      <header className="desktop-watermark">
        <div>
          <h1 className="watermark-title">
            <span style={{ fontFamily: 'var(--font-script)', textTransform: 'none', fontSize: '2.8rem', marginRight: '0.4rem' }}>AreOne</span>
            WEDDING INVITATION WEBSITE
          </h1>
          <p className="watermark-subtitle">for the wedding</p>
        </div>

        <div className="watermark-meta">
          <p style={{ fontWeight: 600 }}>template 'love'</p>
          <p style={{ opacity: 0.8, fontSize: '0.75rem', marginTop: '2px' }}>all projects and templates</p>
          <p style={{ opacity: 0.8, fontSize: '0.75rem' }}>in the Telegram channel</p>
          <p style={{ fontWeight: 600, color: '#383029', marginTop: '4px' }}>@invite.vernad</p>
          
          <div className="view-toggle-bar">
            <button 
              className={`view-btn ${viewMode === 'card' ? 'active' : ''}`}
              onClick={() => setViewMode('card')}
            >
              Mobile View
            </button>
            <button 
              className={`view-btn ${viewMode === 'full' ? 'active' : ''}`}
              onClick={() => setViewMode('full')}
            >
              Full Width
            </button>
          </div>
        </div>
      </header>

      {/* Main Responsive Mobile Invitation Card */}
      <main 
        className="invitation-card linen-bg" 
        style={{ maxWidth: viewMode === 'full' ? '640px' : '440px' }}
      >
        <HeaderHero />
        <InvitationText />
        <CalendarSchedule />
        <VenueSection onOpenMap={() => setIsMapOpen(true)} />
        <DressCodeSection />
        <WishesSection />
        <ContactSection />
        <RsvpForm />
        <FooterHero />
      </main>

      {/* Interactive Floating Features & Modals */}
      <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
      <AudioPlayer />
    </div>
  );
}
