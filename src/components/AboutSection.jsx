import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustCard = ({ icon, title, text, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="glass-card p-6 rounded-sm group hover:border-[#D4AF37]/30 transition-all duration-500"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-display font-bold text-xl text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
        {title}
      </h3>
      <p className="font-body text-sm text-white/50 leading-relaxed">{text}</p>
    </motion.div>
  );
};

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const trustPoints = [
    {
      icon: '👑',
      title: 'Members Only',
      text: 'CRED is not for everyone. Only those with a CIBIL score above 750 qualify. Exclusivity is our promise to you.',
    },
    {
      icon: '🎯',
      title: 'Rewarded Behavior',
      text: 'Every bill you pay earns you CRED coins. These coins unlock a world of premium benefits, cashbacks, and exclusive offers.',
    },
    {
      icon: '🏆',
      title: 'Premium Community',
      text: 'Join 10 million financially responsible Indians who choose CRED. A club built on trust, reliability, and excellence.',
    },
    {
      icon: '⚡',
      title: 'Instant Everything',
      text: 'Credit card payments, UPI transfers, rent payments — all in under 30 seconds. Speed meets simplicity.',
    },
  ];

  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden" id="about">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-card rounded-full">
              <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
                About CRED
              </span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-[0.95] tracking-tight mb-8">
              <span className="text-white">not just</span><br />
              <span className="gold-text">another</span><br />
              <span className="text-white">fintech.</span>
            </h2>
            <p className="font-body text-lg text-white/50 leading-relaxed mb-8 max-w-xl">
              CRED was built on a simple belief — that people who pay their dues on time deserve more. 
              We created a system where your financial discipline is rewarded, not just recorded.
            </p>
            <p className="font-body text-base text-white/40 leading-relaxed max-w-xl">
              We're not a bank. We're not just an app. CRED is a statement — a members-only club 
              that turns your credit score into social currency.
            </p>

            {/* Accent line */}
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37] to-transparent max-w-[200px]" />
              <span className="font-mono text-xs text-[#D4AF37] tracking-widest">EST. 2018</span>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative">
              <div
                className="rounded-2xl p-8 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #151515, #0d0d0d)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  boxShadow: '0 0 80px rgba(212,175,55,0.08)',
                }}
              >
                {/* Member profile mock */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B6914] flex items-center justify-center text-2xl font-display font-black text-black">
                    R
                  </div>
                  <div>
                    <div className="font-body font-semibold text-white">Rahul Sharma</div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#00C853]" />
                      <span className="text-xs text-white/50 font-body">Premium Member</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-right">
                      <div className="font-mono text-xs text-[#D4AF37] tracking-wide">CIBIL</div>
                      <div className="font-display font-bold text-2xl text-white">812</div>
                    </div>
                  </div>
                </div>

                {/* Score bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs font-body text-white/40 mb-2">
                    <span>Credit Score</span>
                    <span className="text-[#D4AF37]">Excellent</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: '85%' } : {}}
                      transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #D4AF37, #F0D060)' }}
                    />
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'CRED Coins', value: '12,450', icon: '🪙' },
                    { label: 'Bills Paid', value: '₹2.4L', icon: '📋' },
                    { label: 'Cashback', value: '₹4,200', icon: '💰' },
                    { label: 'Streak', value: '24 months', icon: '🔥' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="text-lg mb-1">{item.icon}</div>
                      <div className="font-body font-semibold text-white text-sm">{item.value}</div>
                      <div className="font-body text-xs text-white/40">{item.label}</div>
                    </div>
                  ))}
                </div>

                {/* Badge */}
                <div
                  className="flex items-center gap-3 p-3 rounded-lg"
                  style={{ background: 'linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.05))', border: '1px solid rgba(212,175,55,0.3)' }}
                >
                  <span className="text-2xl">👑</span>
                  <div>
                    <div className="font-body font-semibold text-[#D4AF37] text-sm">Black Member</div>
                    <div className="font-body text-xs text-white/50">Elite tier unlocked</div>
                  </div>
                </div>
              </div>

              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl bg-[#D4AF37]/5 blur-3xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>

        {/* Trust cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {trustPoints.map((point, i) => (
            <TrustCard key={i} {...point} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
