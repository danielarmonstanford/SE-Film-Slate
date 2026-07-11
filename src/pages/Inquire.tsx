/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { EMAIL_CONTACT, SOCIAL_LINKS } from '../constants';

const Inquire: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const mailtoHref = `mailto:${EMAIL_CONTACT}?subject=Investor%20Inquiry%20%E2%80%94%20SE%20Film%20Slate`;

  return (
    <div className="bg-[var(--bg)] min-h-screen pt-[160px] pb-[120px] px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="reveal active"
        >
          <div className="label-text text-[10px] text-[var(--bronze)] mb-8 uppercase tracking-[0.4em]">05 / ACCESS · Investor Relations</div>
          <h1 style={{ fontSize: 'clamp(4rem, 8vw, 9rem)', fontFamily: 'var(--font-serif)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1, marginBottom: '64px' }}>
            Access.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <p className="text-[var(--text)] text-xl leading-relaxed opacity-85 mb-12">
                Investor Access &amp; Production Engagement. We are currently open to strategic partnerships
                and equity investments for our upcoming slate. Direct all financial inquiries to our secure
                investor relations channel.
              </p>

              <div className="space-y-12">
                <div>
                  <h4 className="label-text text-[11px] text-[var(--bronze)] mb-4 uppercase tracking-widest">Direct Channel</h4>
                  <a
                    href={mailtoHref}
                    className="text-2xl md:text-3xl text-[var(--text)] hover:text-[var(--bronze)] transition-colors break-all"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div>
                  <h4 className="label-text text-[11px] text-[var(--bronze)] mb-4 uppercase tracking-widest">WhatsApp</h4>
                  <a
                    href="https://wa.me/15149696027"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-[var(--text)] hover:text-[var(--bronze)] transition-colors"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    +1 (514) 969-6027
                  </a>
                </div>

                <div>
                  <h4 className="label-text text-[11px] text-[var(--bronze)] mb-4 uppercase tracking-widest">Global Presence</h4>
                  <div className="grid grid-cols-2 gap-8 text-[var(--text)]">
                    <div>
                      <p className="text-[var(--text)] mb-1">Montreal</p>
                      <p className="text-xs text-[var(--text-72)]">Strategic Hub</p>
                    </div>
                    <div>
                      <p className="text-[var(--text)] mb-1">Tulum</p>
                      <p className="text-xs text-[var(--text-72)]">Creative Residency</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="label-text text-[11px] text-[var(--bronze)] mb-4 uppercase tracking-widest">Links</h4>
                  <div className="flex flex-wrap gap-6">
                    {SOCIAL_LINKS.map(link => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="label-text text-[10px] uppercase tracking-[0.2em] text-[var(--text)] opacity-50 hover:opacity-100 hover:text-[var(--bronze)] transition-all"
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[var(--bg)] p-12 border border-[var(--border)]">
              <h3 className="text-2xl mb-8 uppercase tracking-wider">Next Steps</h3>
              <ul className="space-y-8">
                <li className="flex gap-6">
                  <span className="text-[var(--bronze)] font-bold">01</span>
                  <div>
                    <h5 className="text-[var(--text)] mb-2 uppercase text-sm">Initial Inquiry</h5>
                    <p className="text-xs text-[var(--text-72)] leading-relaxed">Send an email with your background and specific project of interest.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-[var(--bronze)] font-bold">02</span>
                  <div>
                    <h5 className="text-[var(--text)] mb-2 uppercase text-sm">Qualification</h5>
                    <p className="text-xs text-[var(--text-72)] leading-relaxed">Our team will verify credentials and provide access to the secure data room.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-[var(--bronze)] font-bold">03</span>
                  <div>
                    <h5 className="text-[var(--text)] mb-2 uppercase text-sm">Advisory Call</h5>
                    <p className="text-xs text-[var(--text-72)] leading-relaxed">Schedule a direct call with our producers to discuss terms and strategic alignment.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-12 space-y-4">
                <a
                  href={mailtoHref}
                  className="btn-text w-full py-5 bg-[var(--bronze)] text-[var(--black)] text-center hover:bg-[var(--bronze-light)] transition-colors inline-block"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  REQUEST INVESTOR PACKAGE
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}?subject=Investor%20Call%20Request`}
                  className="btn-text w-full py-4 border border-[var(--border)] text-[var(--text)] text-center hover:border-[var(--bronze)] hover:text-[var(--bronze)] transition-all inline-block text-xs"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  SCHEDULE PRIVATE DISCUSSION
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Inquire;
