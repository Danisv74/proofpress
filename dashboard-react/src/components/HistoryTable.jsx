import React from 'react';

const HistoryTable = () => {
  const data = [
    {
      id: 1,
      name: 'Editorial_Tech_Update_V2',
      type: 'Documento PDF',
      size: '4.2 MB',
      hash: 'f47ac10b...9e32',
      date: '24 Mai, 2024 • 14:20',
      status: 'VERIFICADO',
      statusColor: 'bg-green-500/10 text-green-400',
      dotColor: 'bg-green-400',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uhv9YOEdVvfhYKsuhFRAcCoFEfUUAXqY2AyxP5PhlHNEdhDTCTlUngU5HQC0jdxZ8fGIBDQj0qMf4iekenkd31taQZr6uuOju2nYBufJ0VUZWp8Ekx7zyBAr2b1mm-uYUY0NE92dIM8k-_qxM86atf5Oc7szrkVs4bnRx0o6E9MtufUH1AtPrWZmUor5IdZpZnEYW5VDfcP_wwmwdf1GPRJogpIyUVLeor80l2OKEKQW_XaaiZrDqVHJObNxSUjmITyRKXxHA4hjA'
    },
    {
      id: 2,
      name: 'Brand_Manifesto_Final',
      type: 'Vídeo MP4',
      size: '128 MB',
      hash: '3c98d2f1...a8b0',
      date: '23 Mai, 2024 • 09:12',
      status: 'VERIFICADO',
      statusColor: 'bg-green-500/10 text-green-400',
      dotColor: 'bg-green-400',
      icon: 'play_circle'
    },
    {
      id: 3,
      name: 'Annual_Report_2023',
      type: 'Documento PDF',
      size: '18.5 MB',
      hash: '7d11e3b5...2c4f',
      date: '21 Mai, 2024 • 18:45',
      status: 'ARQUIVADO',
      statusColor: 'bg-surface-container-high text-on-surface-variant',
      dotColor: 'bg-on-surface-variant',
      image: 'https://lh3.googleusercontent.com/aida/ADBb0uhv9YOEdVvfhYKsuhFRAcCoFEfUUAXqY2AyxP5PhlHNEdhDTCTlUngU5HQC0jdxZ8fGIBDQj0qMf4iekenkd31taQZr6uuOju2nYBufJ0VUZWp8Ekx7zyBAr2b1mm-uYUY0NE92dIM8k-_qxM86atf5Oc7szrkVs4bnRx0o6E9MtufUH1AtPrWZmUor5IdZpZnEYW5VDfcP_wwmwdf1GPRJogpIyUVLeor80l2OKEKQW_XaaiZrDqVHJObNxSUjmITyRKXxHA4hjA'
    }
  ];

  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="font-headline text-2xl font-bold">Histórico de Publicações</h3>
        <div className="flex gap-2">
          <button className="p-2 bg-surface-container-low border border-outline-variant/10 rounded hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
          </button>
          <button className="p-2 bg-surface-container-low border border-outline-variant/10 rounded hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-sm">search</span>
          </button>
        </div>
      </div>

      <div className="bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-high/50 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest border-b border-outline-variant/10">
              <th className="px-6 py-4">Conteúdo</th>
              <th className="px-6 py-4">Hash</th>
              <th className="px-6 py-4">Publicado em</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Ações</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-surface-container-high/30 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center overflow-hidden text-primary border border-outline-variant/10">
                      {item.image ? (
                        <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
                      ) : (
                        <span className="material-symbols-outlined">{item.icon}</span>
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors">{item.name}</p>
                      <p className="text-[10px] text-on-surface-variant">{item.type} • {item.size}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-[10px] text-secondary bg-secondary/5 px-2 py-1 rounded border border-secondary/10">
                    {item.hash}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-on-surface-variant">
                  {item.date}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full ${item.statusColor} text-[10px] font-bold uppercase tracking-wider`}>
                    <span className={`w-1 h-1 rounded-full ${item.dotColor}`}></span> 
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 hover:text-primary transition-colors" title="Ver página"><span className="material-symbols-outlined text-sm">visibility</span></button>
                    <button className="p-1.5 hover:text-secondary transition-colors" title="Compartilhar"><span className="material-symbols-outlined text-sm">share</span></button>
                    <button className="p-1.5 hover:text-on-surface transition-colors" title="Nova versão"><span className="material-symbols-outlined text-sm">history</span></button>
                    <button className="p-1.5 hover:text-error transition-colors" title="Revogar"><span className="material-symbols-outlined text-sm text-error/60">cancel</span></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HistoryTable;
