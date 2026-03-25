/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="label-text text-[10px] text-[var(--bronze)] mb-4">Section / {title}</div>
        <h1 className="text-[clamp(3rem,8vw,8rem)] text-white mb-8">
          Coming <span className="italic-emphasis">Soon.</span>
        </h1>
        <div className="w-[60px] h-[1px] bg-[var(--bronze)] mx-auto mb-12" />
        <p className="body-text text-[13px] text-[rgba(244,239,230,0.45)] max-w-[400px] mx-auto leading-relaxed">
          We are currently directing this experience. Check back soon for the full reveal.
        </p>
      </motion.div>
    </div>
  );
}
