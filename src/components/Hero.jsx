import React from 'react';
import './Hero.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, MessageCircle, Zap, Star } from 'lucide-react';
import useIsMobile from '../hooks/useIsMobile';

const Hero = ({ whatsappUrl }) => {
  const isMobile = useIsMobile();
  const { scrollY } = useScroll();
  
  // Animación Parallax (solo PC)
  const heroImageY = useTransform(scrollY, [0, 800], [0, 500]);
  const heroImageOpacity = useTransform(scrollY, [400, 800], [1, 0]);

  // Ya no usamos import heroImage from '../assets/hero-pc.png';
  // Usamos la imagen final del ensamble (0213.webp) desde la carpeta public
  const heroImage = "/frames/0213.webp";

  return (
    <section className="hero" id="inicio">
      <div className="hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Devuélvele la vida<br />a tu <span className="text-gradient">PC</span>
          </h1>
          
          <p className="hero__subtitle">
            Servicio técnico especializado y ensambles de alto rendimiento. Optimizamos tu equipo al máximo eliminando lentitud y cuellos de botella con precisión experta.
          </p>
          
          <div className="hero__stats">
            <div className="hero__stat-card">
              <span className="hero__stat-number">100<span className="text-small">+</span></span>
              <span className="hero__stat-label">REPARADOS</span>
            </div>
            <div className="hero__stat-card">
              <span className="hero__stat-number">24<span className="text-small">H</span></span>
              <span className="hero__stat-label">EXPRESS</span>
            </div>
            <div className="hero__stat-card">
              <span className="hero__stat-number">100<span className="text-small">%</span></span>
              <span className="hero__stat-label">GARANTÍA</span>
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
            initial={isMobile ? { opacity: 0, y: 50 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={isMobile ? {} : { y: heroImageY, opacity: heroImageOpacity }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
