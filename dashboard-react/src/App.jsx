import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import ContentManagement from './pages/ContentManagement';
import LandingPage from './pages/LandingPage';
import VerificationPortal from './pages/VerificationPortal';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderAppContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'contents':
        return <ContentManagement />;
      case 'publish':
        return <Dashboard />;
      case 'verifications':
        return <VerificationPortal onOpenApp={() => setCurrentPage('dashboard')} />;
      default:
        return <ContentManagement />;
    }
  };

  if (currentPage === 'landing') {
    return <LandingPage onOpenApp={() => setCurrentPage('dashboard')} />;
  }

  // Handle verification portal as a standalone page (no sidebar)
  if (currentPage === 'verifications') {
    return <VerificationPortal onOpenApp={() => setCurrentPage('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30">
      {/* Sidebar */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <main className="pl-64 min-h-screen flex flex-col">
        {renderAppContent()}

        {/* Footer */}
        <footer className="w-full py-12 px-10 flex flex-col md:flex-row justify-between items-center border-t border-outline-variant/10 bg-surface-container-low mt-auto">
          <div className="mb-4 md:mb-0">
            <p className="font-headline text-md font-bold text-on-surface">ProofPress</p>
            <p className="font-body text-[12px] text-on-surface-variant">© 2024 ProofPress. Deterministic Content Provenance.</p>
          </div>
          <div className="flex gap-8">
            {['Termos', 'Privacidade', 'Documentação', 'Suporte'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="font-body text-[12px] text-on-surface-variant hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
