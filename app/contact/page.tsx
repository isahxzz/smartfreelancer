'use client';

import Navigation from '../components/Navigation';

export default function ContactPage() {
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
            Fale conosco
          </h1>
          <p className="text-xl text-[rgba(248,250,252,0.84)] max-w-2xl mx-auto">
            Dúvidas? Sugestões? Quer conversar sobre como HighFlow pode ajudar? Estamos aqui para você.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'Email',
              value: 'suporte@highflow.dev',
              desc: 'Resposta em até 2 horas',
              href: 'mailto:suporte@highflow.dev'
            },
            {
              title: 'Telefone',
              value: '(11) 99999-0000',
              desc: 'Seg-Sex, 9h-18h (BR)',
              href: 'tel:+5511999990000'
            },
            {
              title: 'Localização',
              value: 'São Paulo, Brasil',
              desc: 'Empresa brasileira 100%',
              href: '#'
            }
          ].map((contact, i) => (
            <a key={i} href={contact.href} className="p-8 rounded-xl bg-gradient-to-br from-[rgba(194,78,255,0.08)] to-[rgba(255,0,128,0.05)] border border-[rgba(194,78,255,0.2)] hover:border-[rgba(255,0,128,0.5)] transition-all cursor-pointer">
              <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080] font-bold mb-2">
                {contact.value}
              </p>
              <p className="text-[rgba(248,250,252,0.72)]">{contact.desc}</p>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Formulário de Contato</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-white mb-2">Nome</label>
                <input type="text" placeholder="Seu nome" className="w-full px-4 py-3 rounded-lg bg-[rgba(248,250,252,0.05)] border border-[rgba(194,78,255,0.3)] text-white placeholder-[rgba(248,250,252,0.5)] focus:outline-none focus:border-[#c24eff]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Email</label>
                <input type="email" placeholder="seu@email.com" className="w-full px-4 py-3 rounded-lg bg-[rgba(248,250,252,0.05)] border border-[rgba(194,78,255,0.3)] text-white placeholder-[rgba(248,250,252,0.5)] focus:outline-none focus:border-[#c24eff]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Assunto</label>
                <input type="text" placeholder="Qual é sua dúvida?" className="w-full px-4 py-3 rounded-lg bg-[rgba(248,250,252,0.05)] border border-[rgba(194,78,255,0.3)] text-white placeholder-[rgba(248,250,252,0.5)] focus:outline-none focus:border-[#c24eff]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-white mb-2">Mensagem</label>
                <textarea placeholder="Conte-nos mais..." rows={5} className="w-full px-4 py-3 rounded-lg bg-[rgba(248,250,252,0.05)] border border-[rgba(194,78,255,0.3)] text-white placeholder-[rgba(248,250,252,0.5)] focus:outline-none focus:border-[#c24eff] resize-none"></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-4 bg-gradient-to-r from-[#c24eff] via-[#ff00ff] to-[#ff0080] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#c24eff]/50 transition-all">
                Enviar mensagem
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">FAQ</h2>
            <div className="space-y-6">
              {[
                { q: 'Qual é meu período de teste?', a: '7 dias grátis no plano Professional. Sem compromisso, cancele quando quiser.' },
                { q: 'Como funciona a integração?', a: 'Conectamos via API com Stripe, Zapier, Airtable e mais. Setup em 2 minutos.' },
                { q: 'Incluem suporte em português?', a: 'Sim! Suporte 100% em português via chat, email e telefone.' },
                { q: 'E se precisar de customização?', a: 'Entrada em contato com nosso time de ventas para soluções custom.' }
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-lg bg-[rgba(194,78,255,0.08)] border border-[rgba(194,78,255,0.2)]">
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-[rgba(248,250,252,0.72)]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
