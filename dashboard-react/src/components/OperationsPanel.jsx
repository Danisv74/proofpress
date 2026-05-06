import React from 'react';

const OperationButton = ({ icon, label }) => (
  <button className="flex items-center justify-between p-4 bg-surface-container-high hover:bg-surface-container-highest rounded-lg border border-outline-variant/10 transition-all group">
    <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-secondary">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
    <span className="material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward_ios</span>
  </button>
);

const OperationsPanel = () => {
  return (
    <section className="bg-surface-container p-8 rounded-xl border border-outline-variant/10 backdrop-blur-xl bg-opacity-70">
      <h3 className="font-headline text-lg font-bold mb-6 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary">terminal</span>
        Painel de Operações
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <OperationButton icon="open_in_new" label="Abrir página pública" />
        <OperationButton icon="content_copy" label="Copiar link de verificação" />
      </div>
    </section>
  );
};

export default OperationsPanel;
