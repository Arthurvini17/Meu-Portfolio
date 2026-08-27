"use client";

import { useChat } from 'ai/react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';

/** Perguntas iniciais: sem elas o visitante não sabe o que a Nina cobre. */
const SUGESTOES = [
  'Ele já trabalhou com IA?',
  'Qual o nível dele em React?',
  'Ele topa freela?',
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, append, isLoading, error } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const summarySentRef = useRef(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);

  // A seção de contato abre a Nina por evento, sem estado compartilhado.
  useEffect(() => {
    const abrir = () => setIsOpen(true);
    window.addEventListener('abrir-nina', abrir);
    return () => window.removeEventListener('abrir-nina', abrir);
  }, []);

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
      {/* Botão flutuante — rotulado, porque um robô sem legenda lê como bot de suporte */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 items-center gap-2.5 py-3.5 pl-4 pr-5 rounded-full bg-[#3BA9F4] text-[#050505] font-semibold shadow-lg shadow-[#3BA9F4]/30 z-50 transition-colors hover:bg-[#2c8bc9] ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Abrir conversa com a Nina, assistente de IA"
      >
        <FaRobot size={20} aria-hidden="true" />
        <span className="text-sm">Pergunte à Nina</span>
      </motion.button>

      {/* Janela de Chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Conversa com a Nina"
            className="fixed bottom-6 right-6 left-6 sm:left-auto sm:w-96 h-[500px] max-h-[75vh] bg-[#1f1f1f] border border-[#374151] rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            {/* Header do Chat */}
            <div className="flex items-center justify-between p-4 bg-[#050505] border-b border-[#374151]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#3BA9F4]/20 flex items-center justify-center text-[#3BA9F4]">
                  <FaRobot size={18} aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-white">Nina</h2>
                  <p className="text-xs text-gray-400">Assistente de IA do Arthur</p>
                </div>
              </div>
              <button
                onClick={handleCloseChat}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Fechar chat"
              >
                <FaTimes size={18} aria-hidden="true" />
              </button>
            </div>

            {/* Área de Mensagens */}
            <div
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#050505]/50"
              role="log"
              aria-live="polite"
              aria-label="Mensagens da conversa"
            >
              {messages.length === 0 && (
                <div className="mt-4 space-y-4">
                  <p className="text-sm text-center text-gray-400">
                    Olá! Eu sou a Nina, a IA do Arthur. Posso falar sobre a trajetória,
                    a stack e os projetos dele.
                  </p>
                  <div className="flex flex-col gap-2">
                    {SUGESTOES.map((pergunta) => (
                      <button
                        key={pergunta}
                        type="button"
                        onClick={() => append({ role: 'user', content: pergunta })}
                        className="px-3 py-2 text-sm text-left text-gray-200 transition-colors border rounded-xl border-[#374151] hover:border-[#3BA9F4] hover:text-white"
                      >
                        {pergunta}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm break-words whitespace-pre-wrap ${m.role === 'user'
                        ? 'bg-[#3BA9F4] text-[#050505] rounded-br-sm'
                        : 'bg-[#374151] text-gray-100 rounded-bl-sm'
                      }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#374151] text-gray-100 p-3 rounded-2xl rounded-bl-sm text-sm flex gap-1.5 items-center">
                    <span className="sr-only">Nina está digitando</span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:150ms]"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse [animation-delay:300ms]"></span>
                  </div>
                </div>
              )}

              {error && (
                <div className="flex justify-center">
                  <div className="bg-[#3BA9F4]/10 text-gray-200 p-3 rounded-xl text-xs text-center border border-[#3BA9F4]/30">
                    Estou fora do ar agora. Fale direto com o Arthur no{' '}
                    <a
                      href="https://wa.me/5581988548132"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline text-[#3BA9F4]"
                    >
                      WhatsApp
                    </a>
                    .
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Área */}
            <div className="p-4 bg-[#050505] border-t border-[#374151]">
              <form onSubmit={handleSubmit} className="flex items-center gap-2">
                <label htmlFor="nina-input" className="sr-only">
                  Pergunte alguma coisa à Nina
                </label>
                <input
                  id="nina-input"
                  className="flex-1 bg-[#1f1f1f] text-white text-sm border border-[#374151] rounded-full px-4 py-2.5 focus:border-[#3BA9F4] transition-colors"
                  value={input}
                  placeholder="Pergunte sobre a experiência dele..."
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input?.trim()}
                  className="p-2.5 rounded-full bg-[#3BA9F4] text-[#050505] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#2c8bc9] transition-colors flex-shrink-0"
                  aria-label="Enviar mensagem"
                >
                  <FaPaperPlane size={14} aria-hidden="true" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
