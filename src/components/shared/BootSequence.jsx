'use client';

import { useEffect, useState } from 'react';

const LINES = [
  'Initializing operator workstation...',
  'Loading payload :: rcm_portfolio.v1',
  'Mounting /skills.txt /experience.log /roadmap',
  'Establishing secure session',
  'Welcome, operator.',
];

export default function BootSequence({ onDone }) {
  const [step, setStep] = useState(0);
  const [skipped, setSkipped] = useState(false);

  useEffect(() => {
    // Auto-skip when the user prefers reduced motion
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (mq.matches) {
        setSkipped(true);
        const t = setTimeout(onDone, 0);
        return () => clearTimeout(t);
      }
    }
  }, [onDone]);

  useEffect(() => {
    if (skipped) return undefined;
    const handler = (e) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setSkipped(true);
        onDone?.();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [skipped, onDone]);

  useEffect(() => {
    if (skipped) return undefined;
    if (step >= LINES.length) {
      const t = setTimeout(onDone, 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep(step + 1), 240);
    return () => clearTimeout(t);
  }, [step, onDone, skipped]);

  if (skipped) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="System boot sequence"
      onClick={() => {
        setSkipped(true);
        onDone?.();
      }}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-0)',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        animation:
          step >= LINES.length
            ? 'bootFadeOut 0.4s var(--ease-out-expo-ish) forwards'
            : 'none',
      }}
    >
      <pre
        style={{
          margin: 0,
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--fg-1)',
          lineHeight: 1.7,
        }}
      >
        {LINES.slice(0, step).map((l, i) => (
          <div key={i}>
            [<span className="accent">  OK  </span>] {l}
          </div>
        ))}
        {step < LINES.length && (
          <div>
            [<span style={{ color: 'var(--warn)' }}>...&nbsp;</span>] {LINES[step]}
            <span className="caret"></span>
          </div>
        )}
      </pre>
      <div
        style={{
          position: 'absolute',
          bottom: 28,
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--fg-2)',
          letterSpacing: '0.08em',
          userSelect: 'none',
        }}
      >
        [ press <span style={{ color: 'var(--fg-1)' }}>esc</span> or click to skip ]
      </div>
    </div>
  );
}
