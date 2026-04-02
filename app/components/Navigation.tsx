'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-[rgba(194,78,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg">
          <span className="w-7 h-7 bg-gradient-to-br from-[#c24eff] to-[#ff0080] rounded-md flex items-center justify-center text-white font-black text-xs">H</span>
          <span>HighFlow</span>
        </Link>

        {/* Center Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-[rgba(248,250,252,0.7)] hover:text-white transition">
            Início
          </Link>
          <Link href="/pricing" className="px-5 py-2 bg-[#c24eff] text-white text-sm font-semibold rounded-full hover:bg-[#b242e6] transition-all">
            Planos
          </Link>
        </div>

        {/* Right Icons & CTA */}
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-full hover:bg-[rgba(194,78,255,0.1)] flex items-center justify-center text-[rgba(248,250,252,0.6)] hover:text-[#c24eff] transition">
            💬
          </button>
          <button className="w-8 h-8 rounded-full hover:bg-[rgba(194,78,255,0.1)] flex items-center justify-center text-[rgba(248,250,252,0.6)] hover:text-[#c24eff] transition">
            ✉️
          </button>
          <button className="px-6 py-2 bg-[#c24eff] text-white font-semibold rounded-full hover:bg-[#b242e6] transition-all">
            Entrar
          </button>
        </div>
      </div>
    </nav>
  );
}
