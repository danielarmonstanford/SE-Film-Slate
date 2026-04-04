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
    <div className="min-h-screen bg-[var(--black)]">
      <Nav />

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
