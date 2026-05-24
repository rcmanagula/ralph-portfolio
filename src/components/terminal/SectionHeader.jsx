'use client';

export default function SectionHeader({ cmd, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div
        className="phosphor"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 24,
          fontWeight: 700,
          color: 'var(--fg-0)',
        }}
      >
        <span className="accent">&gt;</span> {cmd}
        <span className="caret" style={{ marginLeft: 6 }} aria-hidden="true"></span>
      </div>
      {sub && (
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            color: 'var(--fg-2)',
            marginTop: 4,
          }}
        >
          # {sub}
        </div>
      )}
    </div>
  );
}
