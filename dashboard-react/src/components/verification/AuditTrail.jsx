import React from 'react';

const AuditTrailItem = ({ img, label, isLast = false }) => (
  <div className={`aspect-[0.57] rounded-xl overflow-hidden border border-outline-variant/10 group relative ${isLast ? 'flex flex-col items-center justify-center bg-surface-container' : ''}`}>
    {!isLast ? (
      <>
        <img alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={img} />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
        <div className="absolute bottom-3 left-3 text-[10px] font-headline font-bold uppercase tracking-tighter text-on-surface">{label}</div>
      </>
    ) : (
      <>
        <span className="material-symbols-outlined text-primary text-3xl mb-2">history</span>
        <span className="text-[10px] font-headline font-bold uppercase tracking-tighter text-on-surface">{label}</span>
      </>
    )}
  </div>
);

const AuditTrail = () => {
  const trails = [
    { label: 'Original Meta', img: 'https://lh3.googleusercontent.com/aida/ADBb0ui74cT0DHiUfbAE4mgoK9EhltuPOle9v_p2zlwYnb8FA46elfC5CutD2scm5G8AXReYveFCwLtO68XDGkaio8OQendiL74qtHHJ5jWOnjkzeSwW2ECTOP1opTTikADpOsZp3nc2ob7-N3k_krFzRZh2rJ3ClkFT6vNxiEM4krPIf3k12tbZ9YenTF8dAZNL7T7jG0CG8sKByXB3Wl_GMUZY9JDDZMKllnRVI-k8LwZYw362KbJkfV1zRWyHmJGLgHFYoynq26kfBQ' },
    { label: 'Chain Sync', img: 'https://lh3.googleusercontent.com/aida/ADBb0uhv9YOEdVvfhYKsuhFRAcCoFEfUUAXqY2AyxP5PhlHNEdhDTCTlUngU5HQC0jdxZ8fGIBDQj0qMf4iekenkd31taQZr6uuOju2nYBufJ0VUZWp8Ekx7zyBAr2b1mm-uYUY0NE92dIM8k-_qxM86atf5Oc7szrkVs4bnRx0o6E9MtufUH1AtPrWZmUor5IdZpZnEYW5VDfcP_wwmwdf1GPRJogpIyUVLeor80l2OKEKQW_XaaiZrDqVHJObNxSUjmITyRKXxHA4hjA' },
    { label: 'Issuer Seal', img: 'https://lh3.googleusercontent.com/aida/ADBb0uje2fI4vHhlpm8ZoYLgneT7ka3YMY6hy9a8V2C_3wE7HKYrlzRXfyKCaMvSSsKi68kM_1YX6QdV9nZfuaa_hbqrhRz6ilzLBsvhY7idONKfLIUqADu_OeOZtn8SXQp_gHRqitt4oZqyOwb4_Gk6nFOCq5OeRyNRuzzr-BQO-b0-Mmt_7guV_RlHzFBKcGnetebEhi3Mzl-3-5FvLJB-pA5SfbeZ_V7uiC9o5DAxLz7UupbnoB3FKgaQG4-0Wyq7Ngg-gYJEKNH4uQ' },
    { label: 'Ver Histórico', isLast: true }
  ];

  return (
    <div className="mt-8">
      <h3 className="text-[10px] font-headline uppercase tracking-widest text-on-surface-variant mb-6 px-2">Trilha de Auditoria Visual</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {trails.map((item, idx) => (
          <AuditTrailItem key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AuditTrail;
