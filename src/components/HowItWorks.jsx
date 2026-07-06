import React from 'react';
import './HowItWorks.css';
import { motion } from 'framer-motion';
import { MessageCircle, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    number: "01",
    title: "Escríbeme por WhatsApp",
    description: "Cuéntame qué problema tiene tu equipo o qué servicio necesitas. Te respondo en minutos.",
    icon: <MessageCircle size={32} strokeWidth={1.5} />,
    detail: "Sin compromiso"
  },
  {
    id: 2,
    number: "02",
    title: "Agendamos una visita",
    description: "Coordino una visita a tu domicilio en el horario que más te convenga. Diagnóstico incluido.",
    icon: <Calendar size={32} strokeWidth={1.5} />,
    detail: "A tu domicilio"
  },
  {
    id: 3,
    number: "03",
    title: "Tu PC queda como nuevo",
    description: "Realizo el trabajo frente a ti, te explico todo y solo pagas cuando quedes satisfecho.",
    icon: <CheckCircle size={32} strokeWidth={1.5} />,
    detail: "Garantizado"
  }
];

const HowItWorks = ({ whatsappUrl }) => {
  return (
    <section id="como-funciona" className="hiw">
      <div className="container">
        <motion.div 
          className="hiw__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider"></div>
          <h2 className="hiw__title">
            ¿Cómo <span className="text-gradient">funciona?</span>
          </h2>
          <p className="hiw__subtitle">
            Solicitar tu servicio es rápido, seguro y sin complicaciones.
          </p>
        </motion.div>

        <div className="hiw__steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <motion.div 
                className="hiw__step"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <span className="hiw__step-number">{step.number}</span>
                <div className="hiw__step-icon">{step.icon}</div>
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.description}</p>
                <span className="hiw__step-detail">{step.detail}</span>
              </motion.div>
              {index < steps.length - 1 && (
                <div className="hiw__connector" aria-hidden="true">
                  <div className="hiw__connector-line"></div>
                  <div className="hiw__connector-arrow">→</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <motion.div 
          className="hiw__guarantee"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="hiw__guarantee-icon"><ShieldCheck size={28} /></div>
          <div className="hiw__guarantee-text">
            <strong>Garantía total:</strong> Si procedes con el servicio, el diagnóstico no tiene costo adicional. 
            Solo pagas cuando tu equipo quede funcionando perfectamente.
          </div>
        </motion.div>

        <motion.div 
          className="hiw__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <MessageCircle size={18} /> Agendar mi servicio ahora
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
