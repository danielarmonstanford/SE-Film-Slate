/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../types';

// Still → video crossfade for the "What We Deliver" section background
function DeliverBg() {
  const [videoOn, setVideoOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVideoOn(true); obs.disconnect(); }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <img
        src="/birth-001-title.jpg"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: videoOn ? 0 : 0.14, transition: 'opacity 2.5s ease', filter: 'contrast(1.1)' }}
      />
      <video
        autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: videoOn ? 0.22 : 0, transition: 'opacity 2.5s ease', filter: 'contrast(1.1)' }}
      >
        <source src="/birth-ai.mp4" type="video/mp4" />
      </video>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,7,5,0.6)' }} />
    </div>
  );
}

interface HomeProps {
  setIsHovering: (hovering: boolean) => void;
}

export default function Home({ setIsHovering }: HomeProps) {
  const navigate = useNavigate();
  const sliderRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 180]);
  const textY = useTransform(scrollY, [0, 800], [0, -60]);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


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

  return (
    <div className="bg-[var(--black)]">
      {/* SECTION 1 — HERO */}
      <section
        aria-label="Featured campaign work by Daniel Stanford"
        style={{ position: 'relative', width: '100vw', height: '100svh', minHeight: '100svh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}
      >
        {/* VIMEO BACKGROUND */}
        <iframe
          className="hero-vimeo"
          src="https://player.vimeo.com/video/1179764303?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0&playsinline=1"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none', pointerEvents: 'none', zIndex: 0 }}
          allow="autoplay"
          title="hero"
          // @ts-ignore
          playsInline={true}
          webkit-playsinline="true"
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

        {/* HERO TEXT BLOCK — entrance slide + scroll parallax */}
        <motion.div
          style={{ y: textY, position: 'relative', zIndex: 10 }}
          initial={{ x: -40 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
        <div className="hero-text-block" style={{ padding: '0 60px 44px 28px' }}>
          <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(229,226,225,0.72)', marginBottom: '14px' }}>
            Executive Producer · Production Design · Film Investment
          </div>
          <h1 style={{ margin: 0, padding: 0 }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(42px, 6.5vw, 80px)', lineHeight: 0.95, letterSpacing: '-0.02em', color: '#e5e2e1', display: 'block' }}>
              I direct ideas
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(42px, 6.5vw, 80px)', lineHeight: 0.95, letterSpacing: '-0.02em', color: '#C9971F', display: 'block', marginBottom: '24px' }}>
              into reality.
            </span>
          </h1>
          <button
            className="hero-invest-btn"
            onClick={() => navigate('/investment-opportunities')}
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#C9971F', border: '1px solid rgba(201,151,31,0.5)', padding: '12px 28px', background: 'transparent', cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#C9971F'; (e.currentTarget as HTMLButtonElement).style.color = '#080808'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#C9971F'; }}
          >
            INVEST IN FILM
          </button>
        </div>
        </motion.div>

        {/* TIMER BAR */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, height: '1px', background: '#cc0000', width: '100%', transformOrigin: 'left', animation: 'shrink 30s linear forwards', zIndex: 10 }} />
      </section>


      {/* FEATURED PRODUCTIONS — TWO POSTERS */}
      <section style={{
        background: '#080808',
        padding: 'clamp(80px,10vw,120px) clamp(28px,6vw,80px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderTop: '1px solid rgba(229,226,225,0.04)',
      }}>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          fontWeight: 300,
          fontSize: 'clamp(2rem, 4vw, 3.2rem)',
          letterSpacing: '0.04em',
          color: '#C9971F',
          marginBottom: '48px',
          textAlign: 'center',
        }}>
          Featured Productions
        </div>

        {/* Poster grid — 2 columns desktop, stacked mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 'clamp(16px,3vw,40px)',
          width: '100%',
          maxWidth: '680px',
        }}>

          {/* POSTER 1 — Hell's Kitchen */}
          <a href="/investment-opportunities" style={{ display: 'block', textDecoration: 'none' }}>
            <div
              style={{
                width: '100%', aspectRatio: '2/3', background: '#1a1208',
                border: '1px solid rgba(229,226,225,0.08)', overflow: 'hidden',
                position: 'relative', transition: 'border-color 0.4s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(204,0,0,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(229,226,225,0.08)'}
            >
              <img src="/hk-poster.jpg" alt="Once Upon a Time in Hell's Kitchen"
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, filter: 'contrast(1.1)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
                background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 100%)' }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px',
                fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '8px',
                letterSpacing: '0.3em', textTransform: 'uppercase', color: '#cc0000',
                border: '1px solid rgba(204,0,0,0.4)', padding: '3px 7px', background: 'rgba(8,8,8,0.7)' }}>
                Equity Open
              </div>
              {/* Ghost info box — bottom of poster */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '12px',
                right: '12px',
                background: 'rgba(8,7,5,0.65)',
                backdropFilter: 'blur(4px)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '14px 16px',
              }}>
                {/* Status badge */}
                <div style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  fontSize: '9px',
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: '#ffc800',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}>
                  <div style={{
                    width: '5px', height: '5px',
                    borderRadius: '50%',
                    background: '#ffc800',
                    animation: 'pulse 1.5s ease-in-out infinite',
                    flexShrink: 0,
                  }}/>
                  Equity Open · NY 30% Tax Credit
                </div>

                {/* Title */}
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontWeight: 300,
                  fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
                  color: '#FFFFFF',
                  lineHeight: 1.1,
                  marginBottom: '10px',
                }}>
                  Once Upon a Time<br/>in Hell's Kitchen
                </p>

                {/* Ghost divider */}
                <div style={{
                  height: '1px',
                  background: 'rgba(255,255,255,0.12)',
                  marginBottom: '10px',
                }}/>

                {/* Director row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '5px',
                }}>
                  <span style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: '9px',
                    letterSpacing: '0.35em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                  }}>
                    Director
                  </span>
                  <span style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.8)',
                    letterSpacing: '0.05em',
                  }}>
                    Colin Broderick
                  </span>
                </div>

                {/* Stars row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}>
                  <span style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: '9px',
                    letterSpacing: '0.35em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                    flexShrink: 0,
                    marginRight: '12px',
                  }}>
                    Cast
                  </span>
                  <span style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 300,
                    fontSize: '10px',
                    color: 'rgba(255,255,255,0.75)',
                    letterSpacing: '0.03em',
                    textAlign: 'right',
                    lineHeight: 1.5,
                  }}>
                    Sawyer Spielberg · Melissa Leo<br/>
                    Liam Neeson (neg.)
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* POSTER 2 — UGRP */}
          <a href="/project/ugrp" style={{ display: 'block', textDecoration: 'none' }}>
            <div
              style={{
                width: '100%', aspectRatio: '2/3', background: '#0d0d0d',
                border: '1px solid rgba(229,226,225,0.08)', overflow: 'hidden',
                position: 'relative', transition: 'border-color 0.4s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(204,0,0,0.4)'}
              onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(229,226,225,0.08)'}
            >
              <img src="/ugrp-poster.jpg" alt="Untitled Guy Ritchie Project"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: 0.85, filter: 'contrast(1.05)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%',
                background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, transparent 100%)' }} />
              <div style={{ position: 'absolute', top: '12px', left: '12px',
                fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '8px',
                letterSpacing: '0.3em', textTransform: 'uppercase', color: '#ffc800',
                border: '1px solid rgba(255,200,0,0.5)', padding: '3px 7px', background: 'rgba(8,8,8,0.7)' }}>
                Film Finance & Equity Access
              </div>
              <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300,
                  fontSize: 'clamp(14px,2.5vw,22px)', color: '#f4ede0', lineHeight: 1.1, marginBottom: '5px' }}>
                  In The Grey
                </div>
                <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '8px',
                  letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(229,226,225,0.6)' }}>
                  Henry Cavill · Jake Gyllenhaal
                </div>
              </div>
            </div>
          </a>

        </div>

        {/* ── FEATURED TRAILER ── */}
        <div style={{ width: '100%', maxWidth: '860px', marginTop: '56px' }}>
          {/* Label + title */}
          <Link to="/project/ugrp" style={{ display: 'block', textDecoration: 'none', marginBottom: '16px', textAlign: 'left' }}>
            <p style={{
              fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700,
              fontSize: '8px', letterSpacing: '0.4em', textTransform: 'uppercase',
              color: 'rgba(229,226,225,0.4)', marginBottom: '8px',
            }}>
              Featured Trailer
            </p>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic',
              fontWeight: 300, fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              color: '#C9971F', lineHeight: 1.1, marginBottom: '4px',
            }}>
              In The Grey
            </p>
            <p style={{
              fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700,
              fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(229,226,225,0.5)',
            }}>
              Henry Cavill · Jake Gyllenhaal · Eiza González · Dir. Guy Ritchie
            </p>
          </Link>
          {/* Embed */}
          <div style={{ width: '100%', aspectRatio: '16/9', background: '#0a0805' }}>
            <iframe
              src="https://www.youtube.com/embed/nufP15iN4GE?rel=0&modestbranding=1"
              title="In The Grey — Official Trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
            />
          </div>
        </div>

        {/* Featured Film Festival */}
        <div style={{ width: '100%', maxWidth: '860px', marginTop: '32px', borderTop: '1px solid rgba(229,226,225,0.08)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '8px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(229,226,225,0.35)' }}>
            Featured Film Festival
          </span>
          <a
            href="https://www.festival-cannes.com/en/medialibrary/festival-de-cannes-2026-teaser/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#00CFCF', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#00FFFF'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#00CFCF'; }}
          >
            Festival de Cannes 2026 →
          </a>
        </div>

        <a
          href="/investment-opportunities"
          style={{
            display: 'inline-block',
            marginTop: '36px',
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
            letterSpacing: '0.05em',
            color: '#C9971F',
            textDecoration: 'none',
            animation: 'goldPulse 2.5s ease-in-out infinite',
            cursor: 'pointer',
          }}
        >
          View Full Film Slate →
        </a>
      </section>

      {/* THE BIRTH — CREATIVE VISION */}
      <section style={{ background: '#040402', position: 'relative', overflow: 'hidden', padding: 'clamp(80px,10vw,140px) 0 0' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          style={{ padding: '0 clamp(28px,6vw,80px)', marginBottom: '48px' }}
        >
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.55em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '16px' }}>
            Fine Art · Creative Vision · Photomontage
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(3rem,7vw,7rem)', lineHeight: 0.9, color: '#F4EFE6', margin: 0 }}>
            The Birth<span style={{ color: 'rgba(244,239,230,0.18)' }}> · La Naissance</span>
          </h2>
        </motion.div>

        {/* AI Video */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-40px' }}
          style={{ padding: '0 clamp(28px,6vw,80px)', marginBottom: '3px' }}
        >
          <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', background: '#0a0905' }}>
            <video
              autoPlay muted loop playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.88, filter: 'contrast(1.08)' }}
            >
              <source src="/birth-ai.mp4" type="video/mp4" />
            </video>
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(4,4,2,0.18), rgba(4,4,2,0.55))', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 28px', background: 'linear-gradient(to top, rgba(4,4,2,0.92), transparent)' }}>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '8px', letterSpacing: '0.45em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.35)', margin: 0 }}>
                AI Generative Cinema · LTX-V · NuLab Visual Pipeline
              </p>
            </div>
          </div>
        </motion.div>

        {/* 4 stills — horizontal scroll */}
        <div style={{ display: 'flex', gap: '3px', padding: '3px clamp(28px,6vw,80px) 0', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {[
            { src: '/birth-001-title.jpg', label: '001 · Containment', sub: 'La naissance commence' },
            { src: '/birth-diptych.jpg',   label: '002 · La Fracture',  sub: 'The break' },
            { src: '/birth-003.jpg',        label: '003 · L\'Émergence', sub: 'Rising through' },
            { src: '/birth-004.jpg',        label: '004 · L\'Éveil',     sub: 'Awakening' },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-40px' }}
              style={{ flexShrink: 0, width: 'clamp(240px,28vw,400px)', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', background: '#0a0905' }}
            >
              <img
                src={img.src}
                alt={img.label}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.82, filter: 'contrast(1.1)', transition: 'transform 0.9s ease, opacity 0.5s ease' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.opacity = '0.96'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.opacity = '0.82'; }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 14px', background: 'linear-gradient(to top, rgba(4,4,2,0.92), transparent)', pointerEvents: 'none' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300, fontSize: '13px', color: '#F4EFE6', marginBottom: '2px' }}>{img.label}</p>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.38)', margin: 0 }}>{img.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer row */}
        <div style={{ padding: '32px clamp(28px,6vw,80px) clamp(64px,8vw,100px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '8px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.18)', margin: 0 }}>
            Photomontage & Composite · Original Series · Stanford Emporium
          </p>
          <a href="/visual-development" style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.42)', borderBottom: '1px solid rgba(244,239,230,0.14)', paddingBottom: '2px', textDecoration: 'none' }}>
            Full Archive →
          </a>
        </div>
      </section>

      {/* SECTION 3 — WHAT WE DELIVER */}
      <section className="section-divider py-[144px] px-4 md:px-20 bg-[var(--black-2)]" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Still-to-video background */}
        <DeliverBg />
        <div className="reveal mb-20" style={{ position: 'relative', zIndex: 1 }}>
          <div className="label-text text-[10px] text-[var(--bronze)] mb-4">03 / DELIVERY</div>
          <h2 className="text-[48px] text-[var(--white)]">What We Deliver</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[var(--line)] reveal" style={{ position: 'relative', zIndex: 1 }}>
          {[
            'Pitch Decks & Packaging',
            'Visual Development & Worldbuilding',
            'Production Design Direction',
            'Casting & Talent Packaging Support',
            'Investor Materials & Data Room Prep',
          ].map((title, i) => (
            <div key={i} className="bg-[var(--black-2)] p-10 group hover:bg-[var(--black-3)] transition-colors duration-300">
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '28px', color: 'var(--bronze)', marginBottom: '16px', lineHeight: 1 }}>
                0{i + 1}
              </div>
              <h4 className="label-text" style={{ fontSize: '11px', letterSpacing: '0.18em', color: '#F4EFE6' }}>
                {title}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 reveal" style={{ position: 'relative', zIndex: 1 }}>
          <Link
            to="/disciplines"
            className="btn-text border border-[rgba(244,239,230,0.3)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Full Studio Deliverables →
          </Link>
        </div>
      </section>

      {/* SECTION 4 — STUDIO DIVISIONS */}
      <section className="section-divider py-[144px] px-4 md:px-20 bg-[var(--black-2)]">
        <div className="reveal">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-4">04 / STUDIO</div>
          <h2 className="text-[48px] text-[var(--white)]">
            Studio Divisions
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[var(--line)] mt-20 reveal">
          {[
            { icon: '◈', title: 'Film Slate — Development & Packaging', img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80', href: '/investment-opportunities', external: false },
            { icon: '◉', title: 'Production Design & Visual Development', img: '/production-design-cover.jpg', href: '/production-design', external: false, sub: 'World Atlas — Location & Worldbuilding Research', sub2: 'Built Environments Lab — Architecture & Spatial Research' },
            { icon: '✦', title: 'NuLab — AI / AV Intelligence', img: '/nulab-cover.jpg', href: 'https://nulab.space', external: true },
            { icon: '✺', title: 'Archive — Fine Art & Photography', img: '/fineart-cover.jpg', href: '/fine-art', external: false },
          ].map((item) => {
            const inner = (
              <>
                <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-55 transition-opacity duration-[400ms] ease-[ease]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-[400ms] ease-[ease]"
                    style={{ filter: 'none' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(100%) brightness(0.7) blur(0.3px)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'none'; }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-[rgba(8,7,5,0.45)] opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms] ease-[ease] pointer-events-none" />
                <div className="relative z-10 text-[24px] text-[var(--bronze)] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{item.icon}</div>
                <h4 className="relative z-10 text-[17px] font-normal text-[rgba(244,239,230,0.82)] group-hover:text-[rgba(244,239,230,1)] mt-8 transition-colors duration-[400ms]">{item.title}</h4>
                {(item as any).sub && (
                  <p className="label-text relative z-10" style={{ fontSize: '8px', letterSpacing: '0.22em', color: 'rgba(244,239,230,0.45)', marginTop: '10px' }}>
                    {(item as any).sub}
                  </p>
                )}
                {(item as any).sub2 && (
                  <p className="label-text relative z-10" style={{ fontSize: '8px', letterSpacing: '0.22em', color: 'rgba(244,239,230,0.45)', marginTop: '6px' }}>
                    {(item as any).sub2}
                  </p>
                )}
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

      {/* SECTION 5 — VISUAL ARCHIVE */}
      <section id="collect" className="section-divider relative py-[144px] px-4 md:px-20 bg-[var(--black-2)] text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src="/collect-hero.jpg"
            alt="Visual Archive — Daniel Stanford"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-[var(--black-2)] opacity-40" />
        </div>
        <div className="relative z-10 reveal">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-4">05 / COLLECTION</div>
          <h2 className="text-[clamp(2rem,4.5vw,4rem)] text-white mb-4">
            Visual Archive
          </h2>
          <div className="label-text text-[10px] tracking-[0.38em] text-white mb-12">
            Fine art editions and photographic works from the Stanford archive.
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
          <div className="label-text text-[10px] text-[var(--bronze)] mb-4">06 / BEGIN</div>
          <h2 className="text-[clamp(2.5rem,6.5vw,6.5rem)] text-white leading-[1.08] mb-16">
            Let's build something<br />
            <span className="italic-emphasis">exceptional.</span>
          </h2>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <a 
              href="mailto:Daniel@StanfordEmporium.com?subject=Inquiry" 
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-10 py-4 hover:bg-[var(--bronze-light)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              INQUIRE
            </a>
            <a 
              href="mailto:Daniel@StanfordEmporium.com?subject=Schedule%20Investor%20Call" 
              className="btn-text border border-[rgba(244,239,230,0.55)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              SCHEDULE INVESTOR CALL
            </a>
            <a 
              href="mailto:Daniel@StanfordEmporium.com?subject=Request%20Investment%20Materials" 
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
