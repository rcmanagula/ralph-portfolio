'use client';

export default function CorporateSectionHeader({ eyebrow, title, kicker }) {
  return (
    <div style={{ marginBottom: 36, maxWidth: 720 }}>
      <div
        className="t-eyebrow"
        style={{ marginBottom: 10, color: 'var(--accent)' }}
      >
        {eyebrow}
      </div>
      <h2 style={{ marginBottom: 12 }}>{title}</h2>
      {kicker && <div className="t-lead muted">{kicker}</div>}
    </div>
  );
}
