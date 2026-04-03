import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EMAIL_CONTACT, SOCIAL_LINKS } from '../constants';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const img = document.getElementById('about-hero-img');
      if (img) {
        const scrolled = window.scrollY;
        img.style.transform = `translateY(${scrolled * 0.35}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#131313] pt-32">

      {/* HERO */}
      <section className="relative h-[70vh] mb-32" style={{ marginLeft: 'calc(50% - 50vw)', width: '100vw', overflow: 'hidden', position: 'relative' }}>
        <img
          id="about-hero-img"
          src="/collect-hero.jpg"
          alt="Stanford Emporium — Kerala"
          className="w-full h-full object-cover"
          style={{ filter: 'sepia(25%) saturate(1.4) brightness(0.88)', objectPosition: 'center 30%', willChange: 'transform' }}
        />
        {/* warm gold gradient overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,4,0.45) 0%, rgba(180,120,20,0.08) 40%, rgba(10,8,4,0.55) 100%)' }} />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="font-['Noto_Serif'] text-5xl md:text-8xl italic text-center leading-tight" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.7)' }}>
            About
          </h1>
        </div>
      </section>

      {/* STUDIO PHILOSOPHY */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">EST. 2018</span>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-75">The Studio Philosophy</h3>
          </div>

          <div className="md:col-span-6 space-y-10">
            <p className="text-lg md:text-2xl leading-relaxed font-light">
              Cinema is not merely a sequence of images. It is emotional architecture — built through rhythm, restraint, and precision.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              Our approach is rooted in Visual Silence: the moments between the action where the real narrative breathes. Where tension forms. Where character reveals itself without dialogue. Where atmosphere becomes meaning.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              Founded by Daniel Armon Stanford, Stanford Emporium evolved from boutique creative agency roots into a full-scale creative studio spanning feature film development, commercial direction, fine art, and cinematic branding. We specialize in projects that require a strong aesthetic hand — work that demands discipline, clarity, and intentional visual authorship.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              From concept to final delivery, we oversee the entire creative pipeline — direction, packaging, design, casting support, and visual execution. Our global network of collaborators allows us to scale production rapidly while maintaining the intimate, hands-on control that defines the studio.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-90 leading-loose font-medium tracking-wide">
              We build projects for audiences who can feel the difference.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="border-l border-[#CC0000] pl-8 py-4">
              <img
                src="/daniel-stanford-portrait.jpg"
                alt="Daniel Armon Stanford"
                className="w-[90px] h-[90px] rounded-full object-cover object-top mb-6"
              />
              <blockquote className="italic text-xl font-['Noto_Serif'] leading-relaxed opacity-80">
                "To create is to define the boundaries of the unknown."
              </blockquote>
              <cite className="block mt-4 text-[10px] uppercase tracking-[0.3em] opacity-75 not-italic">
                — Daniel Armon Stanford
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* DISCIPLINES BENTO */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <h2 className="font-['Noto_Serif'] text-3xl italic mb-16">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {[
            { title: 'Narrative Film', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80' },
            { title: 'Spatial Design', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80' },
            { title: 'Creative Direction', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80' },
          ].map((item, idx) => (
            <div key={idx} className="relative aspect-square overflow-hidden group">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h4 className="font-['Noto_Serif'] text-2xl italic">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDER */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">Founder</span>
            <h3 className="text-xs uppercase tracking-[0.2em] opacity-75">Daniel Armon Stanford</h3>
          </div>

          <div className="md:col-span-7 space-y-8">
            <h2 className="font-['Noto_Serif'] text-3xl md:text-4xl italic leading-snug">
              Daniel Armon Stanford
            </h2>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              Daniel Armon Stanford is a Creative Director, Brand Strategist, and Executive Producer with 30 years of experience producing high-impact visual work across fashion campaigns, feature film development, fine art, commercial video, architecture, music, and emerging technology.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              He has led creative direction and produced campaigns for GUESS, Victoria's Secret, Intimissimi, Lancôme, Revlon, La Maison Simons, SSENSE, and Aldo, overseeing productions across five continents — from Rio to Morocco to Southeast Asia.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              His fine art has been exhibited at MIS — Museum of Image & Sound (São Paulo) and the Cornell Art Museum (Florida), with work shown during Art Basel Miami week. He is also the co-founder of NuLab, an audio-visual intelligence studio operating at the intersection of AI, sound, and spatial media (nulab.space). His work spans Digital Collection Art, cryptocurrency-native creative strategy, and AI-generated image systems for luxury and editorial brands.
            </p>
            <p style={{
              fontFamily: "'Noto Serif', serif",
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'rgba(229,226,225,0.85)',
              lineHeight: '1.9',
              borderLeft: '2px solid #CC0000',
              paddingLeft: '24px',
            }}>
              The lineage here is deliberate. Ken Adam built the visual identity of seven James Bond films — nominated for the Oscar for Best Production Design on The Spy Who Loved Me — by treating every set as an argument about power, architecture, and psychological space. That is the same discipline applied here: from a Guess campaign shot in Morocco to a feature film set in 1970s Manhattan. The medium changes. The philosophy of space does not.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              As Executive Producer and Art Director on the international co-production 400XY (Canada · China · Greece), Stanford brings casting instinct, visual authority, and cross-cultural production fluency into feature film development. His creative approach is defined by precision — the same discipline applied to global fashion campaigns, now brought into tone, character, and cinematic world-building.
            </p>
            <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose">
              Stanford's broader work includes research into modern modular sustainable housing systems (passive and positive house architecture), wellness brand architecture, and large-scale fashion show production. He operates from Montréal with reach into New York, London, and Los Angeles.
            </p>
          </div>
        </div>
      </section>

      {/* PRESS & RECOGNITION */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '20px' }}>
          Press · Publications · Recognition
        </p>
        <h2 style={{ fontFamily: "'Noto Serif', serif", fontWeight: 300, fontSize: 'clamp(2rem,5vw,3.5rem)', lineHeight: 1.15, marginBottom: '16px' }}>
          In Print.<br />
          <em style={{ color: '#CC0000' }}>&amp; On Record.</em>
        </h2>
        <p style={{ fontSize: '0.8rem', color: 'rgba(229,226,225,0.45)', marginBottom: '48px', letterSpacing: '0.02em' }}>
          Featured in international art, fashion, and lifestyle publications across three decades.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1px', background: 'rgba(229,226,225,0.06)' }}>
          {/* Card 1 */}
          <div
            style={{ background: '#1c1b1b', border: '1px solid rgba(229,226,225,0.06)', padding: '28px', borderLeft: '2px solid rgba(204,0,0,0.3)', transition: 'background 400ms ease, border-color 400ms ease' }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.02)'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(204,0,0,0.4)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = '#1c1b1b'; (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(229,226,225,0.06)'; }}
          >
            <div style={{ marginBottom: '18px', marginLeft: '-28px', marginRight: '-28px', marginTop: '-28px', overflow: 'hidden', aspectRatio: '16/7' }}>
              <img
                src="/ka-magazine-feature.jpg"
                alt="KA Online Magazine — Art Daniel Stanford"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
            </div>
            <p style={{ fontSize: '0.5rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '14px' }}>Online · Print · Art</p>
            <p style={{ fontFamily: "'Noto Serif', serif", fontSize: '1.1rem', fontWeight: 300, marginBottom: '10px', color: '#F5F0E6' }}>KA Online Magazine</p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(229,226,225,0.7)', marginBottom: '6px', lineHeight: 1.6 }}>Art — Daniel Stanford</p>
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(229,226,225,0.3)', textTransform: 'uppercase', marginBottom: '20px' }}>2024 · Also Appeared in Print Issue</p>
            <a
              href="https://kaonlinemagazine.com/art-daniel-stanford/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#CC0000', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              Read Feature →
            </a>
          </div>

          {/* Card 2 */}
          <div style={{ background: '#1c1b1b', border: '1px solid rgba(229,226,225,0.06)', padding: '28px', borderLeft: '2px solid rgba(204,0,0,0.3)' }}>
            <p style={{ fontSize: '0.5rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '14px' }}>Published · Fashion · Limited Edition</p>
            <img
              src="/press-sexy-cover.jpg"
              alt="SEXY Volume III — Victoria's Secret"
              style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', marginBottom: '18px', filter: 'contrast(1.05)' }}
            />
            <p style={{ fontFamily: "'Noto Serif', serif", fontSize: '1.2rem', fontWeight: 300, marginBottom: '10px', color: '#e5e2e1' }}>Victoria's Secret</p>
            <p style={{ fontFamily: "'Noto Serif', serif", fontSize: '0.9rem', fontStyle: 'italic', color: 'rgba(229,226,225,0.75)', marginBottom: '14px', lineHeight: 1.6 }}>SEXY Volume III — A Tribute to a Decade of Sexy Swimwear</p>
            <p style={{ fontSize: '0.72rem', color: 'rgba(229,226,225,0.55)', lineHeight: 1.8, marginBottom: '16px' }}>
              Art Direction and Photomontage. Limited edition black cloth-bound collector's set featuring photography by Ellen Von Unwerth, Raphael Mazzucco, and Russell James. Supermodels include Gisele Bundchen, Naomi Campbell, Heidi Klum, Alessandra Ambrosio, and Adriana Lima. Locations: St. Tropez, Tulum, Sardinia.
            </p>
            <p style={{ fontSize: '0.55rem', color: 'rgba(229,226,225,0.3)', fontStyle: 'italic', marginBottom: '18px' }}>Collector's Edition · 3-Volume Set</p>
            <a
              href="https://www.raphaelmazzucco.com/books"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#CC0000', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
            >
              View Publisher →
            </a>
          </div>

          {/* Card 3 */}
          <div style={{ background: '#1c1b1b', border: '1px solid rgba(229,226,225,0.06)', padding: '28px', borderLeft: '2px solid rgba(204,0,0,0.3)' }}>
            <p style={{ fontSize: '0.5rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '14px' }}>Fine Art · Exhibition</p>
            <p style={{ fontFamily: "'Noto Serif', serif", fontSize: '1.1rem', fontWeight: 300, marginBottom: '10px', color: '#F5F0E6' }}>MIS São Paulo · Cornell Art Museum · Art Basel Miami</p>
            <p style={{ fontSize: '0.78rem', color: 'rgba(229,226,225,0.7)', marginBottom: '6px', lineHeight: 1.6 }}>Fine Art Exhibition — International Presence</p>
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'rgba(229,226,225,0.3)', textTransform: 'uppercase', marginBottom: '20px' }}>Ongoing</p>
            <p style={{ fontSize: '0.58rem', letterSpacing: '0.15em', color: 'rgba(229,226,225,0.3)', fontStyle: 'italic' }}>Archive · Available on Request</p>
          </div>
        </div>

        <p style={{ marginTop: '28px', fontSize: '0.55rem', fontStyle: 'italic', color: 'rgba(229,226,225,0.3)', letterSpacing: '0.05em' }}>
          Additional press archive and campaign tearsheets available upon professional inquiry.{' '}
          <a
            href="mailto:studio@stanfordemporium.com?subject=Press Archive Request"
            style={{ color: 'rgba(229,226,225,0.4)', textDecoration: 'underline' }}
          >
            studio@stanfordemporium.com
          </a>
        </p>
      </section>

      {/* COLLABORATOR VOICES */}
      <section style={{
        borderTop: '1px solid rgba(229,226,225,0.05)',
        padding: '60px 0',
        maxWidth: '1800px',
        margin: '0 auto 48px',
        paddingLeft: 'clamp(16px,4vw,24px)',
        paddingRight: 'clamp(16px,4vw,24px)',
      }}>
        <p style={{ fontSize: '0.6rem', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', textAlign: 'center', marginBottom: '40px' }}>
          Collaborator Voices
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
          {/* Left */}
          <div style={{ borderLeft: '2px solid rgba(204,0,0,0.25)', paddingLeft: '24px' }}>
            <p style={{ fontFamily: "'Noto Serif', serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgba(229,226,225,0.82)', lineHeight: 1.9, marginBottom: '20px' }}>
              "Daniel has been an inspirational marketing and advertising force for several of my products — able to convey brand intent to the masses while highlighting the spirit of the brand."
            </p>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e5e2e1', marginBottom: '4px' }}>Ramak Radmard</p>
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(229,226,225,0.35)' }}>Creative Director · Lucidream</p>
          </div>
          {/* Right */}
          <div style={{ borderLeft: '2px solid rgba(204,0,0,0.25)', paddingLeft: '24px' }}>
            <p style={{ fontFamily: "'Noto Serif', serif", fontStyle: 'italic', fontSize: '1rem', color: 'rgba(229,226,225,0.82)', lineHeight: 1.9, marginBottom: '20px' }}>
              "Daniel is one of the best creative directors I know. His input and vision to any project is highly valuable."
            </p>
            <p style={{ fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#e5e2e1', marginBottom: '4px' }}>Reyhan Sofraci</p>
            <p style={{ fontSize: '0.55rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(229,226,225,0.35)' }}>Creative Director</p>
          </div>
        </div>
        <hr style={{ border: 'none', borderTop: '1px solid rgba(229,226,225,0.06)', margin: '40px 0 16px' }} />
        <p style={{ fontSize: '0.55rem', fontStyle: 'italic', color: 'rgba(229,226,225,0.3)', textAlign: 'center', letterSpacing: '0.05em' }}>
          Additional references available upon professional inquiry.
        </p>
      </section>

      {/* SELECT RECOGNITION */}
      <section className="px-6 max-w-[1800px] mx-auto mb-48">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3 md:sticky top-32 h-fit">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">Recognition</span>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-['Noto_Serif'] text-3xl italic mb-12">Select Recognition</h2>
            <ul className="space-y-6">
              <li className="border-t border-[rgba(244,239,230,0.2)] pt-6 text-sm text-[#F5F0E6] opacity-85 leading-relaxed">
                London International Advertising Award — Art Direction, GUESS Set Me Free
              </li>
              <li className="border-t border-[rgba(244,239,230,0.2)] pt-6 text-sm text-[#F5F0E6] opacity-85 leading-relaxed">
                Silver &amp; Honourable Mentions — Canadian National Magazine Awards (Fashion &amp; Beauty / Eye Candy)
              </li>
              <li className="border-t border-[rgba(244,239,230,0.2)] pt-6 text-sm text-[#F5F0E6] opacity-85 leading-relaxed">
                Fine art exhibited at MIS São Paulo and the Cornell Art Museum Florida
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section className="px-6 max-w-[1800px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">Connect</span>
          </div>
          <div className="md:col-span-7">
            <div className="flex flex-wrap gap-10 items-center">
              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="text-sm text-white hover:text-[#CC0000] transition-all"
              >
                {EMAIL_CONTACT}
              </a>
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-text text-[10px] uppercase tracking-[0.2em] text-white opacity-85 hover:opacity-100 hover:text-[#CC0000] transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEARCH & VISION */}
      <section className="px-6 max-w-[1800px] mx-auto py-12 mb-0">
        <div className="border-t border-[rgba(244,239,230,0.08)] pt-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-10">
          <span className="text-[9px] uppercase tracking-[0.4em] text-[rgba(244,239,230,0.35)]">Visual Worlds &amp; Digital Collection Art</span>
          <span className="text-[11px] text-[rgba(244,239,230,0.4)]">NuLab Audio Visual Intelligence — sound, image, and frequency as a unified creative field.</span>
          <Link to="/spatial" className="text-[10px] tracking-[0.2em] text-[rgba(244,239,230,0.35)] hover:text-[rgba(244,239,230,0.7)] transition-colors">Explore →</Link>
        </div>
      </section>

      {/* LEGACY CAMPAIGNS */}
      <style>{`.legacy-strip { overflow-x: auto; display: flex; scrollbar-width: none; } .legacy-strip::-webkit-scrollbar { display: none; }`}</style>
      <section className="mb-48">
        <div className="px-6 max-w-[1800px] mx-auto mb-10">
          <span className="block text-[0.65rem] uppercase tracking-[0.5em] text-[#CC0000] font-bold mb-4">
            30 Years · Selected Work
          </span>
          <h2 className="font-['Noto_Serif'] text-3xl md:text-4xl italic leading-snug">
            The campaigns that defined <em>a generation's taste.</em>
          </h2>
        </div>

        <div className="legacy-strip">
          {[
            { src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80', label: 'Guess · Set Me Free · London Advertising Award' },
            { src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', label: "Victoria's Secret · Sexy Vol III · 10th Anniversary" },
            { src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80', label: 'Intimissimi · Global Campaign' },
            { src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80', label: 'La Maison Simons · Brand Image' },
            { src: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?w=600&q=80', label: 'Lancôme · Beauty Launches' },
            { src: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&q=80', label: 'SSENSE · Aldo · 360° Content' },
          ].map((item, i, arr) => (
            <div
              key={i}
              className="flex-none group"
              style={{
                width: '280px',
                borderRight: i < arr.length - 1 ? '1px solid rgba(229,226,225,0.08)' : 'none',
              }}
            >
              <div style={{ aspectRatio: '3/2', overflow: 'hidden' }}>
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-all duration-[800ms]"
                  style={{ filter: 'grayscale(20%) contrast(1.1)' }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(20%) contrast(1.1)')}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-3 py-3">
                <span
                  className="uppercase block"
                  style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'rgba(229,226,225,0.5)' }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING STATEMENT / CTA */}
      <section className="py-48 px-6 text-center bg-[#1c1b1b]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm opacity-80 uppercase tracking-[0.3em] mb-8">Stanford Emporium</p>
          <h2 className="font-['Noto_Serif'] text-3xl md:text-5xl italic mb-8 leading-snug">
            Not a traditional production company.
          </h2>
          <p className="text-sm text-[#F5F0E6] opacity-85 leading-loose mb-6 max-w-xl mx-auto">
            A creative intelligence studio — producing work at the highest level across media, brands, and cultures for three decades.
          </p>
          <blockquote className="font-['Noto_Serif'] italic text-xl opacity-90 mb-16">
            "To create is to define the boundaries of the unknown."
            <cite className="block mt-3 text-[10px] uppercase tracking-[0.3em] opacity-60 not-italic">
              — Daniel Armon Stanford
            </cite>
          </blockquote>
          <Link
            to="/inquire"
            className="bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-16 py-6 hover:bg-[#930000] transition-colors duration-500 inline-block"
          >
            INITIATE INQUIRY
          </Link>
        </div>
      </section>

    </div>
  );
};

export default About;
