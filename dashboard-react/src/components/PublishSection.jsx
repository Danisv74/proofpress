import React from 'react';

const PublishSection = () => {
  return (
    <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 relative overflow-hidden group">
      <div className="relative z-10">
        <h3 className="font-headline text-2xl font-bold mb-2">Publicar conteúdo oficial</h3>
        <p className="text-on-surface-variant text-sm max-w-md mb-8">
          Anexe documentos, imagens ou vídeos para gerar um certificado de autenticidade imutável na rede ProofPress.
        </p>

        <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-12 flex flex-col items-center justify-center transition-all duration-500 group-hover:border-primary/50 bg-surface/30">
          <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
            <span className="material-symbols-outlined text-primary text-3xl">cloud_upload</span>
          </div>
          <p className="font-headline font-bold text-lg mb-1 text-center">Arraste o arquivo ou escolha do dispositivo</p>
          <p className="text-on-surface-variant text-xs mb-8">Formatos suportados: PDF, MP4, JPG, PNG (Max 500MB)</p>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-surface-container-highest hover:bg-surface-bright text-on-surface font-headline font-bold rounded-lg transition-all border border-outline-variant/20">
              Escolher arquivo
            </button>
            <button className="px-6 py-3 bg-primary text-on-primary font-headline font-bold rounded-lg hover:shadow-[0_0_20px_rgba(204,151,255,0.4)] hover:-translate-y-0.5 transition-all">
              Publicar conteúdo
            </button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
    </div>
  );
};

export default PublishSection;
