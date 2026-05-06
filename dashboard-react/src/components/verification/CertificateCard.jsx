import React from 'react';

const CertificateCard = () => {
  return (
    <div className="bg-surface-container/40 backdrop-blur-xl p-8 rounded-xl border border-outline-variant/10 relative overflow-hidden">
      {/* Technical Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 blur-[100px] -mr-32 -mt-32"></div>
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-xl bg-surface-container flex items-center justify-center border border-outline-variant/20">
            <span className="material-symbols-outlined text-secondary text-4xl fill-current">verified_user</span>
          </div>
          <div>
            <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-1">Status de Integridade</div>
            <div className="text-2xl font-display font-bold text-secondary flex items-center gap-2">
              Totalmente Verificado
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-end">
          <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-1">Rede de Registro</div>
          <div className="flex items-center gap-2 font-headline font-bold text-on-surface">
            <div className="w-6 h-6 rounded-full bg-[#14F195]/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-xs text-[#14F195]">bolt</span>
            </div>
            Solana Mainnet-Beta
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
        <div className="space-y-1">
          <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Emissor</div>
          <div className="text-lg font-headline font-bold text-on-surface">Vanguard Digital</div>
          <div className="text-[11px] text-secondary font-mono bg-secondary/10 px-2 py-0.5 rounded inline-block border border-secondary/20">verified_entity_v01</div>
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Data de Publicação</div>
          <div className="text-lg font-headline font-bold text-on-surface">Outubro 24, 2024 — 14:32 UTC</div>
        </div>
        <div className="md:col-span-2 space-y-1">
          <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Wallet do Provedor</div>
          <div className="text-xs font-mono text-on-surface-variant bg-surface-container-low p-3 rounded-lg flex justify-between items-center group border border-outline-variant/5">
            <span className="truncate mr-4">0x71C4B43600000000000000000000000000000000</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-secondary">open_in_new</span>
          </div>
        </div>
        <div className="md:col-span-2 space-y-1">
          <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Hash de Veracidade (SHA-256)</div>
          <div className="text-xs font-mono text-on-surface-variant bg-surface-container-low p-3 rounded-lg flex justify-between items-center group border border-outline-variant/5">
            <span className="truncate mr-4">f7e8a9c2d6e5f4b3a2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2e1f0a9</span>
            <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer text-secondary">content_copy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
