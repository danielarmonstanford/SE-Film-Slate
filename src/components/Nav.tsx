import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const location = useLocation();

  // Ambient audio — YouTube IFrame API
  useEffect(() => {
    let destroyed = false;

    const initPlayer = () => {
      if (destroyed || !(window as any).YT?.Player) return;
      const el = document.getElementById('nav-ambient-player');
      if (!el) return;
      new (window as any).YT.Player('nav-ambient-player', {
        events: {
          onReady: (evt: any) => {
            if (destroyed) return;
            evt.target.setVolume(40);
            playerRef.current = evt.target;
            setPlayerReady(true);
          },
          onStateChange: (evt: any) => {
            if (destroyed) return;
            setAudioOn(evt.data === 1);
          },
        },
      });
    };

    if ((window as any).YT?.Player) {
      initPlayer();
    } else {
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.head.appendChild(tag);
      }
      const prev = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (prev) prev();
        initPlayer();
      };
    }

    return () => {
      destroyed = true;
      if (playerRef.current?.destroy) {
        try { playerRef.current.destroy(); } catch {}
      }
      playerRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (!playerRef.current || !playerReady) return;
    if (audioOn) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  // Close overlay on route change
  useEffect(() => {
    setNavOpen(false);
  }, [location.pathname]);

  // Lock body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [navOpen]);

  const navLinks = [
    { label: 'Home',              path: '/' },
    { label: 'About',             path: '/about' },
    { label: 'Film Slate',        path: '/investment-opportunities' },
    { label: 'Visualization',     path: '/visual-development' },
    { label: 'Production Design', path: '/disciplines' },
  ];

  const logo = (onClick?: () => void) => (
    <Link to="/" style={{ textDecoration: 'none' }} onClick={onClick}>
      <div className="text-[32px] tracking-[0.45em] uppercase font-headline text-white leading-none">
        Stanford
      </div>
      <div className="text-[16px] tracking-[1.52em] uppercase font-sans text-[var(--red)] mt-1 ml-[2px]">
        Emporium
      </div>
    </Link>
  );

  return (
    <>
      {/* LOGO — fixed top-left */}
      <div style={{ position: 'fixed', top: '24px', left: '28px', zIndex: 50 }}>
        {logo()}
      </div>

      {/* RIGHT COLUMN */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '48px', zIndex: 100,
        background: 'transparent',
        borderLeft: '1px solid rgba(229,226,225,0.05)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 0 36px',
      }}>
        {/* Hamburger */}
        <button
          onClick={() => setNavOpen(true)}
          aria-label="Open menu"
          style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px', cursor: 'pointer', background: 'none', border: 'none' }}
          onMouseEnter={e => {
            const lines = e.currentTarget.querySelectorAll<HTMLDivElement>('div');
            lines.forEach(l => (l.style.background = '#CC0000'));
          }}
          onMouseLeave={e => {
            const lines = e.currentTarget.querySelectorAll<HTMLDivElement>('div');
            if (lines[0]) lines[0].style.background = '#e5e2e1';
            if (lines[1]) lines[1].style.background = '#CC0000';
          }}
        >
          <div style={{ width: '20px', height: '1px', background: '#e5e2e1', transition: 'background 200ms' }} />
          <div style={{ width: '13px', height: '1px', background: '#CC0000', transition: 'background 200ms' }} />
        </button>

        {/* Audio block */}
        <button
          onClick={toggleAudio}
          aria-label={audioOn ? 'Pause ambient audio' : 'Play ambient audio'}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
        >
          <span style={{ fontSize: '15px', color: '#CC0000' }}>{audioOn ? '♬' : '♪'}</span>
          <span style={{ writingMode: 'vertical-rl', fontSize: '7px', fontWeight: 700, letterSpacing: '0.3em', color: 'rgba(229,226,225,0.7)', textTransform: 'uppercase' }}>
            Sound
          </span>
          <span style={{ writingMode: 'vertical-rl', fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: '10px', color: 'rgba(229,226,225,0.55)', letterSpacing: '0.08em', marginTop: '4px' }}>
            Zimmerman
          </span>
        </button>
      </div>

      {/* FULLSCREEN OVERLAY */}
      {navOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 200,
          background: 'rgba(8,8,8,0.98)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          padding: '24px 28px 32px',
        }}>
          {/* Logo */}
          {logo(() => setNavOpen(false))}

          {/* Close */}
          <button
            onClick={() => setNavOpen(false)}
            aria-label="Close menu"
            style={{ position: 'absolute', top: '20px', right: '20px', fontSize: '20px', fontWeight: 700, color: '#CC0000', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 1 }}
          >
            ×
          </button>

          {/* Nav links */}
          <nav style={{ flex: 1, marginTop: '32px', display: 'flex', flexDirection: 'column', gap: 0, justifyContent: 'center' }}>
            {navLinks.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setNavOpen(false)}
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontWeight: 700,
                    fontSize: 'clamp(24px, 4.5vw, 48px)',
                    letterSpacing: '-0.02em',
                    color: isActive ? '#CC0000' : 'rgba(229,226,225,0.1)',
                    textDecoration: 'none',
                    lineHeight: 1.08,
                    padding: '4px 0',
                    display: 'block',
                    cursor: 'pointer',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#e5e2e1'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = isActive ? '#CC0000' : 'rgba(229,226,225,0.1)'; }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer row */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            paddingTop: '16px',
            borderTop: '1px solid rgba(229,226,225,0.05)',
            marginTop: '16px',
          }}>
            <span style={{ fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: '10px', color: 'rgba(229,226,225,0.2)' }}>
              film.daniel-stanford.com
            </span>
            <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '6.5px', letterSpacing: '0.3em', color: 'rgba(229,226,225,0.16)', textTransform: 'uppercase' }}>
              DARSbit@protonmail.ch
            </span>
          </div>
        </div>
      )}

      {/* HIDDEN AMBIENT AUDIO PLAYER */}
      <div
        aria-hidden="true"
        style={{ position: 'fixed', top: '-200px', left: '-200px', width: '100px', height: '100px', pointerEvents: 'none', visibility: 'hidden' }}
      >
        <iframe
          id="nav-ambient-player"
          width="100"
          height="100"
          src="https://www.youtube.com/embed/8-wAvbxB7D8?autoplay=0&mute=0&loop=1&playlist=8-wAvbxB7D8&controls=0&enablejsapi=1"
          allow="autoplay"
          title="Ambient Audio"
        />
      </div>
    </>
  );
}
