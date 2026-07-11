import { Link } from 'react-router-dom';

const Spatial = () => {
  return (
    <div className="bg-[var(--bg-2)] min-h-screen pt-40 pb-0">

      {/* HEADER */}
      <section className="px-6 md:px-20 max-w-[1400px] mx-auto mb-20">
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '20px' }}>
          Philosophy · Research · Vision
        </p>
        <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 7rem)', fontWeight: 300, lineHeight: 1.05, color: 'var(--text)', marginBottom: '8px' }}>
          Spatial Resonance™
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', fontStyle: 'italic', color: '#CC0000', marginBottom: '64px', fontWeight: 300 }}>
          Where environment and emotion intersect.
        </p>

        {/* TWO-COLUMN */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '64px', alignItems: 'start' }}>

          {/* Left — text */}
          <div>
            <p style={{ fontFamily: "'Noto Serif', serif", fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.9, color: 'var(--text-72)', marginBottom: '28px' }}>
              Every space tells a story before a single line of dialogue is spoken. Spatial Resonance™ is the philosophy behind thirty years of environment work — the idea that architecture, light, and atmosphere are not background but character.
            </p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.9, color: 'var(--text-45)' }}>
              From the geometry of a fashion campaign set in Morocco to the dune landscapes of Brazil to the neon corridors of Tokyo — every environment carries a frequency. This philosophy underpins the Production Design and Art Direction practice at Stanford Emporium.
            </p>
          </div>

          {/* Right — Vimeo */}
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              src="https://player.vimeo.com/video/1179698917?byline=0&title=0&portrait=0&color=CC0000"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Spatial Resonance — Brazil Dunes"
            />
          </div>
        </div>
      </section>

      {/* FOOTER LINKS */}
      <section className="px-6 md:px-20 max-w-[1400px] mx-auto pb-32">
        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '40px' }} />
        <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/visual-development"
            style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CC0000', textDecoration: 'none', transition: 'opacity 200ms' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            ← Back to Visual Development
          </Link>
          <a
            href="https://nulab.space"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CC0000', textDecoration: 'none', transition: 'opacity 200ms' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Explore NuLab →
          </a>
        </div>
      </section>

    </div>
  );
};

export default Spatial;
