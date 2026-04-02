'use client';

import { Navigation } from './components/NavigationPro';
import { 
  IconAutomate, 
  IconPerformance, 
  IconSecurity, 
  IconCommunity, 
  IconAnalytics,
  IconIntegration,
  IconSupport,
  IconDashboard,
  IconArrowRight,
  IconCheck
} from './components/ProIcons';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="bg-white text-gray-950">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-900 rounded-full opacity-5 blur-3xl -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-slate-600 uppercase tracking-widest mb-4">
              Automação de Propostas
            </p>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-950 leading-tight mb-6">
              Gerencie suas propostas com{' '}
              <span className="text-blue-900">eficiência profissional</span>
            </h1>

            <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl">
              Plataforma corporativa para freelancers que buscam automatizar geração de propostas, 
              receber pagamentos e acompanhar vendas em tempo real.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="px-8 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 transition-colors"
              >
                Começar Agora
              </a>
              <a
                href="#"
                className="px-8 py-3 border border-slate-300 text-gray-950 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
              >
                Ver Demo
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-slate-200">
              <div>
                <p className="text-2xl font-bold text-gray-950">500+</p>
                <p className="text-sm text-slate-600">Freelancers Ativos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-950">15K+</p>
                <p className="text-sm text-slate-600">Propostas Geradas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-950">87%</p>
                <p className="text-sm text-slate-600">Taxa de Aceitação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold text-gray-950 mb-4">
              Recursos Corporativos
            </h2>
            <p className="text-lg text-slate-600">
              Ferramentas profissionais para gerenciar todo seu fluxo de vendas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 mb-6 text-slate-700">
                <IconAutomate />
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mb-3">
                Gerador Automático
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Crie propostas profissionais em 3 cliques. Templates otimizados para conversão.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 mb-6 text-slate-700">
                <IconAnalytics />
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mb-3">
                Analytics em Tempo Real
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Acompanhe visualizações, edições e conversões de cada proposta enviada.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 mb-6 text-slate-700">
                <IconIntegration />
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mb-3">
                Integrações Nativas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Conecte com Stripe, Gmail, WhatsApp, Slack e suas ferramentas favoritas.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 mb-6 text-slate-700">
                <IconDashboard />
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mb-3">
                Dashboard Unificado
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Visualize pipeline de vendas, métricas e performance em um único lugar.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 mb-6 text-slate-700">
                <IconSecurity />
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mb-3">
                Segurança Corporativa
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Criptografia end-to-end, conformidade LGPD e backups automáticos diários.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-colors">
              <div className="w-12 h-12 mb-6 text-slate-700">
                <IconSupport />
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mb-3">
                Suporte Dedicado
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Resposta em até 2 horas. Especialistas disponíveis via Discord e Email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl font-bold text-gray-950 mb-4">
              Por que escolher HighFlow
            </h2>
            <p className="text-lg text-slate-600">
              Desenvolvido por freelancers, para freelancers que buscam profissionalismo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 mt-1 text-blue-900 flex-shrink-0">
                  <IconCheck />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-950 mb-2">DNA Brasileiro</h3>
                  <p className="text-slate-600">Suporte em português, PIX integrado, compliance LGPD</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 mt-1 text-blue-900 flex-shrink-0">
                  <IconCheck />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-950 mb-2">Performance Otimizada</h3>
                  <p className="text-slate-600">Propostas carregam em menos de 2 segundos</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 mt-1 text-blue-900 flex-shrink-0">
                  <IconCheck />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-950 mb-2">Evolução Contínua</h3>
                  <p className="text-slate-600">Atualizações mensais baseadas em feedback de usuários</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-6 h-6 mt-1 text-blue-900 flex-shrink-0">
                  <IconCheck />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-950 mb-2">Foco em Comunidade</h3>
                  <p className="text-slate-600">Comunidade Discord ativa com 500+ freelancers</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 mt-1 text-blue-900 flex-shrink-0">
                  <IconCheck />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-950 mb-2">Preço Transparente</h3>
                  <p className="text-slate-600">Sem taxas ocultas, sem contratos longos, cancele quando quiser</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-6 h-6 mt-1 text-blue-900 flex-shrink-0">
                  <IconCheck />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-950 mb-2">Confiabilidade</h3>
                  <p className="text-slate-600">99.9% uptime, monitoramento 24/7, infraestrutura enterprise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Dashboard Intuitivo e Poderoso
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Tenha controle total sobre suas propostas, pagamentos e relacionamento com clientes 
                em uma interface moderna e responsiva.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <IconCheck />
                  <span className="text-blue-50">Relatórios em tempo real com exportação em PDF</span>
                </div>
                <div className="flex gap-3">
                  <IconCheck />
                  <span className="text-blue-50">Configurações de templates personalizáveis</span>
                </div>
                <div className="flex gap-3">
                  <IconCheck />
                  <span className="text-blue-50">Gerenciamento de equipe e permissões</span>
                </div>
              </div>

              <a href="#" className="inline-flex items-center gap-2 mt-8 text-white font-semibold hover:gap-3 transition-all">
                Explorar Dashboard <IconArrowRight />
              </a>
            </div>

            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 aspect-video flex items-center justify-center">
              <div className="text-center">
                <IconDashboard />
                <p className="text-slate-400 mt-4">Mockup do Dashboard</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-950 mb-4">Planos Simples e Diretos</h2>
            <p className="text-lg text-slate-600">Sem surpresas, sem taxas ocultas</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-950 mb-2">Starter</h3>
              <p className="text-slate-600 mb-6">Para testar a plataforma</p>
              <p className="text-3xl font-bold text-gray-950 mb-6">Grátis</p>
              <a href="#" className="block w-full py-2 text-center border border-slate-300 text-gray-950 rounded-lg font-semibold hover:bg-slate-50 transition-colors mb-8">
                Começar
              </a>
              <ul className="space-y-3">
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Até 5 propostas/mês
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> 1 template padrão
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Suporte por email
                </li>
              </ul>
            </div>

            {/* Professional - Destaque */}
            <div className="border-2 border-blue-900 rounded-xl p-8 shadow-lg transform md:scale-105 bg-gradient-to-br from-white to-blue-50">
              <div className="inline-block bg-blue-900 text-white px-4 py-1 rounded text-sm font-semibold mb-4">
                Mais Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-950 mb-2">Professional</h3>
              <p className="text-slate-600 mb-6">Para freelancers sérios</p>
              <p className="text-3xl font-bold text-gray-950 mb-1">R$ 49</p>
              <p className="text-sm text-slate-600 mb-6">/mês, pago anualmente R$ 490</p>
              <a href="#" className="block w-full py-2 text-center bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-950 transition-colors mb-8">
                Testar 7 dias
              </a>
              <ul className="space-y-3">
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Propostas ilimitadas
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> 10 templates customizáveis
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Analytics completo
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Integrações Stripe + WhatsApp
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Suporte prioritário
                </li>
              </ul>
            </div>

            {/* Enterprise */}
            <div className="border border-slate-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-950 mb-2">Enterprise</h3>
              <p className="text-slate-600 mb-6">Para agências e times</p>
              <p className="text-3xl font-bold text-gray-950 mb-6">R$ 199</p>
              <a href="#" className="block w-full py-2 text-center border border-slate-300 text-gray-950 rounded-lg font-semibold hover:bg-slate-50 transition-colors mb-8">
                Começar
              </a>
              <ul className="space-y-3">
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Tudo do Professional
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Múltiplos usuários
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Permissões granulares
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> API e webhooks
                </li>
                <li className="flex gap-2 text-slate-700">
                  <span className="text-blue-900">•</span> Dedicated account manager
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-950 mb-4">Perguntas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Posso cancelar minha assinatura a qualquer momento?",
                a: "Sim, sem multa, sem obrigações. Sua inscrição é cancelada imediatamente e você não será cobrado novamente."
              },
              {
                q: "Quais são as taxas de transação?",
                a: "Você paga apenas a taxa do Stripe (2.9% + R$ 0.30 por transação). Sem taxas adicionais da HighFlow."
              },
              {
                q: "Meus dados estão seguros?",
                a: "Sim. Usamos criptografia AES-256, backup diário e conformidade total com LGPD. Todos os dados são armazenados em servidores Amazon AWS."
              },
              {
                q: "Posso começar grátis?",
                a: "Sim, plano Starter é gratuito. Planos pagos oferecem 7 dias de trial sem cartão de crédito."
              },
              {
                q: "Como funciona o suporte?",
                a: "Oferecemos suporte via Discord (resposta em até 2h) e email. Clientes Professional+ têm prioridade."
              },
              {
                q: "Posso integrar com meu CRM?",
                a: "Sim. Suportamos Zapier, n8n e temos API pública. Você pode criar integrações customizadas."
              }
            ].map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-gray-950 text-left">{item.q}</span>
                  <span className="text-slate-400 flex-shrink-0">
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 py-4 border-t border-slate-200 bg-white text-slate-600">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar seu fluxo de vendas?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Junte-se aos 500+ freelancers que já estão gerando propostas profissionais
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Começar Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-slate-300 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-bold text-white mb-4">HighFlow</h3>
              <p className="text-sm leading-relaxed">
                Automação de propostas para freelancers que buscam crescimento profissional.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produto</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Preços</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunidade</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li>suporte@highflow.dev</li>
                <li>(11) 99999-0000</li>
                <li>São Paulo, Brasil</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex justify-between items-center text-sm">
            <p>&copy; 2024 HighFlow. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
