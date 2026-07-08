import React from 'react';
import './WebDevPromo.css';
import { Code, Zap, Smartphone, ExternalLink } from 'lucide-react';

const WebDevPromo = ({ whatsappUrl }) => {
  return (
    <section className="webdev-promo">
      <div className="container">
        <div className="webdev-promo__inner">
          <div className="webdev-promo__content">
            <span className="webdev-promo__tagline">¿Te gusta lo que ves?</span>
            <h2 className="webdev-promo__title">
              Lleva tu negocio al <span className="text-gradient">Siguiente Nivel</span>
            </h2>
            <p className="webdev-promo__desc">
              Esta página web no es una plantilla. Está diseñada desde cero para ser ultrarrápida, moderna y orientada a conseguir clientes. 
              <strong> También ofrezco servicios de Desarrollo Web para tu negocio.</strong>
            </p>
            
            <div className="webdev-promo__features">
              <div className="feature-item">
                <Zap size={20} className="feature-icon" />
                <span>Carga ultrarrápida</span>
              </div>
              <div className="feature-item">
                <Smartphone size={20} className="feature-icon" />
                <span>Diseño responsivo (Móvil)</span>
              </div>
              <div className="feature-item">
                <Code size={20} className="feature-icon" />
                <span>Diseño 100% personalizado</span>
              </div>
            </div>

            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="webdev-promo__btn"
            >
              Cotizar mi página web <ExternalLink size={18} />
            </a>
          </div>
          
          <div className="webdev-promo__visual" aria-hidden="true">
            <div className="code-window">
              <div className="code-window__header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <pre className="code-window__body">
                <code>
{`const YourBusiness = {
  onlinePresence: "Premium",
  loadingSpeed: "0.8s",
  sales: "Optimized",
  design: "Responsive"
};

if (needWebsite) {
  contact("Muted Tech");
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevPromo;
