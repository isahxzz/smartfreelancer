'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f8fafc] overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9945ff]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-[800px] h-[800px] bg-[#c24eff]/20 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <section className="max-w-6xl mx-auto px-6 py-24 mt-12">
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Preços Simples e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080]">Transparentes</span>
          </h1>
          <p className="text-xl text-[rgba(248,250,252,0.84)] max-w-2xl mx-auto">
            Escolha o plano perfeito para seu negócio. Sem surpresas, sem contratos longos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              name: 'Starter', 
              price: 'R$ 0', 
              desc: 'Perfeito para testar',
              features: [
                '3 propostas/mês',
                '3 templates básicos',
                'Envio por email',
                'Analytics básicos',
                'Chat de suporte',
                'Sem cartão de crédito'
              ],
              cta: 'Começar grátis',
              ctaVariant: 'outline'
            },
            { 
              name: 'Professional', 
              price: 'R$ 49', 
              period: '/mês',
              desc: 'Para freelancers que faturam',
              features: [
                'Propostas ilimitadas',
                '15 templates premium',
                'Envio WhatsApp + Email',
                'Integração Stripe (5%)',
                'Automação com Zapier',
                'Analytics avançados',
                'Suporte prioritário',
                'Cancelar quando quiser'
              ],
              cta: 'Testar 7 dias grátis',
              ctaVariant: 'primary',
              popular: true
            },
            { 
              name: 'Business', 
              price: 'R$ 199', 
              period: '/mês',
              desc: 'Para agências e empresas',
              features: [
                'Tudo do Professional +',
                'API de integração',
                'Custom branding',
                'Múltiplos usuários',
                'CRM customizado',
                'Webhooks ilimitados',
                'Suporte dedicado 24/7',
                'SLA garantido'
              ],
              cta: 'Contactar vendas',
              ctaVariant: 'outline'
            }
          ].map((plan, i) => (
            <div key={i} className={`p-10 rounded-2xl border-2 transition-all ${
              plan.popular 
                ? 'border-[rgba(255,0,128,0.6)] bg-gradient-to-br from-[rgba(194,78,255,0.15)] to-[rgba(255,0,128,0.08)] scale-105 shadow-2xl shadow-[#c24eff]/30' 
                : 'border-[rgba(194,78,255,0.3)] bg-gradient-to-br from-[rgba(194,78,255,0.08)] to-[rgba(255,0,128,0.05)]'
            }`}>
              {plan.popular && (
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#c24eff] to-[#ff0080] rounded-full text-xs font-bold mb-4">
                  ⭐ MAIS POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-[rgba(248,250,252,0.72)] mb-6">{plan.desc}</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080]">{plan.price}</span>
                {plan.period && <span className="text-[rgba(248,250,252,0.72)]">{plan.period}</span>}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-[rgba(248,250,252,0.72)]">
                    <span className="text-[#c24eff] font-bold">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full min-h-[56px] font-bold rounded-full transition-all ${
                plan.ctaVariant === 'primary'
                  ? 'bg-gradient-to-r from-[#c24eff] via-[#ff00ff] to-[#ff0080] text-white hover:shadow-lg hover:shadow-[#c24eff]/50'
                  : 'border-2 border-[#c24eff] text-[#c24eff] hover:bg-[rgba(194,78,255,0.1)]'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[rgba(194,78,255,0.15)] to-[rgba(255,0,128,0.08)] border border-[rgba(194,78,255,0.3)] rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Dúvidas?</h3>
          <p className="text-lg text-[rgba(248,250,252,0.80)] mb-6">
            Entre em contato conosco. Ajudamos a encontrar o plano certo para seu negócio.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-[#c24eff] to-[#ff0080] text-white font-bold rounded-full hover:shadow-lg transition-all">
            Conversar com a gente
          </Link>
        </div>
      </section>
    </main>
  );
}
