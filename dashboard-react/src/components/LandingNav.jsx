import React from 'react';

const LandingNav = ({ onOpenApp }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-surface/40 backdrop-blur-xl border-b border-outline-variant/10">
      <div className="font-headline text-2xl font-bold tracking-tighter text-on-surface bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary cursor-pointer">
        ProofPress
      </div>
      <div className="hidden md:flex items-center gap-10">
        {['Como funciona', 'Verificar', 'Para creators', 'Segurança'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="font-headline text-xs uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
      <button 
        onClick={onOpenApp}
        className="bg-primary text-on-primary-fixed font-headline text-xs px-6 py-2.5 rounded-full font-bold hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(204,151,255,0.3)]"
      >
        Abrir app
      </button>
    </nav>
  );
};

export default LandingNav;
