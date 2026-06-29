import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import ValueProposition from './components/ValueProposition';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import './index.css';

const PHONE_NUMBER = "573137148566";
const DEFAULT_MESSAGE = "Hola, me gustaría solicitar una revisión para mi PC.";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      <nav className="main-nav">
        {/* Scroll Progress integrated inside Nav Pill */}
        <div 
          className="nav-progress" 
          style={{ width: `${scrollProgress}%` }} 
          aria-hidden="true" 
        />

        <a href="#" className="nav-brand">PC TECH</a>
        <a href="#servicios" className="nav-link">Servicios</a>
        <a href="#como-funciona" className="nav-link hide-mobile">Proceso</a>
        <a href="#ventajas" className="nav-link hide-mobile">Por Qué</a>
        <a href="#faq" className="nav-link">FAQ</a>
        <a href="#contacto" className="nav-link">Contacto</a>
      </nav>

      <main>
        <Hero whatsappUrl={WHATSAPP_URL} />
        <Services />
        <HowItWorks whatsappUrl={WHATSAPP_URL} />
        <ValueProposition />
        <FAQ />
      </main>

      <Contact whatsappUrl={WHATSAPP_URL} />

      <a href={WHATSAPP_URL} className="whatsapp-floating" target="_blank" rel="noopener noreferrer" aria-label="Escríbeme por WhatsApp">
        <span className="whatsapp-float-icon">💬</span>
      </a>
    </div>
  );
}

export default App;
