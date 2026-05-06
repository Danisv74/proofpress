import React from 'react';

const ManageHeader = () => {
  return (
    <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="max-w-2xl">
        <nav className="flex gap-2 text-[10px] uppercase tracking-[0.2em] text-secondary font-headline mb-3">
          <span>Conteúdos</span>
          <span className="text-outline">/</span>
          <span className="text-on-surface">Gestão</span>
        </nav>
        <h2 className="font-headline text-4xl font-bold tracking-tight text-on-surface mb-4">Gerenciar conteúdo</h2>
        <p className="text-on-surface-variant text-lg leading-relaxed">
          Controle de versões determinísticas e integridade de ativos digitais. Todas as alterações são registradas na camada de consenso para garantir proveniência absoluta.
        </p>
      </div>
      <div className="flex gap-3">
        <button className="bg-primary hover:bg-primary-dim text-on-primary-fixed px-6 py-3 rounded-lg font-bold flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-sm">publish</span>
          Publicar nova versão
        </button>
      </div>
    </header>
  );
};

export default ManageHeader;
