import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10">
      <div>
        <h2 className="font-headline text-3xl font-bold text-on-surface">Painel do emissor</h2>
        <p className="text-on-surface-variant text-sm mt-1">Gestão descentralizada de proveniência</p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 bg-surface-container-high px-4 py-2 rounded-full border border-outline-variant/10">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_rgba(83,221,252,0.8)]"></div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Wallet Conectada</span>
          <span className="font-mono text-[10px] text-secondary">0x...8921</span>
        </div>
        
        <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high border border-outline-variant/10 text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
