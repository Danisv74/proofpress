import React from 'react';

const VersionItem = ({ version, date, description, hash, ipfs, isLatest, icon }) => (
  <div className={`flex gap-6 relative ${!isLatest ? 'opacity-60' : ''}`}>
    <div className="flex flex-col items-center">
      <div className={`w-8 h-8 rounded-full ${isLatest ? 'bg-primary-container text-on-primary-container' : 'bg-surface-container-high border border-outline-variant/20'} flex items-center justify-center z-10`}>
        <span className="material-symbols-outlined text-sm">{icon}</span>
      </div>
      <div className="w-[1px] h-full bg-outline-variant/20 absolute top-8 left-4"></div>
    </div>
    <div className={`flex-1 ${!isLatest ? '' : 'pb-8'}`}>
      <div className="flex items-center justify-between mb-1">
        <span className={`font-headline font-bold ${isLatest ? 'text-on-surface' : ''}`}>{version} {isLatest && '(Atual)'}</span>
        <span className={`text-[10px] text-on-surface-variant ${isLatest ? 'px-2 py-1 bg-surface-container rounded uppercase tracking-tighter' : ''}`}>
          {isLatest ? `Publicado em ${date}` : date}
        </span>
      </div>
      <p className="text-sm text-on-surface-variant mb-3 leading-relaxed">{description}</p>
      {hash && (
        <div className="flex items-center gap-4 text-[11px] font-mono text-outline">
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">fingerprint</span> {hash}</span>
          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">database</span> IPFS: {ipfs}</span>
        </div>
      )}
    </div>
  </div>
);

const VersionHistory = () => {
  return (
    <section className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/5">
      <h3 className="font-headline text-lg font-bold mb-8">Histórico de Versões</h3>
      <div className="space-y-6">
        <VersionItem 
          version="Versão 2.4.0" 
          date="12/10/24" 
          description="Atualização dos termos de governança e inclusão de assinaturas multisig para o conselho diretor."
          hash="0x8f3a...c91d"
          ipfs="QmXo...5Yw"
          isLatest={true}
          icon="check_circle"
        />
        <VersionItem 
          version="Versão 2.3.1" 
          date="05/09/24" 
          description="Pequenas correções tipográficas e ajustes de layout no cabeçalho do documento."
          isLatest={false}
          icon="history"
        />
        <VersionItem 
          version="Criação inicial" 
          date="28/08/24" 
          description="Versão original carregada no sistema via nó local."
          isLatest={false}
          icon="create"
        />
      </div>
    </section>
  );
};

export default VersionHistory;
