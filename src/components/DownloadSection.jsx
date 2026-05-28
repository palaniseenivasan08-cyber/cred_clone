import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DownloadSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding relative overflow-hidden" id="download"
      style={{ background: 'linear-gradient(180deg, #070707 0%, #0A0A0A 100%)' }}
    >
      {/* Large gold glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass-card rounded-full">
            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
              Invite Only
            </span>
          </div>

          <h2 className="font-display font-black text-6xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tight mb-8">
            <span className="text-white">do you</span><br />
            <span className="shimmer-text">qualify?</span>
          </h2>

          <p className="font-body text-xl text-white/50 leading-relaxed mb-10 max-w-2xl mx-auto">
            CRED is an invite-only club for India's financially responsible citizens. 
            A CIBIL score above 750 is just the beginning.
          </p>

          {/* Eligibility cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: '📊', label: 'CIBIL Score', value: '750+', desc: 'Required' },
              { icon: '💳', label: 'Credit Card', value: '1+', desc: 'Active card' },
              { icon: '✨', label: 'Track Record', value: 'Clean', desc: 'No defaults' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-sm"
                style={{
                  background: 'linear-gradient(145deg, rgba(212,175,55,0.1), rgba(212,175,55,0.05))',
                  border: '1px solid rgba(212,175,55,0.25)',
                }}
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-display font-bold text-2xl gold-text">{item.value}</div>
                <div className="font-body text-sm text-white/60">{item.label}</div>
                <div className="text-xs text-white/30 font-body mt-1">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="neo-btn px-12 py-4 text-sm tracking-widest rounded-sm flex items-center gap-3"
            >
              <span>Check Eligibility</span>
              <span>→</span>
            </motion.button>

            <div className="flex gap-3">
              {[
                { label: 'App Store', sub: 'iOS' },
                { label: 'Play Store', sub: 'Android' },
              ].map((store) => (
                <motion.button
                  key={store.label}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="glass-card px-6 py-3 rounded-sm flex items-center gap-3 hover:border-[#D4AF37]/30 transition-all"
                >
                  <div className="text-left">
                    <div className="text-xs text-white/40 font-body">Download on</div>
                    <div className="text-sm font-body font-semibold text-white">{store.label}</div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-body text-white/30">
            {['No credit card required to apply', 'Takes only 2 minutes', 'Instant decision'].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#D4AF37]" />
                {t}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
