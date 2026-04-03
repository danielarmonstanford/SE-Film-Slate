import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    num: '01',
    title: 'Production Design',
    desc: 'Set design, colour world, spatial architecture. The complete visual environment from concept to set.',
  },
  {
    num: '02',
    title: 'Art Direction',
    desc: 'On-set execution. Department management. Every frame consistent with the visual bible.',
  },
  {
    num: '03',
    title: 'Casting Consultation',
    desc: 'Ensemble coherence. Character-to-environment visual intelligence. Instinctive eye for talent honed across 30 years of directing people.',
  },
  {
    num: '04',
    title: 'Brand & Identity',
    desc: 'Every film needs a visual identity system — titles, props, signage, world-building graphics.',
    link: { label: 'Stanford Emporium →', href: 'https://www.stanfordemporium.com', external: true },
  },
  {
    num: '05',
    title: 'Soundtrack Intelligence',
    desc: 'Score selection is a Production Design decision. Collecting original motion picture scores since childhood — Vangelis, Morricone, Zimmer — that ear informs every spatial and tonal choice.',
  },
  {
    num: '06',
    title: 'Location Reference & Scouting',
    desc: 'Thirty years. Five continents. An unpublished archive of large-format photography available as location reference and background plates.',
  },
  {
    num: '07',
    title: 'Matte Painting & Background Plates',
    desc: 'Cinematic landscape photography repurposed as production-ready environment material. Brazil, Sri Lanka, Japan, and beyond.',
  },
  {
    num: '08',
    title: 'NuLab VFX & Virtual Production',
    desc: 'LED Volume integration and AI-visual pipeline via NuLab Audio Visual Intelligence.',
    link: { label: 'nulab.space →', href: 'https://nulab.space', external: true },
  },
  {
    num: '09',
    title: 'Creative Consulting',
    desc: 'Turnkey creative oversight for productions needing strategic visual intelligence without a full department. Available for features, pilots, and branded content.',
  },
];

const Work: React.FC = () => {
  return (
    <div className="bg-[#131313] min-h-screen pt-40 pb-0">

      {/* HEADER */}
      <section className="px-6 md:px-20 max-w-[1800px] mx-auto mb-20">
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#CC0000', display: 'block', marginBottom: '20px' }}>
          Full Creative Services
        </span>
        <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 1.05, color: '#e5e2e1', marginBottom: '0' }}>
          Everything a production needs.
        </h1>
        <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.05, color: '#CC0000', marginBottom: '40px' }}>
          Under one intelligence.
        </h1>
        <p style={{ maxWidth: '680px', fontSize: '0.9rem', color: 'rgba(229,226,225,0.65)', lineHeight: 1.9 }}>
          Most productions hire seven different vendors for what happens here under one creative vision. From initial concept to final frame — Production Design, Art Direction, Brand Identity, Casting, Soundtrack Intelligence, Location, and Visual Effects. This is the complete offering.
        </p>
      </section>

      {/* SERVICE GRID */}
      <section className="px-6 md:px-20 max-w-[1800px] mx-auto mb-32">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'rgba(229,226,225,0.06)' }}>
          {services.map((s) => (
            <div
              key={s.num}
              style={{
                background: '#1c1b1b',
                border: '1px solid rgba(229,226,225,0.06)',
                padding: '32px',
                borderRadius: 0,
                transition: 'border-color 400ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(204,0,0,0.3)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(229,226,225,0.06)')}
            >
              <div style={{ fontStyle: 'italic', fontSize: '1.5rem', color: '#CC0000', marginBottom: '14px', lineHeight: 1 }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 300, color: '#e5e2e1', marginBottom: '12px', lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '0.75rem', color: 'rgba(229,226,225,0.5)', lineHeight: 1.75, marginBottom: s.link ? '16px' : '0' }}>
                {s.desc}
              </p>
              {s.link && (
                <a
                  href={s.link.href}
                  target={s.link.external ? '_blank' : undefined}
                  rel={s.link.external ? 'noopener noreferrer' : undefined}
                  style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#CC0000', textDecoration: 'none', transition: 'opacity 200ms' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {s.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0d0d0d', padding: '96px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3.5rem)', fontWeight: 300, fontStyle: 'italic', color: '#e5e2e1', marginBottom: '40px', lineHeight: 1.2 }}>
          One call. Full creative picture.
        </h2>
        <a
          href="mailto:danielarmonstanford@gmail.com?subject=Creative%20Consulting%20Inquiry"
          style={{ display: 'inline-block', background: '#CC0000', color: '#131313', fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', padding: '16px 48px', textDecoration: 'none', transition: 'background 300ms' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#930000')}
          onMouseLeave={e => (e.currentTarget.style.background = '#CC0000')}
        >
          Begin Consulting Conversation
        </a>
      </section>

    </div>
  );
};

export default Work;
