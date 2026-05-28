import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useCounter = (target, duration = 2000, isActive = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isActive) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, isActive]);
  return count;
};

const StatCard = ({ value, suffix, label, description, icon, delay, isActive }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const count = useCounter(numericValue, 2000, isActive);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isActive ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative p-6 sm:p-8 rounded-sm group"
      style={{
        background: 'linear-gradient(145deg, #141414, #0d0d0d)',
        border: '1px solid rgba(212,175,55,0.15)',
      }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)' }} />

      <div className="text-3xl mb-4">{icon}</div>
      <div className="font-display font-black text-5xl sm:text-6xl gold-text mb-2 tracking-tight">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="font-body font-semibold text-white text-lg mb-2">{label}</div>
      <div className="font-body text-sm text-white/40 leading-relaxed">{description}</div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const StatsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const stats = [
    {
      value: '10',
      suffix: 'M+',
      label: 'CRED Members',
      description: 'Premium members across India who pay their bills on time.',
      icon: '👑',
    },
    {
      value: '5000',
      suffix: 'Cr+',
      label: 'Bills Processed',
      description: 'Total credit card bills paid securely through CRED platform.',
      icon: '📊',
    },
    {
      value: '750',
      suffix: '+',
      label: 'Min CIBIL Score',
      description: 'The exclusivity threshold. Only the best qualify for CRED.',
      icon: '🎯',
    },
    {
      value: '4',
      suffix: '.9★',
      label: 'App Rating',
      description: 'Rated 4.9 on App Store and 4.8 on Play Store by members.',
      icon: '⭐',
    },
    {
      value: '200',
      suffix: 'Cr+',
      label: 'Coins Distributed',
      description: 'CRED coins given to members for responsible financial behavior.',
      icon: '🪙',
    },
    {
      value: '1000',
      suffix: '+',
      label: 'Brand Partners',
      description: 'Premium brands offering exclusive rewards to CRED members.',
      icon: '🤝',
    },
  ];

  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden" id="stats">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-card rounded-full">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">By The Numbers</span>
          </div>
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight text-white">
            the <span className="gold-text">CRED</span><br />
            impact.
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} delay={i * 0.1} isActive={inView} />
          ))}
        </div>

        {/* Large marquee */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap"
          >
            {Array(4).fill(['PAY BILLS', '•', 'EARN COINS', '•', 'GET REWARDED', '•', 'BUILD CREDIT', '•']).flat().map((item, i) => (
              <span
                key={i}
                className={`text-5xl font-display font-black tracking-tight ${
                  item === '•' ? 'text-[#D4AF37]' : 'text-white/10'
                }`}
              >
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
