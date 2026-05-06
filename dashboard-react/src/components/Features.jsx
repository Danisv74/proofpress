import React from 'react';

const FeatureCard = ({ icon, title, description, colorClass, borderColor }) => (
  <div className={`p-10 rounded-2xl bg-surface-container border border-outline-variant/5 hover:${borderColor} hover:bg-surface-container-high transition-all group cursor-default`}>
    <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-opacity-10 ${colorClass} mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all`}>
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="font-headline text-xl font-bold mb-4">{title}</h3>
    <p className="font-body text-on-surface-variant text-sm leading-relaxed">
      {description}
    </p>
  </div>
);

const Features = () => {
  return (
    <section className="py-32 px-8 bg-surface-container-low/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon="public" 
            title="Registro público" 
            description="Histórico imutável de publicações acessível para qualquer entidade verificadora global."
            colorClass="bg-primary text-primary"
            borderColor="border-primary/40"
          />
          <FeatureCard 
            icon="speed" 
            title="Verificação instantânea" 
            description="Confirmação de autenticidade em milissegundos através de assinaturas criptográficas de elite."
            colorClass="bg-secondary text-secondary"
            borderColor="border-secondary/40"
          />
          <FeatureCard 
            icon="history" 
            title="Versionamento" 
            description="Controle total sobre revisões de documentos oficiais com trilha de auditoria completa."
            colorClass="bg-primary text-primary"
            borderColor="border-primary/40"
          />
          <FeatureCard 
            icon="cancel" 
            title="Revogação" 
            description="Capacidade de invalidar registros antigos instantaneamente, protegendo a integridade da marca."
            colorClass="bg-error text-error"
            borderColor="border-error/40"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
