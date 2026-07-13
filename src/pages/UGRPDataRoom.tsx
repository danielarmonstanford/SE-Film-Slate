import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GATE_PASSWORD = import.meta.env.VITE_DATAROOM_PASSWORD ?? '';
const DATA_ROOM_URL = 'https://drive.google.com/drive/folders/1JXGFTnuqPNeWmMTUHaaPzx8RzAQxe5K_?usp=sharing';
const NOTION_URL = 'https://drive.google.com/drive/folders/1JXGFTnuqPNeWmMTUHaaPzx8RzAQxe5K_?usp=sharing';
const NOTIFY_EMAIL = 'Daniel@StanfordEmporium.com';
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
        from_name: 'Stanford Emporium Inc. — Data Room Gate',
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
    <div className="bg-[var(--bg)] min-h-screen flex items-center justify-center px-5 md:px-8 pt-28 md:pt-32 pb-20">
      <div className="w-full max-w-[560px]">

        {/* Header */}
        <div className="mb-10">
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: '#CC0000', display: 'block', marginBottom: '16px' }}>
            002 · Restricted Access
          </span>
          <h1 className="text-4xl md:text-5xl italic font-light leading-snug mb-3">
            In The Grey
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '12px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--text-45)' }}>
            Full Investor Data Room
          </p>
        </div>

        {/* Option 1 — Overview (no gate) */}
        <div className="border border-[var(--border)] p-6 mb-8">
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--text-45)', marginBottom: '10px' }}>Option 01 — Slate Overview</div>
          <p style={{ fontSize: '14px', color: 'var(--text-72)', lineHeight: 1.8, marginBottom: '20px' }}>
            Project summary, team, and investment highlights. No access code required.
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={NOTION_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', border: '1px solid var(--border-2)', color: 'var(--text)', fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', padding: '14px 24px', textDecoration: 'none', transition: 'border-color 0.3s, color 0.3s' }}
            >
              View Slate Overview →
            </a>
            <a
              href="https://blackbearpictures.com/film-and-tv/in%20the%20grey"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', border: '1px solid var(--border)', color: 'var(--text-45)', fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.28em', textTransform: 'uppercase', padding: '14px 24px', textDecoration: 'none', transition: 'border-color 0.3s, color 0.3s' }}
            >
              Watch Film Preview · Blackbear Pictures →
            </a>
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-35)', lineHeight: 1.7, marginTop: '16px' }}>
            © Blackbear Pictures. All Rights Reserved.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 border-t border-[var(--border)]" />
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-35)' }}>or</span>
          <div className="flex-1 border-t border-[var(--border)]" />
        </div>

        {/* Option 2 — Gated full data room */}
        <div className="mb-4">
          <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#CC0000', marginBottom: '10px' }}>Option 02 — Full Data Room</div>
          <p style={{ fontSize: '14px', color: 'var(--text-72)', lineHeight: 1.8, marginBottom: '24px' }}>
            Full financials, budget breakdown, legal structure, and supporting materials. Access code required.
          </p>
        </div>

        {!granted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--text-45)', display: 'block', marginBottom: '8px' }}>
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)', padding: '14px 16px', fontSize: '16px', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--text-45)', display: 'block', marginBottom: '8px' }}>
                Access Code
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                style={{ width: '100%', background: 'transparent', border: '1px solid var(--border)', color: 'var(--text)', padding: '14px 16px', fontSize: '16px', outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box' }}
                placeholder="Access code — contact daniel@stanfordemporium.com"
                required
              />
            </div>
            {error && (
              <p style={{ color: '#CC0000', fontSize: '13px', letterSpacing: '0.02em' }}>{error}</p>
            )}
            <button
              type="submit"
              style={{ width: '100%', background: '#CC0000', color: 'var(--text)', fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', padding: '18px', border: 'none', cursor: 'pointer', transition: 'background 0.4s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = '#930000'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = '#CC0000'; }}
            >
              Access Full Data Room
            </button>
            <p style={{ fontSize: '13px', color: 'var(--text-35)', textAlign: 'center', lineHeight: 1.8, paddingTop: '8px' }}>
              Access code provided upon qualification.{' '}
              <a
                href="mailto:Daniel@StanfordEmporium.com?subject=UGRP Data Room Access Request"
                style={{ color: 'var(--text-45)', textDecoration: 'underline', textUnderlineOffset: '3px', transition: 'color 0.2s' }}
              >
                Request access
              </a>
            </p>
          </form>
        ) : (
          <div className="space-y-0 py-4">
            <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '40px' }}>
              ✓ Access Granted
            </div>

            {/* THE POSITION */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '20px' }}>
                The Position
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '15px', lineHeight: 1.9, color: 'var(--text-72)', marginBottom: '28px' }}>
                Last chance — one open slot remaining. Stanford Emporium Inc. is offering a single Lifetime Participation Share in a finished, delivered Guy Ritchie action thriller. Inquiry at $350,000 USD. Contact Stanford Emporium Inc. for contractual agreements.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {[
                  { title: 'Early Income', body: 'Distribution fees and P&A are the only items ahead of your position. Revenue from every window — theatrical, streaming, VOD, broadcast — flows into your recoupment.' },
                  { title: 'Guaranteed Return', body: 'The equity assignment is priced at a built-in premium. Your recoupment basis is higher than your entry cost, with no participation dilution from net profit pools.' },
                  { title: 'Lifetime Participation', body: 'Beyond recoupment, the equity position continues to participate in all revenue — perpetually, across every territory and window the film generates.' },
                ].map(card => (
                  <div key={card.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '22px 20px' }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '10px' }}>{card.title}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', lineHeight: 1.85, color: 'var(--text-72)' }}>{card.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* THE WATERFALL */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '10px' }}>
                Your Contractual Rights
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.5rem,4vw,1.9rem)', color: 'var(--text)', lineHeight: 1.1, marginBottom: '12px' }}>
                The Waterfall
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', lineHeight: 1.8, color: 'var(--text-65)', marginBottom: '24px' }}>
                Payment order per the Collection Account Management Agreement (CAMA):
              </p>
              {[
                { pri: 'i',   label: 'Collection Agent fees & expenses',                 note: '≤ $100,000',         highlight: false },
                { pri: 'ii',  label: 'Distributor corridor + gross percentage',           note: 'Off gross receipts',  highlight: false },
                { pri: 'iii', label: 'Third-party off-the-tops (residuals, withholding)', note: '~$50,000',            highlight: false },
                { pri: 'iv',  label: 'Production lender repayment',                       note: 'Already discharged',  highlight: false },
                { pri: 'v',   label: 'Equity position — investor recoupment',             note: 'Your position',       highlight: true  },
              ].map(row => (
                <div key={row.pri} style={{ display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: '12px', alignItems: 'center', padding: '13px 0', borderBottom: '1px solid var(--border)', background: row.highlight ? 'rgba(255,200,0,0.05)' : 'transparent' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: '16px', color: row.highlight ? '#ffc800' : 'rgba(201,151,31,0.5)' }}>{row.pri}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: row.highlight ? 400 : 300, fontSize: '14px', color: row.highlight ? '#ffc800' : 'var(--text-72)', lineHeight: 1.5 }}>{row.label}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '12px', color: row.highlight ? '#ffc800' : 'var(--text-45)', textAlign: 'right', whiteSpace: 'nowrap' }}>{row.note}</span>
                </div>
              ))}
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '13px', lineHeight: 1.9, color: 'var(--text-45)', fontStyle: 'italic', marginTop: '16px' }}>
                The production loan is retired. There are no finance parties between position iv and your recoupment. You collect next.
              </p>
            </div>

            {/* WHY NOW */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '28px' }}>
                Why Now
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { head: 'Production loan discharged', body: 'The senior lender has been repaid in full. No debt sits ahead of the equity position.' },
                  { head: 'Senior equity position', body: 'This assignment recoups ahead of net profit participants, talent backends, and producer bonuses.' },
                  { head: 'Distribution in motion', body: 'US distribution is confirmed. Release planning is underway. The revenue window is measurable.' },
                  { head: 'De-risked entry', body: 'The film is complete. Zero production risk, zero delivery risk. The only variable remaining is performance.' },
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start', marginBottom: '24px' }}>
                    <span style={{ width: '2px', minHeight: '20px', background: '#C9971F', flexShrink: 0, marginTop: '5px' }} />
                    <div>
                      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '12px', letterSpacing: '0.1em', color: 'var(--text)', marginBottom: '6px', textTransform: 'uppercase' }}>{item.head}</p>
                      <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', lineHeight: 1.85, color: 'var(--text-72)' }}>{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* DOCUMENTS */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '24px' }}>
                Documents
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

                {/* Button 1 — Hero document: solid gold */}
                <a
                  href="/assets/Operation_In_The_Gr.pdf"
                  download
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#C9971F', padding: '20px 22px', textDecoration: 'none', transition: 'background 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#b8861a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#C9971F'; }}
                >
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '14px', letterSpacing: '0.04em', color: '#080705' }}>
                    Operation: In The Grey — Financial Arbitrage Briefing
                  </span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(8,7,5,0.6)', flexShrink: 0, marginLeft: '16px' }}>
                    PDF ↓
                  </span>
                </a>

                {/* Button 2 — Executive Summary */}
                <a
                  href="/assets/In_The_Grey_Executive.pdf"
                  download
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(201,151,31,0.45)', padding: '18px 20px', textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C9971F'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,151,31,0.06)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,151,31,0.45)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                >
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', letterSpacing: '0.04em', color: '#C9971F' }}>
                    In The Grey — Executive Summary
                  </span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,151,31,0.65)', flexShrink: 0, marginLeft: '12px' }}>
                    PDF ↓
                  </span>
                </a>

                {/* Button 3 — Waterfall Contract with legal note */}
                <div>
                  <a
                    href="/assets/Full_Waterfall_Contract.pdf"
                    download
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(201,151,31,0.45)', padding: '18px 20px', textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C9971F'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,151,31,0.06)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,151,31,0.45)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                  >
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', letterSpacing: '0.04em', color: '#C9971F' }}>
                      Production Co-Finance Agreement — Full Waterfall Contract
                    </span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,151,31,0.65)', flexShrink: 0, marginLeft: '12px' }}>
                      PDF ↓
                    </span>
                  </a>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', color: 'var(--text-35)', marginTop: '6px', paddingLeft: '2px', letterSpacing: '0.02em' }}>
                    Legal instrument — waterfall payment order and recoupment structure
                  </p>
                </div>

                {/* Divider between new and existing docs */}
                <div style={{ height: '1px', background: 'var(--border)', margin: '4px 0' }} />

                {/* Button 4 — Investor Deck (existing) */}
                <a
                  href="/assets/UGRP_Deck_2025-07-18.pdf"
                  download
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(201,151,31,0.45)', padding: '18px 20px', textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C9971F'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,151,31,0.06)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,151,31,0.45)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                >
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', letterSpacing: '0.04em', color: '#C9971F' }}>
                    In The Grey — Investor Deck
                  </span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,151,31,0.65)', flexShrink: 0, marginLeft: '12px' }}>
                    PDF ↓
                  </span>
                </a>

                {/* Button 5 — Finance Plan (existing) */}
                <a
                  href="/assets/UGRP_Finance_Plan_8-17-25.pdf"
                  download
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid rgba(201,151,31,0.45)', padding: '18px 20px', textDecoration: 'none', transition: 'border-color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = '#C9971F'; (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,151,31,0.06)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,151,31,0.45)'; (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
                >
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', letterSpacing: '0.04em', color: '#C9971F' }}>
                    Black Bear International — Finance Plan
                  </span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(201,151,31,0.65)', flexShrink: 0, marginLeft: '12px' }}>
                    PDF ↓
                  </span>
                </a>

              </div>
            </div>

            {/* STANFORD EMPORIUM ROLE */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '40px', marginBottom: '40px' }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.45em', textTransform: 'uppercase', color: '#C9971F', marginBottom: '16px' }}>
                Stanford Emporium Inc. Role
              </p>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(1.3rem,3.5vw,1.7rem)', color: 'var(--text)', lineHeight: 1.15, marginBottom: '14px' }}>
                Finder &amp; Consulting Executive Producer
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '14px', lineHeight: 1.9, color: 'var(--text-65)', marginBottom: '24px' }}>
                Stanford Emporium Inc. is a Montreal-based film finance and creative advisory holding company presenting this opportunity on behalf of the principal equity partner.
              </p>
              {[
                { label: 'Role', value: 'Introduction and facilitation only' },
                { label: 'Equity Principal', value: 'Principal Equity Partner' },
                { label: 'Documentation', value: 'Available upon request — Daniel@StanfordEmporium.com' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: '1px solid var(--border)', gap: '20px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '12px', color: 'var(--text-45)', letterSpacing: '0.06em', flexShrink: 0, fontFamily: 'var(--font-sans)', fontWeight: 300 }}>{row.label}</span>
                  <span style={{ fontSize: '14px', color: 'var(--text)', textAlign: 'right', fontWeight: 300, fontFamily: 'var(--font-sans)' }}>{row.value}</span>
                </div>
              ))}
            </div>

            {/* DATA ROOM LINK */}
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: '36px', textAlign: 'center' }}>
              <p style={{ fontSize: '14px', color: 'var(--text-45)', marginBottom: '20px', lineHeight: 1.8 }}>Full financials and legal documentation below.</p>
              <a
                href={DATA_ROOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-block', background: '#CC0000', color: 'var(--text)', fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', padding: '18px 40px', textDecoration: 'none', transition: 'background 0.4s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#930000'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#CC0000'; }}
              >
                Open Full Data Room →
              </a>
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center">
          <Link
            to="/project/ugrp"
            style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '12px', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--text-35)', textDecoration: 'none', transition: 'color 0.2s' }}
          >
            ← Back to Project Overview
          </Link>
        </div>

      </div>
    </div>
  );
};

export default UGRPDataRoom;
