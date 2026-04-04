import React from 'react';
import { Link } from 'react-router-dom';

if (typeof document !== 'undefined') {
  document.title = 'Visual Development · Daniel Stanford';
}

const capabilities = [
  { num: '01', title: 'Production Design', desc: 'Set design, colour world, spatial architecture, period authenticity.' },
  { num: '02', title: 'Art Direction', desc: 'On-set execution, department management, visual consistency across every frame.' },
  { num: '03', title: 'Pre-Visualization', desc: 'AI-assisted concept development, mood board systems, storyboard direction.' },
  { num: '04', title: 'Virtual Production', desc: 'LED Volume art department integration. Unreal Engine. NuLab pipeline.' },
  { num: '05', title: 'Casting & Ensemble', desc: 'Character-to-environment visual coherence. Instinctive eye for talent.' },
  { num: '06', title: 'NuLab Audio Visual', desc: 'Co-founder. AI-visual intelligence for VFX and special effects.' },
];

const moodBoard = [
  { src: '/ref-scifi-woman.jpg',    label: 'Sci-Fi Feminine',      sub: 'Character · Costume Reference' },
  { src: '/ref-speedboat-night.jpg', label: 'Night Operations',     sub: 'Location · Atmosphere Reference' },
  { src: '/ref-scifi-desert.jpg',   label: 'Desert Environment',   sub: 'Set Design · Colour World' },
  { src: '/ref-rooftop-pool.jpg',   label: 'Urban Vertical',       sub: 'Architecture · Production Design' },
  { src: '/ref-underwater.jpg',     label: 'Underwater World',     sub: 'Visual Development · VFX Reference' },
  { src: '/birth-diptych.jpg',      label: 'The Birth · Diptych',  sub: 'Fine Art · Photomontage' },
];

