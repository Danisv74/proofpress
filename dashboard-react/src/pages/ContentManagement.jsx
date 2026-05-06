import React from 'react';
import ManageHeader from '../components/ManageHeader';
import BentoGridSummary from '../components/BentoGridSummary';
import OperationsPanel from '../components/OperationsPanel';
import VersionHistory from '../components/VersionHistory';
import AssetPreview from '../components/AssetPreview';
import RevocationPanel from '../components/RevocationPanel';

const ContentManagement = () => {
  return (
    <div className="flex-1 p-8 lg:p-12 max-w-7xl mx-auto w-full">
      <ManageHeader />
      
      <BentoGridSummary />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Management & History */}
        <div className="lg:col-span-8 space-y-8">
          <OperationsPanel />
          <VersionHistory />
        </div>

        {/* Sidebar Actions & Warning */}
        <div className="lg:col-span-4 space-y-6">
          <AssetPreview />
          
          <RevocationPanel />

          <div className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
            <h4 className="text-xs uppercase tracking-widest text-on-surface-variant font-headline mb-4">Recursos</h4>
            <ul className="space-y-3">
              <li>
                <a className="text-sm text-secondary hover:underline flex items-center gap-2" href="#">
                  <span className="material-symbols-outlined text-sm">menu_book</span> 
                  Documentação de APIs
                </a>
              </li>
              <li>
                <a className="text-sm text-secondary hover:underline flex items-center gap-2" href="#">
                  <span className="material-symbols-outlined text-sm">help</span> 
                  Suporte técnico
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
