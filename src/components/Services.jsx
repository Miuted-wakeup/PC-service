import React from 'react';
import './Services.css';

const services = [
  {
    id: 1,
    title: "Mantenimiento Preventivo",
    description: "Limpieza profunda, cambio de pasta térmica y optimización para evitar sobrecalentamientos y alargar la vida útil de tu equipo.",
    icon: "🔧",
    tag: "Más Solicitado",
    time: "~1-2 horas"
  },
  {
    id: 2,
    title: "Armado de PCs Custom",
    description: "Ensamblaje profesional de computadores para Gaming, Diseño o Trabajo. Te asesoramos en la compra de los mejores componentes.",
    icon: "🖥️",
    tag: "Gaming / Oficina",
    time: "~2-3 horas"
  },
  {
    id: 3,
    title: "Sistemas Operativos",
    description: "Instalación desde cero, formateo y actualización de Windows, solucionando problemas de lentitud y pantallazos azules.",
    icon: "💿",
    tag: "Windows 10 / 11",
    time: "~2 horas"
  },
  {
    id: 4,
    title: "Software y Activaciones",
    description: "Instalación y configuración de Office, Antivirus, y cualquier programa esencial para que empieces a trabajar de inmediato.",
    icon: "⚙️",
    tag: "Microsoft Office",
    time: "~30-60 min"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <div className="services__header">
          <div className="section-divider"></div>
          <h2 className="services__title">
            Servicios <span className="text-gradient">Especializados</span>
          </h2>
          <p className="services__subtitle">
            Soluciones rápidas y efectivas para que tu tecnología nunca se detenga.
          </p>
        </div>
        
        <div className="services__grid">
          {services.map((service, index) => (
            <article 
              key={service.id} 
              className="svc-card glass-panel"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="svc-card__top">
                <div className="svc-card__icon">{service.icon}</div>
                <span className="svc-card__tag">{service.tag}</span>
              </div>
              <h3 className="svc-card__title">{service.title}</h3>
              <p className="svc-card__desc">{service.description}</p>
              <div className="svc-card__footer">
                <span className="svc-card__time">⏱ {service.time}</span>
              </div>
              <div className="svc-card__shine" aria-hidden="true"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
