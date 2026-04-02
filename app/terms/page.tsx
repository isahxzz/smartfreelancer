'use client';

import Navigation from '../components/Navigation';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#f8fafc] overflow-x-hidden" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#9945ff]/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-[800px] h-[800px] bg-[#c24eff]/20 rounded-full blur-3xl"></div>
      </div>

      <Navigation />

      <section className="max-w-4xl mx-auto px-6 py-24 mt-12">
        <h1 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: '"Sora", sans-serif' }}>
          Termos e <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c24eff] to-[#ff0080]">Condições de Uso</span>
        </h1>
        <p className="text-[rgba(248,250,252,0.72)] mb-12">Última atualização: 2 de Abril de 2026</p>

        <div className="space-y-12">
          {[
            {
              title: '1. Aceitação dos Termos',
              content: 'Ao acessar e usar HighFlow (o "Serviço"), você concorda em estar legalmente vinculado a estes Termos e Condições. Se você não concorda com qualquer parte destes termos, você não pode usar o Serviço.'
            },
            {
              title: '2. Licença de Uso',
              content: 'HighFlow concede a você uma licença limitada, não exclusiva e não-transferível para usar nosso Serviço. Você concorda em não: (a) modificar, traduzir ou criar trabalhos derivados baseados no Serviço; (b) usar o Serviço para fins ilegais; (c) vender, transferir ou ceder qualquer direito do Serviço.'
            },
            {
              title: '3. Contas de Usuário',
              content: 'Você é responsável por manter a confidencialidade de sua senha. Você concorda em aceitar responsabilidade por todas as atividades que ocorrem em sua conta. Se você suspeitar de uso não autorizado, deve notificar-nos imediatamente.'
            },
            {
              title: '4. Conteúdo do Usuário',
              content: 'Qualquer conteúdo que você cria, carrega ou transmite através do Serviço permanece sua propriedade. Você garante que possui o direito de conceder a HighFlow uma licença para usar esse conteúdo quando necessário para operar o Serviço.'
            },
            {
              title: '5. Restrições de Uso',
              content: 'Você concorda em não: (a) usar o Serviço para qualquer finalidade ilegal ou não autorizada; (b) transmitir qualquer vírus, worm ou código malicioso; (c) fazer engenharia reversa, descompilar ou decompilar o Serviço; (d) usar o Serviço para competir com HighFlow.'
            },
            {
              title: '6. Pagamento e Cancelamento',
              content: 'Os preços estão sujeitos a mudanças mediante notificação. Seu plano será renovado automaticamente até que seja cancelado. Você pode cancelar a qualquer momento. Nenhum reembolso será dado por períodos já usados.'
            },
            {
              title: '7. Isenção de Responsabilidade',
              content: 'O SERVIÇO É FORNECIDO "COMO ESTÁ" SEM GARANTIAS DE QUALQUER TIPO. HIGHFLOW NEGA EXPLICITAMENTE TODAS AS GARANTIAS IMPLÍCITAS, INCLUINDO GARANTIAS DE COMERCIALIZAÇÃO, ADEQUAÇÃO PARA UM FIM ESPECÍFICO E NÃO INFRAÇÃO.'
            },
            {
              title: '8. Limitação de Responsabilidade',
              content: 'Em nenhuma circunstância HighFlow será responsável por danos indiretos, incidentais, especiais, consequentes ou punitivos, mesmo que tenha sido avisado da possibilidade de tais danos.'
            },
            {
              title: '9. Rescisão',
              content: 'HighFlow pode rescindir ou suspender sua conta imediatamente, sem aviso prévio ou responsabilidade, se você violar estes Termos ou qualquer lei aplicável.'
            },
            {
              title: '10. Modificações dos Termos',
              content: 'HighFlow se reserva o direito de modificar estes Termos a qualquer momento. o uso contínuo do Serviço após tais modificações constitui sua aceitação dos novos Termos.'
            }
          ].map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-[rgba(248,250,252,0.80)] leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-br from-[rgba(194,78,255,0.08)] to-[rgba(255,0,128,0.05)] border border-[rgba(194,78,255,0.2)]">
          <h3 className="text-2xl font-bold text-white mb-4">Mais Informações</h3>
          <p className="text-[rgba(248,250,252,0.80)] mb-6">
            Para perguntas sobre estes Termos, entre em contato com nossa equipe de suporte em suporte@highflow.dev ou visite nossa página de <Link href="/privacy" className="text-[#c24eff] hover:text-[#ff0080] transition">Política de Privacidade</Link>.
          </p>
          <p className="text-sm text-[rgba(248,250,252,0.72)]">
            © 2026 HighFlow. Todos os direitos reservados. Desenvolvido com ❤️ para freelancers brasileiros.
          </p>
        </div>
      </section>
    </main>
  );
}
