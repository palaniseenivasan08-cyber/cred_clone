import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: 'Priya Mehta',
    role: 'Product Manager, Bengaluru',
    avatar: 'P',
    color: '#7B2FBE',
    rating: 5,
    text: "CRED changed how I think about credit cards. I used to dread bill payments — now I actually look forward to it because of the rewards. My CIBIL score went from 720 to 810 in 18 months.",
    coins: '24,500',
    months: '28',
  },
  {
    name: 'Arjun Singh',
    role: 'Startup Founder, Mumbai',
    avatar: 'A',
    color: '#D4AF37',
    rating: 5,
    text: "As someone managing multiple credit cards, CRED is a lifesaver. The single dashboard view and smart reminders mean I've never missed a payment. The CRED store rewards are legitimately premium.",
    coins: '48,200',
    months: '36',
  },
  {
    name: 'Kavya Reddy',
    role: 'Software Engineer, Hyderabad',
    avatar: 'K',
    color: '#00BCD4',
    rating: 5,
    text: "The credit score tracking alone is worth it. I get detailed insights into what's affecting my score and actionable tips to improve it. Plus the cashback on bill payments is real money saved.",
    coins: '18,750',
    months: '20',
  },
  {
    name: 'Rahul Verma',
    role: 'Finance Director, Delhi',
    avatar: 'R',
    color: '#00C853',
    rating: 5,
    text: "I recommended CRED to my entire team. The app is beautifully designed, works flawlessly, and the security is top-notch. CRED Travel deals are unbeatable for business trips.",
    coins: '67,300',
    months: '42',
  },
  {
    name: 'Ananya Sharma',
    role: 'Doctor, Chennai',
    avatar: 'A',
    color: '#E53935',
    rating: 5,
    text: "The exclusivity makes it feel like a privilege to be a member. Customer support is exceptional. My HDFC Regalia bill used to be stressful — now it's a 10-second payment with rewards.",
    coins: '31,800',
    months: '24',
  },
];

const Stars = ({ count = 5 }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-[#D4AF37] text-sm">★</span>
    ))}
  </div>
);

const TestimonialsSection = () => {
  const [active, setActive] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[active];

  return (
    <section className="section-padding bg-[#0A0A0A] relative overflow-hidden" id="testimonials">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#7B2FBE]/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 glass-card rounded-full">
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">Members Love CRED</span>
          </div>
          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl leading-tight tracking-tight">
            <span className="text-white">10 million</span><br />
            <span className="gold-text">stories.</span>
          </h2>

          {/* App ratings */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            {[
              { store: 'App Store', rating: '4.9', reviews: '2.1L Reviews', icon: '' },
              { store: 'Play Store', rating: '4.8', reviews: '3.4L Reviews', icon: '▶' },
            ].map((s) => (
              <div
                key={s.store}
                className="flex items-center gap-3 px-5 py-3 rounded-sm"
                style={{ background: 'linear-gradient(145deg, #141414, #0d0d0d)', border: '1px solid rgba(212,175,55,0.2)' }}
              >
                <span className="font-mono font-bold text-white text-lg">{s.icon}</span>
                <div className="text-left">
                  <div className="text-xs text-white/40 font-body">{s.store}</div>
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-xl gold-text">{s.rating}</span>
                    <Stars />
                  </div>
                  <div className="text-xs text-white/30 font-body">{s.reviews}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl p-8 h-full"
                style={{
                  background: 'linear-gradient(145deg, #141414, #0d0d0d)',
                  border: `1px solid ${t.color}30`,
                  boxShadow: `0 0 60px ${t.color}10`,
                }}
              >
                <Stars count={t.rating} />
                <p className="font-body text-xl text-white/80 leading-relaxed my-6 italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-display font-black text-black text-xl"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-body font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/40 font-body">{t.role}</div>
                  </div>
                  <div className="ml-auto flex gap-4">
                    <div className="text-right">
                      <div className="font-mono font-bold gold-text">{t.coins}</div>
                      <div className="text-xs text-white/30 font-body">Coins Earned</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-white">{t.months}mo</div>
                      <div className="text-xs text-white/30 font-body">Member</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-2 mt-4 justify-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active ? 'w-8 h-2 bg-[#D4AF37]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-4">
            {testimonials.filter((_, i) => i !== active).slice(0, 3).map((t2, i) => (
              <motion.button
                key={t2.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(testimonials.indexOf(t2))}
                className="text-left p-4 rounded-sm transition-all duration-300 hover:border-[#D4AF37]/30 glass-card"
              >
                <Stars count={5} />
                <p className="font-body text-xs text-white/50 leading-relaxed mt-2 mb-3 line-clamp-2">
                  "{t2.text}"
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center font-display font-bold text-black text-sm"
                    style={{ background: t2.color }}
                  >
                    {t2.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-body font-medium text-white">{t2.name}</div>
                    <div className="text-xs text-white/30 font-body">{t2.role.split(',')[1]?.trim()}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
