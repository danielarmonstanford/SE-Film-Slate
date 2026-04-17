import React, { useState } from 'react';

const LABEL: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '0.65rem',
  letterSpacing: '0.55em',
  textTransform: 'uppercase',
};

const tiles = [
  {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=70',
    name: 'Sea of Dunes',
    sub: 'Brazil · Desert Futurism',
  },
  {
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=70',
    name: 'Neon Tokyo Studies',
    sub: 'Japan · Cyber Noir',
  },
  {
    src: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=600&q=70',
    name: 'Fascinasia',
    sub: 'Mythic Surrealism',
  },
  {
    src: '/birth-diptych.jpg',
    name: 'The Birth',
    sub: 'Fine Art · Photomontage',
  },
  {
    src: '/D80_9144.jpg',
    name: 'Hikkaduwa',
    sub: 'Sri Lanka · Golden Hour',
  },
  {
    src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=70',
    name: 'Urban Futurism',
    sub: 'Architecture · City',
  },
];

const VisualDevelopment = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ background: '#080705', color: '#F4EFE6', minHeight: '100vh' }}>

      {/* ── SECTION 1 — PAGE HEADER ───────────────────────────────────────── */}
      <section style={{
        background: '#080705',
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
          color: '#F4EFE6',
          marginBottom: '24px',
        }}>
          Worlds.
        </h1>
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 300,
          fontSize: '1.05rem',
          lineHeight: 1.8,
          color: 'rgba(244,239,230,0.85)',
          maxWidth: '560px',
          margin: 0,
        }}>
          A private cinematic archive built for production design and visual bible development.
        </p>
      </section>

      {/* ── SECTION 2 — 6 WORLD TILES ────────────────────────────────────── */}
      <section style={{
        background: '#080705',
        padding: '0 clamp(40px,6vw,80px) clamp(64px,8vw,100px)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2px',
        }}>
          {tiles.map((tile, i) => (
            <div
              key={i}
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
                background: 'linear-gradient(to top, rgba(8,7,5,0.92), transparent)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '22px',
                  color: '#F4EFE6',
                  marginBottom: '6px',
                }}>
                  {tile.name}
                </p>
                <p style={{
                  ...LABEL,
                  fontSize: '10px',
                  letterSpacing: '0.3em',
                  color: 'rgba(244,239,230,0.7)',
                  margin: 0,
                }}>
                  {tile.sub}
                </p>
              </div>
            </div>
          ))}
          {/* LED Volume — full-width YouTube embed */}
          <div style={{ gridColumn: '1 / -1', position: 'relative', aspectRatio: '16/9', background: '#0a0805' }}>
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
              background: 'linear-gradient(to top, rgba(8,7,5,0.92), transparent)',
              pointerEvents: 'none',
            }}>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '22px',
                color: '#F4EFE6',
                marginBottom: '6px',
              }}>
                LED Volume & Virtual Production
              </p>
              <p style={{
                ...LABEL,
                fontSize: '10px',
                letterSpacing: '0.3em',
                color: 'rgba(244,239,230,0.7)',
                margin: 0,
              }}>
                NuLab Studio · AI Visual Pipeline
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 — REQUEST STRIP ─────────────────────────────────────── */}
      <section style={{
        background: '#060604',
        borderTop: '1px solid rgba(244,239,230,0.05)',
        padding: 'clamp(56px,7vw,80px) clamp(40px,6vw,80px)',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
          color: 'rgba(244,239,230,0.88)',
          maxWidth: '600px',
          margin: '0 auto 32px',
          lineHeight: 1.8,
        }}>
          Available for production design development, visual bible construction, and location
          reference. Full archive accessible upon professional inquiry.
        </p>
        <a
          href="mailto:DASRbit@protonmail.ch?subject=Visual Bible Request"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '10px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            background: '#C9971F',
            color: '#080705',
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
