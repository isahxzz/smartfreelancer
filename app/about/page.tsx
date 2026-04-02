'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f8fafc] overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9945ff]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-[800px] h-[800px] bg-[#c24eff]/20 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <section className="max-w-6xl mx-auto px-6 py-24 mt-12">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
              Somos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080]">HighFlow</span>
            </h1>
            <p className="text-lg text-[rgba(248,250,252,0.84)] mb-6 leading-relaxed">
              Nascemos em 2024 com uma missão simples: ajudar freelancers a vender mais propostas, sem complicações.
            </p>
            <p className="text-lg text-[rgba(248,250,252,0.84)] mb-6 leading-relaxed">
              Como freelancers nós mesmos, conocemos os desafios: propostas demoradas, falta de profissionalismo, dificuldade em acompanhar negociações.
            </p>
            <p className="text-lg text-[rgba(248,250,252,0.84)] leading-relaxed">
              Por isso criamos HighFlow: a ferramenta que faltava no mercado. 100% transparente, suporte humano real, e comprometida com seu sucesso.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[rgba(194,78,255,0.2)] to-[rgba(255,0,128,0.1)] border border-[rgba(194,78,255,0.3)] rounded-2xl p-12 min-h-[400px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6">Nossos Números</h3>
            <div className="space-y-6">
              <div>
                <div className="text-4xl font-bold text-[#c24eff] mb-2">500+</div>
                <p className="text-[rgba(248,250,252,0.72)]">Freelancers usando HighFlow</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#c24eff] mb-2">15K+</div>
                <p className="text-[rgba(248,250,252,0.72)]">Propostas geradas com sucesso</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#c24eff] mb-2">87%</div>
                <p className="text-[rgba(248,250,252,0.72)]">Taxa de aceitação média</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Por que HighFlow?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Feita por Freelancers', desc: 'Quem melhor que freelancers para entender o problema? Construímos com experiência real.' },
              { title: '100% Transparência', desc: 'Nada de custos ocultos, taxas surpresa ou contratos obscuros. Você sabe o que paga.' },
              { title: 'Suporte Real', desc: 'Chat com pessoa real, não bots. Resposta em até 2 horas, durante horário brasileiro.' },
              { title: 'Segurança LGPD', desc: 'Seus dados são criptografados e protegidos. Conformidade total com leis brasileiras.' },
              { title: 'Sempre Melhorando', desc: 'Ouvimos nossos clientes. Cada update vem de feedback real de quem usa.' },
              { title: 'Comunidade Forte', desc: 'Conecte com outros freelancers, compartilhe dicas e cresça junto.' }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-xl bg-gradient-to-br from-[rgba(194,78,255,0.08)] to-[rgba(255,0,128,0.05)] border border-[rgba(194,78,255,0.2)] hover:border-[rgba(255,0,128,0.5)] transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[rgba(248,250,252,0.72)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-[rgba(194,78,255,0.15)] to-[rgba(255,0,128,0.08)] border border-[rgba(194,78,255,0.3)] rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Quer fazer parte desta jornada?</h3>
          <p className="text-lg text-[rgba(248,250,252,0.80)] mb-6 max-w-2xl mx-auto">
            Centenas de freelancers já estão automatizando suas propostas e vendendo mais.
          </p>
          <Link href="/" className="inline-block px-8 py-4 bg-gradient-to-r from-[#c24eff] to-[#ff0080] text-white font-bold rounded-full hover:shadow-lg transition-all">
            Começar grátis
          </Link>
        </div>
      </section>
    </main>
  );
}
