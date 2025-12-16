
import React from 'react';

const messages = [
  { id: 1, sender: 'user', text: 'Hola, ¿cuántos "Serum Facial Hidratante" quedan en stock?' },
  { id: 2, sender: 'assistant', text: '¡Hola! Quedan 42 unidades del "Serum Facial Hidratante" (SKU: SFH-001) en stock.' },
  { id: 3, sender: 'user', text: 'Perfecto, gracias.' },
];

const QuickActionButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <button className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-300 transition-colors">
        {children}
    </button>
);

const Chat: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Asistente IA</h2>
      
      {/* Message Area */}
      <div className="flex-grow space-y-4 overflow-y-auto mb-4 pr-2">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-2 rounded-lg ${
                msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mb-4">
          <p className="text-sm text-gray-500 mb-2">Consultas rápidas:</p>
          <div className="flex flex-wrap gap-2">
              <QuickActionButton>Productos con bajo stock</QuickActionButton>
              <QuickActionButton>Resumen de inventario</QuickActionButton>
              <QuickActionButton>Productos más vendidos</QuickActionButton>
          </div>
      </div>

      {/* Input Area */}
      <div className="flex items-center border-t pt-4">
        <input
          type="text"
          placeholder="Escribe tu consulta..."
          className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
