import React, { useState, useRef } from 'react';
import './AboutMe.css';

const AboutMe = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const bounds = cardRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <section className="about-section" id="quien-soy">
      <div className="section-header">
        <span className="section-tagline">El Técnico Detrás de PC TECH</span>
        <h2 className="section-title">¿Quién Soy?</h2>
        <div className="section-divider"></div>
      </div>

      <div className="about-container">
        {/* Tarjeta Interactiva con seguimiento de mouse */}
        <div 
          ref={cardRef} 
          onMouseMove={handleMouseMove} 
          onMouseEnter={() => setVisible(true)} 
          onMouseLeave={() => setVisible(false)}
          className="about-card"
        >
          {/* Luz radial interactiva */}
          <div 
            className={`about-card__glow ${visible ? 'active' : ''}`}
            style={{ 
              top: position.y - 120, 
              left: position.x - 120, 
            }}
          />

          <div className="about-card__content">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop" 
              alt="Gustavo Salazar - Especialista en Hardware" 
              className="about-card__avatar" 
            />
            <h3 className="about-card__name">Gustavo Salazar</h3>
            <p className="about-card__role">Soporte Técnico & Integrador de PC</p>
            <p className="about-card__bio">
              Apasionado por la optimización extrema de sistemas, el armado de computadores gamer/estudio de alto rendimiento y el mantenimiento preventivo minucioso de hardware.
            </p>
            
            <div className="about-card__socials">
              <a href="https://github.com/Miuted-wakeup" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
