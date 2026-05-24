'use client';

import { useMode } from '@/lib/ModeContext';

export default function ModeToggle({ floating = false }) {
  const { mode, setMode } = useMode();
  const isFloating = floating;

  return (
    <div
      style={
        isFloating
          ? {
              position: 'fixed',
              top: 16,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 100,
              display: 'inline-flex',
              padding: 4,
              border: '1px solid var(--border)',
              background: 'rgba(11,13,16,0.85)',
              backdropFilter: 'blur(8px)',
              borderRadius: 'var(--r-pill)',
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '0.1em',
            }
          : {
              display: 'inline-flex',
              padding: 3,
              border: '1px solid var(--border)',
              background: 'var(--bg-1)',
              borderRadius: 'var(--r-pill)',
              fontFamily: 'var(--font-mono)',
              fontSize: 10.5,
              letterSpacing: '0.1em',
            }
      }
    >
      {['terminal', 'corporate'].map((m) => (
        <button
          key={m}
          onClick={() => setMode(m)}
          style={{
            padding: isFloating ? '6px 14px' : '5px 12px',
            border: 0,
            cursor: 'pointer',
            background: mode === m ? 'var(--bg-2)' : 'transparent',
            color: mode === m ? 'var(--accent)' : 'var(--fg-2)',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            letterSpacing: 'inherit',
            borderRadius: 'var(--r-pill)',
            transition: 'all var(--dur-fast) var(--ease-out-expo-ish)',
          }}
        >
          {m.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
