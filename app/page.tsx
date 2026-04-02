export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-600">SmartFreelancer</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Gere propostas em 30 segundos
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Economize 2 horas por semana. Feche mais contratos.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Teste Grátis (7 dias)
        </button>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Como funciona</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="font-bold text-lg mb-2">Preencha um form</h4>
              <p className="text-gray-600">Nome do cliente, serviço, preço</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h4 className="font-bold text-lg mb-2">Gere proposta</h4>
              <p className="text-gray-600">PDF profissional pronto em segundos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="font-bold text-lg mb-2">Envie por email</h4>
              <p className="text-gray-600">Diretamente pro seu cliente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">Planos simples</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-gray-200 rounded-lg p-8">
            <h4 className="text-2xl font-bold mb-4">Free</h4>
            <p className="text-4xl font-bold text-blue-600 mb-4">R$ 0</p>
            <p className="text-gray-600 mb-6">Por mês</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>1 proposta por mês</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>2 templates inclusos</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Email de suporte</span>
              </li>
            </ul>
            <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50">
              Começar grátis
            </button>
          </div>

          <div className="border-2 border-blue-600 rounded-lg p-8 bg-blue-50">
            <div className="text-sm font-bold text-blue-600 mb-2">MAIS POPULAR</div>
            <h4 className="text-2xl font-bold mb-4">Pro</h4>
            <p className="text-4xl font-bold text-blue-600 mb-4">R$ 19</p>
            <p className="text-gray-600 mb-6">Por mês</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Propostas ilimitadas</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>10 templates</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Suporte prioritário</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Analytics básico</span>
              </li>
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700">
              Começar teste grátis
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6 text-center">
        <p>SmartFreelancer © 2026 | Simples. Rápido. Profissional.</p>
      </footer>
    </main>
  );
}
