import React from 'react';

const VerificationHeader = ({ onOpenApp }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 h-20 bg-surface/80 backdrop-blur-lg border-b border-outline-variant/10">
      <div className="flex items-center gap-2">
        <span className="font-headline text-xl font-bold tracking-tighter text-on-surface bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ProofPress</span>
        <span className="text-secondary text-[10px] font-headline border border-secondary/30 px-1.5 py-0.5 rounded tracking-widest uppercase">Verification Portal</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a className="font-headline text-xs uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Como funciona</a>
        <a className="font-headline text-xs uppercase tracking-wider text-primary font-bold border-b-2 border-primary pb-1" href="#">Verificar</a>
        <a className="font-headline text-xs uppercase tracking-wider text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Segurança</a>
      </nav>
      <div className="flex items-center gap-4">
        <button 
          onClick={onOpenApp}
          className="bg-primary hover:bg-primary-dim text-on-primary-fixed px-6 py-2.5 rounded-xl font-headline text-sm font-bold transition-all active:scale-95 shadow-lg shadow-primary/10"
        >
          Abrir app
        </button>
      </div>
    </header>
  );
};

export default VerificationHeader;
