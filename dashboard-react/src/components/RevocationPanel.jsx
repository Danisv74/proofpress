import React from 'react';

const RevocationPanel = () => {
  return (
    <section className="bg-error-container/10 p-8 rounded-xl border border-error/20">
      <h3 className="font-headline text-lg font-bold text-error mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined">warning</span>
        Revogar este conteúdo
      </h3>
      <p className="text-sm text-on-error-container mb-6 leading-relaxed">
        A revogação é uma ação <strong className="text-error">permanente</strong>. O hash será marcado como inválido no registro global e o acesso público será cortado imediatamente. Esta ação requer assinatura de segurança.
      </p>
      <button className="w-full bg-error hover:bg-error-dim text-on-error px-6 py-4 rounded-lg font-bold transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-error/20">
        Confirmar revogação
      </button>
    </section>
  );
};

export default RevocationPanel;
