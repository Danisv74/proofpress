import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0e0e0e]"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[80%] h-[80%] bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="z-10 container mx-auto px-8 relative">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-surface-container/40 backdrop-blur-md border border-secondary/30 mb-10 animate-pulse">
            <span className="material-symbols-outlined text-secondary text-sm fill-current">verified</span>
            <span className="font-headline text-[10px] text-secondary uppercase tracking-[0.2em] font-semibold">Verificação pública ativa</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
            ProofPress: <br/>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Prove o que é oficial</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed opacity-90">
            Registre conteúdo oficial, prove autoria e permita verificação pública em segundos usando protocolos de soberania digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-24">
            <button className="px-10 py-5 bg-gradient-to-r from-primary to-primary-dim text-on-primary-fixed font-headline font-bold rounded-full flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(204,151,255,0.5)] hover:-translate-y-1 transition-all duration-300">
              Publicar conteúdo oficial
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
            <button className="px-10 py-5 bg-surface-container/40 backdrop-blur-md border border-outline-variant/50 text-on-surface font-headline font-bold rounded-full flex items-center justify-center gap-3 hover:bg-surface-container-highest/80 hover:-translate-y-1 transition-all duration-300">
              <span className="material-symbols-outlined text-secondary">verified_user</span>
              Verificar conteúdo
            </button>
          </div>
        </div>

        {/* High Impact Visual */}
        <div className="relative w-full max-w-5xl mx-auto group">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20 h-full w-full"></div>
          <div className="relative rounded-2xl overflow-hidden border border-outline-variant/20 shadow-2xl">
            <img 
              alt="Command Center" 
              className="w-full h-[500px] object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaj1fBLfgI2kJ4fhBM0pxs90J1xkpnr2GwDVLHmZzTgqFelCAbflRuFKHazJ75fS_CC_ba2g5V3V7rtaZTOjzEbdhlOFJ8LcTs_-4Gm3vmXKMcBfo3_3SUBNpMzeTYqtzzmqAnKXCN7JxuCLdD8ll5ZBV2lNUGKSGi8UTb0fWIaea33n2ar_bn-YruJDWBkh_EALbUJJ4Re7H3ACwNagsKVfjMhHRBooatIUXkMTDPvYkLbomCB8pD1WXTR_kJ-oVg7y7JheJUx8E"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-primary/20 rounded-full animate-spin [animation-duration:10s]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-secondary/30 rounded-full animate-spin [animation-duration:15s] direction-reverse"></div>
                <div className="relative z-10 bg-surface-container/40 backdrop-blur-xl p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(83,221,252,0.2)]">
                  <span className="material-symbols-outlined text-9xl text-secondary font-light">shield_lock</span>
                </div>
              </div>
            </div>
            <div className="absolute top-8 left-8 font-headline text-[10px] text-primary/60 tracking-widest uppercase flex flex-col gap-2">
              <span>Hash: 0x4f2...a9c</span>
              <span>Status: Verified</span>
              <span>Network: Mainnet</span>
            </div>
            <div className="absolute bottom-8 right-8 font-headline text-[10px] text-secondary/60 tracking-widest uppercase">
              Secure Content Protocol v2.4
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
