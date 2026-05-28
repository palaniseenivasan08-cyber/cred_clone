import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const links = {
    Products: ['Credit Cards', 'UPI Payments', 'CRED Pay', 'CRED Cash', 'CRED Travel', 'CRED Store'],
    Company: ['About Us', 'Careers', 'Press', 'Blog', 'Investors', 'Partners'],
    Support: ['Help Center', 'Contact Us', 'Report Issue', 'Community', 'Status', 'API Docs'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security', 'Compliance', 'RBI Guidelines'],
  };

  const socialLinks = [
    { label: 'Twitter', icon: '𝕏' },
    { label: 'Instagram', icon: '◻' },
    { label: 'LinkedIn', icon: 'in' },
    { label: 'YouTube', icon: '▶' },
  ];

  return (
    <footer className="relative bg-[#070707] border-t border-white/5" id="footer">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="grid grid-cols-1 lg:grid-cols-6 gap-12"
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-[#D4AF37] to-[#8B6914] rounded-sm flex items-center justify-center font-display font-black text-black text-lg">
                C
              </div>
              <span className="font-display font-black text-2xl tracking-wider gold-text">CRED</span>
            </div>

            <p className="font-body text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              A members-only club that rewards responsible financial behavior. 
              Pay bills, earn coins, live better.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-sm glass-card flex items-center justify-center text-xs font-mono text-white/50 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300"
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['PCI DSS', 'ISO 27001', 'RBI'].map((cert) => (
                <span
                  key={cert}
                  className="text-xs font-mono px-2 py-1 rounded"
                  style={{ background: 'rgba(0,200,83,0.1)', color: '#00C853', border: '1px solid rgba(0,200,83,0.2)' }}
                >
                  ✓ {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="lg:col-span-1">
              <h4 className="font-body font-semibold text-white text-sm mb-4 tracking-wider uppercase">
                {category}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/40 hover:text-[#D4AF37] transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-body font-semibold text-white text-sm mb-1">Stay in the know</div>
              <div className="text-xs text-white/40 font-body">Get exclusive member updates and offers</div>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 px-4 py-2.5 rounded-sm text-sm font-body bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37]/40 transition-colors"
              />
              <button className="neo-btn px-5 py-2.5 text-xs rounded-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-body text-white/25 text-center sm:text-left">
              © {new Date().getFullYear()} CRED (Dreamplug Technologies Pvt. Ltd). All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-body text-white/25 justify-center">
              {['Privacy', 'Terms', 'Security', 'Sitemap'].map((link) => (
                <a key={link} href="#" className="hover:text-[#D4AF37] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-4 text-xs font-body text-white/20 leading-relaxed max-w-4xl">
            CRED is not a bank. CRED is not a financial advisor. Credit score information is provided for informational purposes only.
            RBI Registration No: N-13.02268. CRED is a trademark of Dreamplug Technologies Private Limited.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
