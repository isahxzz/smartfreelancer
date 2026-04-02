'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-400 rounded-lg flex items-center justify-center font-bold text-black text-lg group-hover:shadow-lg group-hover:shadow-white/20 transition-all">
            H
          </div>
          <span className="font-bold text-white text-lg hidden sm:inline">HighFlow</span>
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Sobre
          </a>
          <a href="#como-funciona" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Como Funciona
          </a>
          <a href="#diferenciais" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Diferenciais
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">
            Preços
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-300 hover:text-white text-sm font-medium transition-colors hidden sm:inline">
            Entrar
          </a>
          <a 
            href="#" 
            className="px-5 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg hover:shadow-white/10 text-sm"
          >
            Começar
          </a>
        </div>
      </nav>
    </header>
  );
}
