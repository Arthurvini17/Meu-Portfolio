"use client";

import { useChat } from 'ai/react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const summarySentRef = useRef(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const sendSummary = useCallback(async () => {
    if (summarySentRef.current || messages.length < 2) return;
    summarySentRef.current = true;
    
    try {
      await fetch('/api/chat/summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages }),
      });
    } catch (err) {
      console.error('Erro ao enviar resumo:', err);
      summarySentRef.current = false;
    }
  }, [messages]);

  // Reseta o timer de inatividade (2 minutos) a cada nova mensagem
  useEffect(() => {
    if (messages.length > 1) {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
      
      inactivityTimerRef.current = setTimeout(() => {
        sendSummary();
      }, 2 * 60 * 1000); // 2 minutos
    }

    return () => {
      if (inactivityTimerRef.current) clearTimeout(inactivityTimerRef.current);
    };
  }, [messages, sendSummary]);

  const handleCloseChat = () => {
    setIsOpen(false);
    sendSummary();
  };

  return (
    <>
      {/* Botão flutuante */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-[#3BA9F4] text-white shadow-lg shadow-[#3BA9F4]/30 z-50 transition-colors hover:bg-[#2c8bc9] ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir chat com IA"
      >
        <FaRobot size={24} />
      </motion.button>

      {/* Janela de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-80 sm:w-96 h-[500px] max-h-[80vh] bg-[#1f1f1f] border border-[#374151] rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header do Chat */}
            <div className="flex items-center justify-between p-4 bg-[#050505] border-b border-[#374151]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3BA9F4]/20 flex items-center justify-center text-[#3BA9F4]">
                  <FaRobot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Nina</h3>
                  <p className="text-xs text-gray-400">Online e pronto para ajudar</p>
                </div>
              </div>
              <button
                onClick={handleCloseChat}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Fechar chat"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Área de Mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050505]/50">
              {messages.length === 0 && (
                <div className="text-center text-gray-400 text-sm mt-8">
                  Olá! Eu sou a Nina, IA assistente do Arthur. Como posso te ajudar a conhecê-lo melhor?
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm break-words whitespace-pre-wrap ${
                      m.role === 'user'
                        ? 'bg-[#3BA9F4] text-white rounded-br-sm'
                        : 'bg-[#374151] text-gray-100 rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#374151] text-gray-100 p-3 rounded-2xl rounded-bl-sm text-sm flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              )}
              {error && (
                <div className="flex justify-center">
                  <div className="bg-red-500/20 text-red-400 p-3 rounded-xl text-xs text-center border border-red-500/30">
                    Ocorreu um erro ao conectar com a API. Verifique suas chaves no .env.local e o terminal.
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Área */}
            <div className="p-4 bg-[#050505] border-t border-[#374151]">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <input
                  className="flex-1 bg-[#1f1f1f] text-white text-sm border border-[#374151] rounded-full px-4 py-2.5 focus:outline-none focus:border-[#3BA9F4] transition-colors"
                  value={input}
                  placeholder="Pergunte sobre as habilidades..."
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input?.trim()}
                  className="p-2.5 rounded-full bg-[#3BA9F4] text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2c8bc9] transition-colors flex-shrink-0"
                  aria-label="Enviar mensagem"
                >
                  <FaPaperPlane size={14} />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
