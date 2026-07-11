import React, { useState } from 'react';

const LABEL: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '0.65rem',
  letterSpacing: '0.55em',
  textTransform: 'uppercase',
};

const WORLDS = [
  {
    id: 'sea-of-dunes',
    name: 'Sea of Dunes',
    sub: 'Brazil · Desert Futurism',
    src: '/brazil-dunes.jpg',
    count: '24 images',
    gallery: ['/dunes-sunset-sol.jpg', '/dunes-golden-sunset.jpg', '/dunes-jayne.jpg', '/dunes-soft-sunset.jpg'],
  },
  {
    id: 'brasilia',
    name: 'Brasília',
    sub: 'Brazil · Capital Futurism',
    src: '/brasilia-dome.jpg',
    count: 'Coming soon',
    gallery: ['/brasilia-dome.jpg', '/brasilia-window.jpg', '/brasilia-lola.jpg', '/brasilia-stf.jpg'],
  },
  {
    id: 'neon-tokyo',
    name: 'Neon Tokyo',
    sub: 'Japan · Cyber Noir',
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=70',
    count: 'Coming soon',
  },
  {
    id: 'antalya',
    name: 'Antalya',
    sub: 'Turkey · Mediterranean Light',
    src: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=600&q=70',
    count: 'Coming soon',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    sub: 'Southeast Asia · Sacred & Urban',
    src: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=600&q=70',
    count: 'Coming soon',
  },
  {
    id: 'cambodia',
    name: 'Cambodia',
    sub: 'Angkor · Ancient Worlds',
    src: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=600&q=70',
    count: 'Coming soon',
  },
  {
    id: 'fascinasia',
    name: 'Fascinasia',
    sub: 'Mythic Surrealism · Ritual',
    src: '/fascinasia-cover.jpg',
    count: 'Digital collection',
  },
  {
    id: 'hikkaduwa',
    name: 'Hikkaduwa',
    sub: 'Sri Lanka · Golden Hour',
    src: '/D80_9144.jpg',
    count: '8 images',
    gallery: ['/D80_9144.jpg', '/srilanka-palms.jpg', '/srilanka-island.jpg', '/srilanka-sunset.jpg'],
  },
  {
    id: 'female-persuasion',
    name: 'Female Persuasion',
    sub: 'Editorial · Psychological',
    src: '/female-persuasion-cover.jpg',
    count: 'Digital collection',
  },
  {
    id: 'nosara',
    name: 'Nosara',
    sub: 'Costa Rica · Pacific Ritual',
    src: '/nosara-drift.jpg',
    count: '5 images',
    gallery: ['/nosara-drift.jpg', '/nosara-melay-arch.jpg', '/nosara-julia.jpg', '/nosara-melay-rocks.jpg', '/nosara-duo.jpg'],
  },
  {
    id: 'vietnam',
    name: 'Vietnam',
    sub: 'Indochina · Mist & Karst',
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=70',
    count: 'Coming soon',
  },
  {
    id: 'china',
    name: 'China',
    sub: 'Ancient Empire · Monumental Scale',
    src: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=70',
    count: 'Coming soon',
  },
];

