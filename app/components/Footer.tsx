'use client';

import { Mail, Phone, MapPin, Code2, Share2, MessageCircle } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16 pb-8 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-400 rounded-lg flex items-center justify-center font-bold text-black">
                H
              </div>
              <span className="font-bold text-white text-lg">HighFlow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Propostas que vendem. Automação profissional para freelancers que levam negócio a sério.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">Produto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recursos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Preços</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Segurança</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Comunidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Discord</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:suporte@highflow.dev">suporte@highflow.dev</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+551199990000">(11) 99999-0000</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            &copy; {currentYear} HighFlow. Todos os direitos reservados.
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              <Code2 className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              <Share2 className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacidade</a>
            <span className="text-gray-600">·</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos</a>
            <span className="text-gray-600">·</span>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
