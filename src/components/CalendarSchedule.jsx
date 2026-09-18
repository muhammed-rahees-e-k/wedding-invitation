import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

export default function CalendarSchedule() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const weddingDate = new Date('2026-05-24T11:00:00');

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
    const title = encodeURIComponent("Rashad & Shifa Sibin's Wedding");
    const details = encodeURIComponent("Join us to celebrate our wedding at Maplewood Estate!");
    const location = encodeURIComponent("Maplewood Estate, 123 Willow Lane, Greenfield, NY 12345");
    const startDate = "20260524T110000Z";
    const endDate = "20260524T190000Z";
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section className="inv-section" style={{ paddingTop: '1rem', paddingBottom: '3rem' }}>
      <h2 className="month-title">MAY 2026</h2>

      {/* Mini Calendar Grid */}
      <div className="calendar-grid">
        <div className="cal-day-header">MON</div>
        <div className="cal-day-header">TUE</div>
        <div className="cal-day-header">WED</div>
        <div className="cal-day-header">THU</div>
        <div className="cal-day-header">FRI</div>
        <div className="cal-day-header">SAT</div>
        <div className="cal-day-header">SUN</div>

        <div className="cal-day-num">18</div>
        <div className="cal-day-num">19</div>
        <div className="cal-day-num">20</div>
        <div className="cal-day-num">21</div>
        <div className="cal-day-num">22</div>
        <div className="cal-day-num">23</div>
        <div className="cal-day-num">
          <div className="cal-highlight-heart">24</div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div style={{
        background: 'rgba(43, 35, 31, 0.04)',
        padding: '0.8rem 1rem',
        borderRadius: '4px',
        maxWidth: '320px',
        margin: '0 auto 2.5rem auto',
        border: '1px solid rgba(43, 35, 31, 0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
          <Clock size={12} />
          <span>COUNTDOWN TO THE BIG DAY</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--text-primary)' }}>
          <div><strong>{timeLeft.days}</strong> <span style={{ fontSize: '0.65rem', display: 'block', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>Days</span></div>
          <div>:</div>
          <div><strong>{timeLeft.hours}</strong> <span style={{ fontSize: '0.65rem', display: 'block', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>Hours</span></div>
          <div>:</div>
          <div><strong>{timeLeft.minutes}</strong> <span style={{ fontSize: '0.65rem', display: 'block', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>Mins</span></div>
          <div>:</div>
          <div><strong>{timeLeft.seconds}</strong> <span style={{ fontSize: '0.65rem', display: 'block', textTransform: 'uppercase', fontFamily: 'var(--font-sans)', color: 'var(--text-muted)' }}>Secs</span></div>
        </div>
      </div>

      {/* Timeline Schedule */}
      <div style={{ position: 'relative', maxWidth: '300px', margin: '0 auto' }}>
        
        {/* SVG Wavy Line with Heart nodes */}
        <svg 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
          viewBox="0 0 300 360" 
          preserveAspectRatio="none"
        >
          <path 
            d="M 270 10 C 270 40, 190 40, 190 80 C 190 120, 175 140, 175 170 C 175 210, 210 230, 210 260 C 210 290, 250 300, 250 340" 
            stroke="#2b231f" 
            strokeWidth="0.8" 
            fill="none" 
            strokeDasharray="3 3"
          />
          
          {/* Nodes */}
          <circle cx="270" cy="10" r="3" fill="#2b231f" />
          <circle cx="190" cy="80" r="3" fill="#2b231f" />
          <circle cx="175" cy="170" r="3" fill="#2b231f" />
          <circle cx="210" cy="260" r="3" fill="#2b231f" />
          <circle cx="250" cy="340" r="3" fill="#2b231f" />
        </svg>

        {/* Schedule Items */}
        <div style={{ padding: '0 1rem' }}>

          <div style={{ textAlign: 'left', marginBottom: '2.5rem', width: '60%' }}>
            <div className="timeline-time">11:00</div>
            <div className="timeline-label">GUEST ARRIVAL</div>
          </div>

          <div style={{ textAlign: 'right', marginBottom: '2.5rem', width: '55%', marginLeft: 'auto' }}>
            <div className="timeline-time">13:00</div>
            <div className="timeline-label">LUNCH</div>
          </div>

          <div style={{ textAlign: 'left', marginBottom: '2.5rem', width: '50%' }}>
            <div className="timeline-time">15:00</div>
            <div className="timeline-label">CELEBRATION</div>
          </div>

          <div style={{ textAlign: 'right', marginBottom: '2.5rem', width: '65%', marginLeft: 'auto' }}>
            <div className="timeline-time">18:00</div>
            <div className="timeline-label">DINNER</div>
          </div>

          <div style={{ textAlign: 'left', width: '70%' }}>
            <div className="timeline-time">19:00</div>
            <div className="timeline-label">END OF THE EVENING</div>
          </div>

        </div>

      </div>

      {/* Add to calendar button */}
      <button 
        onClick={handleAddToCalendar}
        className="btn-outline"
        style={{ marginTop: '2.5rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
      >
        <CalendarIcon size={14} />
        SAVE TO CALENDAR
      </button>
    </section>
  );
}
