import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
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
      (window as any).onYouTubeIframeAPIReady = () => { if (prev) prev(); initPlayer(); };
    }
    return () => {
      destroyed = true;
      if (playerRef.current?.destroy) { try { playerRef.current.destroy(); } catch {} }
      playerRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (!playerRef.current || !playerReady) return;
    audioOn ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
  };

  const navLinks = [
    { label: 'Home',              path: '/' },
    { label: 'About',             path: '/about' },
    { label: 'Film Slate',        path: '/investment-opportunities' },
    { label: 'Visualization',     path: '/visual-development' },
    { label: 'Production Design', path: '/disciplines' },
  ];

  return (
    <>
      {/* LOGO — fixed top-left */}
      <div style={{ position: 'fixed', top: '24px', left: '28px', zIndex: 50 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontSize: '22px', letterSpacing: '0.45em', textTransform: 'uppercase', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, color: '#e5e2e1', lineHeight: 1 }}>
            Stanford
          </div>
          <div style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', fontFamily: 'Arial, Helvetica, sans-serif', color: '#C9971F', marginTop: '3px' }}>
            Emporium
          </div>
        </Link>
      </div>

      {/* RIGHT COLUMN — always-visible vertical nav */}
      <div style={{
        position: 'fixed', top: 0, right: 0, bottom: 0, width: '48px', zIndex: 100,
        borderLeft: '1px solid rgba(229,226,225,0.05)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'space-between', padding: '24px 0 36px',
        background: 'transparent',
      }}>

        {/* Nav links — stacked vertically, always visible */}
        <nav style={{ flex: 1, marginTop: '32px', display: 'flex', flexDirection: 'column', gap: 0, alignItems: 'center', justifyContent: 'space-around' }}>
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontWeight: 700,
                  fontSize: '6.5px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  color: isActive ? '#C9971F' : 'rgba(229,226,225,0.4)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  padding: '4px 0',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = isActive ? '#C9971F' : 'rgba(229,226,225,0.4)'; }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Audio button */}
        <button
          onClick={toggleAudio}
          aria-label={audioOn ? 'Pause ambient audio' : 'Play ambient audio'}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
        >
          <span style={{ fontSize: '15px', color: '#C9971F' }}>{audioOn ? '♬' : '♪'}</span>
          <span style={{ writingMode: 'vertical-rl', fontSize: '7px', fontWeight: 700, letterSpacing: '0.3em', color: 'rgba(229,226,225,0.7)', textTransform: 'uppercase' }}>
            Sound
          </span>
          <span style={{ writingMode: 'vertical-rl', fontFamily: "'EB Garamond', serif", fontStyle: 'italic', fontSize: '10px', color: 'rgba(229,226,225,0.55)', letterSpacing: '0.08em', marginTop: '4px' }}>
            Zimmerman
          </span>
        </button>
      </div>

      {/* HIDDEN AMBIENT AUDIO PLAYER */}
      <div aria-hidden="true" style={{ position: 'fixed', top: '-200px', left: '-200px', width: '100px', height: '100px', pointerEvents: 'none', visibility: 'hidden' }}>
        <iframe
          id="nav-ambient-player"
          width="100" height="100"
          src="https://www.youtube.com/embed/8-wAvbxB7D8?autoplay=0&mute=0&loop=1&playlist=8-wAvbxB7D8&controls=0&enablejsapi=1"
          allow="autoplay"
          title="Ambient Audio"
        />
      </div>
    </>
  );
}
