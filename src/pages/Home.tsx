/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../types';

interface HomeProps {
  setIsHovering: (hovering: boolean) => void;
}

export default function Home({ setIsHovering }: HomeProps) {
  const navigate = useNavigate();
  const heroTextRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          const rule = entry.target.querySelector('#philosophy-rule') as HTMLElement;
          if (rule) {
            rule.style.transform = 'scaleX(1)';
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  // Hero text 10s fade-in / fade-out cycle
  useEffect(() => {
    const el = heroTextRef.current;
    if (!el) return;
    el.style.opacity = '0';
    let destroyed = false;
    const VISIBLE_MS = 10000;
    const FADE_MS = 1200;
    const cycle = () => {
      if (destroyed) return;
      el.style.transition = 'opacity 1.4s ease';
      el.style.opacity = '1';
      setTimeout(() => {
        if (destroyed) return;
        el.style.transition = `opacity ${FADE_MS}ms ease`;
        el.style.opacity = '0';
        setTimeout(() => { if (!destroyed) cycle(); }, FADE_MS + 300);
      }, VISIBLE_MS);
    };
    const t = setTimeout(cycle, 400);
    return () => { destroyed = true; clearTimeout(t); };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.4;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const testimonials = [
    {
      quote: "Daniel has been an inspirational marketing and advertising force for several of my products. Daniel is able to convey brand intent to the masses, while highlighting the spirit of the brand. His projects have involved numerous international companies, deploying marketing and advertising campaigns, and defining brand engagement strategies.",
      name: "Ramak Radmard",
      title: "Creative Director · Lucidream",
      year: "Client relationship 15+ years"
    },
    {
      quote: "Daniel is one of the best creative directors I know. He is a pleasure to work with and a true high-spirited individual whose input and vision to any project is highly valuable.",
      name: "Reyhan Sofraci",
      title: "Creative Director",
      year: "Colleague"
    },
    {
      quote: "His ambition and creativity set him apart from other creative directors and his positive energy is contagious.",
      name: "Nori Elshinnawy",
      title: "Commercial Transformation Leader",
      year: "Collaborator"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(i => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-[var(--black)]">
      {/* SECTION 1 — HERO */}
      <section style={{ position: 'relative', width: '100vw', height: '100svh', minHeight: '100svh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>

        {/* VIMEO BACKGROUND */}
        <iframe
          className="hero-vimeo"
          src="https://player.vimeo.com/video/1179764303?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', pointerEvents: 'none', zIndex: 0 }}
          allow="autoplay"
          title="hero"
          onError={() => {
            const el = document.getElementById('hero-fallback');
            if (el) el.style.display = 'block';
          }}
        />

        {/* MOBILE FALLBACK */}
        <img
          id="hero-fallback"
          src="/D80_9144.jpg"
          alt="Hero Background"
          style={{ display: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        />

        {/* TOP GRADIENT */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '38%', background: 'linear-gradient(to bottom, rgba(8,8,8,0.72) 0%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />

        {/* BOTTOM GRADIENT */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '62%', background: 'linear-gradient(to top, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.48) 50%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />

        {/* HERO TEXT BLOCK */}
        <div ref={heroTextRef} className="hero-text-block" style={{ position: 'relative', zIndex: 10, padding: '0 60px 44px 28px' }}>
          <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '7px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#e5e2e1', marginBottom: '14px' }}>
            Executive Producer · Production Design · Film Investment
          </div>
          <h1 style={{ margin: 0, padding: 0 }}>
            <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(34px, 5.5vw, 64px)', lineHeight: 0.95, letterSpacing: '-0.02em', color: '#e5e2e1', display: 'block' }}>
              I direct ideas
            </span>
            <span style={{ fontFamily: "'EB Garamond', Georgia, serif", fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(34px, 5.5vw, 64px)', lineHeight: 0.95, letterSpacing: '-0.02em', color: '#C9971F', display: 'block', marginBottom: '24px' }}>
              into reality.
            </span>
          </h1>
          <button
            className="hero-invest-btn"
            onClick={() => navigate('/investment-opportunities')}
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9971F', border: '1px solid rgba(201,151,31,0.5)', padding: '12px 28px', background: 'transparent', cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#C9971F'; (e.currentTarget as HTMLButtonElement).style.color = '#080808'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#C9971F'; }}
          >
            INVEST IN FILM
          </button>
        </div>

        {/* TIMER BAR */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, height: '1px', background: '#cc0000', width: '100%', transformOrigin: 'left', animation: 'shrink 30s linear forwards', zIndex: 10 }} />
      </section>


      {/* FEATURED PRODUCTION — POSTER */}
      <section style={{
        background: '#080808',
        padding: 'clamp(80px,10vw,120px) clamp(28px,6vw,80px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '1px solid rgba(229,226,225,0.04)',
      }}>
        <div style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontWeight: 700,
          fontSize: '7px',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: 'rgba(229,226,225,0.25)',
          marginBottom: '48px',
          textAlign: 'center',
        }}>
          Featured Production
        </div>

        <a
          href="/investment-opportunities"
          style={{
            display: 'block',
            width: '100%',
            maxWidth: '320px',
            position: 'relative',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '100%',
              aspectRatio: '2/3',
              background: '#1a1208',
              border: '1px solid rgba(229,226,225,0.08)',
              overflow: 'hidden',
              position: 'relative',
              transition: 'border-color 0.4s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(204,0,0,0.4)'}
            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(229,226,225,0.08)'}
          >
            <img
              src="/hk-poster.jpg"
              alt="Once Upon a Time in Hell's Kitchen"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.8,
                filter: 'contrast(1.1)',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '55%',
              background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 100%)',
            }} />
            <div style={{
              position: 'absolute',
              top: '16px', left: '16px',
              fontFamily: 'Arial, Helvetica, sans-serif',
              fontWeight: 700,
              fontSize: '6.5px',
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#cc0000',
              border: '1px solid rgba(204,0,0,0.4)',
              padding: '4px 8px',
              background: 'rgba(8,8,8,0.7)',
            }}>
              Equity Open
            </div>
            <div style={{
              position: 'absolute',
              bottom: '20px', left: '20px', right: '20px',
            }}>
              <div style={{
                fontFamily: "'EB Garamond', Georgia, serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(16px,3vw,22px)',
                color: '#e5e2e1',
                lineHeight: 1.1,
                marginBottom: '6px',
              }}>
                Once Upon a Time<br/>in Hell's Kitchen
              </div>
              <div style={{
                fontFamily: 'Arial, Helvetica, sans-serif',
                fontWeight: 700,
                fontSize: '6.5px',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'rgba(229,226,225,0.4)',
              }}>
                Sawyer Spielberg · Melissa Leo
              </div>
            </div>
          </div>
        </a>

        <a
          href="/investment-opportunities"
          style={{
            display: 'inline-block',
            marginTop: '32px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 700,
            fontSize: '7.5px',
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'rgba(229,226,225,0.4)',
            textDecoration: 'none',
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#cc0000'}
          onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(229,226,225,0.4)'}
        >
          View Full Film Slate →
        </a>
      </section>

      {/* SECTION 3 — DIRECTED DISCIPLINES */}
      <section className="section-divider py-[144px] px-4 md:px-20 bg-[var(--black-2)]">
        <div className="reveal">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-4">03 / EXPERTISE</div>
          <h2 className="text-[48px] text-[var(--white)]">
            Creative Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] bg-[var(--line)] mt-20 reveal">
          {[
            { icon: '◈', title: 'Film Development', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80', href: '/investment-opportunities', external: false },
            { icon: '⬡', title: 'Visual Worlds & Digital Collection Art', img: '/spatial-preview.jpg', href: '/spatial', external: false },
            { icon: '◉', title: 'Visual Direction', img: '/visual-direction-connan.jpg', href: '/production-design', external: false },
            { icon: '△', title: 'Future Habitat Concepts', img: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=600&q=80', href: '/lab', external: false },
            { icon: '✦', title: 'NuLab Audiovisual Intelligence', img: '/nulab-preview.jpg', href: 'https://nulab.space', external: true },
            { icon: '✺', title: 'Fine Art', img: '/fineart-loas-starmont.png', href: '/fine-art', external: false },
          ].map((item) => {
            const inner = (
              <>
                <div className="absolute inset-0 z-0 transition-opacity duration-700 opacity-20 group-hover:opacity-40">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />
                <div className="relative z-10 text-[24px] text-[var(--bronze)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{item.icon}</div>
                <h4 className="relative z-10 text-[17px] font-normal text-white mt-8">{item.title}</h4>
              </>
            );
            return item.external ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[var(--black-2)] p-[80px_32px] text-center hover:bg-[var(--black-3)] transition-all overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {inner}
              </a>
            ) : (
              <Link
                key={item.title}
                to={item.href}
                className="group relative bg-[var(--black-2)] p-[80px_32px] text-center hover:bg-[var(--black-3)] transition-all overflow-hidden"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 — VISUAL WORLDS & NFT ART */}
      <section id="visual-worlds" className="section-divider py-[120px] px-4 md:px-20 bg-[var(--black)] text-center overflow-hidden">
        <div className="reveal mb-10">
          <span className="block label-text text-[0.65rem] text-[#CC0000] mb-4">Multimedia · Digital Collection · Sound</span>
          <h2 className="text-[clamp(2.5rem,7.5vw,7.5rem)] italic text-white mb-8">
            Visual Worlds &amp; Digital Collection Art
          </h2>
        </div>

        {/* Video — centered, autoplay muted */}
        <div className="max-w-[720px] mx-auto mb-16 reveal" style={{ aspectRatio: '16/9' }}>
          <iframe
            src="https://www.youtube.com/embed/Ggc8qzs-b20?autoplay=1&mute=1&loop=1&playlist=Ggc8qzs-b20&controls=1&rel=0&modestbranding=1"
            title="FASCINASIA — Digital Collection Art Animated"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            style={{ border: 'none', display: 'block' }}
          />
        </div>

        {/* Horizontal art strip */}
        <style>{`.nft-strip{overflow-x:auto;display:flex;scrollbar-width:none;}.nft-strip::-webkit-scrollbar{display:none;}`}</style>
        <div className="nft-strip -mx-4 md:-mx-20 text-left">
          {[
            { src: '/nft-sea-of-dunes.jpg',   label: 'Sea of Dunes — Environmental Worldbuilding Study' },
            { src: '/nft-jayne-silver-gold.jpg', label: 'Location Reference · Background Plate Material · Brazil' },
            { src: '/nft-year-of-snake.jpg',  label: 'Year of the Snake · DARS' },
            { src: '/nft-toxic-politics.jpg', label: 'Toxic Politics · Dystopian' },
            { src: '/nft-khalumia.jpg',       label: 'Khalumia · Japan · 40×60' },
            { src: '/nft-desert-warrior.jpg', label: 'Desert Warrior · Digital Collection Edition' },
            { src: '/nft-snake-goddess.jpg',  label: 'Snake Goddess · Digital Collection Edition' },
          ].map((item, i, arr) => (
            <div
              key={i}
              className="flex-none"
              style={{ width: '280px', borderRight: i < arr.length - 1 ? '1px solid rgba(229,226,225,0.08)' : 'none' }}
            >
              <div style={{ aspectRatio: '3/2', overflow: 'hidden' }}>
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-all duration-[800ms]"
                  style={{ filter: 'grayscale(15%) contrast(1.05)' }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) contrast(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(15%) contrast(1.05)')}
                />
              </div>
              <div className="px-3 py-3">
                <span className="uppercase block" style={{ fontSize: '0.55rem', letterSpacing: '0.1em', color: 'rgba(229,226,225,0.5)' }}>
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 reveal">
          <Link
            to="/spatial"
            className="btn-text border border-[rgba(212,175,55,0.35)] text-[var(--bronze)] px-10 py-4 hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            EXPLORE VISUAL WORLDS →
          </Link>
        </div>
      </section>

      {/* SECTION 5 — SELECTED WORK */}
      <section id="portfolio" className="section-divider py-[144px] px-4 md:px-20 bg-[var(--black-2)] overflow-hidden">
        <div className="flex justify-between items-end mb-20 reveal">
          <div>
            <div className="label-text text-[10px] text-[var(--bronze)] mb-4">05 / PORTFOLIO</div>
            <h2 className="text-[48px] text-[var(--white)]">
              Selected Projects
            </h2>
          </div>
        </div>

        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="drag-scroll-container flex gap-[2px] bg-[var(--line)] -mx-4 md:-mx-20 px-4 md:px-20 overflow-x-auto no-scrollbar reveal"
        >
          {PROJECTS.map((work) => (
            <Link 
              key={work.id}
              to={`/project/${work.slug}`}
              className="min-w-[480px] h-[360px] relative group overflow-hidden bg-[var(--black-2)]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-[1.04]">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover grayscale opacity-40"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] to-transparent opacity-60" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[7rem] text-[rgba(244,239,230,0.04)] font-headline">{work.id}</div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-[var(--black)] to-transparent">
                <div className="btn-text text-white">VIEW PROJECT →</div>
              </div>
              <div className="absolute -bottom-12 left-0 w-full flex justify-between items-center px-2 py-4">
                <div className="text-[18px] font-normal text-white">{work.title}</div>
                <div className="label-text text-[9px] text-[var(--bronze)]">{work.genre}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-32 reveal">
          <Link 
            to="/disciplines" 
            className="btn-text border border-[rgba(244,239,230,0.55)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            VIEW ALL WORK →
          </Link>
        </div>
      </section>

      {/* SECTION 6 — FUTURE HABITAT LAB */}
      <section id="lab" className="section-divider py-[144px] px-4 md:px-20 bg-[var(--black)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[64px] lg:gap-[128px] items-center">
          <div className="reveal">
            <div className="label-text text-[10px] text-[var(--bronze)] mb-4">06 / INNOVATION</div>
            <div className="w-[40px] h-[1px] bg-[var(--bronze)] my-8" />
            <h2 className="text-[clamp(2.5rem,5vw,5rem)] text-white mb-8 leading-tight">
              Future Habitat Lab
            </h2>
            <p className="body-text text-[13px] text-white leading-[2] mb-10">
              Experimental concepts for sustainable, rapid-build, and next-generation environments.
            </p>
            <Link 
              to="/lab" 
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-10 py-4 hover:bg-[var(--bronze-light)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              ENTER LAB →
            </Link>
          </div>

          <div className="relative h-[460px] border border-[rgba(166,124,0,0.45)] overflow-hidden reveal">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(rgba(212,175,55,0.05) 0 1px, transparent 1px 45px), repeating-linear-gradient(90deg, rgba(212,175,55,0.05) 0 1px, transparent 1px 45px)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[rgba(212,175,55,0.12)] blur-[60px] rounded-full pointer-events-none" />
            <div className="scan-line" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-[112px] text-[rgba(212,175,55,0.12)] font-headline breathing">⬡</div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&q=80" 
              alt="Habitat Lab" 
              className="w-full h-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section style={{
        padding: 'clamp(60px,8vw,100px) clamp(20px,6vw,80px)',
        background: '#0e0e0e',
        textAlign: 'center',
        borderTop: '1px solid rgba(229,226,225,0.05)',
        borderBottom: '1px solid rgba(229,226,225,0.05)',
      }}>
        <p style={{
          fontSize: '0.6rem', letterSpacing: '0.4em',
          textTransform: 'uppercase', color: '#CC0000',
          marginBottom: '32px',
        }}>
          Client Testimonials
        </p>

        <p style={{
          fontFamily: "'Noto Serif', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
          lineHeight: 1.85,
          color: 'rgba(229,226,225,0.88)',
          maxWidth: '780px',
          margin: '0 auto 32px',
        }}>
          "{testimonials[currentIndex].quote}"
        </p>

        <p style={{
          fontSize: '0.7rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#e5e2e1',
          marginBottom: '4px',
          fontWeight: 400,
        }}>
          — {testimonials[currentIndex].name}
        </p>

        <p style={{
          fontSize: '0.58rem',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          color: 'rgba(229,226,225,0.35)',
        }}>
          {testimonials[currentIndex].title}
        </p>

        {/* Dot indicators */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          gap: '8px', marginTop: '32px',
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              style={{
                width: i === currentIndex ? '24px' : '6px',
                height: '1px',
                background: i === currentIndex
                  ? '#CC0000' : 'rgba(229,226,225,0.2)',
                border: 'none', cursor: 'pointer',
                padding: 0,
                transition: 'all 0.4s ease',
              }}
            />
          ))}
        </div>
      </section>

      {/* SECTION 8 — COLLECT WORKS */}
      <section id="collect" className="section-divider relative py-[144px] px-4 md:px-20 bg-[var(--black-2)] text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src="/collect-hero.jpg"
            alt="Collect Works — Daniel Armon Stanford"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-[var(--black-2)] opacity-40" />
        </div>
        <div className="relative z-10 reveal">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-4">08 / COLLECTION</div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] text-white mb-4">
            Collect Works
          </h2>
          <div className="label-text text-[10px] tracking-[0.38em] text-white mb-12">
            Limited editions. Original prints. Objects.
          </div>
          <Link 
            to="/collect" 
            className="btn-text border border-[rgba(244,239,230,0.55)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            ENTER COLLECTION →
          </Link>
        </div>
      </section>

      {/* SECTION 9 — INQUIRE */}
      <section id="contact" className="section-divider py-[192px] px-4 md:px-20 bg-[var(--black)] text-center">
        <div className="reveal">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-4">09 / BEGIN</div>
          <h2 className="text-[clamp(2.5rem,6.5vw,6.5rem)] text-white leading-[1.08] mb-16">
            Let's build something<br />
            <span className="italic-emphasis">exceptional.</span>
          </h2>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <a 
              href="mailto:DARSbit@prontonmail.ch?subject=Inquiry" 
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-10 py-4 hover:bg-[var(--bronze-light)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              INQUIRE
            </a>
            <a 
              href="mailto:DARSbit@prontonmail.ch?subject=Schedule%20Investor%20Call" 
              className="btn-text border border-[rgba(244,239,230,0.55)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              SCHEDULE INVESTOR CALL
            </a>
            <a 
              href="mailto:DARSbit@prontonmail.ch?subject=Request%20Investment%20Materials" 
              className="btn-text border border-[rgba(212,175,55,0.35)] text-[var(--bronze)] px-10 py-4 hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              REQUEST INVESTMENT MATERIALS
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
