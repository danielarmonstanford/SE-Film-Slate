import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GATE_PASSWORD = 'capital';
const DATA_ROOM_URL = 'https://drive.google.com/drive/folders/1JXGFTnuqPNeWmMTUHaaPzx8RzAQxe5K_?usp=sharing';
const NOTION_URL = 'https://drive.google.com/drive/folders/1JXGFTnuqPNeWmMTUHaaPzx8RzAQxe5K_?usp=sharing';
const NOTIFY_EMAIL = 'darsbit@pm.me';
const WEB3FORMS_KEY = '0928c0d9-38cc-4327-99b1-a50349a62ed7';

const sendNotification = async (submitterEmail: string) => {
  const now = new Date();
  const timestamp = now.toLocaleString('en-CA', {
    timeZone: 'America/Toronto',
    dateStyle: 'full',
    timeStyle: 'long',
  });
  try {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        subject: `UGRP Data Room Access — ${submitterEmail}`,
        from_name: 'Stanford Emporium — Data Room Gate',
        to: NOTIFY_EMAIL,
        message: `New full data room access granted.\n\nInvestor email: ${submitterEmail}\nProject: In The Grey\nAccessed: ${timestamp}\nPage: /project/ugrp/dataroom`,
      }),
    });
  } catch {
    // Notification failure is silent — access is still granted
  }
};

