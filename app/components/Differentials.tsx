'use client';

import { Shield, Zap, Users, Lock, Globe, Headphones } from 'lucide-react';

export function Differentials() {
  const items = [
    {
      icon: Globe,
      title: 'DNA Brasileiro',
      description: 'PIX integrado, suporte em português. Somos donos do código, não dependemos de processadores internacionais.'
    },
    {
      icon: Zap,
      title: 'Performance Elite',
      description: 'Propostas carregam em menos de 2 segundos. Infraestrutura AWS com CDN global para zero latência.'
    },
    {
      icon: Users,
      title: 'Comunidade Ativa',
      description: '500+ freelancers em nosso Discord. Trocas de experiência, networking e suporte peer-to-peer.'
    },
    {
      icon: Lock,
      title: 'Segurança Total',
      description: 'Criptografia AES-256, backups diários, conformidade LGPD. Seus dados em máxima segurança.'
    },
    {
      icon: Shield,
      title: 'Sem Surpresas',
      description: 'Preço transparente, sem taxas ocultas. Cancele quando quiser. Contrato simples e justo.'
    },
    {
      icon: Headphones,
      title: 'Suporte Real',
      description: 'Equipe dedicada com resposta em até 2h. Não é ChatBot, é gente que entende freelancer.'
    }
  ];

  return (
    <section id="diferenciais" className="py-32 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Por que HighFlow
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Seis razões pelas quais 500+ freelancers nos elegem como sua plataforma
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 border border-white/10 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all group cursor-pointer"
              >
                <div className="mb-6 inline-block p-3 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-lg group-hover:from-blue-500/30 group-hover:to-blue-600/20 transition-colors">
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
