'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="sticky top-4 z-50 w-11/12 mx-auto">
      <div className="flex items-center justify-between gap-4 px-6 py-4 border border-[rgba(248,250,252,0.08)] rounded-full bg-[rgba(5,5,5,0.9)] backdrop-blur-md shadow-lg">
        <Link href="/" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[rgba(248,250,252,0.92)] hover:text-[#c24eff] transition">
          HighFlow
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-[rgba(248,250,252,0.72)] font-semibold">
          {[
            { label: 'Home', href: '/' },
            { label: 'Preços', href: '/pricing' },
            { label: 'Sobre Nós', href: '/about' },
            { label: 'Contato', href: '/contact' }
          ].map((item) => (
            <Link key={item.href} href={item.href} className="text-sm pb-2 border-b-2 border-transparent hover:border-[#c24eff] hover:text-[#c24eff] transition-all">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
