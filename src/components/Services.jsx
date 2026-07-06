import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { Wrench, Monitor, HardDrive, Settings } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Mantenimiento Preventivo",
    description: "Limpieza profunda, cambio de pasta térmica y optimización para evitar sobrecalentamientos y alargar la vida útil de tu equipo.",
    icon: <Wrench size={32} strokeWidth={1.5} />,
    tag: "Más Solicitado",
    time: "~1-2 horas"
  },
  {
    id: 2,
    title: "Armado de PCs Custom",
    description: "Ensamblaje profesional de computadores para Gaming, Diseño o Trabajo. Te asesoro en la compra de los mejores componentes.",
    icon: <Monitor size={32} strokeWidth={1.5} />,
    tag: "Gaming / Oficina",
    time: "~2-3 horas"
  },
  {
    id: 3,
    title: "Sistemas Operativos",
    description: "Instalación desde cero, formateo y actualización de Windows, solucionando problemas de lentitud y pantallazos azules.",
    icon: <HardDrive size={32} strokeWidth={1.5} />,
    tag: "Windows 10 / 11",
    time: "~2 horas"
  },
  {
    id: 4,
    title: "Software y Activaciones",
    description: "Instalación y configuración de Office, Antivirus, y cualquier programa esencial para que empieces a trabajar de inmediato.",
    icon: <Settings size={32} strokeWidth={1.5} />,
    tag: "Microsoft Office",
    time: "~30-60 min"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <motion.div 
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider"></div>
          <h2 className="services__title">
            Servicios <span className="text-gradient">Especializados</span>
          </h2>
          <p className="services__subtitle">
            Soluciones rápidas y efectivas para que tu tecnología nunca se detenga.
          </p>
        </motion.div>
        
        <div className="services__grid">
          {services.map((service, index) => (
            <motion.article 
              key={service.id} 
              className="svc-card glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
