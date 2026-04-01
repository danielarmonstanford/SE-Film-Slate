import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GATE_PASSWORD = 'money';
const DATA_ROOM_URL = 'https://drive.google.com/drive/folders/1ucw9T8ocEvJFza44RMsMKIFeo4u93A9o';
const NOTION_URL = 'https://drive.google.com/file/d/1fhksH7oyC6_7lO8aXRTcjFk6mnhzzpVV/view?usp=drive_link';
const NOTIFY_EMAIL = 'DanielArmonStanford@gmail.com';
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
        subject: `Hell's Kitchen Data Room Access — ${submitterEmail}`,
        from_name: 'Stanford Emporium — Data Room Gate',
        to: NOTIFY_EMAIL,
        message: `New full data room access granted.\n\nInvestor email: ${submitterEmail}\nProject: Once Upon a Time in Hell's Kitchen (006)\nAccessed: ${timestamp}\nPage: /hells-kitchen-dataroom`,
      }),
    });
  } catch {
    // Notification failure is silent — access is still granted
  }
};

const HellsKitchenDataRoom = () => {
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
            006 · Restricted Access
          </span>
          <h1 className="font-['Noto_Serif'] text-3xl md:text-4xl italic font-light leading-snug mb-3">
            Once Upon a Time in Hell's Kitchen
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
          <a
            href={NOTION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[rgba(244,239,230,0.3)] text-[#F5F0E6] text-[10px] uppercase tracking-[0.3em] px-8 py-4 hover:border-white hover:text-white transition-all duration-300"
          >
            View Slate Overview →
          </a>
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
                href="mailto:studio@stanfordemporium.com?subject=Hell%27s Kitchen Data Room Access Request"
                className="hover:text-[rgba(244,239,230,0.6)] transition-colors underline underline-offset-2"
              >
                Request access
              </a>
            </p>
          </form>
        ) : (
          <div className="text-center space-y-6 py-4">
            <div className="text-[var(--green-funded)] text-[10px] uppercase tracking-[0.5em]">
              ✓ Access Granted
            </div>
            <p className="text-sm text-[rgba(229,226,225,0.72)]">Opening data room…</p>
            <a
              href={DATA_ROOM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#CC0000] text-white text-[10px] uppercase tracking-[0.3em] font-bold px-12 py-5 hover:bg-[#930000] transition-colors duration-500"
            >
              Open Full Data Room →
            </a>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[rgba(244,239,230,0.06)] text-center">
          <Link
            to="/project/hells-kitchen"
            className="text-[9px] uppercase tracking-[0.3em] text-[rgba(244,239,230,0.3)] hover:text-[rgba(244,239,230,0.6)] transition-colors"
          >
            ← Back to Project Overview
          </Link>
        </div>

      </div>
    </div>
  );
};

export default HellsKitchenDataRoom;
