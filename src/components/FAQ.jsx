import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    id: 1,
    question: "¿Cuánto cuesta el diagnóstico?",
    answer: "El diagnóstico tiene un costo inicial, pero si decides proceder con el servicio de reparación o mantenimiento, el valor del diagnóstico se descuenta completamente del precio final. Es decir, no pagas doble."
  },
  {
    id: 2,
    question: "¿Hacen servicio a domicilio?",
    answer: "¡Sí! Voy directamente a tu casa u oficina en el horario que te convenga. Todo el trabajo se realiza frente a ti para que veas exactamente lo que se hace en tu equipo."
  },
  {
    id: 3,
    question: "¿Cuánto tiempo demora el servicio?",
    answer: "Depende del tipo de servicio. Un mantenimiento preventivo tarda aproximadamente 1 a 2 horas. Una instalación de sistema operativo puede tomar de 2 a 3 horas. Te informo el tiempo estimado antes de empezar."
  },
  {
    id: 4,
    question: "¿Qué pasa si mi PC no tiene arreglo?",
    answer: "Si después del diagnóstico determino que tu equipo no es reparable o que la reparación no vale la pena, te asesoro completamente sin costo para que tomes la mejor decisión: reparar, actualizar componentes o adquirir un equipo nuevo."
  },
  {
    id: 5,
    question: "¿Los servicios tienen garantía?",
    answer: "Absolutamente. Todos los servicios incluyen garantía. Si algo no queda bien, vuelvo a revisarlo sin costo adicional. Tu satisfacción es mi prioridad."
  }
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
      <button
        className="faq__question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="faq__question-text">{faq.question}</span>
        <span className="faq__toggle" aria-hidden="true">
          <span className="faq__toggle-line faq__toggle-line--h"></span>
          <span className="faq__toggle-line faq__toggle-line--v"></span>
        </span>
      </button>
      <div
        id={`faq-answer-${faq.id}`}
        className="faq__answer"
        role="region"
      >
        <p className="faq__answer-text">{faq.answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="faq__header">
          <div className="section-divider"></div>
          <h2 className="faq__title">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="faq__subtitle">
            Todo lo que necesitas saber antes de solicitar tu servicio.
          </p>
        </div>

        <div className="faq__list">
          {faqs.map(faq => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
