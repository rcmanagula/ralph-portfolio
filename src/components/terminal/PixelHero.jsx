'use client';

export default function PixelHero({ identity }) {
  const rows = [
    { label: 'SYSTEM', value: 'Portfolio v1.0 loaded' },
    { label: 'ROLE', value: identity.title },
    { label: 'FOCUS', value: identity.tagline },
    { label: 'CERTIFICATION', value: 'CompTIA PenTest+' },
    { label: 'LOCATION', value: identity.location },
    { label: 'STATUS', value: identity.statusLabel, highlight: true },
  ];

  return (
    <section style={{ padding: '64px 0 32px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: 40,
          alignItems: 'center',
          marginBottom: 56,
        }}
      >
        <div
          style={{
            width: 200,
            height: 220,
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
          style={{
            margin: 0,
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent)',
            fontSize: 'clamp(5px, 0.78vw, 11px)',
            lineHeight: 1.0,
            letterSpacing: 0,
            whiteSpace: 'pre',
            overflow: 'hidden',
          }}
        >
{`██████╗  █████╗ ██╗     ██████╗ ██╗  ██╗    ███╗   ███╗ █████╗ ███╗   ██╗ █████╗  ██████╗ ██╗   ██╗██╗      █████╗
██╔══██╗██╔══██╗██║     ██╔══██╗██║  ██║    ████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝ ██║   ██║██║     ██╔══██╗
██████╔╝███████║██║     ██████╔╝███████║    ██╔████╔██║███████║██╔██╗ ██║███████║██║  ███╗██║   ██║██║     ███████║
██╔══██╗██╔══██║██║     ██╔═══╝ ██╔══██║    ██║╚██╔╝██║██╔══██║██║╚██╗██║██╔══██║██║   ██║██║   ██║██║     ██╔══██║
██║  ██║██║  ██║███████╗██║     ██║  ██║    ██║ ╚═╝ ██║██║  ██║██║ ╚████║██║  ██║╚██████╔╝╚██████╔╝███████╗██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝    ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝  ╚═╝`}
        </pre>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(160px, 200px) auto 1fr',
          rowGap: 8,
          columnGap: 24,
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
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
          fontSize: 14,
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
