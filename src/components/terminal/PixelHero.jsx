'use client';

import { useEffect, useState } from 'react';

const ASCII_FULL = `██████╗  █████╗ ██╗     ██████╗ ██╗  ██╗    ███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ██╗   ██╗██╗      █████╗
██╔══██╗██╔══██╗██║     ██╔══██╗██║  ██║    ████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██║   ██║██║     ██╔══██╗
██████╔╝███████║██║     ██████╔╝███████║    ██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗██║   ██║██║     ███████║
██╔══██╗██╔══██║██║     ██╔═══╝ ██╔══██║    ██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██║   ██║██║     ██╔══██║
██║  ██║██║  ██║███████╗██║     ██║  ██║    ██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝╚██████╔╝███████╗██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝`;

const ASCII_COMPACT = `██████╗  ██████╗███╗   ███╗
██╔══██╗██╔════╝████╗ ████║
██████╔╝██║     ██╔████╔██║
██╔══██╗██║     ██║╚██╔╝██║
██║  ██║╚██████╗██║ ╚═╝ ██║
╚═╝  ╚═╝ ╚═════╝╚═╝     ╚═╝`;

function useIsMobile(breakpoint = 720) {
  const [m, setM] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const handler = (e) => setM(e.matches);
    setM(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [breakpoint]);
  return m;
}

export default function PixelHero({ identity }) {
  const isMobile = useIsMobile();

  const rows = [
    { label: 'SYSTEM', value: 'Portfolio v1.0 loaded' },
    { label: 'ROLE', value: identity.title },
    { label: 'FOCUS', value: identity.tagline },
    { label: 'CERTIFICATION', value: 'CompTIA PenTest+' },
    { label: 'LOCATION', value: identity.location },
    { label: 'STATUS', value: identity.statusLabel, highlight: true },
  ];

  return (
    <section style={{ padding: isMobile ? '40px 0 24px' : '64px 0 32px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'auto 1fr',
          gap: isMobile ? 20 : 40,
          alignItems: 'center',
          marginBottom: isMobile ? 32 : 56,
          justifyItems: isMobile ? 'center' : 'stretch',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <div
          style={{
            width: isMobile ? 120 : 200,
            height: isMobile ? 140 : 220,
            border: '2px solid var(--accent)',
            background: 'var(--bg-1)',
            overflow: 'hidden',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile-picture.jpg"
            alt="Ralph Christian Managula"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: 'grayscale(0.15) contrast(1.05) brightness(0.95)',
            }}
          />
        </div>

        <pre
          aria-label="RALPH MANAGULA"
          className="phosphor"
          style={{
            margin: 0,
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent)',
            fontSize: isMobile ? 'clamp(7px, 2.4vw, 12px)' : 'clamp(5px, 0.78vw, 11px)',
            lineHeight: 1.0,
            letterSpacing: 0,
            whiteSpace: 'pre',
            overflow: 'hidden',
            maxWidth: '100%',
          }}
        >
          {isMobile ? ASCII_COMPACT : ASCII_FULL}
        </pre>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile
            ? 'auto auto 1fr'
            : 'minmax(160px, 200px) auto 1fr',
          rowGap: 8,
          columnGap: isMobile ? 12 : 24,
          fontFamily: 'var(--font-mono)',
          fontSize: isMobile ? 12 : 14,
        }}
      >
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'contents' }}>
            <span style={{ color: 'var(--fg-2)', letterSpacing: '0.06em' }}>
              {r.label}
            </span>
            <span style={{ color: 'var(--fg-1)' }}>
              [<span className="accent">OK</span>]
            </span>
            <span
              style={{
                color: r.highlight ? 'var(--warn)' : 'var(--accent)',
                textShadow: r.highlight
                  ? '0 0 6px rgba(255,180,84,0.35)'
                  : '0 0 6px var(--accent-glow)',
              }}
            >
              {r.value}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: 28,
          fontFamily: 'var(--font-mono)',
          fontSize: isMobile ? 12 : 14,
          color: 'var(--accent)',
          textShadow: '0 0 8px var(--accent-glow)',
        }}
      >
        System ready. Scroll to explore.
        <span className="caret" style={{ marginLeft: 6 }}></span>
      </div>
    </section>
  );
}
