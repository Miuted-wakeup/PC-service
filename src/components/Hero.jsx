import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import { ShieldCheck, MessageCircle, Zap, Star, MapPin, Search, Clock } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';

const Hero = ({ whatsappUrl }) => {
  const isMobile = useIsMobile();

  // Ya no usamos import heroImage from '../assets/hero-pc.png';
  // Usamos la imagen final del ensamble (0213.webp) desde la carpeta public
  const heroImage = "/frames/0213.webp";

  return (
    <section className="hero" id="inicio">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            ¿Tu PC está <span className="text-gradient">lenta</span><br />o presenta fallas?
          </h1>
          
          <p className="hero__subtitle">
            Recupera el rendimiento de tu computador sin salir de casa. Diagnóstico transparente, mantenimiento profesional y atención a domicilio en Cali.
          </p>
          
          <div className="hero__stats">
            <div className="hero__stat-card hero__trust-card">
              <Search className="hero__trust-icon" size={24} />
              <span className="hero__trust-label">Diagnóstico<br/>Transparente</span>
            </div>
            <div className="hero__stat-card hero__trust-card">
              <MapPin className="hero__trust-icon" size={24} />
              <span className="hero__trust-label">Atención a<br/>Domicilio</span>
            </div>
            <div className="hero__stat-card hero__trust-card">
              <ShieldCheck className="hero__trust-icon" size={24} />
              <span className="hero__trust-label">Garantizado</span>
            </div>
          </div>

          <div className="hero__actions">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hero__btn-pill">
              Solicitar Diagnóstico
            </a>
          </div>
        </div>
        
        <div className="hero__visual">
          <motion.img 
            src={heroImage} 
            alt="PC Gamer armado y de alto rendimiento" 
            className="hero__image"
            width="500"
            height="500" 
            loading="eager"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Micro-barra de confianza */}
      <div className="hero__trust-bar">
        <div className="trust-bar__item">
          <MapPin size={16} className="trust-bar__icon" />
          <span>Atención a domicilio en Cali</span>
        </div>
        <div className="trust-bar__item">
          <Star size={16} className="trust-bar__icon" />
          <span>+15 computadores reparados</span>
        </div>
        <div className="trust-bar__item">
          <Zap size={16} className="trust-bar__icon" />
          <span>Respuesta en minutos</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
