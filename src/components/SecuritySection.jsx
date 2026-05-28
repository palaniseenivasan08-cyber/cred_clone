import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SecurityCard = ({ icon, title, desc, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    className="group p-6 rounded-sm relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
    style={{
      background: 'linear-gradient(145deg, #141414, #0d0d0d)',
      border: '1px solid rgba(255,255,255,0.06)',
    }}
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{ background: 'radial-gradient(circle at 0% 0%, rgba(0,200,83,0.06) 0%, transparent 60%)' }} />
    
    <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-5"
      style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.2)' }}>
      {icon}
    </div>
    <h3 className="font-body font-semibold text-white text-base mb-2 group-hover:text-[#00C853] transition-colors">
      {title}
    </h3>
    <p className="font-body text-sm text-white/40 leading-relaxed">{desc}</p>

    <div className="mt-4 flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-[#00C853] animate-pulse" />
      <span className="text-xs text-[#00C853] font-mono">Active</span>
    </div>
  </motion.div>
);

const SecuritySection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      icon: '🔐',
      title: '256-bit Encryption',
      desc: 'Every transaction is encrypted with military-grade AES-256 encryption, the same standard used by banks worldwide.',
    },
    {
      icon: '🛡️',
      title: 'RBI Regulated',
      desc: 'CRED operates under full RBI compliance, ensuring your money and data are protected by Indian financial regulations.',
    },
    {
      icon: '👁️',
      title: 'Fraud Detection',
      desc: 'Real-time AI-powered fraud monitoring protects your account from suspicious activities, 24/7.',
    },
    {
      icon: '📱',
      title: '2-Factor Auth',
      desc: 'Every login and payment requires multi-factor authentication to ensure only you can access your account.',
    },
    {
      icon: '🔒',
      title: 'Zero Data Selling',
      desc: 'We never sell your personal or financial data to third parties. Your privacy is a non-negotiable right.',
    },
    {
      icon: '☁️',
      title: 'Secure Cloud',
      desc: 'Data stored on SOC 2 Type II certified servers with regular audits, backup systems, and zero downtime guarantee.',
    },
  ];

  return (
    <section className="section-padding bg-[#070707] relative overflow-hidden" id="security">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10"
          style={{ background: 'radial-gradient(circle, rgba(0,200,83,0.3) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-card rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#00C853] animate-pulse" />
              <span className="text-xs font-mono text-[#00C853] tracking-widest uppercase">Bank-Grade Security</span>
            </div>

            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-8">
              <span className="text-white">your money.</span><br />
              <span className="text-white">your data.</span><br />
              <span style={{ color: '#00C853' }}>your rules.</span>
            </h2>

            <p className="font-body text-lg text-white/50 leading-relaxed mb-8 max-w-lg">
              Security is not a feature at CRED — it's the foundation. We've built every layer of our 
              platform with your financial safety as the primary concern.
            </p>

            {/* Security badge */}
            <div className="flex flex-wrap gap-3">
              {['PCI DSS', 'ISO 27001', 'SOC 2', 'RBI Licensed'].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 px-3 py-2 rounded-sm text-xs font-mono font-semibold"
                  style={{
                    background: 'rgba(0,200,83,0.1)',
                    border: '1px solid rgba(0,200,83,0.2)',
                    color: '#00C853',
                  }}
                >
                  <span>✓</span> {cert}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: security terminal visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="rounded-2xl overflow-hidden"
              style={{
                background: '#0D0D0D',
                border: '1px solid rgba(0,200,83,0.2)',
                boxShadow: '0 0 60px rgba(0,200,83,0.1)',
              }}
            >
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-[#E53935]/70" />
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]/70" />
                <div className="w-3 h-3 rounded-full bg-[#00C853]/70" />
                <span className="ml-4 text-xs font-mono text-white/30">security.log</span>
              </div>
              <div className="p-6 font-mono text-xs space-y-2">
                {[
                  { status: 'ok', text: 'SSL/TLS certificate verified ✓' },
                  { status: 'ok', text: 'User authentication: 2FA active ✓' },
                  { status: 'ok', text: 'Transaction encrypted: AES-256 ✓' },
                  { status: 'ok', text: 'Fraud check: PASSED ✓' },
                  { status: 'ok', text: 'RBI compliance check: PASSED ✓' },
                  { status: 'ok', text: 'Data storage: Encrypted at rest ✓' },
                  { status: 'scan', text: 'Running security scan...' },
                  { status: 'ok', text: 'Zero vulnerabilities found ✓' },
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <span className={line.status === 'ok' ? 'text-[#00C853]' : 'text-[#D4AF37]'}>
                      {line.status === 'ok' ? '●' : '○'}
                    </span>
                    <span className={line.status === 'ok' ? 'text-white/70' : 'text-[#D4AF37]/70'}>
                      {line.text}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="flex items-center gap-2 mt-2"
                >
                  <span className="text-[#00C853]">$</span>
                  <span className="text-white/50">_</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature cards grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <SecurityCard key={i} {...f} delay={i * 0.08} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
