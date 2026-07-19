import React from 'react';
import './WebDevPromo.css';
import { ExternalLink } from 'lucide-react';

const WebDevPromo = ({ whatsappUrl }) => {
  return (
    <section className="webdev-promo-new">
      {/* Banda diagonal con gradiente cian de nuestra paleta */}
      <div className="diagonal-strip">
        {/* Efecto de barrido de luz metálico continuo */}
        <div className="sweep-line"></div>
      </div>
      
      {/* Patrón decorativo de panal (Hexágonos) a la izquierda */}
      <div className="decor-svg decor-hexes" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" />
          <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" />
          <line x1="50" y1="1" x2="50" y2="20" />
          <line x1="95" y1="25" x2="80" y2="35" />
          <line x1="95" y1="75" x2="80" y2="65" />
          <line x1="50" y1="99" x2="50" y2="80" />
          <line x1="5" y1="75" x2="20" y2="65" />
          <line x1="5" y1="25" x2="20" y2="35" />
        </svg>
      </div>

      {/* Patrón decorativo de circuitos a la derecha */}
      <div className="decor-svg decor-circuit" aria-hidden="true">
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <rect x="35" y="35" width="30" height="30" rx="3" />
          <line x1="50" y1="35" x2="50" y2="10" />
          <circle cx="50" cy="10" r="3" />
          <line x1="65" y1="50" x2="90" y2="50" />
          <circle cx="90" cy="50" r="3" />
          <line x1="50" y1="65" x2="50" y2="90" />
          <circle cx="50" cy="90" r="3" />
          <line x1="35" y1="50" x2="10" y2="50" />
          <circle cx="10" cy="50" r="3" />
          <path d="M65,35 L80,20 L80,5" />
          <circle cx="80" cy="5" r="3" />
          <path d="M35,65 L20,80 L5,80" />
          <circle cx="5" cy="80" r="3" />
        </svg>
      </div>

      <div className="container">
        <div className="webdev-promo-new__content">
          <div className="webdev-promo-new__text">
            <span className="webdev-tag">INTEGRATED SOLUTIONS</span>
            <h2 className="webdev-title">¿BUSCAS PRESENCIA DIGITAL?</h2>
            <p className="webdev-desc">
              También desarrollamos plataformas web de alto rendimiento. Del hardware al código, cubrimos todo tu espectro tecnológico con precisión de ingeniería.
            </p>
          </div>
          
          <div className="webdev-promo-new__action">
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="webdev-promo__btn-adapted"
            >
              Cotizar mi página web <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevPromo;
