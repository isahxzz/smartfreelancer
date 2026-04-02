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
            <span className={`transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`}>▼</span>
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

function Badge({ text, color = 'cyan' }: { text: string; color?: 'cyan' | 'orange' | 'green' | 'purple' }) {
  const colors = {
    cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    orange: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    green: 'bg-green-500/20 text-green-400 border-green-500/30',
    purple: 'bg-violet-500/20 text-violet-400 border-violet-500/30'
  };
  return <span className={`px-3 py-1 text-xs font-semibold border rounded-full ${colors[color]}`}>{text}</span>;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#f8fafc] overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      {/* Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/4 w-80 h-80 bg-[#c24eff]/5 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      {/* HERO SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32 md:py-40 text-center" style={{ isolation: 'isolate' }}>
        <div className="space-y-8">
          <div className="flex justify-center">
            <Badge text="🚀 Bots atualizados e otimizados" color="purple" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight" style={{ fontFamily: '"Sora", sans-serif' }}>
            <span className="text-white">Automatize seu </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-[#c24eff] to-[#ff0080]">fluxo de propostas</span>
          </h1>

          <p className="text-lg md:text-xl text-[rgba(248,250,252,0.75)] max-w-3xl mx-auto leading-relaxed">
            Não apenas um gerador. Somos a infraestrutura que freelancers usam para vender mais, automatizar fluxos e engajar clientes. Simples, poderoso e feito para você.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <button className="px-8 py-3 bg-[#c24eff] text-white font-semibold rounded-lg hover:bg-[#b242e6] transition-all">
              Começar Agora
            </button>
            <button className="px-8 py-3 border-2 border-[#c24eff] text-[#c24eff] font-semibold rounded-lg hover:bg-[rgba(194,78,255,0.1)] transition-all">
              Entrar no Discord
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
            <div key={i} className="p-8 bg-[rgba(194,78,255,0.08)] border border-[rgba(194,78,255,0.15)] rounded-xl text-center hover:border-[rgba(194,78,255,0.3)] transition-all">
              <div className="text-5xl font-black text-[#c24eff] mb-2">
                <Counter end={item.stat} />
                {item.suffix}
              </div>
              <p className="text-[rgba(248,250,252,0.8)]">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <Badge text="Por que escolher HighFlow?" color="cyan" />
          <h2 className="text-4xl md:text-5xl font-black text-white mt-8 mb-4" style={{ fontFamily: '"Sora", sans-serif' }}>
            Tecnologia de ponta e recursos exclusivos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: '🇧🇷', title: 'DNA Brasileiro', desc: 'Esqueça suporte em inglês. Somos nativos. PIX, WhatsApp e português fluente.' },
            { icon: '⚡', title: 'Performance Elite', desc: 'Propostas geradas em 2 minutos. Seus comandos respondem instantaneamente.' },
            { icon: '🔄', title: 'Evolução Contínua', desc: 'Atualizações constantes com novos recursos baseados direto no feedback.' },
            { icon: '🎛️', title: 'Dashboard Unificado', desc: 'Gerencie tudo em um único lugar. Interface moderna e intuitiva.' },
            { icon: '👥', title: 'Foco na Comunidade', desc: 'Mais que clientes - construímos parceiros. Suporte humanizado e rápido.' },
            { icon: '🔒', title: 'Confiabilidade Total', desc: 'Monitoramento 24/7. Redundância para garantir que nunca trave.' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-[rgba(194,78,255,0.06)] border border-[rgba(194,78,255,0.12)] rounded-xl hover:border-[rgba(194,78,255,0.3)] transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-[rgba(248,250,252,0.75)] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <Badge text="RECURSOS" color="orange" />
          <h2 className="text-4xl md:text-5xl font-black text-white mt-8" style={{ fontFamily: '"Sora", sans-serif' }}>
            Tudo que você precisa para vender mais
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: 'Gerador Automático', desc: 'Crie propostas profissionais em 3 cliques. Templates personalizáveis + editor em tempo real.' },
            { title: 'Pagamento Integrado', desc: 'Stripe integrado. Cliente aceita e paga direto. Sem intermediários ou retrabalho.' },
            { title: 'Envio via WhatsApp', desc: 'Compartilhe propostas no WhatsApp com link rastreável. Monitor de visualizações.' },
            { title: 'Analytics Real', desc: 'Saiba quantas foram visualizadas, aceitas ou rejeitadas. Métricas em tempo real.' },
            { title: 'Sincronização CRM', desc: 'Integre com Zapier, Airtable, HubSpot automaticamente. API nativa disponível.' },
            { title: 'Suporte Humanizado', desc: 'Chat com pessoa real. 2h resposta garantida. Horário brasileiro 9h-18h.' }
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-gradient-to-br from-[rgba(194,78,255,0.08)] to-[rgba(194,78,255,0.02)] border border-[rgba(194,78,255,0.15)] rounded-xl hover:border-[rgba(194,78,255,0.3)] transition-all">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[#c24eff] text-white text-xs flex items-center justify-center font-bold mt-1">✓</div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-[rgba(248,250,252,0.75)] text-sm">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <Badge text="INTEGRAÇÕES" color="green" />
          <h2 className="text-4xl md:text-5xl font-black text-white mt-8" style={{ fontFamily: '"Sora", sans-serif' }}>
            Funciona com suas ferramentas
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {[
            { name: 'Stripe', icon: <StrifeIcon /> },
            { name: 'Slack', icon: <SlackIcon /> },
            { name: 'Gmail', icon: <GmailIcon /> },
            { name: 'Zapier', icon: <ZapierIcon /> },
            { name: 'GitHub', icon: <GitHubIcon /> },
            { name: 'Discord', icon: <DiscordIcon /> }
          ].map((tool, i) => (
            <div key={i} className="flex flex-col items-center justify-center p-6 rounded-xl bg-[rgba(194,78,255,0.06)] border border-[rgba(194,78,255,0.12)] hover:bg-[rgba(194,78,255,0.12)] transition-all group">
              <div className="text-[#c24eff] mb-3 h-8 w-8 group-hover:scale-110 transition-transform">{tool.icon}</div>
              <span className="text-sm font-semibold text-white">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* DASHBOARD SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <Badge text="NOVIDADES" color="green" />
          <h2 className="text-4xl md:text-5xl font-black text-white mt-8" style={{ fontFamily: '"Sora", sans-serif' }}>
            Controle total dos seus bots
          </h2>
        </div>

        <div className="border-2 border-[rgba(194,78,255,0.3)] rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(194,78,255,0.1)] to-[rgba(194,78,255,0.02)] p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 text-white text-xs flex items-center justify-center font-bold mt-1 flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Estatísticas em tempo real</h3>
                    <p className="text-sm text-[rgba(248,250,252,0.7)]">Monitor CPU, RAM, uptime e muito mais</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 text-white text-xs flex items-center justify-center font-bold mt-1 flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Controle remoto completo</h3>
                    <p className="text-sm text-[rgba(248,250,252,0.7)]">Inicie, pause ou reinicie instantaneamente</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-cyan-500 text-white text-xs flex items-center justify-center font-bold mt-1 flex-shrink-0">✓</div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Gerenciamento de renovações</h3>
                    <p className="text-sm text-[rgba(248,250,252,0.7)]">Controle datas e pagamentos</p>
                  </div>
                </div>
              </div>
              <button className="mt-8 px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-all">
                Acessar Dashboard
              </button>
            </div>
            <div className="bg-[rgba(0,200,200,0.05)] border border-cyan-500/30 rounded-xl p-6 h-80 flex items-center justify-center">
              <div className="text-center text-[rgba(248,250,252,0.5)]">
                <div className="text-4xl mb-2">📊</div>
                <p>Dashboard preview aqui</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <Badge text="PREÇOS" color="purple" />
          <h2 className="text-4xl md:text-5xl font-black text-white mt-8" style={{ fontFamily: '"Sora", sans-serif' }}>
            Planos simples e justos
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
              badge: 'MAIS VENDIDO',
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
              className={`relative p-8 rounded-2xl border-2 transition-all ${
                plan.highlight
                  ? 'border-[#c24eff] bg-gradient-to-br from-[rgba(194,78,255,0.2)] to-[rgba(194,78,255,0.05)] scale-105'
                  : 'border-[rgba(194,78,255,0.15)] bg-[rgba(194,78,255,0.06)] hover:border-[rgba(194,78,255,0.3)]'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-6">
                  <Badge text={plan.badge} color="orange" />
                </div>
              )}
              <h3 className="text-xl font-bold text-white mb-2 mt-4">{plan.name}</h3>
              <p className="text-sm text-[rgba(248,250,252,0.7)] mb-6">{plan.desc}</p>
              <div className="mb-8">
                <span className="text-5xl font-black text-[#c24eff]">{plan.price}</span>
                {plan.period && <span className="text-[rgba(248,250,252,0.7)]">{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
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

      {/* FREE TRIAL SECTION */}
      <section className="relative max-w-4xl mx-auto px-6 py-32">
        <div className="border-2 border-[rgba(194,78,255,0.3)] rounded-2xl overflow-hidden bg-gradient-to-br from-[rgba(194,78,255,0.12)] to-[rgba(194,78,255,0.03)] p-12 text-center">
          <Badge text="GRÁTIS 48H" color="green" />
          <h2 className="text-3xl md:text-4xl font-black text-white mt-8 mb-4" style={{ fontFamily: '"Sora", sans-serif' }}>
            Teste qualquer plano por 48 horas
          </h2>
          <p className="text-lg text-[rgba(248,250,252,0.8)] mb-8 max-w-2xl mx-auto">
            Experimente sem compromisso. Ativamos seu trial direto via Discord em poucos minutos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center gap-2 text-[rgba(248,250,252,0.7)]">
              <span className="text-green-400">✓</span> Sem cartão de crédito
            </div>
            <div className="flex items-center gap-2 text-[rgba(248,250,252,0.7)]">
              <span className="text-green-400">✓</span> Sem fidelidade ou contrato
            </div>
            <div className="flex items-center gap-2 text-[rgba(248,250,252,0.7)]">
              <span className="text-green-400">✓</span> Ativação rápida
            </div>
          </div>
          <button className="px-8 py-3 bg-[#c24eff] text-white font-semibold rounded-lg hover:bg-[#b242e6] transition-all">
            Testar Agora
          </button>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="relative max-w-6xl mx-auto px-6 py-32">
        <div className="text-center mb-16">
          <Badge text="DÚVIDAS" color="cyan" />
          <h2 className="text-4xl md:text-5xl font-black text-white mt-8" style={{ fontFamily: '"Sora", sans-serif' }}>
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
              content: 'Suporte 100% humano via chat. Tempo médio de resposta: 2 horas. Para problemas críticos: 30 minutos. Horário: 9h-18h (Brasília).'
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

      {/* FINAL CTA */}
      <section className="relative max-w-4xl mx-auto px-6 py-32 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
            Pronto para transformar seu processo?
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
              <a href="/" className="text-sm text-[rgba(248,250,252,0.7)] hover:text-[#c24eff] transition">Home</a>
              <a href="/pricing" className="text-sm text-[rgba(248,250,252,0.7)] hover:text-[#c24eff] transition">Preços</a>
              <a href="/about" className="text-sm text-[rgba(248,250,252,0.7)] hover:text-[#c24eff] transition">Sobre</a>
            </nav>
            <div>
              <p className="font-bold text-white text-sm mb-3">Contato</p>
              <a href="mailto:suporte@highflow.dev" className="text-sm text-[#c24eff] hover:text-white transition block mb-1">suporte@highflow.dev</a>
              <p className="text-sm text-[rgba(248,250,252,0.7)]">(11) 99999-0000</p>
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-3">Legal</p>
              <a href="/terms" className="text-sm text-[rgba(248,250,252,0.7)] hover:text-[#c24eff] transition block mb-2">Termos de Uso</a>
              <a href="/privacy" className="text-sm text-[rgba(248,250,252,0.7)] hover:text-[#c24eff] transition block">Privacidade</a>
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
