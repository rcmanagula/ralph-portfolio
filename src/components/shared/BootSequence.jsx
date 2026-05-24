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

  useEffect(() => {
    if (step >= LINES.length) {
      const t = setTimeout(onDone, 380);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setStep(step + 1), 240);
    return () => clearTimeout(t);
  }, [step, onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-0)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    </div>
  );
}
