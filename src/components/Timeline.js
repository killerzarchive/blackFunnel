import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { phase: '01', heading: 'Build', body: 'Every creative idea is a potential company. Apps, brands, products, services — whatever form the idea demands. It starts with imagination and ends with something people actually pay for.', status: 'In progress', active: true },
  { phase: '02', heading: 'Grow the Portfolio', body: 'Each thing that works becomes its own company under the Black Company umbrella. The goal is a portfolio of compounding businesses, not one big bet.', status: 'Next', active: false },
  { phase: '03', heading: 'Hit $1 Billion', body: 'Bootstrap the entire portfolio to a combined $1B valuation without outside investment. No VC. The co-founders are fellow creatives who believe in what this is.', status: 'The mission', active: false },
];

export default function Timeline() {
  return (
    <section id="timeline" style={{ padding: '120px 40px' }}>
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <motion.span
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}
        >
          The Roadmap
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', marginBottom: '56px' }}
        >
          Where this is going
        </motion.h2>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {steps.map((s, i) => (
            <motion.div
              key={s.phase}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: 'grid',
                gridTemplateColumns: '72px 1fr',
                gap: '28px',
                padding: '36px 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                alignItems: 'start',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.06em', paddingTop: '4px' }}>{s.phase}</div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff', marginBottom: '10px' }}>{s.heading}</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: '14px' }}>{s.body}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', opacity: s.active ? 0.8 : 0.2, flexShrink: 0 }} />
                  {s.status}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
