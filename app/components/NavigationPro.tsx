'use client';

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-900 rounded-lg" />
          <span className="font-bold text-gray-950">HighFlow</span>
        </div>

        {/* Menu Center - Hidden on Mobile */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm text-slate-600 hover:text-gray-950 transition-colors font-medium">
            Início
          </a>
          <a href="#features" className="text-sm text-slate-600 hover:text-gray-950 transition-colors font-medium">
            Recursos
          </a>
          <a href="#pricing" className="text-sm text-slate-600 hover:text-gray-950 transition-colors font-medium">
            Preços
          </a>
        </div>

        {/* Right Side - CTA */}
        <a
          href="#"
          className="px-5 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-950 transition-colors"
        >
          Entrar
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
