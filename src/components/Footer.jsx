import React from 'react';
import './Footer.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por suscribirte a mi boletín técnico!');
    e.target.reset();
  };

  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Logo y descripción */}
          <div className="footer-col footer-col--brand">
            <a href="#" className="footer-logo">
              PC TECH
            </a>
            <div className="footer-logo-divider"></div>
            <p className="footer-brand-desc">
              Servicios profesionales de mantenimiento, reparación y armado de computadores con diagnóstico transparente y garantía a domicilio.
            </p>
          </div>

          {/* Enlaces importantes */}
          <div className="footer-col">
            <h3 className="footer-title">Enlaces Útiles</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Inicio</a>
              <a href="#servicios" className="footer-link">Servicios</a>
              <a href="#como-funciona" className="footer-link">Proceso</a>
              <a href="#faq" className="footer-link">FAQ</a>
              <a href="#quien-soy" className="footer-link">¿Quién Soy?</a>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="footer-col">
            <h3 className="footer-title">Contacto & Redes</h3>
            <div className="footer-links">
              <a href="https://wa.me/573137148566" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
              <a href="https://github.com/Miuted-wakeup" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            </div>
          </div>

          {/* Formulario de Suscripción */}
          <div className="footer-col footer-col--subscribe">
            <h3 className="footer-title">Boletín de Tips de PC</h3>
            <p className="footer-sub-desc">Recibe consejos rápidos para mantener tu computador al máximo.</p>
            <form onSubmit={handleSubmit} className="footer-subscribe-form">
              <input 
                type="email" 
                placeholder="Tu correo electrónico..." 
                className="footer-subscribe-input" 
                required 
              />
              <button type="submit" className="footer-subscribe-btn">Suscribirme</button>
            </form>
          </div>

        </div>

        <div className="footer-divider"></div>

        {/* Legal e Copyright */}
        <div className="footer-bottom">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} PC Tech. Todos los derechos reservados.
          </p>
          <div className="footer-legal">
            <a href="#" className="footer-link-small">Términos & Condiciones</a>
            <div className="footer-legal-divider"></div>
            <a href="#" className="footer-link-small">Política de Privacidad</a>
          </div>
        </div>

        {/* Título Gigante de Marca al Fondo */}
        <div className="footer-giant-brand-wrapper">
          <h1 className="footer-giant-brand">PCTECH</h1>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
