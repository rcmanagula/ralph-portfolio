'use client';

import { useEffect, useState } from 'react';

function useClock() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return now;
}

function formatTmux(d) {
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const day = d.toLocaleDateString('en-US', { weekday: 'short' });
  const date = String(d.getDate()).padStart(2, '0');
  return `${hh}:${mm} ${day} ${date}`;
}

export default function TerminalWindow({ filename, children, style = {} }) {
  const now = useClock();
  const sessionName = (filename || 'portfolio').replace(/^@/, '').replace(/\.[^.]+$/, '');

  return (
    <section
      role="region"
      aria-label={filename || 'terminal window'}
      style={{
        background: 'var(--bg-1)',
        border: '1px solid var(--border)',
        ...style,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '6px 12px',
          background: 'var(--bg-2)',
          borderBottom: '1px solid var(--border)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          color: 'var(--fg-1)',
        }}
      >
        <span style={{ color: 'var(--accent)' }}>[0]</span>
        <span style={{ color: 'var(--fg-0)' }}>
          0:<span style={{ color: 'var(--accent)' }}>{sessionName}</span>
          <span style={{ color: 'var(--fg-2)' }}>*</span>
        </span>
        <span style={{ color: 'var(--fg-2)' }}>|</span>
        <span style={{ color: 'var(--fg-2)' }}>zsh</span>
        <span style={{ marginLeft: 'auto', color: 'var(--fg-2)' }}>
          {formatTmux(now)}
        </span>
      </div>
      <div
        style={{
          padding: '16px 18px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          color: 'var(--fg-0)',
          lineHeight: 1.65,
        }}
      >
        {children}
      </div>
    </section>
  );
}
