'use client';

export function Nav() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-semibold text-white">HighFlow</div>
        
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Recursos</a>
          <a href="#" className="hover:text-white transition-colors">Preços</a>
          <a href="#" className="hover:text-white transition-colors">Sobre</a>
        </div>

        <a href="#" className="px-4 py-2 bg-white text-black rounded text-sm font-medium hover:bg-gray-200 transition-colors">
          Entrar
        </a>
      </div>
    </nav>
  );
}
