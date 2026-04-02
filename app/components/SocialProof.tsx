'use client';

import { Star } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      name: 'Marina Costa',
      role: 'Designer Freelancer',
      company: 'São Paulo, SP',
      text: 'Aumentei minha taxa de aceitação de 60% para 87% em 3 meses. As propostas profissionais fazem diferença real no valor percebido.',
      avatar: '🎨'
    },
    {
      name: 'Carlos Mendes',
      role: 'Desenvolvedor Full Stack',
      company: 'Rio de Janeiro, RJ',
      text: 'Economizo 5 horas por semana. Antes fazia propostas em Word. Agora automatizado e com pagamento integrado.',
      avatar: '💻'
    },
    {
      name: 'Ana Silva',
      role: 'Consultora de Marketing',
      company: 'Belo Horizonte, MG',
      text: 'O suporte é real. Tive uma dúvida sobre conforme LGPD e responderam em 45 minutos. Muito profissional.',
      avatar: '📊'
    }
  ];

  return (
    <section className="py-32 bg-white/2 border-y border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            O que falam sobre nós
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Freelancers que já estão ganhando mais com HighFlow
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div 
              key={idx}
              className="p-8 border border-white/10 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-xs text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
