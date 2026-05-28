import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    id: 'bills',
    icon: '💳',
    title: 'Credit Card Bills',
    tag: 'Core Feature',
    tagColor: '#D4AF37',
    description:
      'Pay all your credit card bills from a single dashboard. Never miss a due date again. Set smart reminders and auto-pay.',
    highlights: ['All major bank cards', 'Auto-pay scheduler', 'Bill analytics', 'Zero fees'],
    visual: 'bills',
  },
  {
    id: 'rewards',
    icon: '🎁',
    title: 'Rewards & Coins',
    tag: 'Earn More',
    tagColor: '#7B2FBE',
    description:
      'Every rupee you pay earns CRED coins. Redeem them for cashbacks, vouchers, travel, lifestyle, and premium products.',
    highlights: ['2x coins on weekends', 'Partner rewards', 'Exclusive offers', 'Cashback up to 30%'],
    visual: 'rewards',
  },
  {
    id: 'score',
    icon: '📊',
    title: 'Credit Score',
    tag: 'Smart Insights',
    tagColor: '#00BCD4',
    description:
      'Get free CIBIL score updates every month. Understand what factors affect your score and how to improve it.',
    highlights: ['Free monthly updates', 'Score factors', 'Improvement tips', 'Report deep-dive'],
    visual: 'score',
  },
  {
    id: 'upi',
    icon: '⚡',
    title: 'UPI Payments',
    tag: 'Instant',
    tagColor: '#00C853',
    description:
      'CRED Pay — the fastest UPI experience in India. Pay at any merchant, split bills, and send money instantly.',
    highlights: ['1-tap payments', 'Bill splitting', 'Earn on every UPI', 'RuPay integration'],
    visual: 'upi',
  },
  {
    id: 'travel',
    icon: '✈️',
    title: 'CRED Travel',
    tag: 'Premium',
    tagColor: '#E53935',
    description:
      'Book flights and hotels with CRED coins. Get exclusive deals, lounge access, and priority check-in for members.',
    highlights: ['Exclusive fares', 'Lounge access', 'Hotel upgrades', 'Travel insurance'],
    visual: 'travel',
  },
  {
    id: 'store',
    icon: '🛍️',
    title: 'CRED Store',
    tag: 'Shop Smart',
    tagColor: '#FF6F00',
    description:
      'Shop premium products curated for CRED members. Electronics, fashion, home — all at member-only prices.',
    highlights: ['Curated products', 'EMI options', 'Easy returns', 'Exclusive drops'],
    visual: 'store',
  },
];

