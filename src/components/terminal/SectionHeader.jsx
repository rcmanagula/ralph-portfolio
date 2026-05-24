'use client';

export default function SectionHeader({ cmd, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 24,
          fontWeight: 700,
          color: 'var(--fg-0)',
        }}
      >
        <span className="accent">&gt;</span> {cmd}
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
