import React, { useState, useRef, useEffect } from 'react';

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
  {
    num: '08',
    title: 'Brand & Identity Systems',
    desc: 'Every film world requires an internal brand language — title cards, prop signage, in-world logos, packaging, and visual identity systems. Stanford Emporium\'s brand practice is available for Art Department integration on qualifying productions.',
    link: { label: 'Explore Brand Work →', href: 'https://www.stanfordemporium.com' },
    bronze: true,
  },
];

const steps = [
  { num: '01', name: 'Concept' },
  { num: '02', name: 'Visual Bible' },
  { num: '03', name: 'Package' },
  { num: '04', name: 'Attach Talent' },
  { num: '05', name: 'Investor Materials' },
];

const tracks = [
  { name: 'Chariots of Fire',    composer: 'Vangelis',          year: '1981', duration: '3:24' },
  { name: 'The Ecstasy of Gold', composer: 'Ennio Morricone',   year: '1966', duration: '3:02' },
  { name: 'Blade Runner Blues',  composer: 'Vangelis',          year: '1982', duration: '8:51' },
  { name: 'Time',                composer: 'Hans Zimmer',       year: '2010', duration: '4:35' },
  { name: "Gabriel's Oboe",      composer: 'Ennio Morricone',   year: '1986', duration: '3:17' },
  { name: 'Experience',          composer: 'Ludovico Einaudi',  year: '2013', duration: '5:12' },
];

