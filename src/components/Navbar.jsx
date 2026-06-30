import React, { useState, useEffect } from 'react';

const Navbar = () => {
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
  );
};

export default Navbar;
