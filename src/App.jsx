import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PCAssemblyAnimation from './components/PCAssemblyAnimation';
import Services from './components/Services';
import LatestWorks from './components/LatestWorks';
import HowItWorks from './components/HowItWorks';
import ValueProposition from './components/ValueProposition';
import AboutMe from './components/AboutMe';
import FAQ from './components/FAQ';
import WebDevPromo from './components/WebDevPromo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
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
        <PCAssemblyAnimation />
        <Services />
        <LatestWorks />
        <HowItWorks whatsappUrl={WHATSAPP_URL} />
        <ValueProposition />
        <AboutMe />
        <FAQ />
        <WebDevPromo whatsappUrl={WHATSAPP_URL} />
        <Contact />
      </main>

      <Footer />

      <a href={WHATSAPP_URL} className="whatsapp-floating" target="_blank" rel="noopener noreferrer" aria-label="Escríbeme por WhatsApp">
        <span className="whatsapp-float-icon"><MessageCircle size={28} /></span>
      </a>
    </div>
  );
}

export default App;
