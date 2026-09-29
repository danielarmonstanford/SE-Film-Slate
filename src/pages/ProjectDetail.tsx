/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS, Project } from '../types';
import { motion } from 'motion/react';

interface NotionDoc {
  name: string;
  url: string;
}

const SECRET_PORTAL_PASSWORD = 'invest2026';
const SECRET_PORTAL_SESSION_KEY = 'secret-film-projects-portal-access';

// ── Reusable CTA block ────────────────────────────────────────────────────────
interface ProjectCTAProps {
  headline: string;
  body: string;
  investorPackUrl: string;
  primaryLabel?: string;
  setIsHovering: (v: boolean) => void;
}

const ProjectCTA: React.FC<ProjectCTAProps> = ({
  headline,
  body,
  investorPackUrl,
  primaryLabel = 'INQUIRE',
  setIsHovering,
}) => (
  <div className="max-w-2xl mx-auto text-center">
    <h3 className="text-3xl md:text-4xl mb-6 leading-snug">{headline}</h3>
    <p className="text-[var(--text-72)] text-sm leading-loose mb-10 max-w-xl mx-auto">{body}</p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        to="/inquire"
        className="btn-text bg-[var(--bronze)] text-[var(--black)] px-10 py-4 hover:bg-[var(--bronze-light)] transition-colors"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {primaryLabel}
      </Link>
      <a
        href={investorPackUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-text border border-[var(--border)] text-[var(--text)] px-10 py-4 hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        DOWNLOAD INVESTOR PACK
      </a>
    </div>
  </div>
);
// ─────────────────────────────────────────────────────────────────────────────

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [docs, setDocs] = useState<NotionDoc[]>([]);
  const [docsLoading, setDocsLoading] = useState(false);
  const [portalPassword, setPortalPassword] = useState('');
  const [portalError, setPortalError] = useState('');
  const [portalUnlocked, setPortalUnlocked] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundProject = PROJECTS.find(p => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/slate');
    }
  }, [slug, navigate]);

  useEffect(() => {
    if (!project?.notionPageId) return;
    const apiKey = import.meta.env.VITE_NOTION_API_KEY;
    if (!apiKey) return;

    setDocsLoading(true);
    fetch(`https://api.notion.com/v1/blocks/${project.notionPageId}/children?page_size=100`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Notion-Version': '2022-06-28',
      },
    })
      .then(r => r.json())
      .then(data => {
        const files: NotionDoc[] = (data.results || [])
          .filter((b: any) => b.type === 'file')
          .map((b: any) => ({
            name: b.file?.name || 'Document',
            url: b.file?.file?.url || b.file?.external?.url || '',
          }))
          .filter((f: NotionDoc) => f.url);
        setDocs(files);
      })
      .catch(() => {})
      .finally(() => setDocsLoading(false));
  }, [project]);

  useEffect(() => {
    if (slug !== 'ugrp') return;
    setPortalUnlocked(window.sessionStorage.getItem(SECRET_PORTAL_SESSION_KEY) === 'granted');
  }, [slug]);

  const unlockSecretPortal = (event: React.FormEvent) => {
    event.preventDefault();
    if (portalPassword !== SECRET_PORTAL_PASSWORD) {
      setPortalError('Incorrect password. Please try again.');
      return;
    }
    window.sessionStorage.setItem(SECRET_PORTAL_SESSION_KEY, 'granted');
    setPortalError('');
    setPortalUnlocked(true);
  };

  if (!project) return null;

  // Single source of truth for the investor pack URL
  const investorPackUrl = project.dataRoomUrl;
  const isNapoleonStreet = slug === '400xy';
  const financingDataRoomUrl = project.taxCreditDocumentsUrl;
  const historicalSourceArchiveUrl = 'https://drive.google.com/drive/folders/15vOymgjiuI-By3ESevht6q_7YVifF0A3';
  const napoleonStreetDocuments = {
    current: [
      { title: 'Napoleon Street Waterfall — 2026-09-24', status: 'Current' },
      { title: 'SODEC — 400 Boys Quebec Tax Credit Decision', status: 'Tax Credit' },
      { title: 'National Bank of Canada — 400 Boys Tax Credit Financing Term Sheet', status: 'Bank Financing' },
    ],
    historical: [
      { title: 'Canadian federal and provincial tax credit history', status: 'Historical' },
      { title: 'Hungary rebate / financing history', status: 'Historical' },
      { title: 'China financing / co-production history', status: 'Reference' },
      { title: 'Product placement revenue projection', status: 'Reference' },
      { title: 'International sales projections', status: 'Reference' },
      { title: 'Prior financing structure documents', status: 'Historical' },
    ],
  };

  // Incomplete projects show a minimal gated view
  const isIncomplete = !project.marketPositioning;

  if (isIncomplete) {
    return (
      <div className="bg-[var(--bg)] min-h-screen text-[var(--text)] pt-[160px] pb-[120px] px-4 md:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="label-text text-[10px] text-[var(--bronze)] mb-8 uppercase tracking-[0.4em]">Opportunity Overview</div>
          <h1 className="text-[clamp(3rem,8vw,8rem)] leading-[0.95] mb-12 uppercase">{project.title}</h1>
          <p className="text-[var(--cream)] text-xl mb-16 opacity-80 italic">"Full materials available upon request."</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/inquire"
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-10 py-4 hover:bg-[var(--bronze-light)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              INQUIRE
            </Link>
            <Link
              to="/slate"
              className="btn-text border border-[var(--border)] text-[var(--text)] px-10 py-4 hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              BACK TO FILM INVESTMENT SLATE
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  // ── UGRP — custom layout ──────────────────────────────────────────────────
  if (slug === 'ugrp') {
    if (!portalUnlocked) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)]" style={{ minHeight: '100vh', background: '#080705', color: 'var(--text)' }}>
          <div style={{ minHeight: '46vh', position: 'relative', overflow: 'hidden' }}>
            <img
              src="/secret-film-projects-portal.jpg"
              alt="2026 Secret Film Projects Portal"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, transparent 35%, #080705 100%)' }} />
          </div>
          <main style={{ padding: 'clamp(120px, 12vw, 180px) clamp(28px, 7vw, 112px) clamp(64px, 9vw, 120px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '720px' }}>
            <p style={{ margin: '0 0 20px', fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 300, letterSpacing: '0.38em', textTransform: 'uppercase', color: '#C9971F' }}>
              Restricted Access
            </p>
            <h1 style={{ margin: '0 0 24px', fontFamily: 'var(--font-serif)', fontSize: 'clamp(3rem, 6vw, 6.5rem)', lineHeight: 0.92, fontStyle: 'italic', fontWeight: 300, color: 'var(--text)' }}>
              2026 Secret Film Projects Portal
            </h1>
            <p style={{ margin: '0 0 36px', maxWidth: '460px', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(1rem, 1.6vw, 1.2rem)', lineHeight: 1.65, color: 'var(--text-72)' }}>
              Enter your password to access confidential project materials.
            </p>
            <form onSubmit={unlockSecretPortal} style={{ maxWidth: '430px' }}>
              <label htmlFor="secret-portal-password" style={{ display: 'block', marginBottom: '10px', fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 300, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--text-45)' }}>
                Password
              </label>
              <input
                id="secret-portal-password"
                type="password"
                value={portalPassword}
                onChange={event => setPortalPassword(event.target.value)}
                autoComplete="current-password"
                style={{ width: '100%', boxSizing: 'border-box', background: 'transparent', border: '1px solid var(--text-25)', color: 'var(--text)', padding: '15px 16px', fontSize: '16px', outline: 'none' }}
                required
              />
              {portalError && <p style={{ margin: '12px 0 0', color: '#FF7777', fontSize: '13px' }}>{portalError}</p>}
              <button type="submit" style={{ marginTop: '16px', background: '#C9971F', border: 0, color: '#080705', cursor: 'pointer', padding: '14px 24px', fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 300, letterSpacing: '0.28em', textTransform: 'uppercase' }}>
                Enter Portal
              </button>
            </form>
          </main>
        </div>
      );
    }

    const ROW = ({ label, value, gold = false, bold = false }: { label: string; value: string; gold?: boolean; bold?: boolean }) => (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: '1px solid var(--border)', gap: '24px' }}>
        <span style={{ fontSize: '11px', color: 'var(--text-45)', letterSpacing: '0.06em', flexShrink: 0, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{label}</span>
        <span style={{ fontSize: '13px', color: gold ? '#ffc800' : 'var(--text)', textAlign: 'right', fontWeight: (gold || bold) ? 600 : 300, fontFamily: 'var(--font-sans)' }}>{value}</span>
      </div>
    );
    return (
      <div style={{ background: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section style={{ position: 'relative', height: '85vh', minHeight: '520px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
          <img src={project.heroImage || project.image} alt={project.title}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: 0.45 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--overlay-dark) 0%, var(--overlay-mid) 50%, transparent 100%)' }} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 2, padding: '0 clamp(28px,6vw,80px) clamp(48px,6vw,72px)', maxWidth: '900px' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '16px' }}>
              Exclusive Film Investment Portal · Stanford Emporium Inc.
            </p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(3.2rem,8vw,8rem)', lineHeight: 0.9, color: 'var(--text)', marginBottom: '24px' }}>
              {project.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1rem,2vw,1.35rem)', lineHeight: 1.55, color: 'var(--text-72)', maxWidth: '580px', marginBottom: '36px' }}>
              Up to $500,000 in Lifetime Participation Shares — available only for a limited time through Stanford Emporium Inc. Fixed minimum return of $1,500,000 in 6–12 months.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/investor-inquiry"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', background: 'var(--overlay-mid)', border: '1px solid rgba(201,151,31,0.5)', color: '#C9971F', padding: '13px 28px', textDecoration: 'none', display: 'inline-block', backdropFilter: 'blur(4px)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#C9971F'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--bg)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--overlay-mid)'; (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F'; }}>
                Request Investment Terms
              </Link>
              <Link to="/project/ugrp/dataroom"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', background: 'var(--overlay-mid)', border: '1px solid var(--text-25)', color: 'var(--text-72)', padding: '13px 28px', textDecoration: 'none', display: 'inline-block', backdropFilter: 'blur(4px)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border-2)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-25)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-72)'; }}>
                Investor Data Room →
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── 2. THE FILM ──────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(56px,7vw,80px) clamp(28px,6vw,80px)', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '720px' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '28px' }}>
              The Film
            </p>
            <ROW label="Director" value="Guy Ritchie" />
            <ROW label="Cast" value="Henry Cavill · Jake Gyllenhaal · Eiza González" />
            <ROW label="Distributor" value="Black Bear International" />
            <ROW label="Production Status" value="Principal photography complete" gold />
            <ROW label="US Distribution" value="Confirmed" gold />
            <ROW label="Budget" value="$73.8M fully financed" />
          </div>
        </section>

        {/* ── 3. CTA ───────────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(72px,8vw,100px) clamp(28px,6vw,80px)', background: 'var(--bg)', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.1rem,2.2vw,1.5rem)', lineHeight: 1.65, color: 'var(--text-72)', marginBottom: '40px' }}>
              This opportunity is available to qualified investors under NDA. Contact Stanford Emporium Inc. to receive the term sheet.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/investor-inquiry"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', background: '#C9971F', color: 'var(--bg)', padding: '15px 36px', textDecoration: 'none', display: 'inline-block' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#F0C84A'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#C9971F'; }}>
                Request Investment Terms
              </Link>
              <Link to="/project/ugrp/dataroom"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', border: '1px solid var(--text-25)', color: 'var(--text-72)', padding: '15px 36px', textDecoration: 'none', display: 'inline-block' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-72)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--text-25)'; (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-72)'; }}>
                Investor Data Room →
              </Link>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ───────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(32px,4vw,56px) clamp(28px,6vw,80px)', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', lineHeight: 1.85, color: 'var(--text-35)', fontStyle: 'italic', marginBottom: '24px' }}>
              This listing is directed to qualified/accredited investors only and does not constitute a public securities offering. Investors should seek independent legal and tax advice. Financial projections are indicative only. © Blackbear Pictures. All Rights Reserved. IP owned by Blackbear Pictures.
            </p>
            <Link to="/investment-opportunities"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-25)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-72)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-25)'}>
              ← Back to Film Investment Slate
            </Link>
          </div>
        </section>

      </div>
    );
  }
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className={`bg-[var(--bg)] min-h-screen text-[var(--text)]${isNapoleonStreet ? ' project-detail--400xy' : ''}`}>

      {/* SECTION 1: HERO */}
      <section className="relative h-[90vh] flex items-end pb-24 overflow-hidden" style={{ paddingLeft: 'clamp(28px, 6vw, 100px)', paddingRight: 'clamp(28px, 6vw, 100px)' }}>
        <div className="absolute inset-0 z-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-5xl"
        >
          <div className="label-text text-[10px] text-[var(--bronze)] mb-6 uppercase tracking-[0.4em]">01 / OPPORTUNITY HERO</div>
          <h1 className="text-[clamp(2.8rem,6.5vw,7rem)] leading-[0.9] mb-8 uppercase tracking-tight">
            {project.title}
          </h1>
          <p className="text-[var(--cream)] text-xl md:text-2xl mb-12 opacity-90 italic max-w-3xl font-light">
            "{project.positioning}"
          </p>
          <div className="flex flex-wrap gap-8 items-center mb-12">
            <div className="flex flex-col">
              <span className="label-text text-[9px] text-[var(--text-35)] uppercase mb-1">Budget Range</span>
              <span className="text-xl text-[var(--bronze)]">{project.budgetRange}</span>
            </div>
            <div className="w-[1px] h-10 bg-[var(--border)]" />
            <div className="flex flex-col">
              <span className="label-text text-[9px] text-[var(--text-35)] uppercase mb-1">Current Status</span>
              <span className="text-xl text-[var(--text)] uppercase tracking-wider">{project.status}</span>
            </div>
          </div>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={investorPackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-12 py-5 hover:bg-[var(--bronze-light)] transition-colors inline-block"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              VIEW SLATE OVERVIEW
            </a>
            {project.dataRoomGatedPath && (
              <Link
                to={project.dataRoomGatedPath}
                className="btn-text bg-[var(--red)] text-[var(--text)] px-12 py-5 hover:bg-[#CC0000] transition-colors inline-block"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                ACCESS FULL DATA ROOM
              </Link>
            )}
            <Link
              to="/inquire"
              className="btn-text border border-[var(--border-2)] text-[var(--text)] px-12 py-5 hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all inline-block"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              INQUIRE
            </Link>
            {project.taxCreditDocumentsUrl && (
              <a
                href={project.taxCreditDocumentsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-text border border-[var(--bronze)] text-[var(--bronze)] px-12 py-5 hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-all inline-block"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                TAX CREDIT PAPERWORK
              </a>
            )}
          </div>
        </motion.div>
      </section>

      {/* STORYBOARD — supplied project visual, presented silently by default */}
      {project.storyboardVideo && (
        <section style={{ background: '#080705', padding: 'clamp(32px, 4vw, 56px) 0 0' }}>
          <div style={{
            padding: '0 clamp(28px, 6vw, 100px) clamp(20px, 2vw, 28px)',
            display: 'flex', alignItems: 'center', gap: '20px',
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px',
              letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F',
            }}>
              400XY Storyboard
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(201,151,31,0.2)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px',
              letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.3)',
            }}>
              Muted Preview
            </span>
          </div>
          <video
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            aria-label={`${project.title} storyboard`}
            style={{ display: 'block', width: '100%', maxHeight: '78vh', objectFit: 'contain', background: '#000' }}
          >
            <source src={project.storyboardVideo} type="video/mp4" />
            Your browser does not support the storyboard video.
          </video>
        </section>
      )}

      {/* TRAILER SECTION — shown when trailerYoutubeId is set */}
      {project.trailerYoutubeId && (
        <section style={{ background: '#080705', padding: '0' }}>
          {/* Top label bar */}
          <div style={{
            padding: 'clamp(32px, 4vw, 56px) clamp(28px, 6vw, 100px) 0',
            display: 'flex', alignItems: 'center', gap: '20px',
          }}>
            <span style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px',
              letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F',
            }}>
              Official Trailer
            </span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(201,151,31,0.2)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px',
              letterSpacing: '0.45em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.25)',
            }}>
              Paramount Pictures · September 4
            </span>
          </div>

          {/* Full-width video */}
          <div style={{
            position: 'relative', width: '100%',
            paddingBottom: '56.25%',
            marginTop: 'clamp(24px, 3vw, 40px)',
          }}>
            <iframe
              src={`https://www.youtube.com/embed/${project.trailerYoutubeId}?rel=0&modestbranding=1`}
              title={`${project.title} — Official Trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                border: 'none',
              }}
            />
          </div>

          {/* Bottom tagline */}
          <div style={{
            padding: 'clamp(24px, 3vw, 40px) clamp(28px, 6vw, 100px) clamp(40px, 5vw, 72px)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px',
          }}>
            <p style={{
              fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300,
              fontSize: 'clamp(1rem, 2vw, 1.4rem)', color: 'rgba(244,239,230,0.55)',
              margin: 0, maxWidth: '680px', lineHeight: 1.55,
            }}>
              "{project.logline}"
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${project.trailerYoutubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px',
                letterSpacing: '0.32em', textTransform: 'uppercase',
                color: '#C9971F', textDecoration: 'none',
                border: '1px solid rgba(201,151,31,0.35)', padding: '10px 20px',
                flexShrink: 0, transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#C9971F'; (e.currentTarget as HTMLAnchorElement).style.color = '#080705'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F'; }}
            >
              Watch on YouTube →
            </a>
          </div>
        </section>
      )}

      {/* SECTION 2: INVESTMENT SNAPSHOT */}
      <section className="py-32 px-4 md:px-20 bg-[var(--bg)]">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-12 uppercase tracking-[0.4em]">02 / INVESTMENT SNAPSHOT</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-8 border border-[var(--border)] bg-[var(--surface)]">
              <h4 className="label-text text-[11px] text-[var(--bronze)] mb-6 uppercase">Financials</h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--text-72)] text-sm">Equity Available</span>
                  <span className="text-[var(--text)] text-sm">{project.equityAvailable}</span>
                </li>
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--text-72)] text-sm">Tax Incentives</span>
                  <span className="text-[var(--text)] text-sm">{project.taxIncentives}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[var(--text-72)] text-sm">Target ROI Range</span>
                  <span className="text-[var(--text)] text-sm font-bold text-[var(--bronze)]">{project.targetROI}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border border-[var(--border)] bg-[var(--surface)]">
              <h4 className="label-text text-[11px] text-[var(--bronze)] mb-6 uppercase">Market Strategy</h4>
              <ul className="space-y-4">
                <li className="flex flex-col border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--text-72)] text-[10px] uppercase mb-1">Sales Strategy</span>
                  <span className="text-[var(--text)] text-sm">{project.salesStrategy}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[var(--text-72)] text-[10px] uppercase mb-1">Comparable Films</span>
                  <span className="text-[var(--text)] text-sm">{project.comparables?.join(' / ')}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border border-[var(--border)] bg-[var(--surface)]">
              <h4 className="label-text text-[11px] text-[var(--bronze)] mb-6 uppercase">Project Data</h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-[var(--border)] pb-2">
                  <span className="text-[var(--text-72)] text-sm">Genre</span>
                  <span className="text-[var(--text)] text-sm">{project.genre}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[var(--text-72)] text-sm">Production Year</span>
                  <span className="text-[var(--text)] text-sm">{project.year}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 400XY / NAPOLEON STREET: FINANCING DOCUMENTATION */}
      {isNapoleonStreet && financingDataRoomUrl && (
        <section className="py-20 md:py-24 px-4 md:px-20 border-t border-[var(--border)] bg-[var(--bg-2)]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl text-[var(--text)] mb-4">Financing &amp; Tax Credit Documentation</h2>
              <p className="text-[var(--cream)] opacity-65 text-base leading-relaxed">
                Current financing materials for 400 / Napoleon Street, including the Canadian tax credit structure, current waterfall, and supporting historical documentation.
              </p>
            </div>

            <div className="border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8 mb-10">
              <h3 className="text-xl text-[var(--text)] mb-6">Current Financing Snapshot</h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                {[
                  ['Core production budget', 'US$17.91M'],
                  ['Greek rebate advance', 'US$3.00M'],
                  ['Federal tax credit advance', 'US$1.07M'],
                  ['Provincial tax credit advance', 'US$2.77M'],
                  ['Private investment requirement', 'US$7.25M'],
                  ['Total financing', 'US$17.91M'],
                ].map(([label, value]) => (
                  <div key={label} className="py-4 border-b border-[var(--border)] last:border-b sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0">
                    <dt className="text-[11px] text-[var(--text-35)] tracking-wide mb-1">{label}</dt>
                    <dd className="text-lg text-[var(--bronze)]">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 pt-5 border-t border-[var(--border)] text-xs text-[var(--cream)] opacity-50 leading-relaxed max-w-4xl">
                Historical Canadian tax credit and financing documents are included for due-diligence reference. Current eligibility and final amounts remain subject to updated production structure, certification, and lender review.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {[
                { title: 'Current Materials', documents: napoleonStreetDocuments.current, url: financingDataRoomUrl, action: 'Open Data Room' },
                { title: 'Historical Supporting Materials', documents: napoleonStreetDocuments.historical, url: historicalSourceArchiveUrl, action: 'Open Historical 400 Project Source Archive' },
              ].map((group) => (
                <div key={group.title}>
                  <h3 className="text-lg text-[var(--text)] mb-4">{group.title}</h3>
                  <div className="border-t border-[var(--border)]">
                    {group.documents.map((document) => (
                      <div key={document.title} className="py-4 border-b border-[var(--border)] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm text-[var(--text)] leading-snug">{document.title}</p>
                          <span className="inline-block mt-2 border border-[var(--border-2)] px-2 py-0.5 text-[10px] text-[var(--text-72)]">{document.status}</span>
                        </div>
                        <a
                          href={group.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-text text-[10px] text-[var(--bronze)] border border-[var(--bronze)] px-4 py-2 hover:bg-[var(--bronze)] hover:text-[var(--black)] transition-colors shrink-0 text-center"
                        >
                          {group.action}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={financingDataRoomUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text inline-block mt-10 bg-[var(--bronze)] text-[var(--black)] px-8 py-4 hover:bg-[var(--bronze-light)] transition-colors"
            >
              Open Investor Data Room
            </a>
          </div>
        </section>
      )}

      {/* MID-PAGE CTA — after snapshot */}
      <section className="py-14 px-4 md:px-20 border-t border-[var(--border)]">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-sm text-[var(--cream)] opacity-70 mb-1">Access the Full Investor Package</p>
            <p className="text-xs text-[var(--cream)] opacity-40">Deck, finance plan, budget summary, and supporting materials.</p>
          </div>
          <div className="flex gap-4 shrink-0">
            <a
              href={investorPackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text border border-[var(--border)] text-[var(--cream)] px-6 py-3 text-xs hover:border-[var(--bronze)] hover:text-[var(--bronze)] transition-all"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              DOWNLOAD PACK
            </a>
            <Link
              to="/inquire"
              className="btn-text text-[var(--bronze)] px-4 py-3 text-xs hover:opacity-70 transition-opacity"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              INQUIRE →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC VALUE */}
      <section className="py-32 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-16 uppercase tracking-[0.4em]">03 / STRATEGIC VALUE</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-4xl mb-8 leading-tight">Market Positioning</h3>
              <div className="text-[var(--cream)] opacity-70 leading-relaxed text-lg mb-12 space-y-4">
                {project.marketPositioning.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[var(--bronze)] text-sm uppercase tracking-widest mb-3">Target Audience</h4>
                  <p className="text-[var(--cream)] opacity-80 leading-relaxed">{project.audience}</p>
                </div>
                <div>
                  <h4 className="text-[var(--bronze)] text-sm uppercase tracking-widest mb-3">Timing Relevance</h4>
                  <p className="text-[var(--cream)] opacity-80 leading-relaxed">{project.timingRelevance}</p>
                </div>
              </div>
            </div>
            <div className="bg-[var(--bg-2)] p-12 border-l-2 border-[var(--bronze)]">
              <h3 className="text-2xl mb-8 uppercase tracking-wider">Commercial Strengths</h3>
              <ul className="space-y-6">
                {project.commercialStrengths?.map((strength, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-[var(--bronze)] font-bold">0{i + 1}</span>
                    <p className="text-[var(--cream)] opacity-90">{strength}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: VISUAL & TONE — only shown when images exist */}
      {project.previewImages && project.previewImages.length > 0 && (
        <section className="py-32 px-4 md:px-20 bg-[var(--bg)]">
          <div className="max-w-7xl mx-auto">
            <div className="label-text text-[10px] text-[var(--bronze)] mb-16 uppercase tracking-[0.4em]">04 / VISUAL & TONE</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.previewImages.map((img, i) => (
                <div key={i} className="aspect-[16/9] overflow-hidden bg-[var(--bg-2)]">
                  <img
                    src={img}
                    alt={`Visual ${i}`}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: DIRECTOR'S REEL */}
      {project.youtubeId && (
        <section className="py-32 px-4 md:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="label-text text-[10px] text-[var(--bronze)] mb-16 uppercase tracking-[0.4em]">05 / DIRECTOR'S REEL</div>
            <div className="relative w-full max-w-4xl" style={{ paddingBottom: '45%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title="Director's Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: KEY TEAM */}
      <section className="py-32 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-16 uppercase tracking-[0.4em]">06 / KEY TEAM</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {project.team?.map((member, i) => (
              <div key={i} className="flex flex-col">
                <span className="label-text text-[9px] text-[var(--text-35)] uppercase mb-2">{member.role}</span>
                <span className="text-xl text-[var(--text)] mb-2">{member.name}</span>
                <p className="text-[11px] text-[var(--cream)] opacity-50 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING CTA */}
      <section className="py-32 px-4 md:px-20 bg-[var(--bg)] text-center border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-8 uppercase tracking-[0.4em]">Next Steps</div>
          <h3 className="text-2xl mb-4 text-[var(--text)]">Serious Investor Inquiry</h3>
          <p className="text-xs text-[var(--cream)] opacity-50 leading-relaxed mb-10 max-w-lg mx-auto">
            For strategic partners, co-producers, and qualified investors — contact us for direct access and deal terms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inquire"
              className="btn-text bg-[var(--bronze)] text-[var(--black)] px-8 py-4 hover:bg-[var(--bronze-light)] transition-colors text-xs"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {slug === '400xy' ? 'INQUIRE FOR NDA + PITCH DECK ACCESS' : 'INQUIRE'}
            </Link>
            <a
              href={investorPackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-text border border-[var(--border)] text-[var(--cream)] px-8 py-4 hover:border-[var(--bronze)] hover:text-[var(--bronze)] transition-all text-xs"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              VIEW SLATE OVERVIEW
            </a>
            {project.dataRoomGatedPath && (
              <Link
                to={project.dataRoomGatedPath}
                className="btn-text border border-[var(--red)] text-[var(--red)] px-8 py-4 hover:bg-[var(--red)] hover:text-white transition-all text-xs"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                FULL DATA ROOM →
              </Link>
            )}
          </div>

          {/* Notion PDF documents */}
          {(docsLoading || docs.length > 0) && (
            <div className="mt-16">
              <div className="label-text text-[10px] text-[var(--bronze)] opacity-60 mb-6 uppercase tracking-[0.4em]">
                Investment Documents
              </div>
              {docsLoading ? (
                <p className="text-[var(--cream)] opacity-40 text-sm">Loading documents…</p>
              ) : (
                <div className="flex flex-wrap gap-4 justify-center">
                  {docs.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-text border border-[var(--border)] text-[var(--cream)] px-6 py-3 text-xs hover:border-[var(--bronze)] hover:text-[var(--bronze)] transition-all inline-flex items-center gap-2"
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      ↓ {doc.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="mt-20">
            <Link
              to="/slate"
              className="text-[var(--bronze)] text-xs uppercase tracking-[0.3em] hover:opacity-70 transition-opacity"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              ← BACK TO FILM INVESTMENT SLATE
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
