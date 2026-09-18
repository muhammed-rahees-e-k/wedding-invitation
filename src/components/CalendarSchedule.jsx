import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function CalendarSchedule() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2026-10-18T17:00:00');

    const updateTimer = () => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Rashad & Shifa Sibin's Wedding Reception");
    const details = encodeURIComponent("With the grace of Almighty Allah and the blessings of our families, we cordially invite you to celebrate our Wedding Reception!");
    const location = encodeURIComponent("TK Garden Auditorium, Wandoor, Kerala");
    const startDate = "20261018T170000Z";
    const endDate = "20261018T220000Z";
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  // October 2026 starts on Thursday (index 3: 0=Mon, 1=Tue, 2=Wed, 3=Thu)
  const emptyDays = ['', '', ''];
  const monthDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section style={{ padding: '0 0.8rem 2.5rem 0.8rem' }}>
      
      {/* Outer Main Section Box in original dark espresso theme */}
      <div style={{
        backgroundColor: '#211915',
        color: '#ffffff',
        borderRadius: '6px',
        padding: '2.5rem 1.4rem 2rem 1.4rem',
        textAlign: 'center',
        boxShadow: '0 10px 30px rgba(33, 25, 21, 0.25)',
        position: 'relative'
      }}>

        {/* Invitation Opening Text */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.08rem',
          lineHeight: '1.75',
          letterSpacing: '0.3px',
          color: '#f4f7f0',
          maxWidth: '340px',
          margin: '0 auto 1.8rem auto',
          fontWeight: '400'
        }}>
          With the grace of Almighty Allah and the blessings of our families, we cordially invite you to celebrate our Wedding Reception
        </p>

        {/* Soft Divider */}
        <div style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          margin: '1.8rem 0'
        }}></div>

        {/* Date Display Banner - Symmetrically Grid Centered */}
        <div style={{ margin: '1.5rem auto', width: '100%', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: '0.6rem',
            textAlign: 'center'
          }}>
            OCTOBER
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '320px',
            margin: '0 auto',
            width: '100%'
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.75rem, 3.2vw, 0.88rem)',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'right',
              paddingRight: '0.8rem'
            }}>
              SUNDAY
            </span>

            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.8rem, 11vw, 3.8rem)',
              fontStyle: 'italic',
              fontWeight: '400',
              lineHeight: '1',
              color: '#ffffff',
              textAlign: 'center',
              display: 'inline-block'
            }}>
              18
            </span>

            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(0.75rem, 3.2vw, 0.88rem)',
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'left',
              paddingLeft: '0.8rem'
            }}>
              2026
            </span>
          </div>
        </div>

        {/* Soft Divider */}
        <div style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          margin: '1.8rem auto'
        }}></div>

        {/* Countdown Header & Timer - Symmetrically Grid Centered */}
        <div style={{ margin: '1.8rem auto 1rem auto', width: '100%', textAlign: 'center' }}>
          <div style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.85)',
            marginBottom: '1rem',
            textAlign: 'center'
          }}>
            COUNTDOWN TO THE BIG DAY
          </div>

          {/* Countdown Numbers Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr auto 1fr auto 1fr',
            alignItems: 'center',
            justifyContent: 'center',
            maxWidth: '290px',
            margin: '0 auto',
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.4rem, 5.5vw, 1.8rem)',
            color: '#ffffff',
            fontWeight: '400'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div>{String(timeLeft.days).padStart(2, '0')}</div>
              <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px', textAlign: 'center' }}>DAYS</div>
            </div>
            
            <div style={{ opacity: 0.6, fontSize: '1.2rem', textAlign: 'center', paddingBottom: '14px' }}>:</div>

            <div style={{ textAlign: 'center' }}>
              <div>{String(timeLeft.hours).padStart(2, '0')}</div>
              <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px', textAlign: 'center' }}>HOURS</div>
            </div>

            <div style={{ opacity: 0.6, fontSize: '1.2rem', textAlign: 'center', paddingBottom: '14px' }}>:</div>

            <div style={{ textAlign: 'center' }}>
              <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px', textAlign: 'center' }}>MIN</div>
            </div>

            <div style={{ opacity: 0.6, fontSize: '1.2rem', textAlign: 'center', paddingBottom: '14px' }}>:</div>

            <div style={{ textAlign: 'center' }}>
              <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div style={{ fontSize: '0.62rem', fontFamily: 'var(--font-sans)', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.7)', marginTop: '2px', textAlign: 'center' }}>SEC</div>
            </div>
          </div>
        </div>

        {/* Inner Card for Calendar Grid with Warm Gold Accent Color */}
        <div style={{
          backgroundColor: '#2e251b',
          borderRadius: '8px',
          padding: '1.6rem 0.8rem 1.6rem 0.8rem',
          margin: '2rem 0 0.5rem 0',
          border: '1px solid rgba(197, 160, 89, 0.35)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.85rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#c5a059',
            fontWeight: '600',
            marginBottom: '0.2rem'
          }}>
            THE BIG DAY
          </h3>

          <p style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '0.95rem',
            fontStyle: 'italic',
            color: '#f4efe6',
            marginBottom: '1.2rem'
          }}>
            OCTOBER 2026
          </p>

          {/* Full October 2026 Calendar Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(7, 1fr)',
            gap: '8px 4px',
            maxWidth: '300px',
            margin: '0 auto',
            alignItems: 'center'
          }}>
            {/* Headers */}
            {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
              <div key={day} style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.62rem',
                letterSpacing: '1px',
                color: 'rgba(255, 255, 255, 0.7)',
                fontWeight: '600',
                paddingBottom: '4px'
              }}>
                {day}
              </div>
            ))}

            {/* Empty slots before Oct 1 */}
            {emptyDays.map((_, idx) => (
              <div key={`empty-${idx}`} />
            ))}

            {/* Month Days 1..31 */}
            {monthDays.map((num) => {
              const isTargetDay = num === 18;
              return (
                <div key={num} style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '0.95rem',
                  color: isTargetDay ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  {isTargetDay ? (
                    <div style={{
                      width: '32px',
                      height: '32px',
                      border: '1.5px solid #c5a059',
                      borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: '600',
                      boxShadow: '0 0 10px rgba(197, 160, 89, 0.4)',
                      position: 'relative'
                    }}>
                      <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#c5a059" 
                        strokeWidth="1.5"
                        style={{
                          position: 'absolute',
                          width: '32px',
                          height: '32px',
                          top: '-1px',
                          left: '-1px'
                        }}
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                      <span style={{ position: 'relative', zIndex: 2, color: '#c5a059' }}>{num}</span>
                    </div>
                  ) : (
                    num
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* Add to Calendar button inside card */}
        <button 
          onClick={handleAddToCalendar}
          style={{
            marginTop: '1.5rem',
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.4)',
            color: '#ffffff',
            padding: '0.6rem 1.4rem',
            fontSize: '0.7rem',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            borderRadius: '20px',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease'
          }}
        >
          <CalendarIcon size={13} />
          SAVE TO CALENDAR
        </button>

      </div>

    </section>
  );
}
