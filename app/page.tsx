'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { BrainIcon, ShieldIcon, ChartIcon, HeadsetIcon, StrifeIcon, SlackIcon, GmailIcon, ZapierIcon, AirtableIcon, NotionIcon } from './components/Icons';

// Componente de Counter Animado
function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(interval);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f8fafc] overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      {/* Background Blobs - Gradientes Roxo/Magenta */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9945ff]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-[800px] h-[800px] bg-[#c24eff]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#ff00ff]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#0b1f3a]/25 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 py-32 md:py-48 text-center" style={{ isolation: 'isolate' }}>
        <div className="relative z-10">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Automatize seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] via-[#ff00ff] to-[#ff0080]">fluxo de propostas</span>
          </h1>

          {/* Lead */}
          <p className="text-lg md:text-2xl text-[rgba(248,250,252,0.82)] mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Gerador automático de propostas profissionais para freelancers. Templates inteligentes + Stripe, WhatsApp e CRM. <strong className="text-[#c24eff]">100% transparente, suporte 100% humano</strong>.
          </p>

          {/* Prova Social */}
          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="flex items-center gap-3 justify-center">
              <div className="flex -space-x-3">
                {['👤', '👨', '👩', '🧑', '👨'].map((avatar, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c24eff] to-[#ff0080] flex items-center justify-center text-xl border-2 border-[#050505]">
                    {avatar}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-1">⭐⭐⭐⭐⭐</div>
                <p className="text-xs text-[rgba(248,250,252,0.72)]"><strong>4.9/5</strong> - 200+ reviews</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
            <button className="inline-flex items-center justify-center min-h-[64px] px-10 py-4 bg-gradient-to-r from-[#c24eff] via-[#ff00ff] to-[#ff0080] text-white font-bold rounded-full hover:translate-y-[-3px] transition-all shadow-2xl hover:shadow-3xl text-lg hover:shadow-[#c24eff]/50">
              Agendar demonstração
            </button>
            <button className="inline-flex items-center justify-center min-h-[64px] px-10 py-4 border-2 border-[#c24eff] text-[#c24eff] font-bold rounded-full hover:bg-[rgba(194,78,255,0.15)] transition-all text-lg">
              Ver dashboard
            </button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 justify-center text-xs font-semibold text-[#f8fafc]">
            <span className="px-5 py-3 border border-[#c24eff]/40 rounded-full bg-[rgba(194,78,255,0.12)]">✓ Sem cartão de crédito</span>
            <span className="px-5 py-3 border border-[#c24eff]/40 rounded-full bg-[rgba(194,78,255,0.12)]">✓ Cancelamento imediato</span>
            <span className="px-5 py-3 border border-[#c24eff]/40 rounded-full bg-[rgba(194,78,255,0.12)]">✓ Suporte 24h</span>
          </div>
        </div>
      </section>

      {/* Integrações Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="grid gap-8 mb-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-[#c24eff] mb-4">🔗 Integrações</p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
              Conecta com ferramentas que você já usa
            </h2>
          </div>
          <p className="text-lg text-[rgba(248,250,252,0.80)] leading-relaxed max-w-2xl mx-auto">
            APIs, dados e automações em um fluxo único. Acelera time de vendas, operação e finances sem retrabalho.
          </p>
        </div>

        {/* Integration Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { name: 'Stripe', icon: <StrifeIcon /> },
            { name: 'Slack', icon: <SlackIcon /> },
            { name: 'Gmail', icon: <GmailIcon /> },
            { name: 'Zapier', icon: <ZapierIcon /> },
            { name: 'Airtable', icon: <AirtableIcon /> },
            { name: 'Notion', icon: <NotionIcon /> }
          ].map((tool, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-lg bg-transparent hover:bg-[rgba(194,78,255,0.12)] transition-all cursor-pointer">
              <div className="text-[#c24eff] mb-3 h-8 w-8 flex items-center justify-center">{tool.icon}</div>
              <span className="text-sm font-semibold text-[#f8fafc]">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Princípios Section - Trust Signals */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="grid gap-8 mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-[#c24eff]">💎 Nossa Missão</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Construído com princípios
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.80)] leading-relaxed max-w-2xl mx-auto">
            Acreditamos que freelancers merecem ferramentas honestas, suporte real e qualidade garantida.
          </p>
        </div>

        {/* Princípios Grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: <BrainIcon />, title: 'Transparência', desc: 'Sem custos ocultos. Você sabe exatamente o que paga.' },
            { icon: <ShieldIcon />, title: 'Suporte Humano', desc: 'Chat com pessoa real. Resposta em até 2 horas.' },
            { icon: <ChartIcon />, title: 'Segurança', desc: 'Seus dados criptografados. Conformidade LGPD.' },
            { icon: <HeadsetIcon />, title: 'Dados Reais', desc: 'Sem números fake. Estatísticas verificáveis.' }
          ].map((principle, i) => (
            <div key={i} className="p-8 rounded-xl bg-gradient-to-br from-[rgba(194,78,255,0.08)] to-[rgba(255,0,128,0.05)] border border-[rgba(194,78,255,0.2)] hover:border-[rgba(255,0,128,0.5)] transition-all">
              <div className="text-[#c24eff] mb-4">{principle.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{principle.title}</h3>
              <p className="text-[rgba(248,250,252,0.72)]">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="grid gap-8 mb-20">
          <p className="text-sm font-bold uppercase tracking-widest text-[#c24eff]">⚡ Como Funciona</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Tudo que você precisa para vender mais
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.80)] leading-relaxed max-w-2xl mx-auto">
            Recursos poderosos pensados para simplificar seu processo de venda.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: '📄', title: 'Gerador de Propostas', desc: '5 templates prontos + customização em tempo real' },
            { icon: '💰', title: 'Integração Stripe', desc: 'Receba pagamentos na proposta com 1 clique' },
            { icon: '📱', title: 'Envio WhatsApp', desc: 'Compartilhe propostas direto na mensagem do cliente' },
            { icon: '🔄', title: 'Sincronização CRM', desc: 'Conecta com Hubspot, Airtable, Zapier automaticamente' },
            { icon: '⏱️', title: 'Geração em 2 Min', desc: '3 cliques e sua proposta está pronta' },
            { icon: '📊', title: 'Analytics', desc: 'Veja quantas propostas foram visualizadas/aceitas' }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-xl bg-gradient-to-br from-[rgba(194,78,255,0.08)] to-[rgba(255,0,128,0.05)] border border-[rgba(194,78,255,0.2)] hover:border-[rgba(255,0,128,0.5)] transition-all">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-[rgba(248,250,252,0.72)]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="grid gap-8 mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#c24eff]">📊 Resultados</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Números que falam por si
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { stat: 500, suffix: '+', desc: 'Freelancers ativos' },
            { stat: 15000, suffix: '+', desc: 'Propostas geradas' },
            { stat: 87, suffix: '%', desc: 'Taxa de aceitação' }
          ].map((metric, i) => (
            <div key={i} className="p-8 rounded-lg bg-transparent border-b-2 border-[rgba(194,78,255,0.4)] hover:border-[rgba(255,0,128,0.7)] transition-all">
              <strong className="block text-6xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080]">
                <Counter end={metric.stat} />{metric.suffix}
              </strong>
              <p className="text-lg text-[rgba(248,250,252,0.82)]">{metric.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="grid gap-8 mb-16">
          <p className="text-sm font-bold uppercase tracking-widest text-[#c24eff]">💳 Preços</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Plano para todo freelancer
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.80)] leading-relaxed max-w-2xl mx-auto">
            Sem compromisso. Cancele quando quiser. Comece grátis hoje.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              name: 'Grátis', 
              price: 'R$ 0', 
              features: ['3 propostas/mês', 'Templates básicos', 'Envio por email', 'Chat de suporte'],
              cta: 'Começar agora'
            },
            { 
              name: 'Pro', 
              price: 'R$ 49', 
              period: '/mês',
              features: ['Propostas ilimitadas', '10 templates premium', 'Envio WhatsApp', 'Integração Stripe', 'Analytics básicos', 'Suporte prioritário'],
              cta: 'Testar 7 dias',
              popular: true
            },
            { 
              name: 'Empresa', 
              price: 'R$ 199', 
              period: '/mês',
              features: ['Tudo do Pro +', 'API de integração', 'Custom branding', 'Múltiplos usuários', 'Analytics avançados', 'Suporte dedicado'],
              cta: 'Contato'
            }
          ].map((plan, i) => (
            <div key={i} className={`p-8 rounded-2xl border-2 transition-all ${
              plan.popular 
                ? 'border-[rgba(255,0,128,0.6)] bg-gradient-to-br from-[rgba(194,78,255,0.15)] to-[rgba(255,0,128,0.08)] scale-105 shadow-2xl shadow-[#c24eff]/30' 
                : 'border-[rgba(194,78,255,0.3)] bg-gradient-to-br from-[rgba(194,78,255,0.08)] to-[rgba(255,0,128,0.05)]'
            }`}>
              {plan.popular && <div className="text-xs font-bold text-[#c24eff] mb-4">⭐ MAIS POPULAR</div>}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080]">{plan.price}</span>
                {plan.period && <span className="text-[rgba(248,250,252,0.72)]">{plan.period}</span>}
              </div>
              <ul className="text-left mb-8 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-[rgba(248,250,252,0.72)] flex items-center gap-3">
                    <span className="text-[#c24eff]">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full min-h-[56px] font-bold rounded-full transition-all ${
                plan.popular
                  ? 'bg-gradient-to-r from-[#c24eff] via-[#ff00ff] to-[#ff0080] text-white hover:shadow-lg'
                  : 'border-2 border-[#c24eff] text-[#c24eff] hover:bg-[rgba(194,78,255,0.1)]'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="p-12 rounded-2xl bg-gradient-to-br from-[rgba(194,78,255,0.12)] to-[rgba(255,0,128,0.08)] border-2 border-[rgba(194,78,255,0.3)]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Dicas gratuitas toda semana
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.80)] mb-8 max-w-2xl mx-auto">
            Receba 1 email por semana com estratégias para vender mais propostas e fechar contratos maiores. Zero spam, prometo.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="flex-1 px-6 py-4 rounded-full bg-[rgba(248,250,252,0.05)] border border-[rgba(194,78,255,0.3)] text-white placeholder-[rgba(248,250,252,0.5)] focus:outline-none focus:border-[#c24eff]"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#c24eff] via-[#ff00ff] to-[#ff0080] text-white font-bold rounded-full hover:shadow-lg transition-all whitespace-nowrap"
            >
              Inscrever
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-40 md:py-48 mt-32 text-center">
        <p className="text-sm font-bold uppercase tracking-widest text-[#c24eff] mb-6">🚀 Próximo passo</p>
        <h2 className="text-6xl md:text-7xl font-bold mb-10 leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
          Pronto para transformar sua operação?
        </h2>
        <p className="text-xl text-[rgba(248,250,252,0.84)] mb-12 max-w-3xl mx-auto leading-relaxed">
          Entramos no seu contexto, definimos prioridades e colocamos sua execução em ritmo de crescimento. Comece grátis, sem cartão de crédito.
        </p>
        <button className="inline-flex items-center justify-center min-h-[64px] px-12 py-4 bg-gradient-to-r from-[#c24eff] via-[#ff00ff] to-[#ff0080] text-white font-bold rounded-full hover:translate-y-[-3px] transition-all shadow-2xl hover:shadow-3xl text-lg hover:shadow-[#c24eff]/50">
          Agendar diagnóstico →
        </button>
      </section>

      {/* Footer */}
      <footer className="relative max-w-6xl mx-auto px-6 py-20 mt-40 pt-24 border-t border-[rgba(194,78,255,0.1)]">
        <div className="grid md:grid-cols-5 gap-16 mb-12">
          <div>
            <p className="font-bold text-white text-lg mb-4">HighFlow</p>
            <p className="text-sm text-[rgba(248,250,252,0.68)] leading-relaxed">Automação de propostas para freelancers que não aceitam mediocre.</p>
          </div>
          <nav className="flex flex-col gap-3">
            <p className="font-bold text-white text-sm mb-2">Produto</p>
            {[
              { label: 'Home', href: '/' },
              { label: 'Preços', href: '/pricing' },
              { label: 'Sobre Nós', href: '/about' },
              { label: 'Suporte', href: '/contact' }
            ].map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-[rgba(248,250,252,0.72)] hover:text-[#c24eff] transition font-medium">
                {link.label}
              </a>
            ))}
          </nav>
          <div>
            <p className="font-bold text-white text-sm mb-4">Contato</p>
            <a href="mailto:suporte@highflow.dev" className="text-sm text-[#c24eff] hover:text-white transition block mb-2 font-medium">
              suporte@highflow.dev
            </a>
            <span className="text-sm text-[rgba(248,250,252,0.68)]">(11) 99999-0000</span>
            <p className="text-xs text-[rgba(248,250,252,0.58)] mt-4">📍 São Paulo, BR</p>
          </div>
          <div>
            <p className="font-bold text-white text-sm mb-4">Legal</p>
            <a href="/terms" className="text-sm text-[rgba(248,250,252,0.72)] hover:text-[#c24eff] transition block mb-2">
              Termos de Uso
            </a>
            <a href="/privacy" className="text-sm text-[rgba(248,250,252,0.72)] hover:text-[#c24eff] transition block">
              Privacidade
            </a>
          </div>
          <div>
            <p className="font-bold text-white text-sm mb-4">Social</p>
            {['Instagram', 'LinkedIn', 'Twitter', 'TikTok'].map((social, i) => (
              <a key={i} href="#" className="text-sm text-[rgba(248,250,252,0.72)] hover:text-[#c24eff] transition block font-medium">
                {social}
              </a>
            ))}
          </div>
        </div>
        <div className="pt-12 border-t border-[rgba(194,78,255,0.1)] text-center text-xs text-[rgba(248,250,252,0.58)]">
          <p>© 2026 HighFlow. Desenvolvido com ❤️ para freelancers brasileiros.</p>
        </div>
      </footer>
    </main>
  );
}
