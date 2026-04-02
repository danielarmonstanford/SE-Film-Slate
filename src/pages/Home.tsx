/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../types';

interface HomeProps {
  setIsHovering: (hovering: boolean) => void;
}

export default function Home({ setIsHovering }: HomeProps) {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Ambient audio player
  const playerRef = useRef<any>(null);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [volume, setVolume] = useState(40);
  const [playerReady, setPlayerReady] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let destroyed = false;

    const initPlayer = () => {
      if (destroyed || !(window as any).YT?.Player) return;
      const el = document.getElementById('ambient-yt-player');
      if (!el) return;
      const p = new (window as any).YT.Player('ambient-yt-player', {
        events: {
          onReady: (evt: any) => {
            if (destroyed) return;
            evt.target.setVolume(40);
            playerRef.current = evt.target;
            setPlayerReady(true);
          },
          onStateChange: (evt: any) => {
            if (destroyed) return;
            setAudioPlaying(evt.data === 1);
          },
        },
      });
      if (!destroyed) playerRef.current = p;
    };

    if ((window as any).YT?.Player) {
      initPlayer();
    } else {
      // Avoid duplicate script tags
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
      const prev = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        initPlayer();
      };
    }

    return () => {
      destroyed = true;
      if (playerRef.current?.destroy) {
        try { playerRef.current.destroy(); } catch {}
      }
      playerRef.current = null;
      setPlayerReady(false);
      setAudioPlaying(false);
    };
  }, []);

  const toggleAudio = () => {
    if (!playerRef.current || !playerReady) return;
    if (audioPlaying) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setVolume(val);
    if (playerRef.current && playerReady) {
      playerRef.current.setVolume(val);
    }
  };

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
      <section className="relative w-screen h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[var(--black)]">
        {/* HERO BACKGROUND — Vimeo on desktop, static fallback on mobile */}
        <div className="absolute inset-0 z-0" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>

          {/* Vimeo background — hidden on mobile */}
          <div className="hidden md:block" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <iframe
              src="https://player.vimeo.com/video/1179698917?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '177.78vh', minWidth: '100%', height: '100%', minHeight: '56.25vw', border: 'none', pointerEvents: 'none' }}
              allow="autoplay; fullscreen"
              title="Hero background"
            />
          </div>

          {/* Static fallback — always visible on mobile, hidden on desktop */}
          <img
            src="/D80_9144.jpg"
            alt="Hero Background"
            className="md:hidden w-full h-full object-cover opacity-75"
          />

          {/* Top gradient — nav readability */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to bottom, rgba(13,13,13,0.75) 0%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />
          {/* Bottom gradient — text readability */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '55%', background: 'linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.6) 40%, transparent 100%)', zIndex: 1, pointerEvents: 'none' }} />
        </div>

        <div className="relative z-[5] text-center hero-reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-[30px] h-[1px] bg-[var(--bronze)]" />
            <div className="label-text text-[9px] text-[var(--bronze)]">
              Creative Director · Visionary · Executive Producer
            </div>
            <div className="w-[30px] h-[1px] bg-[var(--bronze)]" />
          </div>
          <h1 className="text-[clamp(3rem,9vw,9rem)] leading-[1.1] text-[var(--white)] mb-2" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.8)' }}>
            I direct ideas<br />
            <span className="italic-emphasis">into reality.</span>
          </h1>
          <div className="label-text text-[10px] tracking-[0.35em] text-white opacity-[0.82] mb-12">
            Films · Spaces · Concepts · Worlds
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/slate"
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-[35px] py-[14px] hover:bg-[var(--bronze-light)] transition-colors"
              style={{ minWidth: 'min(280px, 85vw)' }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              VIEW FILM INVESTMENT SLATE
            </Link>
            <Link 
              to="/disciplines" 
              className="btn-text border border-[rgba(244,239,230,0.55)] text-white px-[35px] py-[14px] hover:bg-white hover:text-[var(--black)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              ENTER STUDIO
            </Link>
          </div>
          <div style={{ width: '40px', height: '1px', background: '#CC0000', margin: '32px auto 0' }} />
        </div>

        <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-pulse">
          <div className="label-text text-[8px]">SCROLL</div>
          <div className="w-[1px] h-[40px] bg-gradient-to-b from-[var(--bronze)] to-transparent" />
        </div>
      </section>

      {/* MARQUEE STRIP */}
      {(() => {
        const text = 'EXECUTIVE PRODUCER  ·  PRODUCTION DESIGN  ·  ART DIRECTION  ·  FILM INVESTMENT  ·  WORLDBUILDING FOR CINEMA  ·  VISUAL DEVELOPMENT  ·  STANFORD EMPORIUM  ·  ';
        const repeated = text.repeat(6);
        return (
          <div style={{
            width: '100%',
            height: '44px',
            background: '#0e0e0e',
            borderTop: '1px solid rgba(229,226,225,0.06)',
            borderBottom: '1px solid rgba(229,226,225,0.06)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
          }}>
            <div style={{
              display: 'flex',
              width: 'max-content',
              animation: 'marquee 30s linear infinite',
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.6rem',
              letterSpacing: '0.35em',
              color: 'rgba(229,226,225,0.35)',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              {repeated}
            </div>
          </div>
        );
      })()}

      {/* SECTION 2 — FILM INVESTMENT SLATE */}
      <section id="slate" className="section-divider py-[144px] px-4 md:px-20 bg-[var(--black)]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
          <div>
            <div className="label-text text-[10px] text-[var(--bronze)] mb-4">02 / FILM INVESTMENT SLATE</div>
            <h2 className="text-[48px] text-[var(--white)]">
              Current Film Investment Slate
            </h2>
          </div>
          <Link 
            to="/slate" 
            className="btn-text border border-[rgba(244,239,230,0.55)] text-white px-8 py-3 hover:bg-white hover:text-[var(--black)] transition-all mt-8 md:mt-0"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            VIEW FILM INVESTMENT SLATE →
          </Link>
        </div>

        {/* FEATURE TRAILER PREVIEW */}
        <div className="mb-20 reveal">
          <div className="label-text text-[9px] text-[var(--bronze)] mb-6 tracking-[0.4em] uppercase">Execution Reel · Stanford Emporium</div>
          <div className="aspect-video w-full bg-[var(--black-2)] border border-[rgba(166,124,0,0.45)] overflow-hidden relative group">
            <iframe
              src="https://www.youtube.com/embed/J_9FshPdUWk?autoplay=1&mute=1&loop=1&playlist=J_9FshPdUWk&controls=0"
              className="w-full h-full grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              title="Execution Reel · Stanford Emporium"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="absolute inset-0 pointer-events-none border-[20px] border-[var(--black)] opacity-40" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[var(--line)] border border-[var(--line)] reveal">
          {PROJECTS.map((card) => (
            <div
              key={card.id}
              className="group relative bg-[var(--black)] p-[40px_28px] overflow-hidden hover:bg-[var(--black-3)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Faded B&W project image background */}
              {card.image && (
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale pointer-events-none"
                  style={{ backgroundImage: `url(${card.image})`, opacity: 0.15 }}
                />
              )}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--bronze)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              {card.urgent && (
                <div className="border border-[var(--red-urgent)] text-[var(--red-urgent)] text-[8px] tracking-[0.1em] px-2 py-1 inline-block mb-6">
                  ⚡ {card.urgent}
                </div>
              )}
              <div className="label-text text-[10px] opacity-65 mb-4">{card.id}</div>
              <h3 className="text-[28px] mb-4">{card.title}</h3>
              <div className="body-text text-[11px] opacity-90 mb-6">{card.details}</div>
              <div className="space-y-2 mb-8">
                <div className="body-text text-[11px]">{card.stats}</div>
                {card.pos && <div className="body-text text-[11px]">{card.pos}</div>}
              </div>
              <div className="flex flex-col gap-3">
                {card.status && (
                  <div 
                    className="border px-3 py-1 inline-block w-fit text-[9px] tracking-[0.1em]"
                    style={{ 
                      borderColor: card.statusColor || 'rgba(244,239,230,0.5)',
                      color: card.statusColor || 'rgba(244,239,230,0.9)'
                    }}
                  >
                    {card.status}
                  </div>
                )}
                {card.subStatus && (
                  <div className="text-[10px] italic text-[rgba(244,239,230,0.75)]">
                    {card.subStatus}
                  </div>
                )}
                {card.status !== 'Funded' && (
                  <Link 
                    to={`/project/${card.slug}`} 
                    className="btn-text mt-4 border border-[var(--bronze)] text-[var(--bronze)] px-4 py-2 hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all text-center"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    VIEW SLATE OVERVIEW
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
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

      {/* AMBIENT AUDIO — hidden iframe (off-screen, must have real size for YT API) */}
      <div
        aria-hidden="true"
        style={{ position: 'fixed', top: '-200px', left: '-200px', width: '100px', height: '100px', pointerEvents: 'none', visibility: 'hidden' }}
      >
        <iframe
          id="ambient-yt-player"
          width="100"
          height="100"
          src="https://www.youtube.com/embed/8-wAvbxB7D8?autoplay=0&mute=0&loop=1&playlist=8-wAvbxB7D8&controls=0&enablejsapi=1"
          allow="autoplay"
          title="Ambient Audio"
        />
      </div>

      {/* AMBIENT AUDIO CONTROL — fixed bottom-right */}
      <div className="fixed bottom-6 right-6 z-[300] flex flex-col items-end gap-1">
        {/* Volume row — shown when playing */}
        {audioPlaying && (
          <div className="flex items-center gap-2 px-3 py-[6px] bg-[rgba(8,7,5,0.92)] border border-[rgba(244,239,230,0.1)]">
            <span className="label-text text-[7px] tracking-[0.2em] text-[rgba(244,239,230,0.3)] uppercase">Vol</span>
            <input
              type="range"
              min={0}
              max={100}
              value={volume}
              onChange={handleVolume}
              className="w-[80px] cursor-pointer"
              style={{ accentColor: 'rgba(244,239,230,0.6)' }}
            />
          </div>
        )}

        {/* Play/pause button */}
        <button
          onClick={toggleAudio}
          className={`flex items-center gap-[10px] px-4 py-3 border transition-all duration-300 ${
            audioPlaying
              ? 'border-[rgba(244,239,230,0.4)] bg-[rgba(8,7,5,0.92)] text-white'
              : 'border-[rgba(244,239,230,0.25)] bg-[rgba(8,7,5,0.92)] text-[rgba(244,239,230,0.65)] hover:border-white hover:text-white'
          }`}
          title={playerReady ? (audioPlaying ? 'Pause ambient music' : 'Play ambient music') : 'Loading…'}
        >
          {/* Icon */}
          <span className="text-[13px] leading-none w-3 text-center">
            {!playerReady ? '◌' : audioPlaying ? '❚❚' : '▶'}
          </span>
          <span className="label-text text-[8px] tracking-[0.3em] uppercase">
            {audioPlaying ? 'Ambient' : 'Ambient'}
          </span>
        </button>

        {/* Credit */}
        <div className="label-text text-[7px] tracking-[0.12em] text-[rgba(244,239,230,0.18)] text-right pr-[2px]">
          Bucharest Symphony Orchestra
        </div>
      </div>
    </div>
  );
}