const UGRPDataRoom = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [granted, setGranted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password !== GATE_PASSWORD) {
      setError('Incorrect access code. Contact us to request access.');
      return;
    }
    setError('');
    sendNotification(email);
    setGranted(true);
    setTimeout(() => {
      window.open(DATA_ROOM_URL, '_blank');
    }, 800);
  };

  return (
    <div className="bg-[var(--black)] min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="w-full max-w-[480px]">

        {/* Header */}
        <div className="mb-12">
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#CC0000] font-bold block mb-4">
            002 · Restricted Access
          </span>
          <h1 className="text-3xl md:text-4xl italic font-light leading-snug mb-3">
            In The Grey
          </h1>
          <p className="text-[9px] uppercase tracking-[0.4em] text-[rgba(244,239,230,0.45)]">
            Full Investor Data Room
          </p>
        </div>

        {/* Option 1 — Overview (no gate) */}
        <div className="border border-[rgba(244,239,230,0.1)] p-6 mb-8">
          <div className="text-[9px] uppercase tracking-[0.4em] text-[rgba(244,239,230,0.4)] mb-3">Option 01 — Slate Overview</div>
          <p className="text-xs text-[rgba(229,226,225,0.72)] leading-relaxed mb-5">
            Project summary, team, and investment highlights. No access code required.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={NOTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[rgba(244,239,230,0.3)] text-[#F5F0E6] text-[10px] uppercase tracking-[0.3em] px-8 py-4 hover:border-white hover:text-white transition-all duration-300"
            >
              View Slate Overview →
            </a>
            <a
              href="https://blackbearpictures.com/film-and-tv/in%20the%20grey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[rgba(244,239,230,0.15)] text-[rgba(244,239,230,0.5)] text-[10px] uppercase tracking-[0.3em] px-8 py-4 hover:border-[rgba(244,239,230,0.4)] hover:text-[rgba(244,239,230,0.8)] transition-all duration-300"
            >
              Watch Film Preview · Blackbear Pictures →
            </a>
          </div>
          <p className="text-[8px] uppercase tracking-[0.25em] text-[rgba(244,239,230,0.25)] leading-relaxed mt-5">
            © Blackbear Pictures. All Rights Reserved. IP owned by Blackbear Pictures.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 border-t border-[rgba(244,239,230,0.08)]" />
          <span className="text-[9px] uppercase tracking-[0.3em] text-[rgba(244,239,230,0.25)]">or</span>
          <div className="flex-1 border-t border-[rgba(244,239,230,0.08)]" />
        </div>

        {/* Option 2 — Gated full data room */}
        <div className="mb-2">
          <div className="text-[9px] uppercase tracking-[0.4em] text-[#CC0000] mb-3">Option 02 — Full Data Room</div>
          <p className="text-xs text-[rgba(229,226,225,0.72)] leading-relaxed mb-6">
            Full financials, budget breakdown, legal structure, and supporting materials. Access code required.
          </p>
        </div>

        {!granted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-[9px] uppercase tracking-[0.4em] text-[rgba(244,239,230,0.45)] block mb-2">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full bg-transparent border border-[rgba(244,239,230,0.2)] text-white px-4 py-3 text-sm placeholder:text-[rgba(244,239,230,0.2)] focus:border-[rgba(244,239,230,0.5)] focus:outline-none transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-[9px] uppercase tracking-[0.4em] text-[rgba(244,239,230,0.45)] block mb-2">
                Access Code
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full bg-transparent border border-[rgba(244,239,230,0.2)] text-white px-4 py-3 text-sm placeholder:text-[rgba(244,239,230,0.2)] focus:border-[rgba(244,239,230,0.5)] focus:outline-none transition-colors"
                placeholder="Enter access code"
                required
              />
            </div>
            {error && (
              <p className="text-[#CC0000] text-[11px] tracking-wide">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold py-5 hover:bg-[#930000] transition-colors duration-500"
            >
              Access Full Data Room
            </button>
            <p className="text-[9px] text-[rgba(244,239,230,0.3)] text-center leading-relaxed pt-2">
              Access code provided upon qualification.{' '}
              <a
                href="mailto:darsbit@pm.me?subject=UGRP Data Room Access Request"
                className="hover:text-[rgba(244,239,230,0.6)] transition-colors underline underline-offset-2"
              >
                Request access
              </a>
            </p>
          </form>
        ) : (
          <div className="space-y-0 py-4">
            <div className="text-[10px] uppercase tracking-[0.5em] text-[#C9971F] mb-10">
              ✓ Access Granted
            </div>

            {/* THE POSITION */}
            <div style={{ borderTop: '1px solid rgba(244,239,230,0.06)', paddingTop: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '20px' }}>
                The Position
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '13px', lineHeight: 1.9, color: 'rgba(229,226,225,0.78)', marginBottom: '32px' }}>
                Stanford Emporium is offering qualified investors access to a partial assignment of the primary equity position, held by C2 Motion Picture Group.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                {[
                  { title: 'Early Income', body: 'Distribution fees and P&A are the only items ahead of your position. Revenue from every window — theatrical, streaming, VOD, broadcast — flows into your recoupment.' },
                  { title: 'Guaranteed Return', body: 'The equity assignment is priced at a built-in premium. Your recoupment basis is higher than your entry cost, with no participation dilution from net profit pools.' },
                  { title: 'Lifetime Participation', body: 'Beyond recoupment, the equity position continues to participate in all revenue — perpetually, across every territory and window the film generates.' },
                ].map(card => (
                  <div key={card.title} style={{ background: 'rgba(244,239,230,0.03)', border: '1px solid rgba(244,239,230,0.07)', padding: '20px 18px' }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '9px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '10px' }}>{card.title}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '12px', lineHeight: 1.8, color: 'rgba(229,226,225,0.72)' }}>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* THE WATERFALL */}
            <div style={{ borderTop: '1px solid rgba(244,239,230,0.06)', paddingTop: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '8px' }}>
                Your Contractual Rights
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.4rem', color: '#F4EFE6', lineHeight: 1.1, marginBottom: '8px' }}>
                The Waterfall
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '12px', lineHeight: 1.8, color: 'rgba(229,226,225,0.5)', marginBottom: '24px' }}>
                Payment order per the Collection Account Management Agreement (CAMA):
              </p>
              {[
                { pri: 'i',   label: 'Collection Agent fees & expenses',                 note: '≤ $100,000',         highlight: false },
                { pri: 'ii',  label: 'Distributor corridor + gross percentage',           note: 'Off gross receipts',  highlight: false },
                { pri: 'iii', label: 'Third-party off-the-tops (residuals, withholding)', note: '~$50,000',            highlight: false },
                { pri: 'iv',  label: 'Production lender repayment',                       note: 'Already discharged',  highlight: false },
                { pri: 'v',   label: 'Equity position — C2 / investor recoupment',       note: 'Your position',       highlight: true  },
              ].map(row => (
                <div key={row.pri} style={{ display: 'grid', gridTemplateColumns: '28px 1fr auto', gap: '12px', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(244,239,230,0.06)', background: row.highlight ? 'rgba(255,200,0,0.04)' : 'transparent' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '14px', color: row.highlight ? '#ffc800' : 'rgba(201,151,31,0.5)' }}>{row.pri}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: row.highlight ? 400 : 300, fontSize: '12px', color: row.highlight ? '#ffc800' : 'rgba(229,226,225,0.65)', lineHeight: 1.45 }}>{row.label}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '10px', color: row.highlight ? '#ffc800' : 'rgba(229,226,225,0.35)', textAlign: 'right', whiteSpace: 'nowrap' }}>{row.note}</span>
                </div>
              ))}
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '12px', lineHeight: 1.85, color: 'rgba(229,226,225,0.4)', fontStyle: 'italic', marginTop: '16px' }}>
                The production loan is retired. There are no finance parties between position iv and your recoupment. You collect next.
              </p>
            </div>

            {/* WHY NOW */}
            <div style={{ borderTop: '1px solid rgba(244,239,230,0.06)', paddingTop: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '24px' }}>
                Why Now
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { head: 'Production loan discharged', body: 'The senior lender has been repaid in full. No debt sits ahead of the equity position.' },
                  { head: 'Senior equity position', body: 'This assignment recoup ahead of net profit participants, talent backends, and producer bonuses.' },
                  { head: 'Distribution in motion', body: 'US distribution is confirmed. Release planning is underway. The revenue window is measurable.' },
                  { head: 'De-risked entry', body: 'The film is complete. Zero production risk, zero delivery risk. The only variable remaining is performance.' },
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <span style={{ width: '2px', minHeight: '18px', background: '#C9971F', flexShrink: 0, marginTop: '4px' }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '10px', letterSpacing: '0.12em', color: '#e5e2e1', marginBottom: '4px', textTransform: 'uppercase' }}>{item.head}</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '12px', lineHeight: 1.8, color: 'rgba(229,226,225,0.65)' }}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* STANFORD EMPORIUM ROLE */}
            <div style={{ borderTop: '1px solid rgba(244,239,230,0.06)', paddingTop: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '0.6rem', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '16px' }}>
                Stanford Emporium Role
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '1.4rem', color: '#F4EFE6', lineHeight: 1.1, marginBottom: '20px' }}>
                Finder &amp; Consulting Executive Producer
              </p>
              {[
                { label: 'Role', value: 'Introduction and facilitation only', gold: false },
                { label: 'NDA Required', value: 'Yes — before financial terms are shared', gold: true },
                { label: 'Equity Principal', value: 'C2 Motion Picture Group', gold: false },
                { label: 'Documentation', value: 'Available under executed NDA', gold: false },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '9px 0', borderBottom: '1px solid rgba(244,239,230,0.06)', gap: '20px' }}>
                  <span style={{ fontSize: '11px', color: 'rgba(229,226,225,0.45)', letterSpacing: '0.06em', flexShrink: 0, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{row.label}</span>
                  <span style={{ fontSize: '12px', color: row.gold ? '#ffc800' : '#e5e2e1', textAlign: 'right', fontWeight: row.gold ? 600 : 300, fontFamily: 'var(--font-sans)' }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* DATA ROOM LINK */}
            <div style={{ borderTop: '1px solid rgba(244,239,230,0.06)', paddingTop: '32px', textAlign: 'center' }}>
              <p className="text-sm text-[rgba(229,226,225,0.55)] mb-6">Full financials and legal documentation below.</p>
              <a
                href={DATA_ROOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-12 py-5 hover:bg-[#930000] transition-colors duration-500"
              >
                Open Full Data Room →
              </a>
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[rgba(244,239,230,0.06)] text-center">
          <Link
            to="/project/ugrp"
            className="text-[9px] uppercase tracking-[0.3em] text-[rgba(244,239,230,0.3)] hover:text-[rgba(244,239,230,0.6)] transition-colors"
          >
            ← Back to Project Overview
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UGRPDataRoom;