const Work = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeTrack, setActiveTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [openCard, setOpenCard] = useState<number | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVideoReady(true), 1400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.stagger-card');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              (entry.target as HTMLElement).style.opacity = '1';
              (entry.target as HTMLElement).style.transform = 'translateY(0)';
            }, i * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach(card => observer.observe(card));
    return () => observer.disconnect();
  }, []);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const svcWrapRef = useRef<HTMLElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const SERVICES = [
    {
      id: 0,
      num: '01',
      title: 'Film Investment Packaging',
      body: 'Investment-grade visual packages for feature film development. Lookbooks, visual bibles, and pitch decks that close financing conversations.',
      imgs: [
        { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=70', title: 'Cinematic Reference', sub: 'Pitch Visual' },
        { src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=70', title: 'Visual World System', sub: 'Lookbook' },
      ],
    },
    {
      id: 1,
      num: '02',
      title: 'Production Design Leadership',
      body: 'Complete visual world-building from concept through final frame. Set design, colour world, spatial architecture, environment tone systems.',
      imgs: [
        { src: '/D80_9144.jpg', title: 'Hikkaduwa · Sri Lanka', sub: 'Location Reference' },
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=70', title: 'Sea of Dunes · Brazil', sub: 'World Study' },
        { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&q=70', title: 'Set Architecture', sub: 'Environment' },
      ],
    },
    {
      id: 2,
      num: '03',
      title: 'Art Direction & Visual Development',
      body: '25+ years directing talent, image, and atmosphere across global fashion and luxury brands. The same visual intelligence applied to cinema.',
      imgs: [
        { src: '/birth-diptych.jpg', title: 'The Birth', sub: 'Photomontage · Fine Art' },
        { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=70', title: 'Editorial Direction', sub: 'Fashion · Campaign' },
      ],
    },
    {
      id: 3,
      num: '04',
      title: 'Storyboards & Previs',
      body: 'Shot planning, scene visualization, and sequence design. Camera intention communicated before a single frame is captured.',
      imgs: [
        { placeholder: true, label: 'Storyboard panels\ncoming soon' },
        { placeholder: true, label: 'Previs frames\ncoming soon' },
      ],
    },
    {
      id: 4,
      num: '05',
      title: 'Location & World Research',
      body: 'A private archive of large-format photography across five continents — available as location reference and background plate material.',
      imgs: [
        { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=70', title: 'Brazil · Sea of Dunes', sub: 'Desert Futurism' },
        { src: '/D80_9144.jpg', title: 'Hikkaduwa · Sri Lanka', sub: 'Golden Hour' },
        { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&q=70', title: 'Neon Tokyo', sub: 'Japan · Urban' },
        { src: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=500&q=70', title: 'Fascinasia', sub: 'Mythic Surrealism' },
      ],
    },
    {
      id: 5,
      num: '06',
      title: 'Art Department Systems',
      body: 'Department structure, crew direction, interdepartmental workflows, and execution strategy for productions requiring full Art Dept leadership.',
      imgs: [
        { placeholder: true, label: 'Department workflows\ncoming soon' },
      ],
    },
  ];

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>

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
        {/* Still poster */}
        <img
          src="/birth-001-title.jpg"
          alt="The Birth"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: videoReady ? 0 : 0.72,
            filter: 'contrast(1.1)',
            transition: 'opacity 2s ease',
            zIndex: 1,
          }}
        />
        {/* AI video fades in */}
        <video
          autoPlay muted loop playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: videoReady ? 0.68 : 0,
            filter: 'contrast(1.1)',
            transition: 'opacity 2s ease',
            zIndex: 1,
          }}
        >
          <source src="/birth-ai.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '40%',
          background: 'linear-gradient(to bottom, var(--overlay-mid), transparent)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0, left: 0, right: 0,
          height: '60%',
          background: 'linear-gradient(to top, var(--overlay-dark), transparent)',
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
            color: 'var(--text)',
            margin: 0,
          }}>
            Deliver.
          </h1>
        </div>
      </section>

      {/* ── SECTION 1 — PAGE HEADER ───────────────────────────────────────── */}
      <section style={{
        background: 'var(--bg)',
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
          color: 'var(--text)',
          marginBottom: '24px',
        }}>
          Deliver.
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
          Seven core deliverables. No redundancy. Built for productions that require a complete
          creative pipeline — from first visual concept to investor-ready package.
        </p>
      </section>

      {/* ── SERVICE LIST ──────────────────────────────────────────────────── */}
      <section
        ref={svcWrapRef}
        onMouseMove={e => {
          const rect = svcWrapRef.current?.getBoundingClientRect();
          if (rect) setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        style={{
          padding: 'clamp(48px,7vw,80px) clamp(40px,6vw,80px)',
          background: 'var(--bg)',
          borderTop: '1px solid var(--border)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: '0.65rem',
          letterSpacing: '0.55em',
          textTransform: 'uppercase',
          color: 'var(--text-35)',
          marginBottom: '32px',
          display: 'block',
        }}>
          Art Department Deliverables
        </p>

        {/* Floating cursor image */}
        <div style={{
          position: 'absolute',
          width: '220px',
          height: '140px',
          left: cursorPos.x + 24,
          top: cursorPos.y - 70,
          pointerEvents: 'none',
          opacity: activeService ? 0.88 : 0,
          transition: 'opacity 0.35s ease',
          zIndex: 1,
          overflow: 'hidden',
          border: '1px solid var(--border)',
        }}>
          {activeService && (
            <img
              src={activeService}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'contrast(1.1)',
              }}
            />
          )}
        </div>

        {/* Service list */}
        <ul style={{ listStyle: 'none', position: 'relative', zIndex: 2 }}>
          {[
            { num: '01', name: 'Pitch Decks & Packaging',
              img: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=70' },
            { num: '02', name: 'Visual Development & Worldbuilding',
              img: '/D80_9144.jpg' },
            { num: '03', name: 'Production Design Direction',
              img: '/birth-diptych.jpg' },
            { num: '04', name: 'Casting & Talent Packaging',
              img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=70' },
            { num: '05', name: 'Investor Materials & Data Room',
              img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=70' },
            { num: '06', name: 'Art Department Systems & Crew',
              img: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=400&q=70' },
          ].map((svc, i) => (
            <li
              key={i}
              onMouseEnter={() => setActiveService(svc.img)}
              onMouseLeave={() => setActiveService(null)}
              style={{
                padding: '18px 0',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                cursor: 'default',
                transition: 'padding-left 0.3s',
              }}
              onMouseOver={e => (e.currentTarget as HTMLLIElement).style.paddingLeft = '8px'}
              onMouseOut={e => (e.currentTarget as HTMLLIElement).style.paddingLeft = '0'}
            >
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '20px',
                color: activeService === svc.img ? '#CC0000' : 'var(--text-25)',
                minWidth: '36px',
                transition: 'color 0.3s',
              }}>
                {svc.num}
              </span>
              <span style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(18px,3vw,28px)',
                color: activeService === svc.img ? '#FFFFFF' : 'var(--text-72)',
                flex: 1,
                transition: 'color 0.3s, letter-spacing 0.3s',
                letterSpacing: activeService === svc.img ? '0.02em' : '0',
              }}>
                {svc.name}
              </span>
              <span style={{
                fontSize: '12px',
                color: activeService === svc.img ? '#C9971F' : 'var(--text-25)',
                transition: 'color 0.3s, transform 0.3s',
                transform: activeService === svc.img ? 'translateX(4px)' : 'translateX(0)',
              }}>
                →
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ── SECTION 2 — 6 SERVICE CARDS ──────────────────────────────────── */}
      <section style={{
        background: 'var(--surface)',
        padding: '0 clamp(40px,6vw,80px) clamp(64px,8vw,100px)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
        }}>
          {/* Cards 01–03 */}
          {cards.slice(0, 3).map((card, i) => {
            const isBronze = (card as any).bronze;
            const isHov = hovered === i;
            return (
              <div
                key={i}
                className="stagger-card"
                onClick={() => setOpenCard(openCard === i ? null : i)}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: openCard === i ? 'rgba(204,0,0,0.04)' : 'var(--bg)',
                  padding: '32px 28px',
                  border: '1px solid var(--border)',
                  borderTop: isBronze
                    ? `1px solid ${isHov ? 'rgba(201,151,31,0.5)' : 'rgba(201,151,31,0.2)'}`
                    : openCard === i ? '1px solid #CC0000' : isHov ? '1px solid rgba(204,0,0,0.35)' : '1px solid transparent',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, background 0.3s ease',
                  cursor: 'pointer',
                  opacity: 0,
                  transform: 'translateY(14px)',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '26px',
                  color: isBronze ? '#C9971F' : '#CC0000',
                  marginBottom: '12px',
                  lineHeight: 1,
                }}>
                  {card.num}
                </p>
                <p style={{
                  ...LABEL,
                  color: 'var(--text)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  marginBottom: '10px',
                }}>
                  {card.title}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: '9px',
                  lineHeight: 1.8,
                  color: 'var(--text-45)',
                  margin: 0,
                }}>
                  {card.desc}
                </p>
                {(card as any).link && (
                  <a
                    href={(card as any).link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      marginTop: '14px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: '9px',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#C9971F',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F'; }}
                  >
                    {(card as any).link.label}
                  </a>
                )}
                <span style={{
                  display: 'block',
                  marginTop: '12px',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: '10px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: openCard === i ? '#CC0000' : 'var(--text-25)',
                  transition: 'color 0.3s',
                }}>
                  {openCard === i ? '↑ Close' : '→ View gallery'}
                </span>
              </div>
            );
          })}

          {/* Expand panel — row 1 (cards 01–03) */}
          {openCard !== null && openCard <= 2 && (
            <div style={{
              gridColumn: '1 / -1',
              background: 'var(--bg)',
              borderTop: '1px solid var(--border)',
              padding: 'clamp(28px,4vw,40px) clamp(28px,5vw,48px)',
            }}>
              <p style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: '0.6rem',
                letterSpacing: '0.55em',
                textTransform: 'uppercase',
                color: '#CC0000',
                marginBottom: '12px',
              }}>
                {SERVICES[openCard].num} / {SERVICES[openCard].title}
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.2rem,2.5vw,1.8rem)',
                color: 'var(--text)',
                marginBottom: '12px',
                lineHeight: 1.1,
              }}>
                {SERVICES[openCard].title}
              </p>
              <p style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: '0.85rem',
                lineHeight: 1.85,
                color: 'var(--text-45)',
                maxWidth: '560px',
                marginBottom: '24px',
              }}>
                {SERVICES[openCard].body}
              </p>
              <div style={{
                display: 'flex',
                gap: '3px',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                paddingBottom: '4px',
              }}>
                {SERVICES[openCard].imgs.map((img: any, idx: number) => (
                  img.placeholder ? (
                    <div key={idx} style={{
                      flexShrink: 0,
                      width: '200px',
                      aspectRatio: '16/9',
                      background: '#0e0e0c',
                      border: '1px dashed var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                    }}>
                      <p style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 300,
                        fontSize: '9px',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'var(--text-25)',
                        textAlign: 'center',
                        whiteSpace: 'pre-line',
                      }}>
                        {img.label}
                      </p>
                    </div>
                  ) : (
                    <div key={idx} style={{
                      flexShrink: 0,
                      width: '260px',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      background: '#1a1208',
                      position: 'relative',
                    }}>
                      <img
                        src={img.src}
                        alt={img.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.78,
                          filter: 'contrast(1.1)',
                          transition: 'transform 0.7s, opacity 0.4s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'scale(1.04)';
                          e.currentTarget.style.opacity = '0.95';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.opacity = '0.78';
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: 0, left: 0, right: 0,
                        padding: '10px 12px',
                        background: 'linear-gradient(to top, var(--overlay-dark), transparent)',
                      }}>
                        <p style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: 'italic',
                          fontWeight: 300,
                          fontSize: '13px',
                          color: 'var(--text)',
                          marginBottom: '1px',
                        }}>{img.title}</p>
                        <p style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 300,
                          fontSize: '8px',
                          letterSpacing: '0.28em',
                          textTransform: 'uppercase',
                          color: 'var(--text-35)',
                        }}>{img.sub}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
              <a
                href={`mailto:Daniel@StanfordEmporium.com?subject=${encodeURIComponent(SERVICES[openCard].title + ' Inquiry')}`}
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: '10px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--text-35)',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '2px',
                  textDecoration: 'none',
                }}
              >
                Request full portfolio →
              </a>
            </div>
          )}

          {/* Cards 04–06 */}
          {cards.slice(3, 6).map((card, i) => {
            const cardIndex = i + 3;
            const isBronze = (card as any).bronze;
            const isHov = hovered === cardIndex;
            return (
              <div
                key={cardIndex}
                className="stagger-card"
                onClick={() => setOpenCard(openCard === cardIndex ? null : cardIndex)}
                onMouseEnter={() => setHovered(cardIndex)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: openCard === cardIndex ? 'rgba(204,0,0,0.04)' : 'var(--bg)',
                  padding: '32px 28px',
                  border: '1px solid var(--border)',
                  borderTop: isBronze
                    ? `1px solid ${isHov ? 'rgba(201,151,31,0.5)' : 'rgba(201,151,31,0.2)'}`
                    : openCard === cardIndex ? '1px solid #CC0000' : isHov ? '1px solid rgba(204,0,0,0.35)' : '1px solid transparent',
                  transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease, background 0.3s ease',
                  cursor: 'pointer',
                  opacity: 0,
                  transform: 'translateY(14px)',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '26px',
                  color: isBronze ? '#C9971F' : '#CC0000',
                  marginBottom: '12px',
                  lineHeight: 1,
                }}>
                  {card.num}
                </p>
                <p style={{
                  ...LABEL,
                  color: 'var(--text)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  marginBottom: '10px',
                }}>
                  {card.title}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: '9px',
                  lineHeight: 1.8,
                  color: 'var(--text-45)',
                  margin: 0,
                }}>
                  {card.desc}
                </p>
                {(card as any).link && (
                  <a
                    href={(card as any).link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      marginTop: '14px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: '9px',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#C9971F',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F'; }}
                  >
                    {(card as any).link.label}
                  </a>
                )}
                <span style={{
                  display: 'block',
                  marginTop: '12px',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: '10px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: openCard === cardIndex ? '#CC0000' : 'var(--text-25)',
                  transition: 'color 0.3s',
                }}>
                  {openCard === cardIndex ? '↑ Close' : '→ View gallery'}
                </span>
              </div>
            );
          })}

          {/* Expand panel — row 2 (cards 04–06) */}
          {openCard !== null && openCard >= 3 && openCard <= 5 && (
            <div style={{
              gridColumn: '1 / -1',
              background: 'var(--bg)',
              borderTop: '1px solid var(--border)',
              padding: 'clamp(28px,4vw,40px) clamp(28px,5vw,48px)',
            }}>
              <p style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: '0.6rem',
                letterSpacing: '0.55em',
                textTransform: 'uppercase',
                color: '#CC0000',
                marginBottom: '12px',
              }}>
                {SERVICES[openCard].num} / {SERVICES[openCard].title}
              </p>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(1.2rem,2.5vw,1.8rem)',
                color: 'var(--text)',
                marginBottom: '12px',
                lineHeight: 1.1,
              }}>
                {SERVICES[openCard].title}
              </p>
              <p style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: '0.85rem',
                lineHeight: 1.85,
                color: 'var(--text-45)',
                maxWidth: '560px',
                marginBottom: '24px',
              }}>
                {SERVICES[openCard].body}
              </p>
              <div style={{
                display: 'flex',
                gap: '3px',
                overflowX: 'auto',
                scrollbarWidth: 'none',
                paddingBottom: '4px',
              }}>
                {SERVICES[openCard].imgs.map((img: any, idx: number) => (
                  img.placeholder ? (
                    <div key={idx} style={{
                      flexShrink: 0,
                      width: '200px',
                      aspectRatio: '16/9',
                      background: '#0e0e0c',
                      border: '1px dashed var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px',
                    }}>
                      <p style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 300,
                        fontSize: '9px',
                        letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                        color: 'var(--text-25)',
                        textAlign: 'center',
                        whiteSpace: 'pre-line',
                      }}>
                        {img.label}
                      </p>
                    </div>
                  ) : (
                    <div key={idx} style={{
                      flexShrink: 0,
                      width: '260px',
                      aspectRatio: '16/9',
                      overflow: 'hidden',
                      background: '#1a1208',
                      position: 'relative',
                    }}>
                      <img
                        src={img.src}
                        alt={img.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          opacity: 0.78,
                          filter: 'contrast(1.1)',
                          transition: 'transform 0.7s, opacity 0.4s',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = 'scale(1.04)';
                          e.currentTarget.style.opacity = '0.95';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.opacity = '0.78';
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        bottom: 0, left: 0, right: 0,
                        padding: '10px 12px',
                        background: 'linear-gradient(to top, var(--overlay-dark), transparent)',
                      }}>
                        <p style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontStyle: 'italic',
                          fontWeight: 300,
                          fontSize: '13px',
                          color: 'var(--text)',
                          marginBottom: '1px',
                        }}>{img.title}</p>
                        <p style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 300,
                          fontSize: '8px',
                          letterSpacing: '0.28em',
                          textTransform: 'uppercase',
                          color: 'var(--text-35)',
                        }}>{img.sub}</p>
                      </div>
                    </div>
                  )
                ))}
              </div>
              <a
                href={`mailto:Daniel@StanfordEmporium.com?subject=${encodeURIComponent(SERVICES[openCard].title + ' Inquiry')}`}
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: '10px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--text-35)',
                  borderBottom: '1px solid var(--border)',
                  paddingBottom: '2px',
                  textDecoration: 'none',
                }}
              >
                Request full portfolio →
              </a>
            </div>
          )}

          {/* Cards 07–08 from array (LED Volume, Brand & Identity) — unchanged */}
          {cards.slice(6).map((card, i) => {
            const cardIndex = i + 6;
            const isBronze = (card as any).bronze;
            const isHov = hovered === cardIndex;
            return (
              <div
                key={cardIndex}
                className="stagger-card"
                onMouseEnter={() => setHovered(cardIndex)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: 'var(--bg)',
                  padding: '32px 28px',
                  border: '1px solid var(--border)',
                  borderTop: isBronze
                    ? `1px solid ${isHov ? 'rgba(201,151,31,0.5)' : 'rgba(201,151,31,0.2)'}`
                    : `1px solid ${isHov ? 'rgba(204,0,0,0.35)' : 'transparent'}`,
                  transition: 'opacity 0.5s ease, transform 0.5s ease, border-color 0.3s ease',
                  cursor: 'default',
                  opacity: 0,
                  transform: 'translateY(14px)',
                }}
              >
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '26px',
                  color: isBronze ? '#C9971F' : '#CC0000',
                  marginBottom: '12px',
                  lineHeight: 1,
                }}>
                  {card.num}
                </p>
                <p style={{
                  ...LABEL,
                  color: 'var(--text)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  marginBottom: '10px',
                }}>
                  {card.title}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 300,
                  fontSize: '9px',
                  lineHeight: 1.8,
                  color: 'var(--text-45)',
                  margin: 0,
                }}>
                  {card.desc}
                </p>
                {(card as any).link && (
                  <a
                    href={(card as any).link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      marginTop: '14px',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 300,
                      fontSize: '9px',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                      color: '#C9971F',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F'; }}
                  >
                    {(card as any).link.label}
                  </a>
                )}
              </div>
            );
          })}

          {/* Card 07 — P&A */}
          <div
            className="stagger-card"
            style={{
              background: 'var(--bg)',
              padding: '32px 28px',
              border: '1px solid var(--border)',
              borderTop: '1px solid rgba(201,151,31,0.2)',
              transition: 'opacity 0.5s ease, transform 0.5s ease, border-top-color 0.3s ease',
              cursor: 'pointer',
              opacity: 0,
              transform: 'translateY(14px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderTopColor = 'rgba(201,151,31,0.5)')}
            onMouseLeave={e => (e.currentTarget.style.borderTopColor = 'rgba(201,151,31,0.2)')}
          >
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '22px', color: '#C9971F', marginBottom: '12px', lineHeight: 1 }}>07</p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '10px' }}>P&amp;A · Poster Design &amp; Marketing</p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '9px', lineHeight: 1.8, color: 'var(--text-45)', margin: 0 }}>
              Key art, theatrical poster concepts, campaign photography direction, one-sheets. Film marketing from initial concept to final print-ready delivery.
            </p>
            <span style={{ fontSize: '9px', color: 'rgba(201,151,31,0.35)', marginTop: '12px', display: 'block' }}>→ View gallery</span>
          </div>

          {/* Card 08 — VFX */}
          <div
            className="stagger-card"
            style={{
              gridColumn: '1 / -1',
              background: 'var(--bg)',
              padding: '32px 28px',
              border: '1px solid var(--border)',
              borderTop: '1px solid transparent',
              transition: 'opacity 0.5s ease, transform 0.5s ease, border-top-color 0.3s ease',
              cursor: 'pointer',
              opacity: 0,
              transform: 'translateY(14px)',
            }}
            onMouseEnter={e => (e.currentTarget.style.borderTopColor = 'rgba(204,0,0,0.35)')}
            onMouseLeave={e => (e.currentTarget.style.borderTopColor = 'transparent')}
          >
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '22px', color: 'var(--text-45)', marginBottom: '12px', lineHeight: 1 }}>08</p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '10px' }}>VFX / Special Effects Consultation</p>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '9px', lineHeight: 1.8, color: 'var(--text-45)', margin: 0 }}>
              Post-production consultation, compositing strategy, digital effects, and practical integration. Available through NuLab Audio Visual Intelligence — AI-visual pipeline for qualifying productions.
            </p>
            <span style={{ fontSize: '9px', color: 'var(--text-25)', marginTop: '12px', display: 'block' }}>→ View gallery</span>
          </div>

          {/* Card 09 — NuLab full-width */}
          <div
            style={{
              gridColumn: '1 / -1',
              background: '#0a0a08',
              borderTop: '1px solid rgba(201,151,31,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '28px',
              padding: '32px 32px',
              position: 'relative',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'background 0.3s, border-color 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#0d0d0b';
              e.currentTarget.style.borderTopColor = 'rgba(201,151,31,0.4)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#0a0a08';
              e.currentTarget.style.borderTopColor = 'rgba(201,151,31,0.12)';
            }}
          >
            {/* Subtle grid texture */}
            <div style={{
              position: 'absolute',
              inset: 0,
              pointerEvents: 'none',
              backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 28px,rgba(201,151,31,0.04) 28px,rgba(201,151,31,0.04) 29px), repeating-linear-gradient(90deg,transparent,transparent 28px,rgba(201,151,31,0.04) 28px,rgba(201,151,31,0.04) 29px)',
            }} />

            {/* Left content */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '22px', color: '#C9971F', marginBottom: '10px' }}>
                09
              </div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '13px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C9971F', flexShrink: 0, animation: 'pulse 2s ease-in-out infinite' }} />
                NuLab Audio Visual Intelligence
              </div>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '10px', lineHeight: 1.85, color: 'var(--text-35)', maxWidth: '500px', marginBottom: '16px' }}>
                A creative laboratory at the intersection of sound, image, and emerging technology. AI-visual pipeline, spatial audio, digital collection art, and frequency-based environment work — available for qualifying productions.
              </p>
              <a
                href="https://nulab.space"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9971F', borderBottom: '1px solid rgba(201,151,31,0.25)', paddingBottom: '1px', textDecoration: 'none' }}
              >
                Explore NuLab → nulab.space
              </a>
            </div>

            {/* Right label */}
            <div style={{ flexShrink: 0, textAlign: 'right', position: 'relative', zIndex: 1 }}>
              <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '9px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(201,151,31,0.4)', display: 'block', marginBottom: '8px' }}>
                Co-Founded · Active
              </span>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '16px', color: 'var(--text-25)' }}>
                nulab.space
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── DRAG GALLERY ──────────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(48px,7vw,80px) 0 clamp(48px,7vw,80px) clamp(40px,6vw,80px)',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}>
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: '0.65rem',
          letterSpacing: '0.55em',
          textTransform: 'uppercase',
          color: 'var(--text-35)',
          marginBottom: '28px',
          paddingRight: 'clamp(40px,6vw,80px)',
          display: 'block',
        }}>
          Visual Reference · Production Archive
        </p>

        <div
          ref={galleryRef}
          onMouseDown={e => {
            isDragging.current = true;
            startX.current = e.pageX - galleryRef.current!.offsetLeft;
            scrollLeft.current = galleryRef.current!.scrollLeft;
            galleryRef.current!.style.cursor = 'grabbing';
          }}
          onMouseLeave={() => {
            isDragging.current = false;
            if (galleryRef.current) galleryRef.current.style.cursor = 'grab';
          }}
          onMouseUp={() => {
            isDragging.current = false;
            if (galleryRef.current) galleryRef.current.style.cursor = 'grab';
          }}
          onMouseMove={e => {
            if (!isDragging.current) return;
            e.preventDefault();
            const x = e.pageX - galleryRef.current!.offsetLeft;
            galleryRef.current!.scrollLeft = scrollLeft.current - (x - startX.current) * 1.2;
          }}
          style={{
            display: 'flex',
            gap: '3px',
            overflowX: 'auto',
            cursor: 'grab',
            scrollbarWidth: 'none',
            paddingBottom: '4px',
            scrollBehavior: 'smooth',
          }}
        >
          {[
            { src: '/D80_9144.jpg',
              title: 'Hikkaduwa · Sri Lanka',
              sub: 'Location Reference · Environmental' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=70',
              title: 'Sea of Dunes · Brazil',
              sub: 'Matte Painting Reference' },
            { src: '/birth-diptych.jpg',
              title: 'The Birth',
              sub: 'Photomontage · Fine Art' },
            { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=700&q=70',
              title: 'Cinematic Environment',
              sub: 'Production Design' },
            { src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=70',
              title: 'Neon Tokyo',
              sub: 'Location · Cyber Noir' },
            { src: 'https://images.unsplash.com/photo-1545665277-5937489579f2?w=700&q=70',
              title: 'Fascinasia',
              sub: 'Concept World · Mythic' },
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=700&q=70',
              title: 'Practical Lighting',
              sub: 'Art Direction' },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: '300px',
                aspectRatio: '16/9',
                position: 'relative',
                overflow: 'hidden',
                background: '#1a1208',
              }}
            >
              <img
                src={item.src}
                alt={item.title}
                draggable={false}
                referrerPolicy="no-referrer"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.72,
                  filter: 'contrast(1.1)',
                  transition: 'opacity 0.5s, transform 0.8s',
                  pointerEvents: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '0.92';
                  e.currentTarget.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '0.72';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '12px 14px',
                background: 'linear-gradient(to top, var(--overlay-dark), transparent)',
                pointerEvents: 'none',
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: '14px',
                  color: 'var(--text)',
                  marginBottom: '2px',
                }}>
                  {item.title}
                </p>
                <p style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: '9px',
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--text-35)',
                }}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: '9px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          color: 'var(--text-25)',
          paddingRight: 'clamp(40px,6vw,80px)',
          marginTop: '12px',
          textAlign: 'right',
        }}>
          ← drag to explore →
        </p>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(56px,7vw,80px) clamp(40px,6vw,80px)',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg)',
      }}>
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: '0.65rem',
          letterSpacing: '0.55em',
          textTransform: 'uppercase',
          color: 'var(--text-35)',
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
            background: 'linear-gradient(to top, var(--overlay-dark), transparent)',
          }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '1.1rem',
              color: 'var(--text)',
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
                background: 'linear-gradient(to top, var(--overlay-dark), transparent)',
              }}>
                <p style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.6rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--text-45)',
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
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
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
                  color: 'var(--text-25)',
                  marginBottom: '6px',
                }}>
                  {step.num}
                </p>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  color: 'var(--text)',
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
            href="mailto:Daniel@StanfordEmporium.com?subject=Production Design Inquiry"
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

      {/* ── SOUNDTRACK INTELLIGENCE ───────────────────────────────────────── */}
      <section style={{
        padding: 'clamp(48px,7vw,80px) clamp(40px,6vw,80px)',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '56px',
          alignItems: 'start',
        }}>
          {/* Left — context */}
          <div>
            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: '0.65rem',
              letterSpacing: '0.55em',
              textTransform: 'uppercase',
              color: '#CC0000',
              marginBottom: '16px',
            }}>
              Soundtrack Intelligence
            </p>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(1.6rem,3vw,2.4rem)',
              color: 'var(--text)',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}>
              Score selection is a production design decision.
            </h3>
            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: '0.85rem',
              lineHeight: 1.85,
              color: 'var(--text-45)',
              marginBottom: '24px',
            }}>
              Collecting original motion picture scores since childhood —
              Vangelis, Morricone, Zimmer, Einaudi. The same spatial
              intelligence that governs set design governs score selection.
              Atmosphere is not decoration. It is architecture.
            </p>
            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: '0.65rem',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--text-25)',
              fontStyle: 'italic',
            }}>
              Ambient score active on this site — toggle via sound control →
            </p>
          </div>

          {/* Right — track list */}
          <div style={{
            background: '#0e0e0c',
            border: '1px solid var(--border)',
            padding: '24px',
          }}>
            <div style={{
              fontSize: '9px',
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#CC0000',
              marginBottom: '4px',
            }}>
              Score Reference
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: '18px',
              color: 'var(--text)',
              marginBottom: '4px',
            }}>
              {tracks[activeTrack].name}
            </div>
            <div style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: '10px',
              letterSpacing: '0.15em',
              color: 'var(--text-35)',
              marginBottom: '20px',
            }}>
              {tracks[activeTrack].composer} · {tracks[activeTrack].year}
            </div>

            {/* Progress bar decorative */}
            <div style={{
              width: '100%',
              height: '1px',
              background: 'var(--border)',
              marginBottom: '16px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '-3px',
                left: '35%',
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#C9971F',
              }} />
              <div style={{
                width: '35%',
                height: '100%',
                background: '#C9971F',
              }} />
            </div>

            {/* Controls */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              marginBottom: '20px',
            }}>
              <button
                onClick={() => setActiveTrack(t => t === 0 ? tracks.length - 1 : t - 1)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-35)',
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '12px',
                }}>⟨⟨</button>
              <button
                onClick={() => setIsPlaying(p => !p)}
                style={{
                  width: '34px', height: '34px',
                  borderRadius: '50%',
                  border: '1px solid var(--text-25)',
                  background: 'none',
                  cursor: 'pointer',
                  color: 'var(--text)',
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#CC0000')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--text-25)')}
              >
                {isPlaying ? '▐▐' : '▶'}
              </button>
              <button
                onClick={() => setActiveTrack(t => (t + 1) % tracks.length)}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: 'var(--text-35)',
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: '12px',
                }}>⟩⟩</button>
            </div>

            {/* Track list */}
            <div style={{ borderTop: '1px solid var(--border)' }}>
              {tracks.map((track, i) => (
                <div
                  key={i}
                  onClick={() => setActiveTrack(i)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '9px 0',
                    borderBottom: '1px solid var(--border)',
                    cursor: 'pointer',
                  }}
                >
                  <span style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: '9px',
                    color: 'var(--text-25)',
                    minWidth: '16px',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: 'italic',
                    fontWeight: 300,
                    fontSize: '13px',
                    color: i === activeTrack ? '#C9971F' : 'var(--text-45)',
                    flex: 1,
                    transition: 'color 0.2s',
                  }}>
                    {track.name}
                  </span>
                  <span style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: '9px',
                    color: 'var(--text-25)',
                    marginRight: '8px',
                  }}>
                    {track.composer}
                  </span>
                  <span style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: '9px',
                    color: 'var(--text-25)',
                  }}>
                    {track.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Work;
