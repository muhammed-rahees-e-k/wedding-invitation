import React, { useEffect, useRef, useState } from 'react';

export default function AnimatedSection({ children, style = {}, className = '', animation = 'fade-in-section', delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const currentDom = domRef.current;
    if (currentDom) {
      observer.observe(currentDom);
    }

    return () => {
      if (currentDom) {
        observer.unobserve(currentDom);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} ${isVisible ? animation : ''}`}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        animationDelay: `${delay}ms`,
        transition: 'opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
      }}
    >
      {children}
    </div>
  );
}
