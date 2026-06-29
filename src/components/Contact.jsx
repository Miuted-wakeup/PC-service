import React from 'react';
import './Contact.css';

const Contact = ({ whatsappUrl }) => {
  return (
    <footer id="contacto" className="contact">
      <div className="container">
        <div className="contact__card">
          {/* Decorative corner accents */}
          <div className="contact__corner contact__corner--tl" aria-hidden="true"></div>
          <div className="contact__corner contact__corner--br" aria-hidden="true"></div>
          
          <div className="contact__content">
            <div className="section-divider"></div>
            <h2 className="contact__title">
              ¿Listo para optimizar<br />tu equipo?
            </h2>
            <p className="contact__desc">
              Contáctame hoy mismo por WhatsApp y recibe asesoría inmediata 
              para resolver cualquier problema o armar la PC de tus sueños.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="contact__btn">
              <span className="contact__btn-icon">💬</span>
              <span>Escríbeme al WhatsApp</span>
            </a>
          </div>
        </div>
        
        <div className="contact__footer">
          <p>&copy; {new Date().getFullYear()} PC Tech — Servicios de Computadores por Gustavo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
