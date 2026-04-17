import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [audioOn, setAudioOn] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  const playerRef = useRef<any>(null);
  const location = useLocation();

  // Close menu on route change — v2
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

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
    { label: 'Profile', path: '/about' },
    { label: 'Film',    path: '/investment-opportunities' },
    { label: 'Deliver', path: '/disciplines' },
    { label: 'Worlds',  path: '/visual-development' },
    { label: 'Access',  path: '/investor-inquiry' },
  ];

  return (
    <>
      {/* LOGO — fixed top-left */}
      <div className="nav-logo" style={{ position: 'fixed', top: '24px', left: '28px', zIndex: 200 }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <div style={{ fontSize: '22px', letterSpacing: '0.35em', textTransform: 'uppercase', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, color: '#e5e2e1', lineHeight: 1 }}>
            Stanford
          </div>
          <div style={{ fontSize: '22px', letterSpacing: '0.35em', textTransform: 'uppercase', fontFamily: 'Arial, Helvetica, sans-serif', color: '#C9971F', marginTop: '3px' }}>
            Emporium
          </div>
        </Link>
      </div>

      {/* HAMBURGER — fixed top-right */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        style={{
          position: 'fixed', top: '24px', right: '28px', zIndex: 200,
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', gap: '5px',
          padding: '4px',
        }}
      >
        <span style={{
          display: 'block', width: '24px', height: '1px',
          background: '#e5e2e1',
          transform: menuOpen ? 'translateY(6px) rotate(45deg)' : 'none',
          transition: 'transform 0.3s ease',
        }} />
        <span style={{
          display: 'block', width: '24px', height: '1px',
          background: '#e5e2e1',
          opacity: menuOpen ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }} />
        <span style={{
          display: 'block', width: '24px', height: '1px',
          background: '#e5e2e1',
          transform: menuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none',
          transition: 'transform 0.3s ease',
        }} />
      </button>

      {/* FULLSCREEN OVERLAY */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 150,
        background: 'rgba(8,7,5,0.50)',
        backdropFilter: 'blur(2px)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'flex-start', justifyContent: 'center',
        paddingLeft: 'clamp(32px, 8vw, 120px)',
        opacity: menuOpen ? 1 : 0,
        pointerEvents: menuOpen ? 'auto' : 'none',
        transition: 'opacity 0.4s ease',
      }}>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navLinks.map((item, i) => {
            const isActive = location.pathname === item.path ||
              (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(36px, 6vw, 72px)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? '#C9971F' : 'rgba(229,226,225,0.85)',
                  textDecoration: 'none',
                  lineHeight: 1.15,
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms, color 0.2s ease`,
                  display: 'block',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = isActive ? '#C9971F' : 'rgba(229,226,225,0.85)'; }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Audio toggle inside overlay */}
        <button
          onClick={toggleAudio}
          aria-label={audioOn ? 'Pause ambient audio' : 'Play ambient audio'}
          style={{
            marginTop: '56px', display: 'flex', alignItems: 'center', gap: '10px',
            background: 'none', border: 'none', cursor: 'pointer', padding: 0,
          }}
        >
          <span style={{ fontSize: '18px', color: '#C9971F' }}>{audioOn ? '♬' : '♪'}</span>
          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(229,226,225,0.6)', textTransform: 'uppercase' }}>
            Sound · Zimmerman
          </span>
        </button>

        {/* Footer contact line */}
        <div style={{
          position: 'absolute', bottom: '32px', left: 'clamp(32px, 8vw, 120px)', right: '32px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(229,226,225,0.35)', textTransform: 'uppercase' }}>
            film.daniel-stanford.com
          </span>
          <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '8px', letterSpacing: '0.3em', color: 'rgba(229,226,225,0.35)', textTransform: 'uppercase' }}>
            DanielArmonStanford@gmail.com
          </span>
        </div>
      </div>

      {/* HIDDEN AMBIENT AUDIO PLAYER */}
      <div aria-hidden="true" style={{ position: 'fixed', top: '-200px', left: '-200px', width: '100px', height: '100px', pointerEvents: 'none' }}>
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
