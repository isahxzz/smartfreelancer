'use client';

import { Nav } from './components/Nav';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-black text-white">
      <Nav />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Propostas que vendem
          </h1>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Esqueça templates genéricos. Crie propostas profissionais, receba pagamentos e acompanhe tudo em um lugar.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors">
              Começar Agora
            </a>
            <a href="#" className="px-6 py-3 border border-gray-600 font-medium rounded hover:border-white transition-colors">
              Ver Demo
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-gray-800 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-gray-400">Freelancers usando</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">15K+</div>
            <div className="text-gray-400">Propostas criadas</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">87%</div>
            <div className="text-gray-400">Taxa de aceitação</div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Como funciona</h2>

          <div className="space-y-12">
            {/* Feature 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Criar em segundos</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Preencha 3 campos e gere uma proposta profissional. Sem compilação de template, sem formatação manual.
                </p>
                <p className="text-gray-500 text-sm">✓ Leva 2 minutos por proposta</p>
              </div>
              <div className="h-64 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center text-gray-500">
                [Ícone aqui]
              </div>
            </div>

            {/* Feature 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-64 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center text-gray-500 order-2 md:order-1">
                [Ícone aqui]
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold mb-4">Receber pagamentos integrado</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Stripe integrado. Seu cliente clica em "Aprovar" e paga direto. Você recebe em minutos.
                </p>
                <p className="text-gray-500 text-sm">✓ PIX, Cartão e Boleto suportados</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Dashboard transparente</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Visualize em tempo real: propostas enviadas, visualizadas, aceitas e em progresso. Sem surpresas.
                </p>
                <p className="text-gray-500 text-sm">✓ Exportar relatórios em PDF</p>
              </div>
              <div className="h-64 bg-gray-900 rounded-lg border border-gray-800 flex items-center justify-center text-gray-500">
                [Ícone aqui]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why HighFlow */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Por que HighFlow</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <div className="text-2xl mb-3">🇧🇷</div>
              <h3 className="font-semibold mb-2">Feito por Brasileiros</h3>
              <p className="text-gray-400 text-sm">PIX, suporte em português, compliance LGPD</p>
            </div>

            <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Rápido</h3>
              <p className="text-gray-400 text-sm">Propostas carregam em menos de 2 segundos</p>
            </div>

            <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="font-semibold mb-2">Seguro</h3>
              <p className="text-gray-400 text-sm">Criptografia end-to-end, backups diários</p>
            </div>

            <div className="p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors">
              <div className="text-2xl mb-3">💰</div>
              <h3 className="font-semibold mb-2">Sem taxas ocultas</h3>
              <p className="text-gray-400 text-sm">Cancele quando quiser, sem contrato</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Planos</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="font-semibold mb-2">Starter</h3>
              <p className="text-gray-400 text-sm mb-6">Para começar</p>
              <div className="text-2xl font-bold mb-6">Grátis</div>
              <a href="#" className="w-full py-2 border border-gray-600 text-center rounded hover:border-white transition-colors block mb-8 text-sm font-medium">
                Começar
              </a>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ Até 5 propostas/mês</li>
                <li>✓ 1 template</li>
                <li>✓ Suporte por email</li>
              </ul>
            </div>

            {/* Professional */}
            <div className="border border-white rounded-lg p-8 shadow-lg shadow-white/10 md:scale-105">
              <div className="inline-block bg-white text-black px-3 py-1 rounded text-xs font-semibold mb-4">
                Recomendado
              </div>
              <h3 className="font-semibold mb-2">Professional</h3>
              <p className="text-gray-400 text-sm mb-6">Para crescer</p>
              <div className="text-2xl font-bold mb-1">R$ 49</div>
              <p className="text-gray-500 text-xs mb-6">/mês (R$ 490/ano)</p>
              <a href="#" className="w-full py-2 bg-white text-black text-center rounded font-medium hover:bg-gray-200 transition-colors block mb-8 text-sm">
                Testar 7 dias
              </a>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ Propostas ilimitadas</li>
                <li>✓ 10 templates customizáveis</li>
                <li>✓ Analytics real-time</li>
                <li>✓ Stripe + WhatsApp integrado</li>
                <li>✓ Suporte prioritário</li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="border border-gray-800 rounded-lg p-8">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-6">Para agências</p>
              <div className="text-2xl font-bold mb-6">R$ 199</div>
              <a href="#" className="w-full py-2 border border-gray-600 text-center rounded hover:border-white transition-colors block mb-8 text-sm font-medium">
                Conversar
              </a>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>✓ Tudo do Professional</li>
                <li>✓ Múltiplos usuários</li>
                <li>✓ API e webhooks</li>
                <li>✓ Dedicated manager</li>
                <li>✓ SLA garantido</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Dúvidas Frequentes</h2>

          <div className="space-y-4">
            {[
              {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim, sem multa. Cancele em 2 cliques, sem responder emails."
              },
              {
                q: "Quanto tempo leva para criar uma proposta?",
                a: "2 minutos. Você preenche cliente, serviço e preço. Pronto."
              },
              {
                q: "Meus dados estão seguros?",
                a: "Sim. Criptografia AES-256, backup diário, conformidade LGPD. Banco de dados Amazon AWS."
              },
              {
                q: "Posso começar grátis?",
                a: "Sim. Plano Starter é gratuito para sempre. Planos pagos têm 7 dias de trial."
              },
              {
                q: "Como funciona o suporte?",
                a: "Email e Discord. Clientes Professional têm resposta em até 2h."
              },
              {
                q: "Vocês trabalham com Zapier?",
                a: "Sim. Zapier, n8n e API pública. Crie integrações customizadas."
              }
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left border border-gray-800 rounded-lg p-6 hover:border-gray-700 transition-colors text-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{item.q}</span>
                  <span className="text-gray-500 text-lg">{openFaq === idx ? '−' : '+'}</span>
                </div>
                {openFaq === idx && (
                  <p className="text-gray-400 mt-4 text-sm leading-relaxed">{item.a}</p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Comece agora</h2>
          <p className="text-gray-400 mb-8">7 dias grátis no plano Professional. Sem cartão de crédito.</p>
          <a href="#" className="inline-block px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition-colors">
            Comece Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-semibold mb-4">HighFlow</h3>
              <p className="text-gray-400 text-sm">Propostas que vendem.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>suporte@highflow.dev</li>
                <li>(11) 99999-0000</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 HighFlow. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
