import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const NeoCard = ({ title, subtitle, amount, badge, color, delay, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -6, transition: { duration: 0.2 } }}
    className="relative p-6 rounded-sm cursor-pointer"
    style={{
      background: 'linear-gradient(145deg, #181818, #111)',
      border: `1px solid ${color}30`,
      boxShadow: `6px 6px 0px ${color}40`,
    }}
  >
    <div className="absolute top-4 right-4">
      <span
        className="text-xs font-mono px-2 py-1 rounded"
        style={{ background: `${color}15`, color: color }}
      >
        {badge}
      </span>
    </div>
    <div className="text-3xl mb-3" style={{ color }}>₹</div>
    <div className="font-display font-bold text-3xl text-white mb-1">{amount}</div>
    <div className="font-body font-semibold text-white/80 text-sm mb-1">{title}</div>
    <div className="font-body text-xs text-white/40">{subtitle}</div>
    <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: '70%' } : {}}
        transition={{ duration: 1, delay: delay + 0.3 }}
        className="h-full rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
      />
    </div>
  </motion.div>
);

const NeoPOPSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const cards = [
    { title: 'Credit Card Bill', subtitle: 'HDFC Regalia · Due in 3 days', amount: '28,450', badge: 'Pay Now', color: '#D4AF37' },
    { title: 'Cashback Earned', subtitle: 'This month · Auto-credited', amount: '4,200', badge: 'Earned', color: '#00C853' },
    { title: 'CRED Coins', subtitle: 'Lifetime · Unredeemed', amount: '12,500', badge: 'Redeem', color: '#7B2FBE' },
    { title: 'Credit Limit', subtitle: 'SBI Elite · Available', amount: '2,00,000', badge: 'Utilization 32%', color: '#00BCD4' },
    { title: 'Savings via CRED', subtitle: 'Total value unlocked', amount: '18,600', badge: 'All Time', color: '#E53935' },
    { title: 'Rent via CRED', subtitle: 'Monthly · Earn coins on rent', amount: '35,000', badge: 'Monthly', color: '#FF6F00' },
  ];

  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden" id="rewards">
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #D4AF37 0, #D4AF37 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-card rounded-full">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">NeoPOP Design</span>
          </div>
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight">
            <span className="text-white">premium</span><br />
            <span className="gold-text">dashboard.</span>
          </h2>
          <p className="font-body text-white/40 mt-4 max-w-xl mx-auto">
            CRED's NeoPOP design system delivers a bold, tactile interface that makes financial management feel premium.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <NeoCard key={i} {...card} delay={i * 0.08} inView={inView} />
          ))}
        </div>

        {/* NeoPOP feature callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 p-8 rounded-sm flex flex-col sm:flex-row items-center gap-6"
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.1), rgba(212,175,55,0.03))',
            border: '1px solid rgba(212,175,55,0.25)',
            boxShadow: '8px 8px 0px rgba(212,175,55,0.15)',
          }}
        >
          <div className="text-5xl">🎨</div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-display font-bold text-2xl text-white mb-2">NeoPOP by CRED</h3>
            <p className="font-body text-white/50 text-sm leading-relaxed">
              CRED's open-source design system — NeoPOP — brings bold, tactile UI components 
              to your apps. 3D shadows, glassmorphism, and premium interactions out of the box.
            </p>
          </div>
          <a
            href="#"
            className="neo-btn px-6 py-3 text-xs tracking-widest rounded-sm whitespace-nowrap"
          >
            Explore NeoPOP →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default NeoPOPSection;
