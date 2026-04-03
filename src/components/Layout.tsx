/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EMAIL_CONTACT, SOCIAL_LINKS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  setIsHovering: (hovering: boolean) => void;
}

export default function Layout({ children, setIsHovering }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      const nav = document.getElementById('main-nav');
      if (nav) {
        if (window.scrollY > 60) {
          nav.style.background = 'rgba(13,13,13,0.96)';
          nav.style.backdropFilter = 'blur(20px)';
          nav.style.borderBottom = '1px solid rgba(229,226,225,0.06)';
        } else {
          nav.style.background = 'transparent';
          nav.style.backdropFilter = 'blur(0px)';
          nav.style.borderBottom = 'none';
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll to top and close mobile menu on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navItems = [
    { name: 'Home', path: '/', label: 'Home' },
    { name: 'About', path: '/about', label: 'About' },
    { name: 'Investment Opportunities', path: '/investment-opportunities', label: 'Investment Opportunities' },
    { name: 'Services', path: '/disciplines', label: 'Services' },
    { name: 'Investor Inquiry', path: '/inquire', label: 'Investor Inquiry' },
  ];

  return (
    <div className="min-h-screen bg-[var(--black)]">
      {/* NAVIGATION */}
      <nav
        id="main-nav"
        className="fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-4 md:px-12 py-[35px]"
        style={{ background: 'transparent', transition: 'background 0.4s ease, border-color 0.4s ease' }}
      >
        <Link
          to="/"
          className="group flex flex-col items-start"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="text-[32px] tracking-[0.45em] uppercase font-headline text-white leading-none">
            Stanford
          </div>
          <div className="text-[16px] tracking-[1.52em] uppercase font-sans text-[var(--red)] mt-1 ml-[2px]">
            Emporium
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="desktop-nav-links hidden md:flex gap-10 items-center">
          {navItems.filter(item => item.name !== 'Home').map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: isActive ? '#CC0000' : 'rgba(229,226,225,0.75)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#CC0000'; setIsHovering(true); }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = isActive ? '#CC0000' : 'rgba(229,226,225,0.75)'; setIsHovering(false); }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="desktop-nav-cta md:w-[180px] hidden md:block" />

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none' }}
        >
          <div style={{ width: '22px', height: '1px', background: '#e5e2e1', marginBottom: '5px' }} />
          <div style={{ width: '22px', height: '1px', background: '#e5e2e1', marginBottom: '5px' }} />
          <div style={{ width: '14px', height: '1px', background: '#CC0000' }} />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(13,13,13,0.97)',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'absolute', top: '24px', right: '24px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#CC0000', fontSize: '2rem', lineHeight: 1,
            }}
            aria-label="Close menu"
          >
            ×
          </button>

          <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'Noto Serif', serif",
                  fontSize: '2rem',
                  letterSpacing: '0.1em',
                  color: location.pathname === item.path ? '#ffffff' : '#e5e2e1',
                  padding: '20px 0',
                  textDecoration: 'none',
                  display: 'block',
                  textAlign: 'center',
                  width: '100%',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#CC0000')}
                onMouseLeave={e => (e.currentTarget.style.color = location.pathname === item.path ? '#ffffff' : '#e5e2e1')}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <main>{children}</main>

      {/* FOOTER */}
      <footer className="section-divider bg-[var(--black)] pt-[56px] pb-[56px] px-4 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-0">
          <div>
            <div className="text-[18px] font-normal text-white">Daniel Stanford</div>
            <div className="label-text text-[9px] tracking-[0.32em] text-[var(--bronze)] mt-1">
              Creative Director · Visionary · Executive Producer
            </div>
            <div className="label-text text-[9px] text-[var(--bronze)] opacity-90 mt-2 lowercase tracking-normal">
              Stanford Emporium
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className="label-text text-[9px] tracking-[0.23em] text-[rgba(244,239,230,0.7)] hover:text-[var(--bronze)] transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-center lg:text-right">
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              className="body-text text-[11px] text-white hover:text-[var(--bronze)] transition-colors"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {EMAIL_CONTACT}
            </a>
            <div className="flex justify-center lg:justify-end gap-6 mt-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-text text-[9px] text-[rgba(244,239,230,0.65)] hover:text-[var(--bronze)] transition-colors"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {link.short}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="section-divider mt-14 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="label-text text-[8px] tracking-[0.22em] text-[rgba(244,239,230,0.5)]">
            © 2026 Daniel Stanford — Stanford Emporium. All rights reserved.
          </div>
          <div className="label-text text-[8px] tracking-[0.22em] text-[rgba(244,239,230,0.5)]">
            Los Angeles · Montreal · Tulum
          </div>
        </div>
      </footer>
    </div>
  );
}
