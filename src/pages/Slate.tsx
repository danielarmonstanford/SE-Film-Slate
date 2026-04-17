/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../types';
import FilmPosterCard, { FilmPosterCardProject } from '../components/FilmPosterCard';

// Derive statusLabel from project flags
function getStatusLabel(p: typeof PROJECTS[number]): string {
  if (p.timeSensitive && p.timeSensitiveLabel) return p.timeSensitiveLabel;
  if (p.timeSensitive) return 'Limited Window';
  if (p.status === 'Funded') return 'Fully Funded';
  if (p.status === 'Financing Close') return 'Financing Close';
  if (p.status === 'Funding Open') return p.urgent ?? 'Funding Open';
  return p.status;
}

// Map PROJECTS entry → FilmPosterCardProject
function toCardProject(p: typeof PROJECTS[number]): FilmPosterCardProject {
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    posterImage: p.heroImage ?? p.image ?? `/posters/${p.id}.jpg`,
    director: p.director ?? (p.team?.find(t => t.role === 'Director')?.name),
    cast: Array.isArray(p.talent)
      ? (p.talent as string[]).join(' · ')
      : (p.talent ?? p.team?.filter(t => t.role.toLowerCase().includes('cast')).map(t => t.name).join(' · ')),
    budget: p.budgetRange,
    equityAsk: p.equityAvailable,
    statusLabel: getStatusLabel(p),
    timeSensitive: p.timeSensitive,
    urgency: p.urgency,
    funded: p.status === 'Funded',
  };
}

const Slate: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('active'); }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[var(--black)] min-h-screen pt-[160px] pb-[120px]">
      <div className="px-4 md:px-20 max-w-[1800px] mx-auto">

        <header className="mb-24 reveal">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-6">02 / INVESTMENT OPPORTUNITIES</div>
          <h1 style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', color: '#e5e2e1', lineHeight: 1, marginBottom: '48px' }}>
            Film.
          </h1>
          <p className="text-[var(--cream)] text-lg max-w-2xl leading-relaxed opacity-80">
            A curated selection of high-potential cinematic ventures. Each project is structured for commercial viability,
            leveraging strategic tax incentives and global distribution models.
          </p>
          <p className="text-[var(--cream)] text-base max-w-2xl leading-relaxed opacity-60 mt-6">
            Our slate includes feature, limited series, and high-concept IP in advanced development. We are actively seeking strategic investment and partnerships. For investors, co-producers, and creative financiers, connect via <Link to="/investor-inquiry" style={{ color: 'inherit', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Inquire</Link> or access investor materials.
          </p>
        </header>

        {/* Film poster grid */}
        <div
          className="film-poster-grid reveal"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(12px, 2vw, 24px)',
          }}
        >
          {PROJECTS.map(p => (
            <div key={p.id} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <FilmPosterCard project={toCardProject(p)} />

              {/* Hell's Kitchen PDF downloads sit below the card, outside the overlay */}
              {p.slug === 'hells-kitchen' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a
                    href="/HK_Finance_Dossier.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block', textAlign: 'center', padding: '10px',
                      border: '1px solid rgba(244,239,230,0.15)',
                      fontFamily: "'Barlow', sans-serif", fontWeight: 300,
                      fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase',
                      color: 'rgba(244,239,230,0.65)', textDecoration: 'none',
                      transition: 'background 0.3s, color 0.3s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(244,239,230,0.06)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,239,230,0.65)'; }}
                  >
                    ↓ Finance Dossier — PDF
                  </a>
                  <a
                    href="/HK_Pitch_Deck.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block', textAlign: 'center', padding: '10px',
                      border: '1px solid rgba(244,239,230,0.15)',
                      fontFamily: "'Barlow', sans-serif", fontWeight: 300,
                      fontSize: '9px', letterSpacing: '0.28em', textTransform: 'uppercase',
                      color: 'rgba(244,239,230,0.65)', textDecoration: 'none',
                      transition: 'background 0.3s, color 0.3s',
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(244,239,230,0.06)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,239,230,0.65)'; }}
                  >
                    ↓ Pitch Deck — PDF
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-40 pt-24 border-t border-[rgba(244,239,230,0.1)] text-center reveal">
          <h2 className="text-4xl text-white mb-12" style={{ fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic' }}>
            Investor Access &amp; Production Engagement
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/investor-inquiry"
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-10 py-4 hover:bg-[var(--bronze-light)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              REQUEST INVESTOR PACKAGE
            </Link>
            <a
              href="mailto:DASRbit@protonmail.ch?subject=Investor%20Call%20Request"
              className="btn-text border border-[rgba(244,239,230,0.2)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              SCHEDULE PRIVATE DISCUSSION
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slate;
