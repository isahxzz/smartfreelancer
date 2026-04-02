'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Posso começar totalmente grátis?',
      a: 'Sim. O plano Starter é gratuito para sempre, com até 5 propostas por mês. Planos pagos têm 7 dias de trial sem cobrar.'
    },
    {
      q: 'Quanto tempo leva para criar uma proposta?',
      a: 'Média de 2 minutos. Você preenche cliente, serviço, preço e a proposta é gerada profissional, pronta para enviar.'
    },
    {
      q: 'Meus dados estão seguros?',
      a: 'Sim. Criptografia AES-256, backups diários automáticos, conformidade LGPD completa, infraestrutura AWS dedicada. Seus dados são seus.'
    },
    {
      q: 'Como funciona o suporte?',
      a: 'Suporte por email (todas) e Discord (resposta em até 2h para Professional+). Você fala com gente real, não com bot.'
    },
    {
      q: 'Posso cancelar quando quiser?',
      a: 'Claro. Cancele em 2 cliques, sem multa, sem emails, sem justificativa. Você não será cobrado novamente.'
    },
    {
      q: 'Funciona com ferramentas que já uso?',
      a: 'Sim. Integramos com Zapier, n8n, Gmail, WhatsApp, Stripe. Temos API pública para customizações.'
    }
  ];

  return (
    <section className="py-32 bg-black border-t border-white/10">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Dúvidas
          </h2>
          <p className="text-xl text-gray-400">
            Respondemos as perguntas mais comuns
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full text-left p-6 border border-white/10 rounded-lg hover:border-white/30 hover:bg-white/5 transition-all"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-white text-lg">
                  {faq.q}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>
              
              {openIdx === idx && (
                <p className="mt-4 text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
