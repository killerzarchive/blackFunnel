import React from 'react';

const cols = [
  { heading: 'The Story', links: ['Origin', 'The Movement', 'Our Principles', 'The Roadmap'] },
  { heading: 'Portfolio', links: ['See what\'s being built', 'Products', 'Companies'] },
  { heading: 'Company', links: ['About', 'Careers', 'Press', 'Contact'] },
  { heading: 'Legal', links: ['Privacy', 'Terms', 'Cookies'] },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '80px 40px 48px',
      background: '#000',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '240px repeat(4, 1fr)',
          gap: '40px',
          marginBottom: '64px',
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: 28, height: 28, background: '#fff', borderRadius: '7px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: 12, height: 12, background: '#000', borderRadius: '3px' }} />
              </div>
              <span style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.02em' }}>
                BLACK COMPANY
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, maxWidth: '200px' }}>
              Turning creative work into companies. A movement for creatives who build.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.heading}>
              <h5 style={{
                fontSize: '12px', fontWeight: 600,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '20px',
              }}>
                {col.heading}
              </h5>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#fff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} The Black Company. A creative project.
          </span>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
              <a
                key={s}
                href="#"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 500px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
