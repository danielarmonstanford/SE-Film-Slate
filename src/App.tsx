/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    const animateRing = () => {
      setRingPos(prev => ({
        x: prev.x + (cursorPos.x - prev.x) * 0.12,
        y: prev.y + (cursorPos.y - prev.y) * 0.12
      }));
      animationFrameId = requestAnimationFrame(animateRing);
    };
    animateRing();
    return () => cancelAnimationFrame(animationFrameId);
  }, [cursorPos]);

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
    <div className={`min-h-screen ${isHovering ? 'cursor-hover' : ''}`}>
      {/* Custom Cursor */}
      <div 
        id="cursor-dot" 
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />
      <div 
        id="cursor-ring" 
        style={{ left: ringPos.x, top: ringPos.y }}
      />

      {/* NAVIGATION */}
      <nav 
        id="main-nav" 
        className={`fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-4 md:px-20 py-[35px] transition-all duration-500 bg-gradient-to-b from-[rgba(8,7,5,0.97)] to-transparent ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="text-[16px] tracking-[0.4em] uppercase font-headline text-white">
          Stanford
        </div>
        <div className="hidden lg:flex gap-10 items-center">
          {['Slate', 'Work', 'Method', 'Lab', 'Collect'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="label-text text-[10px] tracking-[0.28em] text-[rgba(244,239,230,0.35)] hover:text-white transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {item}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="btn-text border border-[rgba(212,175,55,0.35)] text-[var(--bronze)] px-[22px] py-[10px] hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          BEGIN →
        </a>
      </nav>

      {/* SECTION 1 — HERO */}
      <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[var(--black)]">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 25% 35%, rgba(212,175,55,0.12) 0%, transparent 50%)' }} />
        <div className="absolute top-0 left-0 w-full h-[72px] bg-[var(--black)] z-[3]" />
        <div className="absolute bottom-0 left-0 w-full h-[72px] bg-[var(--black)] z-[3]" />
        <div className="absolute inset-[72px] border border-[rgba(244,239,230,0.04)] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[rgba(212,175,55,0.3)] pointer-events-none" />
        <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[rgba(212,175,55,0.3)] pointer-events-none" />
        
        <div className="absolute top-[102px] left-[102px] w-[18px] h-[18px] border-t border-l border-[var(--bronze)]" />
        <div className="absolute top-[102px] right-[102px] w-[18px] h-[18px] border-t border-r border-[var(--bronze)]" />
        <div className="absolute bottom-[102px] left-[102px] w-[18px] h-[18px] border-b border-l border-[var(--bronze)]" />
        <div className="absolute bottom-[102px] right-[102px] w-[18px] h-[18px] border-b border-r border-[var(--bronze)]" />

        <div className="absolute inset-0 z-[1] opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80" 
            alt="Cinematic Mountains" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="relative z-[5] text-center hero-reveal">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-[30px] h-[1px] bg-[var(--bronze)]" />
            <div className="label-text text-[9px] text-[var(--bronze)]">
              Director · Spatial Visionary · Creative Producer
            </div>
            <div className="w-[30px] h-[1px] bg-[var(--bronze)]" />
          </div>
          <h1 className="text-[clamp(3rem,9vw,9rem)] leading-[1.1] text-[var(--white)] mb-2">
            I direct ideas<br />
            <span className="italic-emphasis">into reality.</span>
          </h1>
          <div className="label-text text-[10px] tracking-[0.45em] text-[rgba(244,239,230,0.35)] mb-12">
            Films · Spaces · Concepts · Worlds
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#slate" 
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-[35px] py-[14px] hover:bg-[var(--bronze-light)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              VIEW FILM SLATE
            </a>
            <a 
              href="#portfolio" 
              className="btn-text border border-[rgba(244,239,230,0.18)] text-white px-[35px] py-[14px] hover:bg-white hover:text-[var(--black)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              ENTER STUDIO
            </a>
          </div>
        </div>

        <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-pulse">
          <div className="label-text text-[8px]">SCROLL</div>
          <div className="w-[1px] h-[40px] bg-gradient-to-b from-[var(--bronze)] to-transparent" />
        </div>
      </section>

      {/* SECTION 2 — FILM DEVELOPMENT SLATE */}
      <section id="slate" className="section-divider py-[144px] px-4 md:px-20 bg-[var(--black)]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal">
          <div>
            <div className="label-text text-[10px] text-[var(--bronze)] mb-4">02 / CURRENT SLATE</div>
            <h2 className="text-[48px] text-[var(--white)]">
              Current Film Development Slate
            </h2>
          </div>
          <a 
            href="#" 
            className="btn-text border border-[rgba(244,239,230,0.18)] text-white px-8 py-3 hover:bg-white hover:text-[var(--black)] transition-all mt-8 md:mt-0"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            VIEW FULL SLATE →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[1px] bg-[var(--line)] border border-[var(--line)] reveal">
          {[
            {
              id: '001',
              title: 'ACND',
              urgent: 'EXTREMELY URGENT',
              details: 'Dir: Sean Stone | EP: Oliver Stone & Mel Gibson',
              stats: 'Budget: $8.4M | Equity Needed: $3M',
              pos: 'Position: Senior LIFO | Return: 20% premium',
              status: 'PRE-PRODUCTION',
              statusColor: 'var(--red-urgent)'
            },
            {
              id: '002',
              title: '"99"',
              details: 'Featuring Sylvester Stallone — Deal Memo Available',
              stats: 'Budget: $12M | Allocation Open: $4M',
              status: 'FINANCING CLOSE',
              subStatus: 'IN DEVELOPMENT'
            },
            {
              id: '003',
              title: 'Exit Paradise',
              details: 'Starring Gerard Butler',
              stats: 'Budget: $25M | Allocation Open: $5M',
              status: 'FUNDED',
              subStatus: 'Structured Financing Complete',
              statusColor: 'var(--green-funded)'
            },
            {
              id: '004',
              title: 'A Town Called Consequence',
              details: 'Starring Kiefer Sutherland',
              stats: 'Budget: $8M | Allocation Open: $2M',
              status: 'FUNDED',
              subStatus: 'Packaging Phase — Fully Financed',
              statusColor: 'var(--green-funded)'
            },
            {
              id: '005',
              title: '400XY',
              urgent: 'URGENT',
              details: 'Canada · China · Greece Co-Production',
              stats: 'Role: Executive Producer & Art Direction',
              subStatus: 'Co-Production Financing Active',
              status: 'FUNDING OPEN',
              statusColor: 'var(--bronze)'
            }
          ].map((card) => (
            <div 
              key={card.id}
              className="group relative bg-[var(--black)] p-[40px_28px] overflow-hidden hover:bg-[var(--black-3)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--bronze)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              {card.urgent && (
                <div className="border border-[var(--red-urgent)] text-[var(--red-urgent)] text-[8px] tracking-[0.1em] px-2 py-1 inline-block mb-6">
                  ⚡ {card.urgent}
                </div>
              )}
              <div className="label-text text-[10px] opacity-30 mb-4">{card.id}</div>
              <h3 className="text-[28px] mb-4">{card.title}</h3>
              <div className="body-text text-[11px] opacity-60 mb-6">{card.details}</div>
              <div className="space-y-2 mb-8">
                <div className="body-text text-[11px]">{card.stats}</div>
                {card.pos && <div className="body-text text-[11px]">{card.pos}</div>}
              </div>
              <div className="flex flex-col gap-3">
                {card.status && (
                  <div 
                    className="border px-3 py-1 inline-block w-fit text-[9px] tracking-[0.1em]"
                    style={{ 
                      borderColor: card.statusColor || 'rgba(244,239,230,0.15)',
                      color: card.statusColor || 'rgba(244,239,230,0.45)'
                    }}
                  >
                    {card.status}
                  </div>
                )}
                {card.subStatus && (
                  <div className="text-[10px] italic text-[rgba(244,239,230,0.3)]">
                    {card.subStatus}
                  </div>
                )}
                <a 
                  href="https://drive.google.com/file/d/1_placeholder_deck_link/view?usp=sharing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-text mt-4 border border-[var(--bronze)] text-[var(--bronze)] px-4 py-2 hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all text-center"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  DOWNLOAD DECK
                </a>
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
            Directed Disciplines
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[1px] bg-[var(--line)] mt-20 reveal">
          {[
            { icon: '◈', title: 'Film Development' },
            { icon: '⬡', title: 'Spatial Resonance' },
            { icon: '◉', title: 'Visual Direction' },
            { icon: '△', title: 'Future Habitat Concepts' },
            { icon: '✦', title: 'NuLab Audio Visual' }
          ].map((item) => (
            <div 
              key={item.title}
              className="group relative bg-[var(--black-2)] p-[80px_32px] text-center hover:bg-[var(--black-3)] transition-all overflow-hidden"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />
              <div className="text-[24px] text-[var(--bronze)] opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{item.icon}</div>
              <h4 className="text-[17px] font-normal text-white mt-8">{item.title}</h4>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[var(--line)] mt-[1px] reveal">
          {[
            { icon: '✦', title: 'Strategic Partnerships' },
            { icon: '◈', title: 'Brand Architecture' },
            { icon: '⬡', title: 'Cinematic Consulting' }
          ].map((item) => (
            <div 
              key={item.title}
              className="group relative bg-[var(--black-2)] p-[60px_32px] text-center hover:bg-[var(--black-3)] transition-all overflow-hidden"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.12) 0%, transparent 70%)' }} />
              <div className="text-[20px] text-[var(--bronze)] opacity-30 group-hover:opacity-100 transition-all">{item.icon}</div>
              <h4 className="text-[15px] font-normal text-[rgba(244,239,230,0.4)] mt-6">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4 — SPATIAL RESONANCE™ */}
      <section id="spatial" className="section-divider relative py-[192px] px-4 md:px-20 bg-[var(--black)] text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.06) 0%, transparent 65%)' }} />
        <div className="relative z-10 reveal">
          <h2 className="text-[clamp(2.5rem,7.5vw,7.5rem)] italic text-white mb-8">
            Spatial Resonance<sup className="text-[0.22em] text-[var(--bronze)] font-body align-top">™</sup>
          </h2>
          <p className="max-w-[520px] mx-auto body-text text-[13px] leading-[2.1] text-[rgba(244,239,230,0.45)] mb-12">
            I design environments that influence perception, emotion, and energy through composition, geometry, and visual flow.
          </p>
          <a 
            href="#" 
            className="btn-text border border-[rgba(212,175,55,0.35)] text-[var(--bronze)] px-10 py-4 hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            EXPLORE SPATIAL WORK →
          </a>
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
          {[
            { id: 'I', title: 'Brittany', type: 'SPATIAL DESIGN', img: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&q=80' },
            { id: 'II', title: 'Lencois Brazil', type: 'FILM', img: 'https://images.unsplash.com/photo-1590593162211-f9827b7ad6a4?w=1200&q=80' },
            { id: 'III', title: 'Ember Pavilion', type: 'ARCHITECTURE', img: 'https://images.unsplash.com/photo-1493421419110-74f4e85ba126?w=1200&q=80' },
            { id: 'IV', title: 'Voix Campaign', type: 'VISUAL DIRECTION', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80' }
          ].map((work) => (
            <div 
              key={work.id}
              className="min-w-[480px] h-[360px] relative group overflow-hidden bg-[var(--black-2)]"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover:scale-[1.04]">
                <img 
                  src={work.img} 
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
                <div className="label-text text-[9px] text-[var(--bronze)]">{work.type}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-32 reveal">
          <a 
            href="#" 
            className="btn-text border border-[rgba(244,239,230,0.18)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            VIEW ALL WORK →
          </a>
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
            <p className="body-text text-[13px] text-[rgba(244,239,230,0.45)] leading-[2] mb-10">
              Experimental concepts for sustainable, rapid-build, and next-generation environments.
            </p>
            <a 
              href="#" 
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-10 py-4 hover:bg-[var(--bronze-light)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              ENTER LAB →
            </a>
          </div>

          <div className="relative h-[460px] border border-[rgba(212,175,55,0.12)] overflow-hidden reveal">
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
          <div className="label-text text-[10px] tracking-[0.38em] text-[rgba(244,239,230,0.35)] mb-12">
            Limited editions. Original prints. Objects.
          </div>
          <a 
            href="#" 
            className="btn-text border border-[rgba(244,239,230,0.18)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            ENTER COLLECTION →
          </a>
        </div>
      </section>

      {/* SECTION 9 — COLLABORATION CTA */}
      <section id="contact" className="section-divider py-[192px] px-4 md:px-20 bg-[var(--black)] text-center">
        <div className="reveal">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-4">09 / BEGIN</div>
          <h2 className="text-[clamp(2.5rem,6.5vw,6.5rem)] text-white leading-[1.08] mb-16">
            Let's build something<br />
            <span className="italic-emphasis">exceptional.</span>
          </h2>
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <a 
              href="mailto:DARSbit@protonmail.ch?subject=Film%20Inquiry" 
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-10 py-4 hover:bg-[var(--bronze-light)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              FILM INQUIRY
            </a>
            <a 
              href="#" 
              className="btn-text border border-[rgba(244,239,230,0.18)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              COLLABORATE
            </a>
            <a 
              href="mailto:DARSbit@protonmail.ch?subject=Commission%20Work" 
              className="btn-text border border-[rgba(212,175,55,0.35)] text-[var(--bronze)] px-10 py-4 hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              COMMISSION WORK
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section-divider bg-[var(--black)] pt-[56px] pb-[56px] px-4 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-0">
          <div>
            <div className="text-[18px] font-normal text-white">Daniel Stanford</div>
          <div className="label-text text-[9px] tracking-[0.32em] text-[var(--bronze)] mt-1">
            Director · Spatial Visionary · Creative Producer
          </div>
            <div className="label-text text-[9px] text-[var(--bronze)] opacity-60 mt-2 lowercase tracking-normal">
              Stanford Emporium
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {['Slate', 'Work', 'Method', 'Lab', 'Collect', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="label-text text-[9px] tracking-[0.23em] text-[rgba(244,239,230,0.35)] hover:text-[var(--bronze)] transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="text-center lg:text-right">
            <a 
              href="mailto:DARSbit@protonmail.ch" 
              className="body-text text-[11px] text-[rgba(244,239,230,0.45)] hover:text-white transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              DARSbit@protonmail.ch
            </a>
            <div className="flex justify-center lg:justify-end gap-6 mt-4">
              {['IG', 'Vimeo', 'IMDb', 'LI'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="label-text text-[9px] text-[rgba(244,239,230,0.2)] hover:text-[var(--bronze)] transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="label-text text-[8px] tracking-[0.22em] text-[rgba(244,239,230,0.15)]">
            © 2025 Daniel Stanford — Stanford Emporium. All rights reserved.
          </div>
          <div className="label-text text-[8px] tracking-[0.22em] text-[rgba(244,239,230,0.15)]">
            Los Angeles · New York · London
          </div>
        </div>
      </footer>
    </div>
  );
}
