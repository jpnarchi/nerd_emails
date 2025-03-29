import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de suscripción
    console.log('Suscrito:', email);
    setEmail('');
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Mantente Actualizado
        </h2>
        <p className="text-xl mb-8 opacity-80">
          Suscríbete y recibe las últimas tendencias y ofertas exclusivas
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex">
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo electrónico"
            className="flex-grow px-4 py-3 text-black rounded-l-full"
            required
          />
          <button 
            type="submit"
            className="bg-white text-black px-6 py-3 rounded-r-full hover:bg-gray-200"
          >
            Suscribir
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;