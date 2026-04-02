'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f8fafc] overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9945ff]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-[800px] h-[800px] bg-[#c24eff]/20 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <section className="max-w-4xl mx-auto px-6 py-24 mt-12">
        <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: '"Sora", sans-serif' }}>
          Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080]">Privacidade e Proteção de Dados</span>
        </h1>
        <p className="text-[rgba(248,250,252,0.72)] mb-12">Última atualização: 2 de Abril de 2026</p>

        <div className="space-y-12">
          {[
            {
              title: '1. Introdução',
              content: 'HighFlow está comprometida com proteger sua privacidade e cumprir com a Lei Geral de Proteção de Dados (LGPD). Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações.'
            },
            {
              title: '2. Informações que Coletamos',
              content: 'Coletamos informações que você fornece voluntariamente: (a) Informações de conta: nome, email, senha; (b) Informações de perfil: empresa, especialidade, experiência; (c) Conteúdo: propostas, templates, histórico de negociações; (d) Dados de pagamento: informações de cartão (processados por Stripe); (e) Logs de servidor: endereço IP, navegador, atividade de uso.'
            },
            {
              title: '3. Como Usamos Suas Informações',
              content: 'Usamos suas informações para: (a) Fornecer e melhorar o Serviço; (b) Enviar comunicações sobre sua conta; (c) Processar pagamentos; (d) Compilar estatísticas anônimas; (e) Desenvolver novos recursos; (f) Cumprir com obrigações legais; (g) Proteger contra fraude e abuso.'
            },
            {
              title: '4. Conformidade com LGPD',
              content: 'Como empresa brasileira, HighFlow cumpre totalmente com a LGPD. Seus dados pessoais são: (a) Processados com consentimento claro; (b) Usados apenas para finalidades legítimas; (c) Protegidos com criptografia de ponta; (d) Não compartilhados com terceiros sem sua autorização; (e) Deletados sob sua solicitação.'
            },
            {
              title: '5. Compartilhamento de Dados',
              content: 'Não compartilhamos dados com terceiros, EXCETO: (a) Stripe para processar pagamentos; (b) Zapier para automações que você autorizar; (c) Autoridades legais quando obrigado por lei; (d) Provedores de hospedagem para manter o Serviço operacional.'
            },
            {
              title: '6. Segurança de Dados',
              content: 'Implementamos medidas de segurança robustas: (a) Criptografia TLS para dados em trânsito; (b) Criptografia AES-256 para dados em repouso; (c) Acesso restrito aos dados; (d) Auditorias de segurança regulares; (e) Backup automático com redundância.'
            },
            {
              title: '7. Retenção de Dados',
              content: 'Mantemos seus dados pelo tempo necessário para fornecer o Serviço. Você pode solicitar a exclusão de dados a qualquer momento. Dados de backup podem ser mantidos por até 90 dias após exclusão.'
            },
            {
              title: '8. Seus Direitos',
              content: 'Você tem direitos sob a LGPD: (a) Direito de acesso: solicitar cópia de seus dados; (b) Direito de retificação: corrigir dados incorretos; (c) Direito de exclusão: solicitar remoção de dados; (d) Direito de portabilidade: receber dados em formato legível; (e) Direito de reclamação: junto à autoridade reguladora.'
            },
            {
              title: '9. Cookies e Rastreamento',
              content: 'HighFlow usa cookies apenas para: (a) Autenticação e segurança; (b) Preferências de usuário; (c) Analytics anônimo (Google Analytics 4). Você pode desabilitar cookies no seu navegador, mas isso pode impactar a funcionalidade.'
            },
            {
              title: '10. Mudanças na Política',
              content: 'Podemos atualizar esta Política de Privacidade. Notificaremos você sobre mudanças significativas via email. O uso contínuo do Serviço após as mudanças constitui sua aceitação.'
            },
            {
              title: '11. Contato',
              content: 'Para perguntas sobre privacidade ou para exercer seus direitos LGPD, entre em contato: Email: privacidade@highflow.dev | Endereço: São Paulo, Brasil | Telefone: (11) 99999-0000'
            }
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-[rgba(248,250,252,0.80)] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-[rgba(194,78,255,0.08)] to-[rgba(255,0,128,0.05)] border border-[rgba(194,78,255,0.2)]">
          <h3 className="text-2xl font-bold text-white mb-4">Seu acesso, seu controle</h3>
          <p className="text-[rgba(248,250,252,0.80)] mb-6">
            Você tem controle total sobre seus dados. Acesse as configurações da sua conta para gerenciar preferências, fazer download de seus dados ou solicitar exclusão. Para questões específicas de LGPD, visite nossa página de <Link href="/terms" className="text-[#c24eff] hover:text-[#ff0080] transition">Termos e Condições</Link> ou <Link href="/contact" className="text-[#c24eff] hover:text-[#ff0080] transition">contate-nos</Link>.
          </p>
          <p className="text-sm text-[rgba(248,250,252,0.72)]">
            © 2026 HighFlow. Privacidade é nosso compromisso. Desenvolvido com ❤️ e respeito à Lei.
          </p>
        </div>
      </section>
    </main>
  );
}
