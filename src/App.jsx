import React, { useState, useEffect } from 'react';
import CreativeLoader from './components/CreativeLoader';
import AnimatedSection from './components/AnimatedSection';
import OpeningCover from './components/OpeningCover';
import HeaderHero from './components/HeaderHero';
import CoupleBanner from './components/CoupleBanner';
import InvitationText from './components/InvitationText';
import CalendarSchedule from './components/CalendarSchedule';
import VenueSection from './components/VenueSection';
import WishesSection from './components/WishesSection';
import ContactSection from './components/ContactSection';
import RsvpForm from './components/RsvpForm';
import FooterHero from './components/FooterHero';
import MapModal from './components/MapModal';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCoverOpen, setIsCoverOpen] = useState(false);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [viewMode, setViewMode] = useState('card'); // 'card' or 'full'

  useEffect(() => {
    // Initial Creative Loading Timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenInvitation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsCoverOpen(true);
      setIsLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Creative Preloader Screen */}
      {isLoading && <CreativeLoader />}

      <div className="desktop-wrapper" style={{ padding: isCoverOpen ? '2rem 1rem' : 0 }}>
        
        {!isCoverOpen ? (
          /* Opening Landing Cover Page */
          <div className="invitation-card" style={{ maxWidth: viewMode === 'full' ? '640px' : '440px' }}>
            <OpeningCover onOpen={handleOpenInvitation} />
          </div>
        ) : (
          /* Main Website Content after opening */
          <>
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
              <AnimatedSection animation="fade-in-scale">
                <HeaderHero />
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <CoupleBanner />
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <InvitationText />
              </AnimatedSection>

              <AnimatedSection delay={250}>
                <CalendarSchedule />
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <VenueSection onOpenMap={() => setIsMapOpen(true)} />
              </AnimatedSection>

              <AnimatedSection delay={350}>
                <WishesSection />
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <ContactSection />
              </AnimatedSection>

              <AnimatedSection delay={450}>
                <RsvpForm />
              </AnimatedSection>

              <AnimatedSection delay={500}>
                <FooterHero />
              </AnimatedSection>
            </main>

            {/* Interactive Floating Features & Modals */}
            <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
            <AudioPlayer />
          </>
        )}

      </div>
    </>
  );
}
