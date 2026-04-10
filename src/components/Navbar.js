import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = ['Story', 'Principles', 'Roadmap'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const anchorMap = { Story: 'story', Principles: 'pillars', Roadmap: 'timeline' };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: '0 40px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(0,0,0,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <div style={{
            width: 28, height: 28,
            background: '#fff', borderRadius: '7px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 12, height: 12, background: '#000', borderRadius: '3px' }} />
          </div>
          <span className='logo-mobile' style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>
           Black
          </span>
          <span className='logo-desktop' style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>
           The Black Company
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${anchorMap[link]}`}
              style={{
                color: 'rgba(255,255,255,0.65)',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#fff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.65)'}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a
            href="http://localhost:3000"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            style={{
              background: '#fff', color: '#000',
              padding: '8px 20px', borderRadius: '100px',
              fontSize: '13px', fontWeight: 600,
              textDecoration: 'none', letterSpacing: '-0.01em',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Portfolio
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none',
              color: '#fff', cursor: 'pointer',
              display: 'none', padding: '4px',
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', top: 64, left: 0, right: 0,
              background: 'rgba(0,0,0,0.95)',
              backdropFilter: 'blur(30px)',
              zIndex: 999, padding: '24px 40px 32px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', flexDirection: 'column', gap: '24px',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link}
                href={`#${anchorMap[link]}`}
                onClick={() => setMenuOpen(false)}
                style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '20px', fontWeight: 500 }}
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .logo-mobile { display: none; }
        .logo-desktop { display: inline; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .logo-mobile { display: inline; }
          .logo-desktop { display: none; }
          .cta-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
