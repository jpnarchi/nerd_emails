import React, { useState } from 'react';

const TryNerdFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "¿Qué es Nerd Assistant?",
      answer: "Nerd Assistant es una inteligencia artificial avanzada diseñada para ayudarte con tareas cotidianas, responder preguntas, generar contenido y analizar datos, todo a través de una interfaz conversacional intuitiva."
    },
    {
      question: "¿Cómo puedo empezar a usar Nerd?",
      answer: "Puedes comenzar con nuestro plan gratuito registrándote en nuestra plataforma. Una vez dentro, tendrás acceso inmediato a las funcionalidades básicas de Nerd Assistant."
    },
    {
      question: "¿Qué diferencia a Nerd de otras IA?",
      answer: "Nerd se destaca por su capacidad para entender el contexto, aprender de tus interacciones y proporcionar respuestas personalizadas. Además, nuestro enfoque en la accesibilidad hace que la tecnología avanzada esté al alcance de todos."
    },
    {
      question: "¿Puedo integrar Nerd con mis herramientas existentes?",
      answer: "Sí, Nerd ofrece integraciones con diversas herramientas y plataformas populares. El número de integraciones disponibles depende del plan que elijas."
    },
    {
      question: "¿Mis datos están seguros con Nerd?",
      answer: "La privacidad y seguridad son prioridades para nosotros. Utilizamos encriptación de extremo a extremo y no compartimos tus datos con terceros. Además, puedes solicitar la eliminación de tus datos en cualquier momento."
    }
  ];

  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Preguntas frecuentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-black border border-gray-800 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <svg 
                  className={`w-5 h-5 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TryNerdFAQ;