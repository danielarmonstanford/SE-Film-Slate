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
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    { name: 'Visual Development', path: '/visual-development', label: 'Visual Development' },
    { name: 'Investor Inquiry', path: '/inquire', label: 'Investor Inquiry' },
  ];

  return (
    <div className="min-h-screen bg-[var(--black)]">
      {/* NAVIGATION */}
      <nav
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-[200] flex justify-between items-center px-4 md:px-12 py-[35px] transition-all duration-500 bg-gradient-to-b from-[rgba(8,7,5,0.97)] to-transparent ${scrolled ? 'scrolled' : ''}`}
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
        <div className="hidden lg:flex gap-10 items-center">
          {navItems.filter(item => item.name !== 'Home').map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`label-text text-[10px] tracking-[0.22em] transition-colors uppercase ${
                location.pathname === item.path ? 'text-white' : 'text-[rgba(244,239,230,0.75)]'
              } hover:text-[var(--bronze)]`}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="lg:w-[180px] hidden lg:block" />

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8 z-[210] relative"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className="block h-[1px] bg-white transition-all duration-300 origin-right"
            style={{ width: mobileOpen ? '24px' : '24px', transform: mobileOpen ? 'rotate(-45deg) translateY(4px)' : 'none' }}
          />
          <span
            className="block h-[1px] bg-white transition-all duration-300"
            style={{ width: '16px', opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block h-[1px] bg-white transition-all duration-300 origin-right"
            style={{ width: mobileOpen ? '24px' : '20px', transform: mobileOpen ? 'rotate(45deg) translateY(-4px)' : 'none' }}
          />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-[190] bg-[rgba(8,7,5,0.97)] flex flex-col justify-center items-start px-8 transition-all duration-500 lg:hidden ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-8 w-full">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              to={item.path}
              className={`label-text text-[11px] tracking-[0.35em] uppercase transition-all duration-300 ${
                location.pathname === item.path ? 'text-white' : 'text-[rgba(244,239,230,0.55)]'
              } hover:text-[var(--bronze)]`}
              style={{ transitionDelay: mobileOpen ? `${i * 60}ms` : '0ms', transform: mobileOpen ? 'translateX(0)' : 'translateX(-16px)', opacity: mobileOpen ? 1 : 0 }}
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-[var(--bronze)] mr-3 text-[9px]">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-16 label-text text-[8px] tracking-[0.3em] text-[rgba(244,239,230,0.25)] uppercase">
          Stanford Emporium
        </div>
      </div>

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
