import React from 'react';

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'dashboard', icon: 'grid_view', label: 'Visão geral' },
    { id: 'contents', icon: 'description', label: 'Conteúdos' },
    { id: 'publish', icon: 'publish', label: 'Publicar' },
    { id: 'verifications', icon: 'verified_user', label: 'Verificações' },
    { id: 'settings', icon: 'settings', label: 'Configurações' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full flex flex-col py-6 bg-surface-container-low w-64 z-40 border-r border-outline-variant/10">
      <div className="px-6 mb-10">
        <h1 className="font-headline text-lg font-bold text-on-surface">ProofPress Dashboard</h1>
        <p className="text-[10px] tracking-[0.2em] uppercase text-secondary font-headline font-bold">Sovereign Node</p>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
              currentPage === item.id
                ? 'bg-primary/20 text-primary shadow-[0_0_20px_rgba(204,151,255,0.1)]'
                : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
            }`}
          >
            <span className={`material-symbols-outlined transition-transform duration-300 ${currentPage === item.id ? 'scale-110' : 'group-hover:scale-110'}`}>
              {item.icon}
            </span>
            <span className="font-headline font-medium">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="px-4 mt-auto">
        <div className="bg-surface-container-high p-4 rounded-xl border border-outline-variant/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">
              JD
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-on-surface truncate">Admin Node</p>
              <p className="text-[10px] text-on-surface-variant font-mono truncate">0x71C...4f2E</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
