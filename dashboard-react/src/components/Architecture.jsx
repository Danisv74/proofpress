import React from 'react';

const Architecture = () => {
  return (
    <section className="py-40 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-24">
          <div className="lg:w-2/5">
            <h2 className="font-display text-5xl font-bold tracking-tight mb-8">A arquitetura da verdade absoluta.</h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
              Desenvolvemos um protocolo que elimina a ambiguidade. Empresas e criadores podem agora estabelecer um canal oficial de comunicação onde cada byte é assinado e verificado.
            </p>
            <div className="flex items-center gap-4 text-secondary font-headline font-semibold cursor-pointer group">
              <span>Explorar documentação</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
            </div>
          </div>
          
          <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Bento Item 1 */}
            <div className="col-span-1 sm:col-span-2 bg-surface-container/40 backdrop-blur-xl rounded-3xl p-10 relative overflow-hidden h-80 border border-outline-variant/20 hover:border-secondary/40 transition-all duration-500 group">
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="font-headline text-xs uppercase tracking-[0.3em] text-secondary mb-6 block font-bold">Segurança de Nível Militar</span>
                  <h4 className="font-headline text-3xl font-bold max-w-md leading-tight">Assinatura determinística de metadados em tempo real.</h4>
                </div>
                <div className="flex items-center gap-3 text-on-surface-variant/60 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  ENCRYPT_ST_8092_PROTOCOL_ACTIVE
                </div>
              </div>
              <div className="absolute -right-16 -bottom-16 opacity-10 transform rotate-12 transition-transform duration-700 group-hover:scale-110">
                <span className="material-symbols-outlined text-[240px] text-secondary font-thin">lock</span>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="bg-surface-container-high rounded-3xl p-10 h-96 border border-outline-variant/20 flex flex-col justify-between hover:border-primary/40 transition-all group">
              <div>
                <span className="font-headline text-xs uppercase tracking-[0.3em] text-primary mb-6 block font-bold">Sovereign Protocol</span>
                <h4 className="font-headline text-2xl font-bold leading-snug">Interoperabilidade sem fricção entre plataformas.</h4>
              </div>
              <div className="flex items-end justify-between">
                <span className="material-symbols-outlined text-primary text-5xl group-hover:scale-110 transition-transform">hub</span>
                <span className="font-body text-xs text-on-surface-variant uppercase tracking-widest">V 2.0 Ativa</span>
              </div>
            </div>

            {/* Bento Item 3 */}
            <div className="relative rounded-3xl overflow-hidden h-96 border border-outline-variant/20 group">
              <img 
                alt="Abstract visual" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:scale-110 transition-transform duration-1000" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAW7R_4S15-7tWM7OJGU-Iv3vg95tuSnT0EmUKXaOHg6kMhGosjXwf2KzdGlS2U3udTrewGYpn1saKnhUNpfgNXsg8brYG90Fd3SmjO5FTE5qTQGoH3bRXV7j2OSlOcdQliWpDY1FuVTu_766ITkX54XVeqY0aLGzzDPOpfHZxRCC83x_JC6TjjH63rA66QyctIeecLvRagrO6iL3KsDMpXHcP7hB_qHudzzcd8tFo-n183gKIHEA7l6dOPw6aiR5AOkx8-GOsOr1k"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-10 flex flex-col justify-end">
                <h4 className="font-headline text-2xl font-bold">Provenance Dashboard</h4>
                <p className="font-body text-sm text-on-surface-variant mt-4 leading-relaxed">Visibilidade completa sobre o ciclo de vida do seu conteúdo.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