const VisualDevelopment = () => {
  return (
    <div className="bg-[#131313] pt-32">

      {/* SECTION 01 — HERO */}
      <section id="hero" className="relative mb-0 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/visual-dev-hero.jpg)' }} />
        <div className="absolute inset-0 bg-[rgba(8,7,5,0.65)]" />
        <div className="relative px-6 max-w-[1800px] mx-auto py-32">
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '24px' }}>
            01 · Art Direction · Production Design · Visual Worlds
          </p>
          <h1 style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', color: '#e5e2e1', lineHeight: 1, marginBottom: '24px' }}>
            Worlds.
          </h1>
          <p style={{ maxWidth: '620px', fontSize: 'clamp(0.9rem,2vw,1.05rem)', lineHeight: '1.9', color: 'rgba(229,226,225,0.75)', marginBottom: '40px' }}>
            Production Design is the architecture of belief. Thirty years directing visual environments — from Guess campaigns in Morocco to feature film pre-visualization — has produced a visual language that operates at cinematic scale.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#capabilities" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e5e2e1', border: '1px solid rgba(229,226,225,0.3)', padding: '12px 28px', textDecoration: 'none', transition: 'border-color 300ms, color 300ms' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#CC0000'; (e.currentTarget as HTMLAnchorElement).style.color = '#CC0000'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(229,226,225,0.3)'; (e.currentTarget as HTMLAnchorElement).style.color = '#e5e2e1'; }}>
              View Capabilities ↓
            </a>
            <Link to="/slate" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#131313', background: '#CC0000', padding: '12px 28px', textDecoration: 'none', transition: 'background 300ms' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#930000')}
              onMouseLeave={e => (e.currentTarget.style.background = '#CC0000')}>
              View Film Slate →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION NAV STRIP */}
      <div style={{ background: '#0d0d0d', borderTop: '1px solid rgba(229,226,225,0.06)', borderBottom: '1px solid rgba(229,226,225,0.06)', padding: '0 24px', overflowX: 'auto' }}>
        <div style={{ display: 'flex', gap: '0', maxWidth: '1800px', margin: '0 auto' }}>
          {[
            { label: '02 · Capabilities',        href: '#capabilities' },
            { label: '03 · Virtual Production',  href: '#technology' },
            { label: '04 · Visual Reference',    href: '#reference' },
            { label: '05 · The Birth Series',    href: '#birth' },
            { label: '06 · Fine Art',            href: '#fineart' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              style={{ fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(229,226,225,0.4)', padding: '16px 24px', textDecoration: 'none', whiteSpace: 'nowrap', borderRight: '1px solid rgba(229,226,225,0.06)', transition: 'color 300ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#CC0000')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,226,225,0.4)')}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* SECTION 02 — CAPABILITIES */}
      <section id="capabilities" className="px-6 max-w-[1800px] mx-auto" style={{ paddingTop: 'clamp(60px,8vw,100px)', paddingBottom: 'clamp(60px,8vw,100px)' }}>
        <div style={{ borderTop: '1px solid rgba(244,239,230,0.1)', paddingTop: '48px' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '8px' }}>02 · Capabilities</p>
          <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#e5e2e1', marginBottom: '48px', lineHeight: 1.2 }}>
            Full Production Design Suite
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1px', background: 'rgba(244,239,230,0.08)' }}>
            {capabilities.map((cap) => (
              <div key={cap.num} style={{ background: '#1c1b1b', padding: '32px' }}>
                <div style={{ fontFamily: "'Noto Serif', serif", fontStyle: 'italic', fontSize: '1.4rem', color: '#CC0000', marginBottom: '12px' }}>{cap.num}</div>
                <h4 style={{ fontSize: '1rem', fontWeight: 300, color: '#e5e2e1', marginBottom: '10px' }}>{cap.title}</h4>
                <p style={{ fontSize: '0.72rem', color: 'rgba(229,226,225,0.5)', lineHeight: 1.75 }}>{cap.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px' }}>
            <Link to="/disciplines" style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#CC0000', textDecoration: 'none', borderBottom: '1px solid rgba(204,0,0,0.3)', paddingBottom: '2px', transition: 'border-color 300ms' }}>
              Full Services List →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 03 — VIRTUAL PRODUCTION */}
      <section id="technology" style={{ background: '#0d0d0d', padding: 'clamp(60px,8vw,100px) 24px' }}>
        <div style={{ maxWidth: '1800px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '8px' }}>03 · Technology</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px' }}>
            <div style={{ maxWidth: '780px' }}>
              <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, fontStyle: 'italic', color: '#e5e2e1', marginBottom: '20px', lineHeight: 1.2 }}>
                The LED Volume &amp; Virtual Production
              </h2>
              <p style={{ fontSize: '0.82rem', color: 'rgba(229,226,225,0.7)', lineHeight: 1.9, marginBottom: '32px' }}>
                For productions like <strong style={{ color: '#e5e2e1', fontWeight: 400 }}>400XY</strong> spanning three countries, LED Volume virtual production reduces location costs by up to 60% while maintaining full cinematic scope. NuLab provides the AI-visual pipeline for real-time environment integration.
              </p>
            </div>
            <div style={{ position: 'relative', width: '100%', paddingTop: '56.25%' }}>
              <iframe
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                src="https://www.youtube.com/embed/gUnxzVOs3rk"
                title="The LED Volume & Virtual Production"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div>
              <a href="https://nulab.space" target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#CC0000', textDecoration: 'none', borderBottom: '1px solid rgba(204,0,0,0.3)', paddingBottom: '2px' }}>
                NuLab Audio Visual Intelligence →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — VISUAL REFERENCE */}
      <section id="reference" className="px-6 max-w-[1800px] mx-auto" style={{ paddingTop: 'clamp(60px,8vw,100px)', paddingBottom: 'clamp(40px,6vw,80px)' }}>
        <div style={{ borderTop: '1px solid rgba(244,239,230,0.1)', paddingTop: '48px' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '8px' }}>04 · Visual Reference</p>
          <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#e5e2e1', marginBottom: '12px', lineHeight: 1.2 }}>
            Mood Board &amp; Reference Archive
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'rgba(229,226,225,0.45)', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.8 }}>
            Thirty years of reference photography, concept art, and location documentation. Hover each image for context.
          </p>

          {/* SEA OF DUNES VIDEO */}
          <div style={{ marginBottom: '48px', padding: '32px', background: '#1c1b1b', borderLeft: '2px solid rgba(204,0,0,0.3)' }}>
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '8px' }}>
              Feature · Sea of Dunes · Brazil · 2024
            </p>
            <h3 style={{ fontFamily: "'Noto Serif', serif", fontStyle: 'italic', fontSize: '1.4rem', color: '#e5e2e1', fontWeight: 300, marginBottom: '12px' }}>
              Environmental Worldbuilding Study
            </h3>
            <p style={{ fontSize: '0.78rem', color: 'rgba(229,226,225,0.6)', lineHeight: 1.9, maxWidth: '600px', marginBottom: '24px' }}>
              A cinematic study of the Brazilian dune landscape as production design environment — scale, light, texture, and atmosphere documented as location reference and background plate material.
            </p>
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src="https://player.vimeo.com/video/1179698917?byline=0&title=0&portrait=0&color=CC0000"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Sea of Dunes — Environmental Worldbuilding Study"
              />
            </div>
          </div>

          {/* MOOD BOARD GRID */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1px', background: 'rgba(244,239,230,0.08)' }}>
            {moodBoard.map((item, i) => (
              <div key={i} style={{ background: '#131313', overflow: 'hidden', position: 'relative' }}
                className="group">
                <div style={{ aspectRatio: i === 5 ? '16/9' : '4/3', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.src}
                    alt={item.label}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 700ms, filter 700ms', filter: i === 5 ? 'none' : 'grayscale(100%)' }}
                    className="group-hover:scale-105"
                    onMouseEnter={e => { if (i !== 5) (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)'; }}
                    onMouseLeave={e => { if (i !== 5) (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%)'; }}
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 14px 12px', background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)', opacity: 0, transition: 'opacity 400ms' }}
                    className="group-hover:opacity-100">
                    <p style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#e5e2e1', marginBottom: '3px' }}>{item.label}</p>
                    <p style={{ fontSize: '0.52rem', letterSpacing: '0.1em', color: 'rgba(229,226,225,0.5)' }}>{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — THE BIRTH SERIES */}
      <section id="birth" style={{ background: '#000', padding: 'clamp(60px,8vw,100px) 24px' }}>
        <div style={{ maxWidth: '1800px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '8px' }}>
            05 · Fine Art Series
          </p>
          <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, color: '#e5e2e1', marginBottom: '8px', lineHeight: 1.2 }}>
            The Birth · <em style={{ color: '#CC0000' }}>La Naissance</em>
          </h2>
          <p style={{ fontSize: '0.72rem', color: 'rgba(229,226,225,0.35)', letterSpacing: '0.08em', marginBottom: '40px' }}>
            Concept Direction &amp; Photomontage — Daniel Armon Stanford
          </p>
          <p style={{ fontSize: '0.82rem', color: 'rgba(229,226,225,0.6)', lineHeight: 1.9, maxWidth: '620px', marginBottom: '40px' }}>
            A four-part fine art photomontage series exploring emergence, transformation, and the construction of impossible imagery from photographic elements. Shown as a sequential progression from concept to completed work.
          </p>

          {/* HORIZONTAL SCROLL STRIP */}
          <div style={{ overflowX: 'auto', display: 'flex', gap: '2px', background: '#111', scrollbarWidth: 'none', marginLeft: '-24px', marginRight: '-24px', paddingLeft: '24px', paddingRight: '24px' }}
            className="[&::-webkit-scrollbar]:hidden">
            {[
              { src: '/birth-001-title.jpg', caption: 'I · Title Frame' },
              { src: '/birth-diptych.jpg',   caption: 'II · Diptych' },
              { src: '/birth-003.jpg',        caption: 'III · Development' },
              { src: '/birth-004.jpg',        caption: 'IV · Resolution' },
            ].map((item, i) => (
              <div key={i} style={{ flexShrink: 0, height: '460px', position: 'relative', background: '#000' }}>
                <img
                  src={item.src}
                  alt={`The Birth — ${item.caption}`}
                  style={{ height: '100%', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px', background: 'rgba(0,0,0,0.7)' }}>
                  <p style={{ fontSize: '0.52rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(229,226,225,0.45)' }}>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.55rem', color: 'rgba(229,226,225,0.25)', marginTop: '12px', letterSpacing: '0.1em' }}>← Scroll to view full series</p>
        </div>
      </section>

      {/* SECTION 06 — FINE ART */}
      <section id="fineart" className="relative overflow-hidden" style={{ paddingTop: 'clamp(60px,8vw,100px)', paddingBottom: 'clamp(60px,8vw,100px)' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/fineart-wall.jpg)' }} />
        <div className="absolute inset-0" style={{ background: 'rgba(8,7,5,0.78)' }} />
        <div style={{ position: 'relative', padding: '0 24px', maxWidth: '1800px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '8px' }}>
            06 · Collectable Fine Art
          </p>
          <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 300, fontStyle: 'italic', color: '#e5e2e1', marginBottom: '20px', lineHeight: 1.2 }}>
            Exhibited &amp; Collected Internationally
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'rgba(229,226,225,0.7)', lineHeight: 1.9, maxWidth: '600px', marginBottom: '12px' }}>
            Exhibited at <strong style={{ color: '#e5e2e1', fontWeight: 400 }}>MIS São Paulo</strong>, <strong style={{ color: '#e5e2e1', fontWeight: 400 }}>Cornell Art Museum Florida</strong>, and <strong style={{ color: '#e5e2e1', fontWeight: 400 }}>Art Basel Miami</strong>.
          </p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(229,226,225,0.5)', lineHeight: 1.9, maxWidth: '600px', marginBottom: '40px' }}>
            Limited edition prints, AI fine art, and large-format photography. Available through the Stanford Emporium collection.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://payhip.com/DanielArmonStanford"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e5e2e1', border: '1px solid rgba(229,226,225,0.4)', padding: '14px 32px', textDecoration: 'none', transition: 'border-color 300ms, color 300ms' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#CC0000'; (e.currentTarget as HTMLAnchorElement).style.color = '#CC0000'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(229,226,225,0.4)'; (e.currentTarget as HTMLAnchorElement).style.color = '#e5e2e1'; }}
            >
              Browse Collection →
            </a>
            <Link
              to="/fine-art"
              style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(229,226,225,0.5)', padding: '14px 0', textDecoration: 'none', transition: 'color 300ms' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#CC0000')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(229,226,225,0.5)')}
            >
              Fine Art Page →
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section style={{ background: '#0d0d0d', padding: 'clamp(60px,8vw,96px) 24px', textAlign: 'center', borderTop: '1px solid rgba(229,226,225,0.05)' }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '20px' }}>
          Ready to Build a World
        </p>
        <h2 style={{ fontFamily: "'Noto Serif', serif", fontSize: 'clamp(1.8rem,4vw,3.5rem)', fontWeight: 300, fontStyle: 'italic', color: '#e5e2e1', marginBottom: '40px', lineHeight: 1.2 }}>
          From concept to screen.
        </h2>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/slate"
            style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#131313', background: '#CC0000', padding: '16px 40px', textDecoration: 'none', transition: 'background 300ms' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#930000')}
            onMouseLeave={e => (e.currentTarget.style.background = '#CC0000')}>
            View Film Investment Slate
          </Link>
          <Link to="/inquire"
            style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#e5e2e1', border: '1px solid rgba(229,226,225,0.3)', padding: '16px 40px', textDecoration: 'none', transition: 'border-color 300ms, color 300ms' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#CC0000'; (e.currentTarget as HTMLAnchorElement).style.color = '#CC0000'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(229,226,225,0.3)'; (e.currentTarget as HTMLAnchorElement).style.color = '#e5e2e1'; }}>
            Investor Inquiry
          </Link>
        </div>
      </section>

    </div>
  );
};

export default VisualDevelopment;
