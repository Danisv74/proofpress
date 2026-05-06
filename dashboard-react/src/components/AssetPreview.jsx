import React from 'react';

const AssetPreview = () => {
  return (
    <div className="relative group aspect-[3/4] rounded-xl overflow-hidden bg-surface-container border border-outline-variant/10">
      <img 
        alt="ProofPress Brand Asset" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvlObEi3fUyRPMmIpKyaUTGx3UNdIsE7xyLV1zry9CeJ3xkIP00JSAcVMbePPISkJOU1sXQ0GCUgZmVBqjrHvUgl9A3aTVjmrCQvp0acCmoF7xLX_QV5CMmD8gXTrbpKJdVHMc74LUgSeRUs5xukV1hEYlUFUsn5DhfXVA7zg3bK0EgbaEWRqsN6mww0hVN16uBecsIxL7TXVJB7XUs2AIRQsNfwCxWPOmHeKG9d44MO1pDA2tmaqe_B88kxacNfZFws2RrVK-vBg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-80"></div>
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-[10px] uppercase tracking-widest text-secondary font-headline mb-2">Visualização Rápida</p>
        <h4 className="font-headline font-bold text-lg leading-tight text-on-surface">Manifesto de Governança Digital ProofPress</h4>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white">
          <span className="material-symbols-outlined">visibility</span>
        </button>
      </div>
    </div>
  );
};

export default AssetPreview;
