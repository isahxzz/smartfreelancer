'use client';

export function HeroSection() {
  return (
    <section className="min-h-screen bg-black flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-full hover:border-white/20 transition-colors">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">500+ empresas usando</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Propostas que{' '}
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              vendem
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl">
            Crie propostas profissionais em segundos, receba pagamentos integrados e acompanhe tudo em um dashboard poderoso. Feito para freelancers que levam negócio a sério.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#" 
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:shadow-white/20 text-center"
            >
              Começar Gratuitamente
            </a>
            <a 
              href="#" 
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all text-center"
            >
              Ver Demo
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-400">Freelancers ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">15K+</div>
              <div className="text-sm text-gray-400">Propostas criadas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">87%</div>
              <div className="text-sm text-gray-400">Taxa de aceitação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
