'use client';

export default function DocumentHeader({ brief }) {
  return (
    <div
      role="contentinfo"
      aria-label="Document classification"
      style={{
        background: 'var(--bg-0)',
        borderBottom: '1px solid var(--border)',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.12em',
        color: 'var(--fg-2)',
      }}
    >
      <div
        className="section--container"
        style={{
          padding: '8px clamp(16px, 4vw, 24px)',
          display: 'flex',
          alignItems: 'center',
          gap: 18,
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            color: 'var(--accent)',
            fontWeight: 600,
            padding: '2px 8px',
            border: '1px solid var(--accent)',
            background: 'color-mix(in srgb, var(--accent) 8%, transparent)',
          }}
        >
          {brief.classification}
        </span>
        <span className="hide-sm">DOC: {brief.docId}</span>
        <span className="hide-sm">{brief.version}</span>
        <span style={{ marginLeft: 'auto' }}>PERIOD: {brief.period}</span>
      </div>
    </div>
  );
}
