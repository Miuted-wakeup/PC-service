import React, { useState } from 'react';
import efectivoImg from '../assets/efectivo.png';
import nequiImg from '../assets/nequi.png';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');

  const getUpdatedWhatsappUrl = () => {
    let methodText = 'Efectivo';
    if (paymentMethod === 'nequi') methodText = 'Nequi';
    if (paymentMethod === 'paypal') methodText = 'PayPal';

    const baseMessage = `Hola, me gustaría solicitar una revisión para mi PC. Mi método de pago preferido es: ${methodText}.`;
    return `https://wa.me/573137148566?text=${encodeURIComponent(baseMessage)}`;
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <motion.div 
          className="contact__card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact__corner contact__corner--tl" aria-hidden="true"></div>
          <div className="contact__corner contact__corner--br" aria-hidden="true"></div>
          
          <div className="contact__content">
            <h2 className="contact__title">¿Listo para optimizar tu equipo?</h2>
            <p className="contact__desc">
              Selecciona tu método de pago preferido y agenda tu orden de servicio de inmediato por WhatsApp.
            </p>

            {/* Selector de métodos de pago */}
            <div className="payment-container">
              <h3 className="payment-title">Método de Pago Preferido</h3>
              
              <div className="payment-options">
                <label className="payment-option">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={() => setPaymentMethod('cash')}
                    className="payment-radio"
                  />
                  <span className="payment-label">Efectivo / Contra Entrega</span>
                </label>
                
                <label className="payment-option">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="nequi"
                    checked={paymentMethod === 'nequi'}
                    onChange={() => setPaymentMethod('nequi')}
                    className="payment-radio"
                  />
                  <span className="payment-label">Nequi</span>
                </label>
                
                <label className="payment-option">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    className="payment-radio"
                  />
                  <span className="payment-label">PayPal</span>
                </label>
              </div>

              <div className="payment-cards-logos">
                {/* Icono Efectivo */}
                <div className="payment-badge" title="Efectivo">
                  <img src={efectivoImg} alt="Efectivo" className="payment-logo-img" />
                  <span>Efectivo</span>
                </div>

                {/* Icono Nequi */}
                <div className="payment-badge payment-badge--nequi" title="Nequi">
                  <img src={nequiImg} alt="Nequi" className="payment-logo-img" />
                  <span>Nequi</span>
                </div>

                {/* Icono PayPal */}
                <div className="payment-badge payment-badge--paypal" title="PayPal">
                  <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg" alt="PayPal" className="payment-logo-img" />
                  <span>PayPal</span>
                </div>
              </div>
            </div>

            <a href={getUpdatedWhatsappUrl()} target="_blank" rel="noopener noreferrer" className="rainbow-btn-wrapper contact__rainbow-btn">
              <button className="rainbow-btn"><MessageCircle size={18} /> Agendar Orden de Servicio</button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
