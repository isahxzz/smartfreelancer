'use client';

import { Zap, CreditCard, BarChart3 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Zap,
      title: 'Crie em Segundos',
      description: 'Preencha 3 campos e gere uma proposta profissional. Sem templates genéricos, sem formatação manual.',
      metric: '2 min por proposta'
    },
    {
      icon: CreditCard,
      title: 'Receba Pagamentos',
      description: 'Integração com Stripe. Seu cliente aprova e paga direto. PIX, Cartão, Boleto - tudo suportado.',
      metric: 'Recebimento em minutos'
    },
    {
      icon: BarChart3,
      title: 'Acompanhe Tudo',
      description: 'Dashboard em tempo real com visualizações, análises e relatórios. Sem surpresas.',
      metric: 'Analytics completo'
    }
  ];

  return (
    <section id="como-funciona" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Como funciona
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Três passos simples para transformar seu fluxo de vendas
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx}
                className="group p-8 border border-white/10 rounded-2xl hover:border-white/30 transition-all hover:bg-white/5 cursor-pointer"
              >
                {/* Number */}
                <div className="text-6xl font-bold text-white/5 mb-4">0{idx + 1}</div>

                {/* Icon */}
                <div className="mb-6 inline-block p-3 bg-white/5 rounded-lg group-hover:bg-blue-900/30 transition-colors">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Metric */}
                <div className="text-sm text-blue-400 font-medium">
                  ✓ {step.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
