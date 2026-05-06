import React from 'react';

const SummaryCard = ({ label, value, colorClass = "text-on-surface" }) => (
  <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">{label}</p>
    <h3 className={`font-headline text-xl font-medium truncate ${colorClass}`}>{value}</h3>
  </div>
);

const BentoGridSummary = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <SummaryCard label="Identificação" value="Manifesto_2024_v2.pdf" />
      <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/5">
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2">Status</p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_#53ddfc]"></span>
          <span className="font-headline text-xl font-medium text-secondary">Ativo</span>
        </div>
      </div>
      <SummaryCard label="Última atualização" value="12 Out, 2024" />
      <SummaryCard label="Hash SHA-256" value="8f3a...c91d" colorClass="font-mono text-primary" />
    </div>
  );
};

export default BentoGridSummary;
