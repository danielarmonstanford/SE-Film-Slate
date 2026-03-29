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
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[var(--black)]">
        {/* HERO BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/D80_9144.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--black)] via-transparent to-[var(--black)] opacity-80" />
        </div>

        <div className="relative z-[5] text-center hero-reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-[30px] h-[1px] bg-[var(--bronze)]" />
            <div className="label-text text-[9px] text-[var(--bronze)]">
              Creative Director · Spatial Visionary · Executive Producer
            </div>
            <div className="w-[30px] h-[1px] bg-[var(--bronze)]" />
          </div>
          <h1 className="text-[clamp(3rem,9vw,9rem)] leading-[1.1] text-[var(--white)] mb-2">
            I direct ideas<br />
            <span className="italic-emphasis">into reality.</span>
          </h1>
          <div className="label-text text-[10px] tracking-[0.45em] text-white mb-12">
            Films · Spaces · Concepts · Worlds
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/slate" 
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-[35px] py-[14px] hover:bg-[var(--bronze-light)] transition-colors"
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
        </div>

        <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-pulse">
          <div className="label-text text-[8px]">SCROLL</div>
          <div className="w-[1px] h-[40px] bg-gradient-to-b from-[var(--bronze)] to-transparent" />
        </div>
      </section>

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
                  style={{ backgroundImage: `url(${card.image})`, opacity: 0.07 }}
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
            { icon: '⬡', title: 'Spatial Resonance', img: '/spatial-preview.jpg', href: '/spatial', external: false },
            { icon: '◉', title: 'Visual Direction', img: 'https://images.unsplash.com/photo-1590593162211-f9827b7ad6a4?w=600&q=80', href: '/production-design', external: false },
            { icon: '△', title: 'Future Habitat Concepts', img: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=600&q=80', href: '/lab', external: false },
            { icon: '✦', title: 'NuLab Audio Visual', img: '/nulab-preview.jpg', href: 'https://nulab.space', external: true },
            { icon: '✺', title: 'Fine Art', img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&q=80', href: '/fine-art', external: false },
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

      {/* SECTION 4 — SPATIAL RESONANCE™ */}
      <section id="spatial" className="section-divider relative py-[192px] px-4 md:px-20 bg-[var(--black)] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.06) 0%, transparent 65%)' }} />
        <div className="relative z-10 reveal">
          <h2 className="text-[clamp(2.5rem,7.5vw,7.5rem)] italic text-white mb-8">
            Spatial Resonance<sup className="text-[0.22em] text-[var(--bronze)] font-body align-top">™</sup>
          </h2>
          
          <div className="max-w-[1000px] mx-auto mb-16 aspect-video bg-[var(--black-2)] border border-[rgba(166,124,0,0.45)] overflow-hidden">
            {/* Support for embedded video or static image */}
            <iframe 
              src="https://www.youtube.com/embed/vr0fI6bZGa4?autoplay=0&mute=1&controls=0&loop=1" 
              className="w-full h-full grayscale opacity-40 hover:opacity-80 transition-opacity duration-700"
              title="Spatial Resonance Experience"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <p className="max-w-[520px] mx-auto body-text text-[13px] leading-[2.1] text-white mb-12">
            I design environments that influence perception, emotion, and energy through composition, geometry, and visual flow.
          </p>
          <Link 
            to="/spatial" 
            className="btn-text border border-[rgba(212,175,55,0.35)] text-[var(--bronze)] px-10 py-4 hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            EXPLORE SPATIAL WORK →
          </Link>
        </div>
      </section>

      {/* SECTION 5 — SELECTED WORK */}
      <section id="portfolio" className="section-divider py-[144px] px-4 md:px-20 bg-[var(--black-2)] overflow-hidden">
        <div className="flex justify-between items-end mb-20 reveal">
          <div>
            <div className="label-text text-[10px] text-[var(--bronze)] mb-4">05 / PORTFOLIO</div>
            <h2 className="text-[48px] text-[var(--white)]">
              Selected Work
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

      {/* SECTION 7 — PHILOSOPHY */}
      <section className="section-divider relative py-[208px] px-4 md:px-20 bg-[var(--black)] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.04) 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-[900px] mx-auto reveal">
          <h2 className="text-[clamp(2rem,6vw,6rem)] italic text-white leading-[1.18]">
            "The future belongs to those who design it."
          </h2>
          <div id="philosophy-rule" className="w-[50px] h-[1px] bg-[var(--bronze)] mx-auto mt-14 scale-x-0 transition-transform duration-1000 origin-center" />
        </div>
      </section>

      {/* SECTION 8 — COLLECT WORKS */}
      <section id="collect" className="section-divider relative py-[144px] px-4 md:px-20 bg-[var(--black-2)] text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1920&q=80" 
            alt="Love is Eternal" 
            className="w-full h-full object-cover grayscale"
            referrerPolicy="no-referrer"
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
