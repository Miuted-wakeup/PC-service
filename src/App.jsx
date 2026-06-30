import React from 'react';
import Navbar from './components/Navbar';
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
  return (
    <div className="app-container">
      <Navbar />

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
