import React, { useState } from 'react';

const ResourcesNewsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#0a1a0a] to-black text-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-800">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mantente actualizado</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Suscríbete a nuestro newsletter para recibir los últimos recursos, tutoriales y noticias sobre Nerd.
          </p>
        </div>
        
        {subscribed ? (
          <div className="bg-[#95BF92] bg-opacity-20 border border-[#95BF92] text-[#95BF92] p-4 rounded-lg text-center">
            ¡Gracias por suscribirte! Pronto recibirás nuestro newsletter.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-grow bg-black border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#95BF92] focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="bg-[#95BF92] text-black px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all whitespace-nowrap"
              >
                Suscribirme
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ResourcesNewsletter;
// DONE