import React from 'react';
import './ValueProposition.css';
import { motion } from 'framer-motion';
import { Briefcase, ShieldCheck, Zap, HeartHandshake } from 'lucide-react';

const values = [
  {
    id: 1,
    title: "Experiencia Comprobada",
    description: "Años de experiencia en diagnóstico y solución de problemas técnicos complejos en todo tipo de equipos.",
    icon: <Briefcase size={32} strokeWidth={1.5} />,
    number: "01"
  },
  {
    id: 2,
    title: "Garantía de Servicio",
    description: "Cada mantenimiento y reparación cuenta con garantía. Tu equipo queda en perfectas condiciones, asegurado.",
    icon: <ShieldCheck size={32} strokeWidth={1.5} />,
    number: "02"
  },
  {
    id: 3,
    title: "Rapidez y Eficiencia",
    description: "Entiendo que tu PC es tu herramienta de trabajo o entretenimiento, por eso optimizo los tiempos de entrega.",
    icon: <Zap size={32} strokeWidth={1.5} />,
    number: "03"
  },
  {
    id: 4,
    title: "Atención Personalizada",
    description: "Te explico detalladamente qué necesita tu equipo y por qué, sin tecnicismos confusos.",
    icon: <HeartHandshake size={32} strokeWidth={1.5} />,
    number: "04"
  }
];

const ValueProposition = () => {
  return (
    <section id="ventajas" className="value">
      <div className="container">
        <motion.div 
          className="value__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-divider"></div>
          <h2 className="value__title">
            ¿Por qué <span className="text-gradient">elegirme?</span>
          </h2>
          <p className="value__subtitle">
            Compromiso total con la calidad y el rendimiento de tu equipo.
          </p>
        </motion.div>
        
        <div className="value__grid">
          {values.map((value, index) => (
            <motion.div 
              key={value.id} 
              className="val-item glass-panel"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span className="val-item__number">{value.number}</span>
              <div className="val-item__icon">{value.icon}</div>
              <div className="val-item__text">
                <h4 className="val-item__title">{value.title}</h4>
                <p className="val-item__desc">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
