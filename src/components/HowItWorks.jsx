import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    id: 1,
    number: "01",
    title: "Escríbeme por WhatsApp",
    description: "Cuéntame qué problema tiene tu equipo o qué servicio necesitas. Te respondo en minutos.",
    icon: "💬",
    detail: "Sin compromiso"
  },
  {
    id: 2,
    number: "02",
    title: "Agendamos una visita",
    description: "Coordino una visita a tu domicilio en el horario que más te convenga. Diagnóstico incluido.",
    icon: "📅",
    detail: "A tu domicilio"
  },
  {
    id: 3,
    number: "03",
    title: "Tu PC queda como nuevo",
    description: "Realizo el trabajo frente a ti, te explico todo y solo pagas cuando quedes satisfecho.",
    icon: "✅",
    detail: "Garantizado"
  }
];

const HowItWorks = ({ whatsappUrl }) => {
  return (
    <section id="como-funciona" className="hiw">
      <div className="container">
        <div className="hiw__header">
          <div className="section-divider"></div>
          <h2 className="hiw__title">
            ¿Cómo <span className="text-gradient">funciona?</span>
          </h2>
          <p className="hiw__subtitle">
            Solicitar tu servicio es rápido, seguro y sin complicaciones.
          </p>
        </div>

        <div className="hiw__steps">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="hiw__step">
                <span className="hiw__step-number">{step.number}</span>
                <div className="hiw__step-icon">{step.icon}</div>
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.description}</p>
                <span className="hiw__step-detail">{step.detail}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="hiw__connector" aria-hidden="true">
                  <div className="hiw__connector-line"></div>
                  <div className="hiw__connector-arrow">→</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="hiw__guarantee">
          <div className="hiw__guarantee-icon">🛡️</div>
          <div className="hiw__guarantee-text">
            <strong>Garantía total:</strong> Si procedes con el servicio, el diagnóstico no tiene costo adicional. 
            Solo pagas cuando tu equipo quede funcionando perfectamente.
          </div>
        </div>

        <div className="hiw__cta">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
            💬 Agendar mi servicio ahora
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
