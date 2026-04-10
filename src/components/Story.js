import React from 'react';
import { motion } from 'framer-motion';

const paras = [
  <>The Black Company is a thought that became a direction — turning creative energy into apps, brands, and businesses. Not a business plan. <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>A creative impulse taken all the way.</strong></>,
  <>The goal is real: bootstrap a portfolio of companies to $1 billion — fully owned, no outside money, built from ideas alone. But the bigger point is what that proves. <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>Creativity isn't a lane. It never was.</strong> It's the foundation every industry is secretly built on.</>,
  <>No VC. The co-founders are fellow creatives who believe in creativity and the authenticity of it — <strong style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>they're already in.</strong></>,
  <>If this inspires another creative to stop waiting for permission and start building — that's just as important as the billion.</>,
];

export default function Story() {
  return (
    <section id="story" style={{
      padding: '120px 40px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <motion.span
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}
        >
          A Movement
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, color: '#fff', marginBottom: '48px' }}
        >
          Not just a company.<br />
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>A creative movement.</span>
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {paras.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ fontSize: '18px', color: 'rgba(255,255,255,0.52)', lineHeight: 1.8, fontWeight: 400 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
