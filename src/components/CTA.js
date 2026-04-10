import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSent(true); setEmail(''); }
  };

  return (
    <section id="contact" style={{
      padding: '140px 40px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '100px', padding: '6px 16px',
            fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em',
            color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: '32px',
          }}>
            Creative → Company
          </span>

          <h2 style={{
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 800, letterSpacing: '-0.04em',
            lineHeight: 1.0, color: '#fff', marginBottom: '24px',
          }}>
            Join the<br />
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>movement</span>
          </h2>

          <p style={{
            fontSize: '16px', color: 'rgba(255,255,255,0.4)',
            lineHeight: 1.7, marginBottom: '48px',
          }}>
            The Black Company is being built in public. Follow the journey — one creative turning ideas into companies, end goal: bootstrapping to $1 billion.
          </p>

          {!sent ? (
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex', gap: '12px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px', padding: '8px 8px 8px 24px',
                maxWidth: '500px', margin: '0 auto', backdropFilter: 'blur(10px)',
              }}
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flex: 1, minWidth: 0, background: 'none', border: 'none', outline: 'none',
                  fontSize: '15px', color: '#fff', fontFamily: 'inherit',
                }}
              />
              <button
                type="submit"
                className="cta-send-btn"
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: '#fff', color: '#000', border: 'none',
                  padding: '12px 22px', borderRadius: '100px',
                  fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                  fontFamily: 'inherit', flexShrink: 0, transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <Send size={14} /> Send
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '16px', padding: '20px 32px',
                maxWidth: '500px', margin: '0 auto',
                display: 'flex', alignItems: 'center', gap: '12px',
              }}
            >
              <span style={{ width: 8, height: 8, background: '#fff', borderRadius: '50%', flexShrink: 0 }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px' }}>
                You're in. Welcome to the movement.
              </span>
            </motion.div>
          )}

          <div style={{
            display: 'flex', justifyContent: 'center',
            gap: '32px', marginTop: '48px', flexWrap: 'wrap',
          }}>
            {['Collaborate', 'Careers', 'Press', 'Portfolio'].map(link => (
              <a
                key={link}
                href={link === 'Portfolio' ? 'http://localhost:3000' : '#contact'}
                target={link === 'Portfolio' ? '_blank' : undefined}
                rel={link === 'Portfolio' ? 'noopener noreferrer' : undefined}
                style={{
                  fontSize: '14px', color: 'rgba(255,255,255,0.35)',
                  textDecoration: 'none', display: 'flex', alignItems: 'center',
                  gap: '4px', transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
              >
                {link} <ArrowRight size={12} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .cta-send-btn { padding: 12px 14px !important; font-size: 13px !important; gap: 4px !important; }
        }
      `}</style>
    </section>
  );
}
