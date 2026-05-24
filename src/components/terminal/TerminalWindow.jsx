'use client';

export default function TerminalWindow({ filename, children, style = {} }) {
  return (
    <div
      style={{
        background: 'var(--bg-1)',
        border: '1px solid var(--border)',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 12px',
          background: 'var(--bg-2)',
          borderBottom: '1px solid var(--border)',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#ff5c5c' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: '#ffb454' }} />
        <span style={{ width: 9, height: 9, borderRadius: 999, background: 'var(--accent)' }} />
        <span style={{ marginLeft: 'auto', color: 'var(--fg-2)' }}>{filename}</span>
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
    </div>
  );
}
