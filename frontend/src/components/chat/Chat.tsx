
'use client';

import React, { useState } from 'react';

interface Message {
  id: number;
  sender: 'user' | 'assistant';
  text: string;
}

const QuickActionButton: React.FC<{ children: React.ReactNode; onClick: () => void }> = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full hover:bg-gray-300 transition-colors"
  >
    {children}
  </button>
);

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: messageText,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: messageText }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage: Message = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: data.answer,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

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
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
              <p className="text-sm">Pensando...</p>
            </div>
          </div>
        )}
        {error && (
          <div className="flex justify-start">
            <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg max-w-xs">
              <p className="text-sm">Error: {error}</p>
            </div>
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="mb-4">
        <p className="text-sm text-gray-500 mb-2">Consultas rápidas:</p>
        <div className="flex flex-wrap gap-2">
          <QuickActionButton onClick={() => sendMessage('Productos con bajo stock')}>
            Productos con bajo stock
          </QuickActionButton>
          <QuickActionButton onClick={() => sendMessage('Resumen de inventario')}>
            Resumen de inventario
          </QuickActionButton>
          <QuickActionButton onClick={() => sendMessage('Productos más vendidos')}>
            Productos más vendidos
          </QuickActionButton>
        </div>
      </div>

      {/* Input Area */}
      <form onSubmit={handleSubmit} className="flex items-center border-t pt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Escribe tu consulta..."
          disabled={loading}
          className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 disabled:opacity-50"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;
