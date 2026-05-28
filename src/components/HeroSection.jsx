import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 4,
    duration: Math.random() * 4 + 4,
  }));

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]"
    >
      {/* Ambient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[200px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: 0.3,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating credit cards */}
      <motion.div
        className="absolute right-[8%] top-[20%] w-44 md:w-56 opacity-80"
        animate={{ y: [0, -20, 0], rotate: [12, 15, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative w-full aspect-[1.586/1] rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)',
            border: '1px solid rgba(212,175,55,0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 40px rgba(212,175,55,0.2)',
          }}
        >
          <div className="absolute inset-0 opacity-20"
            style={{
              background: 'linear-gradient(135deg, transparent 30%, rgba(212,175,55,0.5) 50%, transparent 70%)',
            }}
          />
          <div className="p-5 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex gap-2">
                <div className="w-7 h-7 rounded-full bg-[#D4AF37]/80" />
                <div className="w-7 h-7 rounded-full bg-[#D4AF37]/40 -ml-3" />
              </div>
              <span className="text-[#D4AF37] font-mono text-xs font-semibold tracking-widest">CRED</span>
            </div>
            <div>
              <div className="font-mono text-white/70 text-sm tracking-widest mb-1">•••• •••• •••• 4242</div>
              <div className="flex justify-between items-center">
                <span className="text-white/40 text-xs font-body">PREMIUM MEMBER</span>
                <span className="text-[#D4AF37] text-xs font-mono">12/28</span>
              </div>
            </div>
          </div>
          {/* Holographic effect */}
          <div className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-bl-full"
            style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
        </div>
      </motion.div>

      <motion.div
        className="absolute left-[5%] bottom-[25%] w-36 md:w-44 opacity-60"
        animate={{ y: [0, 20, 0], rotate: [-8, -5, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
      >
        <div className="relative w-full aspect-[1.586/1] rounded-xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #7B2FBE 0%, #4A1A7A 100%)',
            border: '1px solid rgba(123,47,190,0.4)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6), 0 0 30px rgba(123,47,190,0.3)',
          }}
        >
          <div className="p-4 h-full flex flex-col justify-between">
            <div className="w-8 h-6 rounded bg-[#D4AF37]/80" />
            <div>
              <div className="font-mono text-white/60 text-xs tracking-widest mb-1">•••• 8867</div>
              <span className="text-white/40 text-xs">VISA PLATINUM</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Coin */}
      <motion.div
        className="absolute right-[20%] bottom-[30%] hidden md:block"
        animate={{ y: [0, -15, 0], rotate: [0, 360] }}
        transition={{ y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }, rotate: { duration: 8, repeat: Infinity, ease: 'linear' } }}
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B6914] flex items-center justify-center shadow-2xl"
          style={{ boxShadow: '0 0 30px rgba(212,175,55,0.5)' }}>
          <span className="font-display font-black text-black text-xl">₹</span>
        </div>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-4 max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass-card rounded-full"
        >
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs font-body font-medium text-[#D4AF37] tracking-widest uppercase">
            India's Most Trusted Fintech
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6"
        >
          <span className="block text-white">good</span>
          <span className="block shimmer-text">money</span>
          <span className="block text-white/90">habits</span>
          <span className="block text-white">pay off.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A members-only club that rewards you for being financially responsible.
          Pay bills, earn CRED coins, unlock premium experiences.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#download" className="neo-btn px-10 py-4 text-sm tracking-widest rounded-sm inline-block">
            Get Your Invite
          </a>
          <a
            href="#features"
            className="group flex items-center gap-3 px-8 py-4 text-sm font-body font-medium text-white/60 hover:text-[#D4AF37] transition-all duration-300 tracking-wider"
          >
            See How It Works
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { num: '10M+', label: 'Members' },
            { num: '₹5000Cr+', label: 'Bills Paid' },
            { num: '4.9★', label: 'App Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl md:text-3xl gold-text">{stat.num}</div>
              <div className="text-xs font-body text-white/40 tracking-wider mt-1 uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest font-body uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#D4AF37] to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
