import React from 'react';
import './Services.css';
import { motion } from 'framer-motion';
import { Wrench, Monitor, HardDrive, Settings, ShieldCheck, MessageCircle } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Mantenimiento Preventivo",
    description: "Limpieza profunda, cambio de pasta térmica y optimización para evitar sobrecalentamientos y alargar la vida útil de tu equipo.",
    icon: <Wrench size={32} strokeWidth={1.5} />,
    tag: "Más Solicitado",
    time: "~1-2 horas",
    price: "Desde $35.000"
  },
  {
    id: 2,
    title: "Armado de PCs Custom",
    description: "Ensamblaje profesional de computadores para Gaming, Diseño o Trabajo. Te asesoro en la compra de los mejores componentes.",
    icon: <Monitor size={32} strokeWidth={1.5} />,
    tag: "Gaming / Oficina",
    time: "~2-3 horas",
    price: "Desde $80.000"
  },
  {
    id: 3,
    title: "Sistemas Operativos",
    description: "Instalación desde cero, formateo y actualización de Windows, solucionando problemas de lentitud y pantallazos azules.",
    icon: <HardDrive size={32} strokeWidth={1.5} />,
    tag: "Windows 10 / 11",
    time: "~2 horas",
    price: "Desde $40.000"
  },
  {
    id: 4,
    title: "Software y Activaciones",
    description: "Instalación y configuración de Office, Antivirus, y cualquier programa esencial para que empieces a trabajar de inmediato.",
    icon: <Settings size={32} strokeWidth={1.5} />,
    tag: "Microsoft Office",
    time: "~30-60 min",
    price: null
  }
];

const Services = () => {
  const CUSTOM_WA_MESSAGE = "Hola, vi tu página web pero no encontré un servicio que describa exactamente mi problema. Quisiera saber si puedes ayudarme.";
  const customWhatsappUrl = `https://wa.me/573137148566?text=${encodeURIComponent(CUSTOM_WA_MESSAGE)}`;

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
        
        <motion.div 
          className="privacy-banner glass-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="privacy-banner__icon">
            <ShieldCheck size={40} color="var(--accent-cyan)" />
          </div>
          <div className="privacy-banner__content">
            <h3>Tu información está 100% segura</h3>
            <ul className="privacy-banner__list">
              <li>✔ No revisamos archivos personales</li>
              <li>✔ Tus contraseñas permanecen privadas</li>
              <li>✔ Respaldamos tu información antes de formatear</li>
            </ul>
          </div>
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
                <div className="svc-card__footer-right">
                  {service.price && <span className="svc-card__price">{service.price}</span>}
                  <a 
                    href={`https://wa.me/573137148566?text=${encodeURIComponent(`Hola, me interesa el servicio de ${service.title}`)}`}
                    className="svc-card__cta-btn" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Solicitar
                  </a>
                </div>
              </div>
              <div className="svc-card__shine" aria-hidden="true"></div>
            </motion.article>
          ))}
        </div>

        {/* Banner de ayuda personalizada */}
        <motion.div 
          className="services__custom-cta glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="custom-cta__content">
            <h3 className="custom-cta__title">¿Tu caso es diferente?</h3>
            <p className="custom-cta__desc">
              Escríbeme por WhatsApp y revisamos la mejor solución para tu equipo sin compromiso.
            </p>
          </div>
          <a 
            href={customWhatsappUrl} 
            className="custom-cta__btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} />
            <span>Revisar mi caso</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
