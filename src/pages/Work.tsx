import React, { useState } from 'react';

const LABEL: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '0.65rem',
  letterSpacing: '0.55em',
  textTransform: 'uppercase',
};

const cards = [
  {
    num: '01',
    title: 'Film Investment Packaging',
    desc: 'Custom pitch decks, lookbooks, visual bibles, investor narrative design.',
  },
  {
    num: '02',
    title: 'Production Design Leadership',
    desc: 'Environment logic, set language, cinematic material design.',
  },
  {
    num: '03',
    title: 'Art Direction & Visual Development',
    desc: 'Visual language, mood systems, style frames, cinematic consistency.',
  },
  {
    num: '04',
    title: 'Storyboards & Previs',
    desc: 'Sequence visualization, camera planning, narrative flow.',
  },
  {
    num: '05',
    title: 'Location & World Research',
    desc: 'A cinematic environment library used for production design and visual bible development.',
  },
  {
    num: '06',
    title: 'Art Department Systems',
    desc: 'Crew direction frameworks, department structure, workflows, visual continuity systems.',
  },
  {
    num: '07',
    title: 'LED Volume & Virtual Production',
    desc: 'LED Volume integration and AI-visual pipeline via NuLab Audio Visual Intelligence. Turnkey virtual production oversight for features, pilots, and branded content.',
  },
];

const steps = [
  { num: '01', name: 'Concept' },
  { num: '02', name: 'Visual Bible' },
  { num: '03', name: 'Package' },
  { num: '04', name: 'Attach Talent' },
  { num: '05', name: 'Investor Materials' },
];

const Work = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ background: '#080705', color: '#F4EFE6', minHeight: '100vh' }}>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        minHeight: '420px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}>
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80"
          alt="Production Design — Deliver"
          referrerPolicy="no-referrer"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.65,
            filter: 'contrast(1.1)',
          }}
        />
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '40%',
          background: 'linear-gradient(to bottom, rgba(8,7,5,0.7), transparent)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '60%',
          background: 'linear-gradient(to top, rgba(8,7,5,0.97), transparent)',
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 clamp(40px,6vw,80px) clamp(40px,5vw,60px)',
        }}>
          <p style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            fontSize: '0.65rem',
            letterSpacing: '0.55em',
            textTransform: 'uppercase',
            color: '#CC0000',
            marginBottom: '12px',
          }}>
            Art Department Deliverables
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(3.5rem,7vw,7rem)',
            lineHeight: 0.9,
            color: '#F4EFE6',
            margin: 0,
          }}>
            Deliver.
          </h1>
        </div>
      </section>

      {/* ── SECTION 1 — PAGE HEADER ───────────────────────────────────────── */}
      <section style={{
        background: '#080705',
        padding: 'clamp(120px,12vw,160px) clamp(40px,6vw,80px) clamp(48px,6vw,72px)',
      }}>
        <p style={{ ...LABEL, color: '#CC0000', marginBottom: '16px' }}>
          Studio Deliverables
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
          Deliver.
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
          Seven core deliverables. No redundancy. Built for productions that require a complete
          creative pipeline — from first visual concept to investor-ready package.
        </p>
      </section>

      {/* ── SECTION 2 — 6 SERVICE CARDS ──────────────────────────────────── */}
      <section style={{
        background: 'rgba(244,239,230,0.05)',
        padding: '0 clamp(40px,6vw,80px) clamp(64px,8vw,100px)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
        }}>
          {cards.map((card, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: '#080705',
                padding: '32px 28px',
                borderTop: hovered === i
                  ? '1px solid rgba(204,0,0,0.35)'
                  : '1px solid transparent',
                transition: 'border-color 0.3s ease',
                cursor: 'default',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '26px',
                color: '#CC0000',
                marginBottom: '12px',
                lineHeight: 1,
              }}>
                {card.num}
              </p>
              <p style={{
                ...LABEL,
                color: '#F4EFE6',
                fontSize: '12px',
                letterSpacing: '0.15em',
                marginBottom: '10px',
              }}>
                {card.title}
              </p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '13px',
                lineHeight: 1.8,
                color: 'rgba(244,239,230,0.82)',
                margin: 0,
              }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(56px,7vw,80px) clamp(40px,6vw,80px)',
        borderTop: '1px solid rgba(244,239,230,0.05)',
        background: '#060604',
      }}>
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: '0.65rem',
          letterSpacing: '0.55em',
          textTransform: 'uppercase',
          color: 'rgba(244,239,230,0.35)',
          marginBottom: '32px',
          display: 'block',
        }}>
          Visual Reference · Selected Work
        </p>

        {/* Large featured image — 16:9 */}
        <div style={{
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
          background: '#1a1208',
          marginBottom: '2px',
          position: 'relative',
        }}>
          <img
            src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80"
            alt="Production Design Reference"
            referrerPolicy="no-referrer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.75,
              filter: 'contrast(1.1)',
              transition: 'transform 0.8s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            padding: '24px 28px',
            background: 'linear-gradient(to top, rgba(8,7,5,0.85), transparent)',
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: '#F4EFE6',
              margin: 0,
            }}>
              Atmosphere &amp; Cinematic Environment
            </p>
          </div>
        </div>

        {/* 3-image second row — each 16:9 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
        }}>
          {[
            { src: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=70', label: 'Set Architecture' },
            { src: '/birth-diptych.jpg', label: 'Photomontage · Fine Art' },
            { src: '/D80_9144.jpg', label: 'Location Reference · Sri Lanka' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                aspectRatio: '16/9',
                overflow: 'hidden',
                background: '#1a1208',
                position: 'relative',
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                referrerPolicy="no-referrer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.7,
                  filter: 'contrast(1.1)',
                  transition: 'transform 0.7s ease, opacity 0.5s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.04)';
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.opacity = '0.7';
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '12px 16px',
                background: 'linear-gradient(to top, rgba(8,7,5,0.85), transparent)',
              }}>
                <p style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'rgba(244,239,230,0.55)',
                  margin: 0,
                }}>
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3 — HOW I WORK STRIP ─────────────────────────────────── */}
      <section style={{
        background: '#060604',
        borderTop: '1px solid rgba(244,239,230,0.05)',
        padding: 'clamp(56px,7vw,80px) clamp(40px,6vw,80px)',
      }}>
        <p style={{ ...LABEL, color: '#C9971F', marginBottom: '32px' }}>The Pipeline</p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0,
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}>
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div style={{ padding: '16px 24px', textAlign: 'center' }}>
                <p style={{
                  ...LABEL,
                  color: 'rgba(244,239,230,0.25)',
                  marginBottom: '6px',
                }}>
                  {step.num}
                </p>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: '#F4EFE6',
                  margin: 0,
                }}>
                  {step.name}
                </p>
              </div>
              {i < steps.length - 1 && (
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: '14px',
                  color: '#CC0000',
                  opacity: 0.4,
                  padding: '0 4px',
                }}>
                  →
                </span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href="mailto:studio@stanfordemporium.com?subject=Production Design Inquiry"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: '10px',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: '#CC0000',
              textDecoration: 'none',
              marginTop: '32px',
              display: 'inline-block',
            }}
          >
            Discuss a Production →
          </a>
        </div>
      </section>

    </div>
  );
};

export default Work;
