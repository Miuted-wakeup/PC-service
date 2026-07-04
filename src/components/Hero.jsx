import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-pc.png';

const Hero = ({ whatsappUrl }) => {
  return (
    <section className="hero" id="inicio">
      {/* Orbes decorativos de fondo */}
      <div className="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--2" aria-hidden="true"></div>
      
      <div className="hero__inner container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Servicio Técnico a Domicilio
          </div>
          
          <h1 className="hero__title">
            Devuélvele la<br />vida a tu <span className="text-gradient">PC</span>
          </h1>
          
          <p className="hero__subtitle">
            Mantenimiento profesional, armado custom y configuración de equipos. 
            Elimino la lentitud, los virus y llevo tu rendimiento al máximo.
          </p>

          <p className="hero__guarantee">
            🛡️ <strong>Solo pagas si queda bien.</strong> Diagnóstico incluido con el servicio.
          </p>
          
          <div className="hero__actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rainbow-btn-wrapper">
              <button className="rainbow-btn">💬 Solicitar Diagnóstico Gratis</button>
            </a>
            <a href="#servicios" className="hero__btn-ghost">
              Ver Servicios →
            </a>
          </div>
          
          {/* Stats rápidos para confianza inmediata */}
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">100+</span>
              <span className="hero__stat-label">PCs Reparados</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">⚡</span>
              <span className="hero__stat-label">Servicio Rápido</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">★</span>
              <span className="hero__stat-label">Garantizado</span>
            </div>
          </div>
        </div>
        
        <div className="hero__visual">
          <div className="hero__image-frame">
            <div className="hero__glow" aria-hidden="true"></div>
            <img 
              src={heroImage} 
              alt="PC Gamer de alto rendimiento con iluminación RGB" 
              className="hero__image"
              width="500"
              height="500" 
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
