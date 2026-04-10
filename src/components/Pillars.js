import React, { useState } from 'react';
import { motion } from 'framer-motion';

const pillars = [
  { num: '01', title: 'Creative first, always', desc: 'Every idea here starts as a creative impulse — not a market analysis. The work comes first. The business follows.' },
  { num: '02', title: 'No lane', desc: 'Creativity isn\'t just for artists. It\'s for anyone with a healthy imagination and the drive to build. Good ideas don\'t belong to one category.' },
  { num: '03', title: 'Ideas into real things', desc: 'Apps. Brands. Businesses. The goal is to close the gap between imagination and execution — and prove it\'s possible without outside money or permission.' },
  { num: '04', title: 'Bootstrap to $1B', desc: 'The number is audacious on purpose. No VC. The co-founders are every creative who believes in creativity and the authenticity of it — they\'re already in.' },
];

function Pillar({ p, index }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{
        padding: '36px',
        border: `1px solid ${hovered ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '20px',
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
        transition: 'all 0.25s ease',
        transform: hovered ? 'translateY(-3px)' : 'none',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', marginBottom: '16px' }}>{p.num}</div>
      <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', marginBottom: '12px' }}>{p.title}</div>
      <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65 }}>{p.desc}</div>
    </motion.div>
  );
}

export default function Pillars() {
  return (
    <section id="pillars" style={{
      padding: '100px 40px',
      background: 'rgba(255,255,255,0.015)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.span
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}
        >
          The Principles
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', marginBottom: '56px' }}
        >
          How this works
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="pillars-grid">
          {pillars.map((p, i) => <Pillar key={p.num} p={p} index={i} />)}
        </div>
      </div>

      <style>{`@media(max-width:640px){ .pillars-grid{ grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
