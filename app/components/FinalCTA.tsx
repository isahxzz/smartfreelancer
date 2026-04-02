'use client';

import { ArrowRight } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-b from-black to-blue-950/20 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Comece agora
        </h2>
        
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Junte-se aos 500+ freelancers que já estão gerando propostas profissionais e aumentando suas taxas de aceitação.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:shadow-white/20 inline-flex items-center justify-center gap-2"
          >
            Começar Gratuitamente
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="px-8 py-4 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 hover:border-white/40 transition-all inline-flex items-center justify-center gap-2"
          >
            Agendar Demo
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          Sem cartão de crédito. Leva 2 minutos para começar.
        </p>
      </div>
    </section>
  );
}
