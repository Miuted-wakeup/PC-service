import React from 'react';
import './LatestWorks.css';

const LatestWorks = () => {
  const works = [
    {
      id: 1,
      title: 'Ensambles de PC a Medida',
      description: 'Montaje profesional de PCs Gamer y estaciones de trabajo con gestión de cableado impecable y máximo flujo de aire.',
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800&h=450&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'Limpieza y Refrigeración',
      description: 'Mantenimiento preventivo completo, cambio de pasta térmica de alta calidad y optimización de refrigeración líquida y por aire.',
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&h=450&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'Soporte y Sistemas OS',
      description: 'Formateo SSD/HDD, instalación limpia de Windows y Linux, optimización de BIOS y eliminación completa de bloatware.',
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&h=450&auto=format&fit=crop',
    },
  ];

  return (
    <section className="works-section" id="trabajos">
      <div className="section-header">
        <span className="section-tagline">Galería de Proyectos Recientes</span>
        <h2 className="section-title">Nuestras Creaciones</h2>
        <div className="section-divider"></div>
        <p className="section-description">
          Una muestra visual de nuestro trabajo minucioso: cada ensamble y optimización se realiza con la máxima precisión y componentes premium.
        </p>
      </div>

      <div className="works-accordion">
        {works.map((work) => (
          <div key={work.id} className="works-card-wrapper">
            <img 
              src={work.image} 
              alt={work.title} 
              className="works-card__img" 
            />
            <div className="works-card__overlay">
              <h3 className="works-card__title">{work.title}</h3>
              <p className="works-card__desc">{work.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestWorks;