const FeatureVisual = ({ type }) => {
  const visuals = {
    bills: (
      <div className="space-y-3">
        {[
          { bank: 'HDFC Regalia', amount: '₹28,450', due: '3 days', color: '#D4AF37' },
          { bank: 'SBI Card Elite', amount: '₹15,200', due: '12 days', color: '#00C853' },
          { bank: 'Axis Magnus', amount: '₹42,000', due: '20 days', color: '#00BCD4' },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm" style={{ background: `${item.color}20` }}>
              💳
            </div>
            <div className="flex-1">
              <div className="text-xs font-body text-white font-medium">{item.bank}</div>
              <div className="text-xs text-white/40">Due in {item.due}</div>
            </div>
            <div>
              <div className="text-sm font-mono font-bold text-white">{item.amount}</div>
              <div className="w-full h-1 rounded mt-1" style={{ background: `${item.color}30` }}>
                <motion.div className="h-full rounded" style={{ background: item.color, width: '75%' }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
    rewards: (
      <div>
        <div className="text-center mb-4">
          <div className="font-display font-bold text-4xl gold-text mb-1">12,450</div>
          <div className="text-xs text-white/40 font-body">CRED Coins Available</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'Amazon ₹500', coins: '2000', emoji: '🛒' },
            { label: 'Zomato ₹200', coins: '800', emoji: '🍕' },
            { label: 'Swiggy ₹300', coins: '1200', emoji: '🛵' },
            { label: 'Netflix 1mo', coins: '3000', emoji: '🎬' },
          ].map((r) => (
            <div key={r.label} className="p-2.5 rounded-lg text-center" style={{ background: 'rgba(212,175,55,0.07)', border: '1px solid rgba(212,175,55,0.15)' }}>
              <div className="text-xl mb-1">{r.emoji}</div>
              <div className="text-xs text-white font-body font-medium">{r.label}</div>
              <div className="text-xs text-[#D4AF37] font-mono mt-0.5">{r.coins} 🪙</div>
            </div>
          ))}
        </div>
      </div>
    ),
    score: (
      <div className="text-center">
        <div className="relative w-40 h-40 mx-auto mb-4">
          <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90">
            <circle cx="70" cy="70" r="55" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12" />
            <motion.circle
              cx="70" cy="70" r="55" fill="none"
              stroke="url(#scoreGrad)" strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 55}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 55 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 55 * 0.17 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
            <defs>
              <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#F0D060" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="font-display font-black text-4xl text-white">812</div>
            <div className="text-xs text-[#D4AF37] font-body font-semibold">Excellent</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Payment', pct: 95 },
            { label: 'Utilization', pct: 30 },
            { label: 'History', pct: 88 },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <div className="text-xs text-white/40 mb-1 font-body">{f.label}</div>
              <div className="h-1 bg-white/10 rounded">
                <motion.div className="h-full rounded" style={{ background: '#D4AF37', width: `${f.pct}%` }} />
              </div>
              <div className="text-xs text-[#D4AF37] mt-1 font-mono">{f.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    ),
    upi: (
      <div className="space-y-3">
        <div className="flex items-center justify-center gap-2 p-4 rounded-xl" style={{ background: 'rgba(0,200,83,0.1)', border: '1px solid rgba(0,200,83,0.2)' }}>
          <div className="text-3xl">⚡</div>
          <div>
            <div className="font-display font-bold text-2xl text-white">CRED Pay</div>
            <div className="text-xs text-[#00C853] font-body">cred@upi</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['Zomato', 'Swiggy', 'Amazon', 'Uber', 'Netflix', 'More'].map((m) => (
            <div key={m} className="p-2 rounded-lg text-center text-xs font-body text-white/60 hover:text-[#D4AF37] cursor-pointer transition-colors" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {m}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg" style={{ background: 'rgba(0,200,83,0.07)', border: '1px solid rgba(0,200,83,0.15)' }}>
          <span className="text-xs text-white/60 font-body">Last payment</span>
          <span className="text-sm font-mono font-bold text-[#00C853]">+₹120 coins</span>
        </div>
      </div>
    ),
    travel: (
      <div className="space-y-3">
        <div className="p-4 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(229,57,53,0.15), rgba(229,57,53,0.05))', border: '1px solid rgba(229,57,53,0.2)' }}>
          <div className="flex justify-between items-center mb-3">
            <div className="text-xs font-mono text-white/40">BOM</div>
            <div className="text-lg">✈️</div>
            <div className="text-xs font-mono text-white/40">DEL</div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="font-display font-bold text-xl text-white">₹4,299</div>
              <div className="text-xs text-white/40 line-through font-body">₹6,500</div>
            </div>
            <div className="text-xs font-body text-[#E53935] font-semibold bg-[#E53935]/10 px-2 py-1 rounded">Members-only</div>
          </div>
        </div>
        <div className="flex gap-2">
          {['Lounge Access', 'Priority Check-in', 'Seat Upgrade'].map((f) => (
            <div key={f} className="flex-1 p-2 rounded-lg text-center text-xs font-body text-white/50" style={{ background: 'rgba(255,255,255,0.04)' }}>
              {f}
            </div>
          ))}
        </div>
      </div>
    ),
    store: (
      <div className="grid grid-cols-2 gap-2">
        {[
          { name: 'AirPods Pro', price: '₹19,999', coins: '50K 🪙', emoji: '🎧' },
          { name: 'Dyson V12', price: '₹39,999', coins: '100K 🪙', emoji: '🌀' },
          { name: 'Apple Watch', price: '₹34,999', coins: '80K 🪙', emoji: '⌚' },
          { name: 'Sony WH-1000', price: '₹24,990', coins: '60K 🪙', emoji: '🎵' },
        ].map((p) => (
          <div key={p.name} className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div className="text-2xl mb-2">{p.emoji}</div>
            <div className="text-xs font-body text-white font-medium mb-0.5">{p.name}</div>
            <div className="text-xs font-mono text-white/60">{p.price}</div>
            <div className="text-xs text-[#D4AF37] font-mono mt-1">{p.coins}</div>
          </div>
        ))}
      </div>
    ),
  };
  return visuals[type] || null;
};

const FeaturesSection = () => {
  const [active, setActive] = useState(features[0].id);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const activeFeature = features.find((f) => f.id === active);

  return (
    <section className="section-padding bg-[#070707] relative overflow-hidden" id="features">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(rgba(212,175,55,0.8) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-card rounded-full">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">Features</span>
          </div>
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight">
            <span className="text-white">everything</span><br />
            <span className="gold-text">money</span><br />
            <span className="text-white">related.</span>
          </h2>
        </motion.div>

        {/* Interactive feature showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
          {/* Feature tabs */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {features.map((feature, i) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                onClick={() => setActive(feature.id)}
                className={`group flex items-center gap-4 p-4 rounded-sm text-left transition-all duration-300 ${
                  active === feature.id
                    ? 'bg-white/05 border border-[#D4AF37]/40'
                    : 'glass-card hover:border-white/15'
                }`}
              >
                <span className="text-2xl">{feature.icon}</span>
                <div className="flex-1">
                  <div className="font-body font-semibold text-sm text-white group-hover:text-[#D4AF37] transition-colors">
                    {feature.title}
                  </div>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded mt-1 inline-block"
                    style={{ background: `${feature.tagColor}20`, color: feature.tagColor }}
                  >
                    {feature.tag}
                  </span>
                </div>
                {active === feature.id && (
                  <motion.div layoutId="activeIndicator" className="w-1 h-8 rounded-full" style={{ background: '#D4AF37' }} />
                )}
              </motion.button>
            ))}
          </div>

          {/* Feature detail */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  background: 'linear-gradient(145deg, #141414, #0d0d0d)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: `0 0 60px ${activeFeature.tagColor}15`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">{activeFeature.icon}</span>
                  <div>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded mb-1 inline-block"
                      style={{ background: `${activeFeature.tagColor}20`, color: activeFeature.tagColor }}
                    >
                      {activeFeature.tag}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-white">{activeFeature.title}</h3>
                  </div>
                </div>

                <p className="font-body text-white/60 mb-6 leading-relaxed">
                  {activeFeature.description}
                </p>

                {/* Visual */}
                <div className="mb-6">
                  <FeatureVisual type={activeFeature.visual} />
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2">
                  {activeFeature.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs font-body text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      {h}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
