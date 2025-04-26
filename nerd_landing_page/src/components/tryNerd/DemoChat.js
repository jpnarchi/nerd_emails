import React, { useState } from 'react';

const DemoChat = ({ demoPrompts }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    // Añadir mensaje del usuario
    const userMessage = { type: 'user', text: inputValue };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsLoading(true);
    
    // Simular respuesta de la IA después de un breve retraso
    setTimeout(() => {
      const aiResponse = { 
        type: 'ai', 
        text: `Gracias por tu mensaje. Esta es una demostración de Nerd Assistant. En una versión completa, recibirías una respuesta personalizada a: "${inputValue}"`
      };
      setMessages(prevMessages => [...prevMessages, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handlePromptClick = (prompt) => {
    setInputValue(prompt);
  };

  return (
    <section className="bg-gray-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Prueba Nerd ahora</h2>
        <p className="text-xl text-gray-300 mb-12 text-center">
          Interactúa con nuestra demo para experimentar el poder de Nerd.
        </p>
        
        <div className="bg-black rounded-2xl border border-gray-800 overflow-hidden">
          <div className="p-4 border-b border-gray-800 flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-gray-400 text-sm ml-2">Nerd Assistant Demo</span>
          </div>
          
          <div className="h-80 p-4 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-gray-400">
                  <svg className="w-12 h-12 mx-auto mb-4 text-[#95BF92]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <p>Escribe un mensaje o selecciona un prompt para comenzar</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div 
                    key={index} 
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-3/4 rounded-2xl px-4 py-3 ${
                        message.type === 'user' 
                          ? 'bg-[#95BF92] text-black' 
                          : 'bg-gray-800 text-white'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-800 rounded-2xl px-4 py-3">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 rounded-full bg-gray-500 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-800">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe un mensaje..."
                className="flex-grow bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#95BF92] focus:border-transparent"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button 
                type="submit"
                className="bg-[#95BF92] text-black px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                disabled={isLoading}
              >
                Enviar
              </button>
            </form>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {demoPrompts.map((prompt, index) => (
                <button
                  key={index}
                  className="bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-gray-700 transition-all"
                  onClick={() => handlePromptClick(prompt)}
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoChat;