import React from 'react';

const VerificationHero = () => {
  return (
    <section className="mb-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container/20 border border-secondary/20 rounded-full mb-6">
        <span className="material-symbols-outlined text-secondary text-sm fill-current">verified</span>
        <span className="text-secondary font-headline text-xs font-bold tracking-widest uppercase">Verificação concluída</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6 text-on-surface">
            Conteúdo <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">verificado</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant max-w-md">
            Este conteúdo foi publicado por um emissor autorizado e continua ativo na rede descentralizada.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          <button className="flex items-center gap-2 px-6 py-4 bg-surface-container-high hover:bg-surface-container-highest rounded-xl text-sm font-headline font-bold transition-all border border-outline-variant/20 text-on-surface">
            <span className="material-symbols-outlined text-lg">content_copy</span> Copiar link
          </button>
          <button className="flex items-center gap-2 px-6 py-4 bg-surface-container-high hover:bg-surface-container-highest rounded-xl text-sm font-headline font-bold transition-all border border-outline-variant/20 text-on-surface">
            <span className="material-symbols-outlined text-lg">download</span> Baixar original
          </button>
        </div>
      </div>
    </section>
  );
};

export default VerificationHero;
