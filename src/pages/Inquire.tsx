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
    <div className="bg-[var(--black)] min-h-screen pt-[160px] pb-[120px] px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="reveal active"
        >
          <div className="label-text text-[10px] text-[var(--bronze)] mb-8 uppercase tracking-[0.4em]">06 / CONNECT</div>
          <h1 className="text-[clamp(3.5rem,10vw,10rem)] leading-[0.88] mb-16 uppercase tracking-tighter">
            <span className="italic-emphasis">Inquire</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <p className="text-[#F5F0E6] text-xl leading-relaxed opacity-85 mb-12">
                We are currently open to strategic partnerships and equity investments for our upcoming slate.
                Please direct all financial inquiries to our secure investor relations channel.
              </p>

              <div className="space-y-12">
                <div>
                  <h4 className="label-text text-[11px] text-[var(--bronze)] mb-4 uppercase tracking-widest">Direct Channel</h4>
                  <a
                    href={mailtoHref}
                    className="text-2xl md:text-3xl text-white hover:text-[var(--bronze)] transition-colors break-all"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    {EMAIL_CONTACT}
                  </a>
                </div>

                <div>
                  <h4 className="label-text text-[11px] text-[var(--bronze)] mb-4 uppercase tracking-widest">Global Presence</h4>
                  <div className="grid grid-cols-2 gap-8 text-[#F5F0E6]">
                    <div>
                      <p className="text-white mb-1">Montreal</p>
                      <p className="text-xs opacity-60">Strategic Hub</p>
                    </div>
                    <div>
                      <p className="text-white mb-1">Tulum</p>
                      <p className="text-xs opacity-60">Creative Residency</p>
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
                        className="label-text text-[10px] uppercase tracking-[0.2em] text-[#F5F0E6] opacity-50 hover:opacity-100 hover:text-[var(--bronze)] transition-all"
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

            <div className="bg-[#080808] p-12 border border-[rgba(244,239,230,0.05)]">
              <h3 className="text-2xl mb-8 uppercase tracking-wider">Next Steps</h3>
              <ul className="space-y-8">
                <li className="flex gap-6">
                  <span className="text-[var(--bronze)] font-bold">01</span>
                  <div>
                    <h5 className="text-white mb-2 uppercase text-sm">Initial Inquiry</h5>
                    <p className="text-xs text-[#F5F0E6] opacity-60 leading-relaxed">Send an email with your background and specific project of interest.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-[var(--bronze)] font-bold">02</span>
                  <div>
                    <h5 className="text-white mb-2 uppercase text-sm">Qualification</h5>
                    <p className="text-xs text-[#F5F0E6] opacity-60 leading-relaxed">Our team will verify credentials and provide access to the secure data room.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-[var(--bronze)] font-bold">03</span>
                  <div>
                    <h5 className="text-white mb-2 uppercase text-sm">Advisory Call</h5>
                    <p className="text-xs text-[#F5F0E6] opacity-60 leading-relaxed">Schedule a direct call with our producers to discuss terms and strategic alignment.</p>
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
                  SEND INVESTOR INQUIRY
                </a>
                <a
                  href={`mailto:${EMAIL_CONTACT}?subject=Investor%20Call%20Request`}
                  className="btn-text w-full py-4 border border-[rgba(244,239,230,0.15)] text-[#F5F0E6] text-center hover:border-[var(--bronze)] hover:text-[var(--bronze)] transition-all inline-block text-xs"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  SCHEDULE INVESTOR CALL
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
