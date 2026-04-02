'use client';

import { useEffect, useState } from 'react';
import Navigation from './components/Navigation';
import { BrainIcon, ShieldIcon, ChartIcon, HeadsetIcon, StrifeIcon, SlackIcon, GmailIcon, ZapierIcon, DiscordIcon, GitHubIcon } from './components/Icons';

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

function Accordion({ items }: { items: Array<{ title: string; content: string }> }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      {items.map((item, i) => (
        <div key={i} className="border border-[rgba(194,78,255,0.2)] rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full px-6 py-4 text-left font-semibold text-white hover:bg-[rgba(194,78,255,0.08)] transition-all flex justify-between items-center"
          >
            {item.title}
            <span className={`transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 py-4 bg-[rgba(194,78,255,0.05)] border-t border-[rgba(194,78,255,0.1)] text-[rgba(248,250,252,0.8)]">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f8fafc] overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      {/* Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#c24eff]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-[#c24eff]/5 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      {/* HERO SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 md:py-40 text-center" style={{ isolation: 'isolate' }}>
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Gere propostas em menos de 2 minutos
          </h1>

          <p className="text-lg md:text-xl text-[rgba(248,250,252,0.75)] max-w-3xl mx-auto leading-relaxed">
            HighFlow automatiza a criação de propostas profissionais. Integra com Stripe, WhatsApp, CRM. Suporte 100% humano, zero emojis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-[#c24eff] text-white font-semibold rounded-lg hover:bg-[#b242e6] transition-all">
              Começar Grátis
            </button>
            <button className="px-8 py-3 border-2 border-[#c24eff] text-[#c24eff] font-semibold rounded-lg hover:bg-[rgba(194,78,255,0.1)] transition-all">
              Ver Demo
            </button>
          </div>

          <div className="flex items-center justify-center gap-6 pt-8 text-sm text-[rgba(248,250,252,0.7)]">
            <span>✓ Sem cartão</span>
            <span>✓ Cancela quando quiser</span>
            <span>✓ Suporte 24h</span>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { stat: 500, suffix: '+', label: 'Freelancers' },
            { stat: 15000, suffix: '+', label: 'Propostas Geradas' },
            { stat: 87, suffix: '%', label: 'Taxa de Aceitação' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[rgba(194,78,255,0.08)] border border-[rgba(194,78,255,0.15)] rounded-xl text-center">
              <div className="text-5xl font-bold text-[#c24eff] mb-2">
                <Counter end={item.stat} />
                {item.suffix}
              </div>
              <p className="text-[rgba(248,250,252,0.8)]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c24eff] mb-4">RECURSOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: '"Sora", sans-serif' }}>
            Tudo que você precisa
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.75)] max-w-2xl mx-auto">
            Recursos essenciais para vender mais propostas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Gerador Automático', desc: 'Crie propostas profissionais em 3 cliques. Templates personalizáveis + editor em tempo real.' },
            { title: 'Pagamento Integrado', desc: 'Stripe integrado. Cliente aceita e paga direto na proposta. Sem intermediários.' },
            { title: 'Envio via WhatsApp', desc: 'Compartilhe propostas diretamente no WhatsApp. Rastreie visualizações e interações.' },
            { title: 'Analytics Real', desc: 'Saiba exatamente quantas propostas foram visualizadas, aceitas ou rejeitadas.' },
            { title: 'Sincronização CRM', desc: 'Conecte com Zapier, Airtable, HubSpot. Sincronize automaticamente.' },
            { title: 'Suporte Humanizado', desc: 'Chat com pessoa real. Tempo médio de resposta: 2 horas. Horário brasileiro.' }
          ].map((feature, i) => (
            <div key={i} className="p-6 bg-[rgba(194,78,255,0.06)] border border-[rgba(194,78,255,0.12)] rounded-xl hover:border-[rgba(194,78,255,0.3)] transition-all">
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-[rgba(248,250,252,0.75)]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRAÇÕES SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c24eff] mb-4">INTEGRAÇÕES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Funciona com suas ferramentas
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {[
            { name: 'Stripe', icon: <StrifeIcon /> },
            { name: 'Slack', icon: <SlackIcon /> },
            { name: 'Gmail', icon: <GmailIcon /> },
            { name: 'Zapier', icon: <ZapierIcon /> },
            { name: 'GitHub', icon: <GitHubIcon /> },
            { name: 'Discord', icon: <DiscordIcon /> }
          ].map((tool, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl bg-[rgba(194,78,255,0.06)] border border-[rgba(194,78,255,0.12)] hover:bg-[rgba(194,78,255,0.12)] transition-all">
              <div className="text-[#c24eff] mb-3 h-8 w-8">{tool.icon}</div>
              <span className="text-sm font-medium text-white">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCÍPIOS SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c24eff] mb-4">CONSTRUÍDO COM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Princípios que importam
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <BrainIcon />, title: 'Transparência', desc: 'Sem custos ocultos. Você sabe exatamente o que paga.' },
            { icon: <ShieldIcon />, title: 'Privacidade LGPD', desc: 'Seus dados criptografados. Conformidade total.' },
            { icon: <ChartIcon />, title: 'Dados Reais', desc: 'Sem números fake. Métricas verificáveis.' },
            { icon: <HeadsetIcon />, title: 'Suporte Real', desc: 'Pessoa real. Resposta em até 2 horas.' }
          ].map((principle, i) => (
            <div key={i} className="p-6 bg-[rgba(194,78,255,0.06)] border border-[rgba(194,78,255,0.12)] rounded-xl text-center">
              <div className="text-[#c24eff] mb-4 flex justify-center">{principle.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{principle.title}</h3>
              <p className="text-[rgba(248,250,252,0.75)] text-sm">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c24eff] mb-4">PREÇOS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Planos simples e justos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              name: 'Starter',
              price: 'Grátis',
              desc: 'Teste sem compromisso',
              features: ['3 propostas/mês', 'Templates básicos', 'Envio por email', 'Suporte por email']
            },
            {
              name: 'Professional',
              price: 'R$ 49',
              period: '/mês',
              desc: 'Mais popular',
              features: ['Propostas ilimitadas', '10 templates', 'Envio WhatsApp', 'Integração Stripe', 'Analytics', 'Suporte prioritário'],
              highlight: true
            },
            {
              name: 'Business',
              price: 'R$ 199',
              period: '/mês',
              desc: 'Para equipes',
              features: ['Tudo do Professional', 'API de integração', 'Custom branding', 'Múltiplos usuários', 'Analytics avançados', 'Suporte dedicado 24/7']
            }
          ].map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-xl border transition-all ${
                plan.highlight
                  ? 'border-[#c24eff] bg-[rgba(194,78,255,0.15)] scale-105'
                  : 'border-[rgba(194,78,255,0.15)] bg-[rgba(194,78,255,0.06)] hover:border-[rgba(194,78,255,0.3)]'
              }`}
            >
              {plan.highlight && <div className="text-xs font-bold text-[#c24eff] uppercase mb-4">Mais Popular</div>}
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-[rgba(248,250,252,0.7)] mb-4">{plan.desc}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[#c24eff]">{plan.price}</span>
                {plan.period && <span className="text-[rgba(248,250,252,0.7)]">{plan.period}</span>}
              </div>
              <ul className="space-y-2 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="text-sm text-[rgba(248,250,252,0.8)] flex items-center gap-2">
                    <span className="text-[#c24eff]">•</span> {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 font-semibold rounded-lg transition-all ${
                  plan.highlight
                    ? 'bg-[#c24eff] text-white hover:bg-[#b242e6]'
                    : 'border border-[#c24eff] text-[#c24eff] hover:bg-[rgba(194,78,255,0.1)]'
                }`}
              >
                {plan.price === 'Grátis' ? 'Começar' : 'Testar 7 dias'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#c24eff] mb-4">DÚVIDAS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Perguntas frequentes
          </h2>
        </div>

        <Accordion
          items={[
            {
              title: 'Como funciona o período de teste?',
              content: 'Você começa com o plano Starter grátis (3 propostas/mês). Sem cartão de crédito. Cancele quando quiser.'
            },
            {
              title: 'Posso integrar com minhas ferramentas?',
              content: 'Sim! HighFlow integra com Zapier, permitindo conectar com 1000+ apps (HubSpot, Airtable, Make, etc). Também temos API nativa.'
            },
            {
              title: 'Como é o suporte?',
              content: 'Suporte 100% humano via chat. Tempo médio de resposta: 2 horas. Para problemas críticos: 30 minutos. Horário: 9h-18h (horário de Brasília).'
            },
            {
              title: 'Meus dados estão seguros?',
              content: 'Sim. Dados criptografados com AES-256. Conformidade LGPD. Você pode pedir cópia ou exclusão dos dados a qualquer momento.'
            },
            {
              title: 'Posso customizar as propostas?',
              content: 'Total. Seu logo, cores, termos, assinatura. Você controla 100%. Templates também são customizáveis.'
            },
            {
              title: 'E se eu cancelar?',
              content: 'Sem penalidade. Seus dados ficam 7 dias. Depois são deletados. Simples assim.'
            }
          ]}
        />
      </section>

      {/* CTA FINAL */}
      <section className="relative max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Pronto para vender mais?
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.75)] max-w-2xl mx-auto">
            Centenas de freelancers já estão automatizando suas propostas com HighFlow. Você é o(a) próximo(a)?
          </p>
          <button className="px-12 py-4 bg-[#c24eff] text-white font-semibold rounded-lg hover:bg-[#b242e6] transition-all text-lg">
            Começar Grátis Agora
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-[rgba(194,78,255,0.1)] bg-[rgba(194,78,255,0.03)]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-16 mb-12">
            <div>
              <p className="font-bold text-white text-lg mb-2">HighFlow</p>
              <p className="text-sm text-[rgba(248,250,252,0.7)]">Propostas profissionais em 2 minutos.</p>
            </div>
            <nav className="flex flex-col gap-3">
              <p className="font-bold text-white text-sm">Produto</p>
              {[{ label: 'Home', href: '/' }, { label: 'Preços', href: '/pricing' }, { label: 'Sobre', href: '/about' }].map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-[rgba(248,250,252,0.7)] hover:text-[#c24eff] transition">
                  {link.label}
                </a>
              ))}
            </nav>
            <div>
              <p className="font-bold text-white text-sm mb-3">Contato</p>
              <a href="mailto:suporte@highflow.dev" className="text-sm text-[#c24eff] hover:text-white transition block mb-1">
                suporte@highflow.dev
              </a>
              <p className="text-sm text-[rgba(248,250,252,0.7)]">(11) 99999-0000</p>
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-3">Legal</p>
              <a href="/terms" className="text-sm text-[rgba(248,250,252,0.7)] hover:text-[#c24eff] transition block mb-2">
                Termos de Uso
              </a>
              <a href="/privacy" className="text-sm text-[rgba(248,250,252,0.7)] hover:text-[#c24eff] transition block">
                Privacidade
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-[rgba(194,78,255,0.1)] text-center text-xs text-[rgba(248,250,252,0.6)]">
            <p>© 2026 HighFlow. Feito com ❤️ para freelancers brasileiros.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
