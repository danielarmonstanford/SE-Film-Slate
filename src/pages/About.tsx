import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const LABEL: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '0.72rem',
  letterSpacing: '0.55em',
  textTransform: 'uppercase',
  color: '#C9971F',
};

const LABEL_MUTED: React.CSSProperties = {
  ...LABEL,
  color: 'rgba(244,239,230,0.75)',
};

const BTN_BASE: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '11px',
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  padding: '12px 24px',
  textDecoration: 'none',
  display: 'inline-block',
  cursor: 'pointer',
};

const bullets = [
  'Creative Director, Art Director & Executive Producer',
  'Three decades of high-end visual work across commercial, fine art & cinematic development',
  'Cinematic worldbuilding, art department leadership & investment-ready film packaging',
  'Poster systems, pitch decks, visual bibles & investor presentation',
  'Premium fashion, beauty campaigns & strategic brand systems',
  'Luxury aesthetic sensibility shaped by global visual culture',
  'London International Advertising Award · Art Basel Miami',
  "Victoria's Secret SEXY Vol III · Von Unwerth · Russell James",
];

const About = () => {
  useEffect(() => {
    document.title = 'Profile — Daniel Stanford';
  }, []);

  return (
    <div style={{ background: '#080705', color: '#F4EFE6', minHeight: '100vh' }}>

      {/* ── SECTION 1 — HERO ─────────────────────────────────────────────── */}
      <section style={{ position: 'relative', width: '100%', height: '55vh', overflow: 'hidden' }}>
        <img
          src="/D80_9144.jpg"
          alt="Daniel Stanford — Sri Lanka"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', opacity: 1,
          }}
        />
        {/* Minimal bottom fade for text legibility only */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '45%',
          background: 'linear-gradient(to top, rgba(8,7,5,0.82), transparent)',
        }} />
        {/* Content */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '0 60px 36px 40px' }}>
          <p style={{ ...LABEL, marginBottom: '12px' }}>Executive Producer · Art Department</p>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(3.5rem, 7vw, 8rem)',
            lineHeight: 0.9,
            color: '#F4EFE6',
            margin: '0 0 14px 0',
            textShadow: '0 2px 24px rgba(0,0,0,0.5)',
          }}>
            Profile.
          </h1>
          {/* Photo credit */}
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '10px',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'rgba(244,239,230,0.5)',
          }}>
            Location Sri Lanka · Daniel A Stanford · Spring 2023
          </p>
        </div>
      </section>

      {/* ── SECTION 2 — EXECUTIVE SUMMARY ────────────────────────────────── */}
      <section style={{
        background: '#080705',
        padding: 'clamp(56px,7vw,90px) clamp(40px,6vw,80px)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(220px, 340px) 1fr 1fr',
          gap: '56px',
          maxWidth: '1300px',
          alignItems: 'start',
        }}>

          {/* Col 1 — Portrait (large) */}
          <div style={{ flexShrink: 0 }}>
            <img
              src="/daniel-stanford-portrait.jpg"
              alt="Daniel Armon Stanford"
              style={{
                width: '100%',
                aspectRatio: '3/4',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
              }}
            />
          </div>

          {/* Col 2 — Bio */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: '#F4EFE6',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}>
              Daniel Armon Stanford
            </h2>
            <div style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 300,
              fontSize: 'clamp(1rem, 1.6vw, 1.1rem)',
              lineHeight: 2,
              color: 'rgba(244,239,230,0.85)',
              marginBottom: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              maxWidth: '52ch',
            }}>
              <p>Daniel Stanford is a Creative Director, Art Director, and Executive Producer specializing in cinematic worldbuilding, art department leadership, and investment-ready film packaging. With three decades of high-end visual work spanning commercial advertising, fine art, branded content, architecture, and cinematic development, he builds feature film worlds designed to attract talent, strengthen financing conversations, and translate into real production.</p>
              <p>Stanford's vocabulary is visual — from casting instincts and production design development to poster systems, pitch decks, and investor presentation. His lens is shaped by luxury aesthetic sensibility, multidisciplinary art practice, and studio rigor rooted in design and communication.</p>
              <p>His portfolio includes premium fashion and beauty campaigns, strategic brand systems, immersive visual worlds, and collaborative story development across global markets. He bridges fine art sensibility with commercial storytelling — applying craft honed through fashion, gallery systems, and international visual culture.</p>
              <p>At Stanford Emporium — Film Slate, he develops projects that synthesize narrative vision with market intelligence, actively engaging collaborators, co-producers, and investors to bring them to life.</p>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                to="/investor-inquiry"
                style={{ ...BTN_BASE, background: '#C9971F', color: '#080705' }}
              >
                Access Investor Materials
              </Link>
              <Link
                to="/investment-opportunities"
                style={{ ...BTN_BASE, border: '1px solid rgba(244,239,230,0.35)', color: 'rgba(244,239,230,0.9)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C9971F';
                  (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(244,239,230,0.35)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,239,230,0.9)';
                }}
              >
                View Film Slate
              </Link>
            </div>
          </div>

          {/* Col 3 — Key Highlights */}
          <div>
            <p style={{ ...LABEL_MUTED, marginBottom: '24px' }}>Key Highlights</p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '14px', marginBottom: '18px', alignItems: 'flex-start' }}>
                  <span style={{
                    width: '2px', minHeight: '18px',
                    background: '#C9971F',
                    flexShrink: 0,
                    marginTop: '5px',
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 300,
                    fontSize: '17px',
                    color: 'rgba(244,239,230,0.95)',
                    lineHeight: 1.6,
                  }}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ── SECTION 3 — PUBLISHED WORKS STRIP ───────────────────────────── */}
      <section style={{
        background: '#060604',
        borderTop: '1px solid rgba(244,239,230,0.05)',
        padding: 'clamp(48px,6vw,72px) clamp(40px,6vw,80px)',
      }}>
        <p style={{ ...LABEL, marginBottom: '28px' }}>Published Works</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2px',
        }}>

          {/* Card 1 — Sea of Dunes */}
          <div style={{
            background: '#080705',
            border: '1px solid rgba(244,239,230,0.06)',
            borderLeft: '2px solid rgba(201,151,31,0.3)',
            overflow: 'hidden',
          }}>
            <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
              <img
                src="/sea-of-dunes-cover.jpg"
                alt="Sea of Dunes — Brazil"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{ ...LABEL, color: '#C9971F', marginBottom: '10px' }}>Photography · Brazil</p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.4rem',
                color: '#F4EFE6',
                marginBottom: '8px',
              }}>Sea of Dunes</p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '14px',
                color: 'rgba(244,239,230,0.8)',
                lineHeight: 1.65,
                marginBottom: '16px',
              }}>Large-format photography. La Luna Soul Press.</p>
              <a
                href="https://lalunasoul.co.uk/daniel-stanford/sea-of-dunes/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 300,
                  fontSize: '11px', letterSpacing: '0.25em',
                  textTransform: 'uppercase', color: '#C9971F', textDecoration: 'none',
                }}
              >View Publication →</a>
            </div>
          </div>

          {/* Card 2 — Fascinasia */}
          <div style={{
            background: '#080705',
            border: '1px solid rgba(244,239,230,0.06)',
            borderLeft: '2px solid rgba(201,151,31,0.3)',
            overflow: 'hidden',
          }}>
            <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
              <img
                src="/fascinasia-cover.jpg"
                alt="Fascinasia"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{ ...LABEL_MUTED, marginBottom: '10px' }}>Fine Art · Limited Edition</p>
              <p style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '1.4rem',
                color: '#F4EFE6',
                marginBottom: '8px',
              }}>Fascinasia</p>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 300,
                fontSize: '14px',
                color: 'rgba(244,239,230,0.8)',
                lineHeight: 1.65,
                marginBottom: '16px',
              }}>Published visual art compendium.</p>
              <a
                href="https://payhip.com/DanielArmonStanford"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--font-sans)', fontWeight: 300,
                  fontSize: '11px', letterSpacing: '0.25em',
                  textTransform: 'uppercase', color: '#C9971F', textDecoration: 'none',
                }}
              >Browse Collection →</a>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 4 — PHILOSOPHY + CTA ─────────────────────────────────── */}
      <section style={{
        background: '#080705',
        borderTop: '1px solid rgba(244,239,230,0.05)',
        padding: 'clamp(64px,8vw,100px) clamp(40px,6vw,80px)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontWeight: 300,
            fontStyle: 'italic',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            color: '#F4EFE6',
            lineHeight: 1.3,
            marginBottom: '20px',
          }}>
            "Every space tells a story before a single line of dialogue is spoken."
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 300,
            fontSize: '1.05rem',
            lineHeight: 1.9,
            color: 'rgba(244,239,230,0.82)',
            marginBottom: '40px',
          }}>
            Spatial intelligence, visual authority, and investor-facing discipline — applied to
            every project from first concept to final frame.
          </p>
          <Link
            to="/investor-inquiry"
            style={{ ...BTN_BASE, background: '#C9971F', color: '#080705', padding: '14px 32px' }}
          >
            Access Investor Materials
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
