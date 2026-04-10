import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const canvasRef = useRef(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.1 + 0.2,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        o: Math.random() * 0.35 + 0.08,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.o})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,255,255,${0.035 * (1 - d / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      background: '#000',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }} />

      <div style={{
        position: 'absolute', top: '40%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: '640px', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '100px', padding: '6px 16px', fontSize: '11px', fontWeight: 500,
            letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase',
            marginBottom: '36px', backdropFilter: 'blur(10px)',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', opacity: 0.5 }} />
            Creative → Company
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(48px, 10vw, 96px)', fontWeight: 900, letterSpacing: '-0.05em', lineHeight: 0.95, color: '#fff', marginBottom: '28px' }}
        >
          The Black<br />
          <span style={{
            background: 'linear-gradient(180deg, #fff 40%, rgba(255,255,255,0.25) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Company
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(16px, 2.2vw, 20px)', color: 'rgba(255,255,255,0.45)', lineHeight: 1.65, maxWidth: '500px', margin: '0 auto 48px' }}
        >
          One person. Turning creative work into apps, brands, businesses, and more — not a suit, not a VC. The goal: bootstrap to $1 billion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '40px' }}
        >
          <a href="#story" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#fff', color: '#000', padding: '14px 28px', borderRadius: '100px',
            fontSize: '15px', fontWeight: 600, textDecoration: 'none', letterSpacing: '-0.01em',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(0.97)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            Read the story
          </a>
          <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(255,255,255,0.06)', color: '#fff', padding: '14px 28px',
            borderRadius: '100px', fontSize: '15px', fontWeight: 500, textDecoration: 'none',
            border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          >
            See what I'm building
          </a>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.09)',
            borderRadius: '24px',
            padding: '28px 32px',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
          }}
        >
          {!submitted ? (
            <>
              <p style={{ fontSize: '14px', fontWeight: 500, color: 'rgba(255,255,255,0.6)', marginBottom: '16px', letterSpacing: '-0.01em' }}>
                Stay in the loop — no noise, just the build.
              </p>
              <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    flex: 1, minWidth: '180px',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '100px', padding: '12px 20px',
                    fontSize: '14px', color: '#fff', fontFamily: 'inherit', outline: 'none',
                  }}
                />
                <button type="submit" style={{
                  background: '#fff', color: '#000', border: 'none',
                  borderRadius: '100px', padding: '12px 22px',
                  fontSize: '13px', fontWeight: 700, cursor: 'pointer',
                  fontFamily: 'inherit', whiteSpace: 'nowrap', letterSpacing: '-0.01em',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Join the movement
                </button>
              </form>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)' }}>For creatives who build. No spam, ever.</p>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff', opacity: 0.7, flexShrink: 0 }} />
                <span style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>You're in. Welcome to the movement.</span>
              </div>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.2)', paddingLeft: '17px' }}>We'll be in touch when something worth saying happens.</p>
            </div>
          )}
        </motion.div>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '180px', background: 'linear-gradient(to top, #000 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 1,
      }} />
    </section>
  );
}
