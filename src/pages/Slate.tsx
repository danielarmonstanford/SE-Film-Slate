/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../types';

const Slate: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[var(--black)] min-h-screen pt-[160px] pb-[120px]">
      <div className="px-4 md:px-20 max-w-[1800px] mx-auto">
        <header className="mb-24 reveal">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-6">02 / FILM INVESTMENT SLATE</div>
          <h1 style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', color: '#e5e2e1', lineHeight: 1, marginBottom: '48px' }}>
            Film.
          </h1>
          <p className="text-[var(--cream)] text-lg max-w-2xl leading-relaxed opacity-80">
            A curated selection of high-potential cinematic ventures. Each project is structured for commercial viability, 
            leveraging strategic tax incentives and global distribution models.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-20">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id} 
              className="group flex flex-col reveal"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <Link 
                to={`/project/${project.slug}`}
                className="relative aspect-[16/9] overflow-hidden mb-8 bg-[#111]"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                {project.urgent && (
                  <div className="absolute top-4 left-4 border border-[var(--red-urgent)] text-[var(--red-urgent)] tracking-[0.1em] bg-[var(--black)]" style={{ fontSize: 'clamp(0.55rem, 2vw, 0.65rem)', padding: '4px 10px' }}>
                    ⚡ {project.urgent}
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="label-text bg-[var(--black)] text-[var(--bronze)] border border-[rgba(212,175,55,0.3)]" style={{ fontSize: 'clamp(0.55rem, 2vw, 0.65rem)', padding: '4px 10px' }}>
                    {project.status.toUpperCase()}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl text-white tracking-tight">{project.title}</h3>
                  <span className="label-text text-[10px] text-[var(--bronze)] mt-2">
                    {project.budgetRange}
                  </span>
                </div>
                
                <p className="text-[var(--cream)] text-sm mb-6 leading-relaxed opacity-70 italic">
                  "{project.positioning}"
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8 border-t border-[rgba(244,239,230,0.1)] pt-6">
                  <div>
                    <div className="label-text text-[8px] text-[rgba(244,239,230,0.4)] mb-1 uppercase tracking-widest">Genre</div>
                    <div className="text-[11px] text-[var(--cream)] uppercase tracking-wider">{project.genre}</div>
                  </div>
                  <div>
                    <div className="label-text text-[8px] text-[rgba(244,239,230,0.4)] mb-1 uppercase tracking-widest">Comparables</div>
                    <div className="text-[11px] text-[var(--cream)] uppercase tracking-wider">{project.comparables?.join(', ')}</div>
                  </div>
                </div>

                <Link
                  to={`/project/${project.slug}`}
                  className="btn-text w-full py-4 border border-[rgba(212,175,55,0.3)] text-[var(--bronze)] text-center hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all mobile-full-width"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  VIEW SLATE OVERVIEW
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER CTA */}
        <div className="mt-40 pt-24 border-t border-[rgba(244,239,230,0.1)] text-center reveal">
          <h2 className="text-4xl text-white mb-12">Interested in our full portfolio?</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/inquire"
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-10 py-4 hover:bg-[var(--bronze-light)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              REQUEST INVESTMENT MATERIALS
            </Link>
            <a
              href="mailto:DARSbit@prontonmail.ch?subject=Investor%20Call"
              className="btn-text border border-[rgba(244,239,230,0.2)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              SCHEDULE INVESTOR CALL
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slate;
