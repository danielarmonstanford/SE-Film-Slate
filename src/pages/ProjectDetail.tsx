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
    <p className="text-[var(--cream)] opacity-60 text-sm leading-loose mb-10 max-w-xl mx-auto">{body}</p>
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
              DOWNLOAD INVESTOR PACK
            </a>
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
                  <span className="text-[var(--cream)] opacity-60 text-sm">Equity Available</span>
                  <span className="text-white text-sm">{project.equityAvailable}</span>
                </li>
                <li className="flex justify-between border-b border-[rgba(244,239,230,0.05)] pb-2">
                  <span className="text-[var(--cream)] opacity-60 text-sm">Tax Incentives</span>
                  <span className="text-white text-sm">{project.taxIncentives}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[var(--cream)] opacity-60 text-sm">Target ROI Range</span>
                  <span className="text-white text-sm font-bold text-[var(--bronze)]">{project.targetROI}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border border-[rgba(244,239,230,0.05)] bg-[rgba(255,255,255,0.02)]">
              <h4 className="label-text text-[11px] text-[var(--bronze)] mb-6 uppercase">Market Strategy</h4>
              <ul className="space-y-4">
                <li className="flex flex-col border-b border-[rgba(244,239,230,0.05)] pb-2">
                  <span className="text-[var(--cream)] opacity-60 text-[10px] uppercase mb-1">Sales Strategy</span>
                  <span className="text-white text-sm">{project.salesStrategy}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[var(--cream)] opacity-60 text-[10px] uppercase mb-1">Comparable Films</span>
                  <span className="text-white text-sm">{project.comparables?.join(' / ')}</span>
                </li>
              </ul>
            </div>

            <div className="p-8 border border-[rgba(244,239,230,0.05)] bg-[rgba(255,255,255,0.02)]">
              <h4 className="label-text text-[11px] text-[var(--bronze)] mb-6 uppercase">Project Data</h4>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-[rgba(244,239,230,0.05)] pb-2">
                  <span className="text-[var(--cream)] opacity-60 text-sm">Genre</span>
                  <span className="text-white text-sm">{project.genre}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-[var(--cream)] opacity-60 text-sm">Production Year</span>
                  <span className="text-white text-sm">{project.year}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA — after snapshot */}
      <section className="py-24 px-4 md:px-20 border-t border-b border-[rgba(244,239,230,0.06)]">
        <ProjectCTA
          headline="Access the Full Investor Package"
          body="Deck, finance plan, budget summary, and supporting materials."
          investorPackUrl={investorPackUrl}
          setIsHovering={setIsHovering}
        />
      </section>

      {/* SECTION 3: STRATEGIC VALUE */}
      <section className="py-32 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-16 uppercase tracking-[0.4em]">03 / STRATEGIC VALUE</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h3 className="text-4xl mb-8 leading-tight">Market Positioning</h3>
              <p className="text-[var(--cream)] opacity-70 leading-relaxed text-lg mb-12">
                {project.marketPositioning}
              </p>
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

      {/* SECTION 4: VISUAL & TONE */}
      <section className="py-32 px-4 md:px-20 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-16 uppercase tracking-[0.4em]">04 / VISUAL & TONE</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.previewImages?.map((img, i) => (
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

      {/* SECTION 5: KEY TEAM */}
      <section className="py-32 px-4 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-16 uppercase tracking-[0.4em]">05 / KEY TEAM</div>
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

      {/* SECTION 6: DATA ROOM */}
      <section className="py-40 px-4 md:px-20 bg-[var(--bronze)] text-[var(--black)] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="label-text text-[10px] text-[var(--black)] opacity-60 mb-8 uppercase tracking-[0.4em]">06 / DATA ROOM</div>
          <h2 className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] mb-12 uppercase font-bold">
            Access Full Investment Materials
          </h2>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Qualified investors can access the secure data room containing detailed financial models,
            market analysis, and legal documentation.
          </p>
          <a
            href={investorPackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-text bg-[var(--black)] text-white px-12 py-5 hover:bg-[#222] transition-colors inline-block"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            DOWNLOAD INVESTOR PACK →
          </a>

          {/* Notion PDF documents (ACND and future projects) */}
          {(docsLoading || docs.length > 0) && (
            <div className="mt-16">
              <div className="label-text text-[10px] text-[var(--black)] opacity-60 mb-6 uppercase tracking-[0.4em]">
                Investment Documents
              </div>
              {docsLoading ? (
                <p className="text-[var(--black)] opacity-60 text-sm">Loading documents…</p>
              ) : (
                <div className="flex flex-wrap gap-4 justify-center">
                  {docs.map((doc, i) => (
                    <a
                      key={i}
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-text bg-[var(--black)] text-white px-6 py-3 text-xs hover:bg-[#222] transition-colors inline-flex items-center gap-2"
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
        </div>
      </section>

      {/* SECTION 7: CLOSING CTA */}
      <section className="py-40 px-4 md:px-20 bg-[var(--black)] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="label-text text-[10px] text-[var(--bronze)] mb-12 uppercase tracking-[0.4em]">07 / NEXT STEPS</div>
          <ProjectCTA
            headline="Serious Investor Inquiry"
            body="For strategic partners, co-producers, and qualified investors — contact us for direct access and deal terms."
            investorPackUrl={investorPackUrl}
            primaryLabel="INQUIRE"
            setIsHovering={setIsHovering}
          />
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
