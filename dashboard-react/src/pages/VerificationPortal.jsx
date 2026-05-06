import React from 'react';
import VerificationHeader from '../components/verification/VerificationHeader';
import VerificationHero from '../components/verification/VerificationHero';
import CertificateCard from '../components/verification/CertificateCard';
import AuditTrail from '../components/verification/AuditTrail';
import IssuerTrustCard, { AssetPreviewCard } from '../components/verification/IssuerTrustCard';

const VerificationPortal = ({ onOpenApp }) => {
  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-secondary/30 selection:text-secondary">
      <VerificationHeader onOpenApp={onOpenApp} />
      
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <VerificationHero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Central Verification Card */}
          <div className="lg:col-span-8">
            <CertificateCard />
            <AuditTrail />
          </div>

          {/* Side Card & Actions */}
          <div className="lg:col-span-4 space-y-6">
            <IssuerTrustCard />
            
            <AssetPreviewCard />

            {/* Quick Actions List */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-between p-4 bg-surface-container-high hover:bg-surface-container-highest rounded-xl transition-all group border border-outline-variant/10 text-on-surface">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">share</span>
                  <span className="font-headline font-medium">Compartilhar</span>
                </div>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-surface-container-high hover:bg-surface-container-highest rounded-xl transition-all group border border-outline-variant/10 text-on-surface">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">report</span>
                  <span className="font-headline font-medium">Reportar inconsistência</span>
                </div>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center border-t border-outline-variant/10 bg-surface mt-20">
        <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          <div className="font-headline text-md font-bold text-on-surface">ProofPress</div>
          <p className="font-body text-xs text-on-surface-variant max-w-xs text-center md:text-left">
            © 2024 ProofPress. Deterministic Content Provenance.
          </p>
        </div>
        <div className="flex gap-8">
          {['Termos', 'Privacidade', 'Documentação', 'Suporte'].map((item) => (
            <a key={item} className="font-body text-xs text-on-surface-variant hover:text-primary transition-colors" href="#">{item}</a>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default VerificationPortal;
