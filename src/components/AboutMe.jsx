import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section className="about-section" id="quien-soy">
      <div className="container">
        <div className="about-grid-premium">
          {/* Columna Izquierda: Foto de perfil con marco blanco y badge cian superpuesto (cruzando columnas) */}
          <div className="about-visual-premium">
            <div className="about-photo-frame">
              <img 
                src="/avatar.jpg" 
                alt="Muted - Especialista en Hardware" 
                className="about-photo-premium" 
              />
              
              {/* Badge cian que se superpone abajo a la derecha */}
              <div className="about-badge-cyan">
                <div className="badge-cyan-title">@MUTED</div>
                <div className="badge-cyan-subtitle">
                  <span className="badge-line"></span>
                  TÉCNICO PRINCIPAL EN HARDWARE
                  <span className="badge-line"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Información técnica y estadísticas */}
          <div className="about-info-premium">
            <span className="about-tagline-orange">SOPORTE_TÉCNICO // CALI</span>
            
            <h2 className="about-title-giant">
              EL<br />ARTESANO
            </h2>
            
            <p className="about-quote-premium">
              "No solo reparo computadores. Diseño rendimiento absoluto. Cada equipo que sale de mi mesa es una manifestación de perfección técnica."
            </p>

            {/* Dos columnas de estadísticas alineadas */}
            <div className="about-stats-premium">
              <div className="stat-col">
                <span className="stat-val">4 Años</span>
                <span className="stat-lbl">Experiencia en Campo</span>
              </div>
              <div className="stat-col">
                <span className="stat-val">+100</span>
                <span className="stat-lbl">Equipos Optimizados</span>
              </div>
            </div>

            {/* Redes Sociales con SVGs Nativos */}
            <div className="about-socials-premium">
              <a href="https://github.com/Miuted-wakeup" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer" className="social-pill">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                  <path fillRule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/muted_wakeup" aria-label="X (Twitter)" title="X (Twitter)" target="_blank" rel="noopener noreferrer" className="social-pill">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://portafolio-tan-five-55.vercel.app" aria-label="Portafolio" title="Ver Portafolio" target="_blank" rel="noopener noreferrer" className="social-pill">
                <svg className="social-icon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
