import React from 'react';

const StatCard = ({ icon, label, value, sublabel, progress, progressColor, iconColor }) => (
  <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
    <div className="flex items-center justify-between mb-4">
      <span className={`material-symbols-outlined text-2xl ${iconColor}`}>{icon}</span>
      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{label}</span>
    </div>
    <p className="text-3xl font-headline font-bold">{value}</p>
    <p className="text-sm text-on-surface-variant mt-1">{sublabel}</p>
    {progress !== undefined && (
      <div className="mt-4 h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
        <div 
          className={`h-full ${progressColor} rounded-full`} 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    )}
  </div>
);

const StatCards = () => {
  return (
    <div className="space-y-4">
      <StatCard 
        icon="description" 
        label="Total" 
        value="1,284" 
        sublabel="Conteúdos publicados" 
        progress={75} 
        progressColor="bg-primary"
        iconColor="text-primary"
      />
      <StatCard 
        icon="verified" 
        label="Ativo" 
        value="9,412" 
        sublabel="Verificações de terceiros" 
        progress={45} 
        progressColor="bg-secondary"
        iconColor="text-secondary"
      />
      <div className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <span className="material-symbols-outlined text-error text-2xl">trending_up</span>
          <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">24H</span>
        </div>
        <p className="text-3xl font-headline font-bold text-on-surface">+12.4%</p>
        <p className="text-sm text-on-surface-variant mt-1">Nível de atividade global</p>
        
        {/* Background decorative chart-like element */}
        <div className="absolute bottom-0 left-0 w-full h-12 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,100 L0,80 L20,60 L40,70 L60,40 L80,50 L100,20 L100,100 Z" fill="currentColor" className="text-error" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default StatCards;
