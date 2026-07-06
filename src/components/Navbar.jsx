import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#servicios', text: 'Servicios' },
    { href: '#como-funciona', text: 'Proceso' },
    { href: '#ventajas', text: 'Por Qué' },
    { href: '#faq', text: 'FAQ' },
    { href: '#contacto', text: 'Contacto' },
  ];

  return (
    <>
      <nav className={`main-nav${isScrolled ? ' scrolled' : ''}`}>
        {/* Barra de Progreso */}
        <div 
          className="nav-progress" 
          style={{ width: `${scrollProgress}%` }} 
          aria-hidden="true" 
        />

        <a href="#" className="nav-brand">PC TECH</a>

        {/* Enlaces de Escritorio */}
        <div className="nav-links-container">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link-wrapper">
              <span className="nav-link-main-text">{link.text}</span>
              <span className="nav-link-hover-text">{link.text}</span>
            </a>
          ))}
        </div>

        {/* Controles de la derecha (Hamburguesa en móvil) */}
        <div className="nav-controls">
          <button className="nav-cta-btn">Solicitar Diagnóstico</button>
          <button className="nav-icon-btn" aria-label="Buscar">
            <Search size={20} />
          </button>
          
          {/* Botón de Menú Móvil */}
          <button 
            className="nav-mobile-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Menú Móvil Desplegable */}
      <div className={`nav-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className="nav-mobile-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.text}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