const VisualDevelopment = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeWorld, setActiveWorld] = useState<string | null>(null);

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>

      {/* ── SECTION 1 — PAGE HEADER ───────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)',
        padding: 'clamp(120px,12vw,160px) clamp(40px,6vw,80px) clamp(48px,6vw,72px)',
      }}>
        <p style={{ ...LABEL, color: '#C9971F', marginBottom: '16px' }}>
          World Atlas · Cinematic Environments
        </p>
        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(3.5rem, 7vw, 7rem)',
          lineHeight: 0.9,
          color: 'var(--text)',
          marginBottom: '24px',
        }}>
          Worlds.
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300,
          fontSize: '1.05rem',
          lineHeight: 1.8,
          color: 'var(--text-72)',
          maxWidth: '560px',
          margin: 0,
        }}>
          A private cinematic archive built for production design and visual bible development.
        </p>
      </section>

      {/* ── SECTION 2 — WORLD TILES ──────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)',
        padding: '0 clamp(40px,6vw,80px) clamp(64px,8vw,100px)',
      }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '2px' }}>
          {WORLDS.map((tile, i) => (
            <div
              key={tile.id}
              onClick={() => setActiveWorld(tile.id)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                aspectRatio: '16/9',
                overflow: 'hidden',
                background: '#1a1208',
                cursor: 'pointer',
              }}
            >
              <img
                src={tile.src}
                alt={tile.name}
                referrerPolicy="no-referrer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: hovered === i ? 0.9 : 0.7,
                  filter: 'contrast(1.1)',
                  transform: hovered === i ? 'scale(1.04)' : 'scale(1)',
                  transition: 'transform 0.8s ease, opacity 0.5s ease',
                  display: 'block',
                }}
              />
              {/* Bottom overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '18px',
                background: 'linear-gradient(to top, var(--overlay-dark), transparent)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '22px',
                  color: 'var(--text)',
                  marginBottom: '4px',
                }}>
                  {tile.name}
                </p>
                <p style={{
                  ...LABEL,
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  color: 'var(--text-72)',
                  margin: '0 0 4px',
                }}>
                  {tile.sub}
                </p>
                <p style={{
                  ...LABEL,
                  fontSize: '8px',
                  letterSpacing: '0.25em',
                  color: 'var(--text-35)',
                  margin: 0,
                }}>
                  {tile.count}
                </p>
              </div>
            </div>
          ))}
          {/* LED Volume — full-width YouTube embed */}
          <div style={{ gridColumn: '1 / -1' }}>
            <div style={{ height: '80px' }} />
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
            }}>
              <div style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 600,
                fontSize: '0.65rem',
                letterSpacing: '0.45em',
                textTransform: 'uppercase',
                color: 'var(--text-72)',
                border: '1px solid var(--text-35)',
                padding: '5px 14px',
              }}>
                Editorial Reference
              </div>
              <div style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 400,
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--text-45)',
              }}>
                Informative only · ILM StageCraft · Not a Stanford Emporium production
              </div>
            </div>
          </div>
          <div style={{ gridColumn: '1 / -1', position: 'relative', aspectRatio: '16/9', background: 'var(--bg)' }}>
            <iframe
              src="https://www.youtube.com/embed/gUnxzVOs3rk?rel=0&modestbranding=1"
              title="LED Volume & Virtual Production"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '18px',
              background: 'linear-gradient(to top, var(--overlay-dark), transparent)',
              pointerEvents: 'none',
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '22px',
                color: 'var(--text)',
                marginBottom: '6px',
              }}>
                LED Volume & Virtual Production
              </p>
              <p style={{
                ...LABEL,
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'var(--text-72)',
                margin: 0,
              }}>
                NuLab Studio · AI Visual Pipeline
              </p>
            </div>
          </div>
        </div>

        {activeWorld && (
          <div
            onClick={() => setActiveWorld(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'var(--overlay-dark)',
              zIndex: 500,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '60px 40px 40px',
              overflowY: 'auto',
            }}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveWorld(null)}
              style={{
                position: 'fixed',
                top: '24px',
                right: '32px',
                background: 'none',
                border: 'none',
                color: '#CC0000',
                fontSize: '28px',
                cursor: 'pointer',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                zIndex: 501,
              }}
            >
              ×
            </button>

            {/* World title */}
            {(() => {
              const world = WORLDS.find(w => w.id === activeWorld);
              if (!world) return null;
              return (
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                  <p style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.65rem',
                    letterSpacing: '0.55em',
                    textTransform: 'uppercase',
                    color: '#CC0000',
                    marginBottom: '12px',
                  }}>
                    {world.sub}
                  </p>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: 'clamp(2rem,5vw,4rem)',
                    color: 'var(--text)',
                    lineHeight: 0.95,
                  }}>
                    {world.name}
                  </h2>
                </div>
              );
            })()}

            {/* Gallery grid */}
            {(() => {
              const world = WORLDS.find(w => w.id === activeWorld);
              if (!world) return null;

              if (world.count === 'Coming soon' && !(world as any).gallery) {
                return (
                  <div style={{ textAlign: 'center', padding: '80px 40px' }}>
                    <p style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontWeight: 300,
                      fontSize: '1.4rem',
                      color: 'var(--text-35)',
                    }}>
                      Archive in preparation.
                    </p>
                    <p style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 300,
                      fontSize: '0.65rem',
                      letterSpacing: '0.4em',
                      textTransform: 'uppercase',
                      color: 'var(--text-25)',
                      marginTop: '16px',
                    }}>
                      Daniel@StanfordEmporium.com
                    </p>
                  </div>
                );
              }

              const images = (world as any).gallery ?? [world.src, world.src, world.src];
              return (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '4px',
                  width: '100%',
                  maxWidth: '1600px',
                }}>
                  {images.map((src: string, i: number) => (
                    <div
                      key={i}
                      onClick={e => e.stopPropagation()}
                      style={{ aspectRatio: '16/9', overflow: 'hidden', background: '#1a1208' }}
                    >
                      <img
                        src={src}
                        alt={world.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                      />
                    </div>
                  ))}
                </div>
              );
            })()}

            {/* Request button */}
            <a
              href={`mailto:Daniel@StanfordEmporium.com?subject=Visual Bible Request — ${WORLDS.find(w => w.id === activeWorld)?.name || activeWorld}`}
              onClick={e => e.stopPropagation()}
              style={{
                display: 'inline-block',
                marginTop: '48px',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: '10px',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                background: '#CC0000',
                color: 'var(--text)',
                padding: '12px 28px',
                textDecoration: 'none',
              }}
            >
              Request Visual Bible →
            </a>
          </div>
        )}
      </section>

      {/* ── DIVIDER ───────────────────────────────────────────────────────── */}
      <div style={{
        width: '100%',
        height: '1px',
        background: 'var(--border)',
        margin: '80px 0 0',
      }} />

      {/* ── SECTION 3 — REQUEST STRIP ─────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: 'clamp(56px,7vw,80px) clamp(40px,6vw,80px)',
        textAlign: 'center',
        marginTop: '120px',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          color: 'var(--text-72)',
          maxWidth: '600px',
          margin: '0 auto 32px',
          lineHeight: 1.8,
        }}>
          Available for production design development, visual bible construction, and location
          reference. Full archive accessible upon professional inquiry.
        </p>
        <a
          href="mailto:Daniel@StanfordEmporium.com?subject=Visual Bible Request"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            background: '#C9971F',
            color: 'var(--bg)',
            padding: '12px 28px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Request Visual Bible
        </a>
      </section>

    </div>
  );
};

export default VisualDevelopment;
