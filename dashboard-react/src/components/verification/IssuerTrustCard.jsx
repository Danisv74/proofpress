import React from 'react';

const IssuerTrustCard = () => {
  return (
    <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-on-primary-fixed">
          <span className="material-symbols-outlined text-xl fill-current">shield_with_heart</span>
        </div>
        <div>
          <div className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant">Selo de Confiança</div>
          <div className="font-headline font-bold text-on-surface">Emissor verificado via SAS</div>
        </div>
      </div>
      <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
        A Vanguard Digital passou pelo Protocolo de Soberania de Ativos (SAS), garantindo que sua identidade digital é vinculada a uma entidade legalmente reconhecida.
      </p>
      <div className="pt-6 border-t border-outline-variant/10">
        <button className="w-full py-3 rounded-xl border border-secondary text-secondary font-headline text-sm font-bold hover:bg-secondary/10 transition-all flex items-center justify-center gap-2">
          Detalhes do Emissor <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};

export const AssetPreviewCard = () => (
  <div className="rounded-xl overflow-hidden border border-outline-variant/10 aspect-video relative group">
    <img 
      alt="Asset Preview" 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3-h3TPPeWI6HlmLRVNWnKGMLY7Jp55qJw-0TnoWnAuFdfDEoJWrjBgKvHe5IaIO9u6EMbxP2v4zxTIEraxJ9I4BMZB9F-a393F5Tv682JacwIhsWwPcaeU-VajmEO99UTTq1K8KdzMZm_uSwupsbOKw73s32rb5k9IG-PcSqXv_5Rvsa15JpUs8wzqdlXZ5NFep_1rhd8VEldHkt2bhXsQMPJzpWTn1T9_lBQ4CjEX2jK1ia_lxHKxFjancXpYjuKG0Lo7s2kNzY" 
    />
    <div className="absolute inset-0 bg-surface/40 flex items-center justify-center group-hover:bg-surface/20 transition-all">
      <div className="w-12 h-12 rounded-full bg-surface-container/40 backdrop-blur-md flex items-center justify-center border border-white/20">
        <span className="material-symbols-outlined text-white">play_arrow</span>
      </div>
    </div>
    <div className="absolute bottom-4 left-4">
      <div className="text-[10px] font-headline font-bold uppercase bg-surface/80 backdrop-blur px-2 py-1 rounded text-on-surface">Asset Preview</div>
    </div>
  </div>
);

export default IssuerTrustCard;
