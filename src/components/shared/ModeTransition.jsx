'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMode } from '@/lib/ModeContext';

export default function ModeTransition({ children }) {
  const { mode, transitioning } = useMode();

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.36, ease: [0.2, 0.7, 0.2, 1] }}
          style={
            transitioning
              ? { animation: 'mode-glitch 120ms steps(2,end) both' }
              : undefined
          }
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {transitioning && (
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 9999,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              height: 2,
              background:
                'linear-gradient(90deg, transparent, var(--accent), transparent)',
              boxShadow: '0 0 16px var(--accent-glow)',
              animation: 'mode-scanline 480ms linear forwards',
            }}
          />
        </div>
      )}
    </>
  );
}
