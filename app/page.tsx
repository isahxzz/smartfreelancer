'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { BrainIcon, ShieldIcon, ChartIcon, HeadsetIcon, StrifeIcon, SlackIcon, GmailIcon, ZapierIcon, AirtableIcon, NotionIcon, DiscordIcon, GitHubIcon } from './components/Icons';

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
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c24eff] to-[#ff0080] border-2 border-[#050505]"></div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <p className="text-xs text-[rgba(248,250,252,0.72)]"><strong>4.9/5</strong> - 500+ freelancers</p>
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

          {/* Spacing */}
          <div className="h-12"></div>
        </div>
      </section>

      {/* Integrações Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="grid gap-8 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[rgba(194,78,255,0.8)] mb-4">INTEGRAÇÕES</p>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
              Conecta com as ferramentas que você usa
            </h2>
          </div>
          <p className="text-lg text-[rgba(248,250,252,0.80)] leading-relaxed max-w-2xl mx-auto">
            APIs e webhooks para sincronizar seus dados automaticamente.
          </p>
        </div>

        {/* Integration Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { name: 'Stripe', icon: <StrifeIcon /> },
            { name: 'Slack', icon: <SlackIcon /> },
            { name: 'Gmail', icon: <GmailIcon /> },
            { name: 'Zapier', icon: <ZapierIcon /> },
            { name: 'GitHub', icon: <GitHubIcon /> },
            { name: 'Discord', icon: <DiscordIcon /> }
          ].map((tool, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-lg hover:bg-[rgba(194,78,255,0.1)] transition-all cursor-pointer">
              <div className="text-[#c24eff] mb-3 h-8 w-8 flex items-center justify-center">{tool.icon}</div>
              <span className="text-sm font-medium text-[#f8fafc]">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="grid gap-8 mb-20">
          <p className="text-xs font-bold uppercase tracking-widest text-[rgba(194,78,255,0.8)] mb-4">RECURSOS</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Tudo que você precisa para fechar mais contratos
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.80)] leading-relaxed max-w-2xl mx-auto">
            Recursos desenvolvidos especificamente para freelancers venderem mais.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Gerador de Propostas', desc: '5 templates profissionais + texto customizável em tempo real' },
            { title: 'Pagamento Integrado', desc: 'Aceite pagamentos direto na proposta com Stripe' },
            { title: 'Distribuição Via WhatsApp', desc: 'Envie propostas pelo WhatsApp c/ link rastreável' },
            { title: 'Sincronização CRM', desc: 'Conecte com HubSpot, Airtable, Zapier automaticamente' },
            { title: 'Geração Rápida', desc: 'Crie propostas profissionais em menos de 2 minutos' },
            { title: 'Analytics Detalhado', desc: 'Rastreie visualizações, aceitações e taxas de conversão' }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-xl bg-gradient-to-br from-[rgba(194,78,255,0.06)] to-[rgba(255,0,128,0.03)] border border-[rgba(194,78,255,0.15)] hover:border-[rgba(194,78,255,0.4)] transition-all">
              <h3 className="text-lg font-bold text-white mb-3 text-left">{feature.title}</h3>
              <p className="text-[rgba(248,250,252,0.72)] text-left text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="grid gap-8 mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[rgba(194,78,255,0.8)] mb-4">RESULTADOS</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Números que falam
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { stat: 500, suffix: '+', desc: 'Freelancers utilizando' },
            { stat: 15000, suffix: '+', desc: 'Propostas geradas' },
            { stat: 87, suffix: '%', desc: 'Taxa de aceitação média' }
          ].map((metric, i) => (
            <div key={i} className="p-8 rounded-lg bg-transparent border-b-2 border-[rgba(194,78,255,0.3)] hover:border-[rgba(194,78,255,0.6)] transition-all">
              <strong className="block text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080]">
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
          <p className="text-xs font-bold uppercase tracking-widest text-[rgba(194,78,255,0.8)] mb-4">PREÇOS</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Planos para todo freelancer
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.80)] leading-relaxed max-w-2xl mx-auto">
            Sem compromisso. Cancele quando quiser.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { 
              name: 'Starter', 
              price: 'Grátis', 
              features: ['3 propostas/mês', 'Templates básicos', 'Envio por email', 'Suporte por email'],
              cta: 'Começar'
            },
            { 
              name: 'Professional', 
              price: 'R$ 49', 
              period: '/mês',
              features: ['Propostas ilimitadas', '10 templates premium', 'Envio WhatsApp', 'Integração Stripe', 'Analytics básicos', 'Suporte prioritário'],
              cta: 'Testar 7 dias',
              popular: true
            },
            { 
              name: 'Business', 
              price: 'R$ 199', 
              period: '/mês',
              features: ['Tudo do Professional +', 'API de integração', 'Custom branding', 'Múltiplos usuários', 'Analytics avançados', 'Suporte dedicado 24/7'],
              cta: 'Contato'
            }
          ].map((plan, i) => (
            <div key={i} className={`p-8 rounded-2xl border-2 transition-all ${
              plan.popular 
                ? 'border-[rgba(194,78,255,0.6)] bg-gradient-to-br from-[rgba(194,78,255,0.12)] to-[rgba(255,0,128,0.06)] scale-105 shadow-2xl shadow-[#c24eff]/30' 
                : 'border-[rgba(194,78,255,0.25)] bg-gradient-to-br from-[rgba(194,78,255,0.06)] to-[rgba(255,0,128,0.03)]'
            }`}>
              {plan.popular && <div className="text-xs font-bold text-[#c24eff] mb-4 uppercase">Mais Popular</div>}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080]">{plan.price}</span>
                {plan.period && <span className="text-[rgba(248,250,252,0.72)]">{plan.period}</span>}
              </div>
              <ul className="text-left mb-8 space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-[rgba(248,250,252,0.72)] flex items-center gap-3 text-sm">
                    <span className="text-[#c24eff] font-bold">•</span> {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full min-h-[56px] font-bold rounded-full transition-all text-sm ${
                plan.popular
                  ? 'bg-gradient-to-r from-[#c24eff] via-[#ff00ff] to-[#ff0080] text-white hover:shadow-lg'
                  : 'border-2 border-[#c24eff] text-[#c24eff] hover:bg-[rgba(194,78,255,0.08)]'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative max-w-4xl mx-auto px-6 py-32 mt-32 text-center">
        <div className="p-12 rounded-2xl bg-gradient-to-br from-[rgba(194,78,255,0.1)] to-[rgba(255,0,128,0.05)] border-2 border-[rgba(194,78,255,0.25)]">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Dicas para vender mais
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.80)] mb-8 max-w-2xl mx-auto">
            Receba estratégias e insights semanais para aumentar suas taxas de fechamento e valor de contrato.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="seu@email.com" 
              className="flex-1 px-6 py-4 rounded-full bg-[rgba(248,250,252,0.05)] border border-[rgba(194,78,255,0.3)] text-white placeholder-[rgba(248,250,252,0.5)] focus:outline-none focus:border-[#c24eff] transition"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#c24eff] via-[#ff00ff] to-[#ff0080] text-white font-bold rounded-full hover:shadow-lg transition-all whitespace-nowrap text-sm"
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
