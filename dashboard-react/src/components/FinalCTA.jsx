import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-40 px-8 text-center relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[180px]"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl font-bold mb-10 tracking-tight">Pronto para garantir a autoridade do seu conteúdo?</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button className="px-14 py-6 bg-on-surface text-surface font-headline font-bold rounded-full text-xl hover:bg-secondary hover:text-on-secondary transition-all duration-300 shadow-xl">
            Comece a publicar agora
          </button>
          <a className="font-headline font-bold text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer" href="#">
            Falar com um especialista
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
