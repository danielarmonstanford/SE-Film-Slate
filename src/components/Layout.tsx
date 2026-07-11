/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EMAIL_CONTACT, SOCIAL_LINKS } from '../constants';
import Nav from './Nav';

interface LayoutProps {
  children: React.ReactNode;
  setIsHovering: (hovering: boolean) => void;
}

export default function Layout({ children, setIsHovering }: LayoutProps) {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/', label: 'Home' },
    { name: 'About', path: '/about', label: 'About' },
    { name: 'Investment Opportunities', path: '/investment-opportunities', label: 'Investment Opportunities' },
    { name: 'Services', path: '/disciplines', label: 'Services' },
    { name: 'Production Design', path: '/production-design', label: 'Production Design' },
    { name: 'Investor Inquiry', path: '/inquire', label: 'Investor Inquiry' },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>
      <Nav />

      <main>{children}</main>

      {/* FOOTER */}
      <footer className="section-divider pt-[56px] pb-[56px] px-4 md:px-20" style={{ background: 'var(--bg)' }}>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-12 lg:gap-0">
          <div>
            <div className="text-[15px] font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--text)' }}>Daniel A Stanford</div>
            <div className="label-text text-[9px] tracking-[0.32em] text-[var(--bronze)] mt-1 uppercase">
              Art Director
            </div>
            <div className="label-text text-[9px] text-[var(--bronze)] opacity-90 mt-2 lowercase tracking-normal">
              Stanford Emporium
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontWeight: 700,
                  fontSize: 'clamp(22px, 3vw, 42px)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-72)',
                  textDecoration: 'none',
                  lineHeight: 1.15,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C9971F'; setIsHovering(true); }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-72)'; setIsHovering(false); }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="text-center lg:text-right">
            <a
              href={`mailto:${EMAIL_CONTACT}`}
              className="body-text text-[11px] hover:text-[var(--bronze)] transition-colors" style={{ color: 'var(--text)' }}
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
                  className="label-text text-[9px] hover:opacity-100 transition-colors" style={{ color: 'var(--text-45)' }}
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
          <div className="label-text text-[8px] tracking-[0.22em]" style={{ color: 'var(--text-45)' }}>
            © 2026 Daniel Stanford — Stanford Emporium. All rights reserved.
          </div>
          <div className="label-text text-[8px] tracking-[0.22em]" style={{ color: 'var(--text-45)' }}>
            Los Angeles · Montreal · Tulum
          </div>
        </div>
      </footer>
    </div>
  );
}
