'use client';

import { useEffect, useState } from 'react';
import { useMode } from '@/lib/ModeContext';

function formatUptime(ms) {
  const total = Math.floor(ms / 1000);
  const hh = String(Math.floor(total / 3600)).padStart(2, '0');
  const mm = String(Math.floor((total % 3600) / 60)).padStart(2, '0');
  const ss = String(total % 60).padStart(2, '0');
  return `${hh}:${mm}:${ss}`;
}

export default function SlimStatusBar({ statusLabel = 'AVAILABLE', activeId }) {
  const { mode } = useMode();
  const [start] = useState(() => Date.now());
  const [now, setNow] = useState(start);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const uptime = formatUptime(now - start);

  return (
    <div
      role="status"
      aria-label="Session status"
      style={{
        position: 'sticky',
        bottom: 0,
        zIndex: 40,
        background: 'rgba(5,6,7,0.92)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid var(--accent)',
        boxShadow: '0 -1px 12px var(--accent-glow)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.06em',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '8px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          flexWrap: 'wrap',
          color: 'var(--fg-1)',
        }}
      >
        <Pair k="MODE"   v={mode.toUpperCase()} accent />
        <Sep />
        <Pair k="STATUS" v={<><span className="dot" style={{ marginRight: 6 }} />{statusLabel}</>} />
        <Sep />
        <Pair k="UPTIME" v={uptime} tabular />
        {activeId && (
          <>
            <Sep />
            <Pair k="SECTION" v={activeId} accent />
          </>
        )}
        <span style={{ marginLeft: 'auto', color: 'var(--fg-2)' }}>
          v1.0 · press <span style={{ color: 'var(--fg-1)' }}>?</span> for shortcuts
        </span>
      </div>
    </div>
  );
}

function Pair({ k, v, accent = false, tabular = false }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span style={{ color: 'var(--fg-2)' }}>{k}:</span>
      <span
        style={{
          color: accent ? 'var(--accent)' : 'var(--fg-0)',
          fontVariantNumeric: tabular ? 'tabular-nums' : 'normal',
        }}
      >
        {v}
      </span>
    </span>
  );
}

function Sep() {
  return <span style={{ color: 'var(--fg-2)', opacity: 0.4 }}>│</span>;
}
