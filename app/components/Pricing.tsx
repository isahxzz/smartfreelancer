'use client';

import { Check, ArrowRight } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 'Grátis',
      description: 'Para testar a plataforma',
      cta: 'Começar',
      features: [
        'Até 5 propostas/mês',
        '1 template padrão',
        'Suporte por email',
        'Analytics básico',
        'Comunidade Discord'
      ],
      highlight: false
    },
    {
      name: 'Professional',
      price: 'R$ 49',
      period: '/mês',
      annual: 'ou R$ 490/ano',
      description: 'Para freelancers sérios',
      cta: 'Testar 7 dias',
      features: [
        'Propostas ilimitadas',
        '10 templates customizáveis',
        'Analytics completo',
        'Stripe + WhatsApp integrado',
        'Suporte prioritário (2h)',
        'Relatórios em PDF',
        'API para integrações'
      ],
      highlight: true
    },
    {
      name: 'Enterprise',
      price: 'Sob demanda',
      description: 'Para agências e times',
      cta: 'Conversar',
      features: [
        'Tudo do Professional',
        'Múltiplos usuários',
        'Permissões granulares',
        'Webhooks e integrações',
        'Dedicated account manager',
        'SLA garantido',
        'Customizações'
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Planos simples
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sem taxas ocultas. Cancele quando quiser. Sem contrato.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.highlight
                  ? 'border-white/40 bg-gradient-to-b from-white/10 to-white/5 md:scale-105 shadow-2xl shadow-blue-500/10'
                  : 'border-white/10 hover:border-white/20 hover:bg-white/5'
              }`}
            >
              {/* Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Mais Vendido
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <div className="text-4xl font-bold text-white">
                  {plan.price}
                </div>
                {plan.period && (
                  <div className="text-gray-400 text-sm">{plan.period}</div>
                )}
                {plan.annual && (
                  <div className="text-gray-500 text-xs mt-1">{plan.annual}</div>
                )}
              </div>

              {/* CTA */}
              <a
                href="#"
                className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 mb-8 ${
                  plan.highlight
                    ? 'bg-white text-black hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20'
                    : 'border border-white/20 text-white hover:bg-white/5 hover:border-white/40'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Features */}
              <div className="space-y-4">
                {plan.features.map((feature, fidx) => (
                  <div key={fidx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Nenhum cartão de crédito necessário para começar. Teste grátis o Starter ou 7 dias do Professional.
          </p>
        </div>
      </div>
    </section>
  );
}
