import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LatestWorks from './components/LatestWorks';
import HowItWorks from './components/HowItWorks';
import ValueProposition from './components/ValueProposition';
import AboutMe from './components/AboutMe';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

const PHONE_NUMBER = "573137148566";
const DEFAULT_MESSAGE = "Hola, me gustaría solicitar una revisión para mi PC.";
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

function App() {
  const [isLightMode, setIsLightMode] = useState(() => {
    const saved = localStorage.getItem('isLightMode');
    return saved === 'true';
  });

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    localStorage.setItem('isLightMode', isLightMode);
    if (isLightMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <div className={`app-container ${isLightMode ? 'light-mode' : ''}`}>
      <Navbar isLightMode={isLightMode} toggleLightMode={toggleLightMode} />

      <main>
        <Hero whatsappUrl={WHATSAPP_URL} />
        <Services />
        <LatestWorks />
        <HowItWorks whatsappUrl={WHATSAPP_URL} />
        <ValueProposition />
        <AboutMe />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <a href={WHATSAPP_URL} className="whatsapp-floating" target="_blank" rel="noopener noreferrer" aria-label="Escríbeme por WhatsApp">
        <span className="whatsapp-float-icon">💬</span>
      </a>
    </div>
  );
}

export default App;
