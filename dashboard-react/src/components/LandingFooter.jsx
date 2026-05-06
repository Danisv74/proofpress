import React from 'react';

const LandingFooter = () => {
  return (
    <footer className="w-full py-16 px-8 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-outline-variant/20 bg-surface">
      <div className="flex flex-col gap-6 mb-12 md:mb-0">
        <div className="font-headline text-2xl font-bold text-on-surface bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">ProofPress</div>
        <p className="font-body text-xs text-on-surface-variant max-w-xs leading-relaxed">
          © 2024 ProofPress. Protocolo Determinístico de Proveniência de Conteúdo. 
          Construindo a internet da confiança.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:flex gap-12 md:gap-16">
        <div className="flex flex-col gap-4">
          <h5 className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface">Produto</h5>
          {['Verificar', 'Para creators', 'API'].map(link => (
            <a key={link} className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">{link}</a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface">Legal</h5>
          {['Termos', 'Privacidade'].map(link => (
            <a key={link} className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">{link}</a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-headline text-[10px] font-bold uppercase tracking-widest text-on-surface">Suporte</h5>
          {['Documentação', 'FAQ'].map(link => (
            <a key={link} className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
