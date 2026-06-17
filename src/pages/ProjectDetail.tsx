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
    <p className="text-[rgba(229,226,225,0.72)] text-sm leading-loose mb-10 max-w-xl mx-auto">{body}</p>
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
        className="btn-text border border-[rgba(244,239,230,0.2)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
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

  if (!project) return null;

  // Single source of truth for the investor pack URL
  const investorPackUrl = project.dataRoomUrl;

  // Incomplete projects show a minimal gated view
  const isIncomplete = !project.marketPositioning;

  if (isIncomplete) {
    return (
      <div className="bg-[var(--black)] min-h-screen text-white pt-[160px] pb-[120px] px-4 md:px-20">
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
              className="btn-text border border-[rgba(244,239,230,0.2)] text-white px-10 py-4 hover:bg-white hover:text-[var(--black)] transition-all"
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
    const ROW = ({ label, value, gold = false, bold = false }: { label: string; value: string; gold?: boolean; bold?: boolean }) => (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '10px 0', borderBottom: '1px solid rgba(244,239,230,0.06)', gap: '24px' }}>
        <span style={{ fontSize: '11px', color: 'rgba(229,226,225,0.45)', letterSpacing: '0.06em', flexShrink: 0, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{label}</span>
        <span style={{ fontSize: '13px', color: gold ? '#ffc800' : '#e5e2e1', textAlign: 'right', fontWeight: (gold || bold) ? 600 : 300, fontFamily: 'var(--font-sans)' }}>{value}</span>
      </div>
    );
    return (
      <div style={{ background: '#080705', color: '#F4EFE6', minHeight: '100vh' }}>

        {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
        <section style={{ position: 'relative', height: '85vh', minHeight: '520px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
          <img src={project.heroImage || project.image} alt={project.title}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: 0.45 }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,7,5,0.97) 0%, rgba(8,7,5,0.4) 50%, transparent 100%)' }} />
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', zIndex: 2, padding: '0 clamp(28px,6vw,80px) clamp(48px,6vw,72px)', maxWidth: '900px' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '16px' }}>
              Equity Divestment Opportunity
            </p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(3.2rem,8vw,8rem)', lineHeight: 0.9, color: '#F4EFE6', marginBottom: '24px' }}>
              {project.title}
            </h1>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1rem,2vw,1.35rem)', lineHeight: 1.55, color: 'rgba(229,226,225,0.82)', maxWidth: '580px', marginBottom: '36px' }}>
              A completed Guy Ritchie film. A contractual equity position. A guaranteed return with lifetime upside.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <Link to="/investor-inquiry"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', background: 'rgba(8,7,5,0.65)', border: '1px solid rgba(201,151,31,0.5)', color: '#C9971F', padding: '13px 28px', textDecoration: 'none', display: 'inline-block', backdropFilter: 'blur(4px)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#C9971F'; (e.currentTarget as HTMLAnchorElement).style.color = '#080705'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(8,7,5,0.65)'; (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F'; }}>
                Request Investment Terms
              </Link>
              <Link to="/project/ugrp/dataroom"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', background: 'rgba(8,7,5,0.65)', border: '1px solid rgba(244,239,230,0.2)', color: 'rgba(244,239,230,0.7)', padding: '13px 28px', textDecoration: 'none', display: 'inline-block', backdropFilter: 'blur(4px)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(244,239,230,0.5)'; (e.currentTarget as HTMLAnchorElement).style.color = '#F4EFE6'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(244,239,230,0.2)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,239,230,0.7)'; }}>
                Investor Data Room →
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── 2. THE FILM ──────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(56px,7vw,80px) clamp(28px,6vw,80px)', background: '#080808', borderTop: '1px solid rgba(244,239,230,0.05)' }}>
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
        <section style={{ padding: 'clamp(72px,8vw,100px) clamp(28px,6vw,80px)', background: '#080705', borderTop: '1px solid rgba(244,239,230,0.05)', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.1rem,2.2vw,1.5rem)', lineHeight: 1.65, color: 'rgba(229,226,225,0.75)', marginBottom: '40px' }}>
              This opportunity is available to qualified investors under NDA. Contact Stanford Emporium to receive the term sheet.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/investor-inquiry"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', background: '#C9971F', color: '#080705', padding: '15px 36px', textDecoration: 'none', display: 'inline-block' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#F0C84A'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#C9971F'; }}>
                Request Investment Terms
              </Link>
              <Link to="/project/ugrp/dataroom"
                style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', border: '1px solid rgba(244,239,230,0.25)', color: 'rgba(244,239,230,0.7)', padding: '15px 36px', textDecoration: 'none', display: 'inline-block' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(244,239,230,0.6)'; (e.currentTarget as HTMLAnchorElement).style.color = '#F4EFE6'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(244,239,230,0.25)'; (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,239,230,0.7)'; }}>
                Investor Data Room →
              </Link>
            </div>
          </div>
        </section>

        {/* ── DISCLAIMER ───────────────────────────────────────────────────── */}
        <section style={{ padding: 'clamp(32px,4vw,56px) clamp(28px,6vw,80px)', background: '#060604', borderTop: '1px solid rgba(244,239,230,0.05)' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', lineHeight: 1.85, color: 'rgba(229,226,225,0.35)', fontStyle: 'italic', marginBottom: '24px' }}>
              This listing is directed to qualified/accredited investors only and does not constitute a public securities offering. Investors should seek independent legal and tax advice. Financial projections are indicative only. © Blackbear Pictures. All Rights Reserved. IP owned by Blackbear Pictures.
            </p>
            <Link to="/investment-opportunities"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(244,239,230,0.3)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,239,230,0.6)'}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(244,239,230,0.3)'}>
              ← Back to Film Investment Slate
            </Link>
          </div>
        </section>

      </div>
    );
  }
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div className="bg-[var(--black)] min-h-screen text-white">

      {/* SECTION 1: HERO */}
      <section className="relative h-[90vh] flex items-end pb-24 px-4 md:px-20 overflow-hidden">
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
          className="relative z-10 max-w-5xl"
        >
          <div className="label-text text-[10px] text-[var(--bronze)] mb-6 uppercase tracking-[0.4em]">01 / OPPORTUNITY HERO</div>
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] leading-[0.88] mb-8 uppercase tracking-tighter">
            {project.title}
          </h1>
          <p className="text-[var(--cream)] text-2xl md:text-3xl mb-12 opacity-90 italic max-w-3xl font-light">
            "{project.positioning}"
          </p>
          <div className="flex flex-wrap gap-8 items-center mb-12">
            <div className="flex flex-col">
              <span className="label-text text-[9px] text-[rgba(244,239,230,0.4)] uppercase mb-1">Budget Range</span>
              <span className="text-xl text-[var(--bronze)]">{project.budgetRange}</span>
            </div>
            <div className="w-[1px] h-10 bg-[rgba(244,239,230,0.1)]" />
            <div className="flex flex-col">
              <span className="label-text text-[9px] text-[rgba(244,239,230,0.4)] uppercase mb-1">Current Status</span>
              <span className="text-xl text-white uppercase tracking-wider">{project.status}</span>
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
                className="btn-text bg-[var(--red)] text-white px-12 py-5 hover:bg-[#CC0000] transition-colors inline-block"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                ACCESS FULL DATA ROOM
              </Link>
            )}
            <Link
              to="/inquire"
              className="btn-text border border-[rgba(244,239,230,0.3)] text-white px-12 py-5 hover:bg-white hover:text-[var(--black)] transition-all inline-block"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              INQUIRE
            </Link>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: INVESTMENT SNAPSHOT */}
      <section className="py-32 px-4 md:px-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-12 uppercase tracking-[0.4em]">02 / INVESTMENT SNAPSHOT</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="p-8 border border-[rgba(244,239,230,0.05)] bg-[rgba(255,255,255,0.02)]">
              <h4 className="label-text text-[11px] text-[var(--bronze)] mb-6 uppercase">Financials</h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-[rgba(244,239,230,0.05)] pb-2">
                  <span className="text-[rgba(229,226,225,0.72)] text-sm">Equity Available</span>
                  <span className="text-white text-sm">{project.equityAvailable}</span>
                </li>
                <li className="flex justify-between border-b border-[rgba(244,239,230,0.05)] pb-2">
                  <span className="text-[rgba(229,226,225,0.72)] text-sm">Tax Incentives</span>
                  <span className="text-white text-sm">{project.taxIncentives}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[rgba(229,226,225,0.72)] text-sm">Target ROI Range</span>
                  <span className="text-white text-sm font-bold text-[var(--bronze)]">{project.targetROI}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border border-[rgba(244,239,230,0.05)] bg-[rgba(255,255,255,0.02)]">
              <h4 className="label-text text-[11px] text-[var(--bronze)] mb-6 uppercase">Market Strategy</h4>
              <ul className="space-y-4">
                <li className="flex flex-col border-b border-[rgba(244,239,230,0.05)] pb-2">
                  <span className="text-[rgba(229,226,225,0.72)] text-[10px] uppercase mb-1">Sales Strategy</span>
                  <span className="text-white text-sm">{project.salesStrategy}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[rgba(229,226,225,0.72)] text-[10px] uppercase mb-1">Comparable Films</span>
                  <span className="text-white text-sm">{project.comparables?.join(' / ')}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border border-[rgba(244,239,230,0.05)] bg-[rgba(255,255,255,0.02)]">
              <h4 className="label-text text-[11px] text-[var(--bronze)] mb-6 uppercase">Project Data</h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-[rgba(244,239,230,0.05)] pb-2">
                  <span className="text-[rgba(229,226,225,0.72)] text-sm">Genre</span>
                  <span className="text-white text-sm">{project.genre}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[rgba(229,226,225,0.72)] text-sm">Production Year</span>
                  <span className="text-white text-sm">{project.year}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA — after snapshot */}
      <section className="py-14 px-4 md:px-20 border-t border-[rgba(244,239,230,0.06)]">
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
              className="btn-text border border-[rgba(244,239,230,0.2)] text-[var(--cream)] px-6 py-3 text-xs hover:border-[var(--bronze)] hover:text-[var(--bronze)] transition-all"
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
            <div className="bg-[#111] p-12 border-l-2 border-[var(--bronze)]">
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
        <section className="py-32 px-4 md:px-20 bg-[#080808]">
          <div className="max-w-7xl mx-auto">
            <div className="label-text text-[10px] text-[var(--bronze)] mb-16 uppercase tracking-[0.4em]">04 / VISUAL & TONE</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.previewImages.map((img, i) => (
                <div key={i} className="aspect-[16/9] overflow-hidden bg-[#111]">
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
                <span className="label-text text-[9px] text-[rgba(244,239,230,0.4)] uppercase mb-2">{member.role}</span>
                <span className="text-xl text-white mb-2">{member.name}</span>
                <p className="text-[11px] text-[var(--cream)] opacity-50 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING CTA */}
      <section className="py-32 px-4 md:px-20 bg-[var(--black)] text-center border-t border-[rgba(244,239,230,0.06)]">
        <div className="max-w-2xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-8 uppercase tracking-[0.4em]">Next Steps</div>
          <h3 className="text-2xl mb-4 text-white">Serious Investor Inquiry</h3>
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
              className="btn-text border border-[rgba(244,239,230,0.15)] text-[var(--cream)] px-8 py-4 hover:border-[var(--bronze)] hover:text-[var(--bronze)] transition-all text-xs"
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
                      className="btn-text border border-[rgba(244,239,230,0.15)] text-[var(--cream)] px-6 py-3 text-xs hover:border-[var(--bronze)] hover:text-[var(--bronze)] transition-all inline-flex items-center gap-2"
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
