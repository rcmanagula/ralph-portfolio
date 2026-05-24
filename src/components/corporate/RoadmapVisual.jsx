'use client';

export default function RoadmapVisual({ certifications }) {
  return (
    <div className="card roadmap-card" style={{ padding: 28 }}>
      <div className="roadmap-track">
        {certifications.map((c, i) => {
          const isLast = i === certifications.length - 1;
          const isAchieved = c.status === 'achieved';
          const isInProgress = c.status === 'in-progress';
          const dotBg = isAchieved
            ? 'var(--accent)'
            : isInProgress
            ? 'var(--warn)'
            : 'var(--bg-2)';
          const dotBorder = isAchieved
            ? 'var(--accent)'
            : isInProgress
            ? 'var(--warn)'
            : 'var(--border-hi)';
          return (
            <div
              key={c.id}
              style={{
                flex: 1,
                minWidth: 180,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              {!isLast && (
                <div
                  className="roadmap-connector"
                  style={{
                    position: 'absolute',
                    top: 17,
                    left: '50%',
                    right: '-50%',
                    height: 2,
                    background: isAchieved ? 'var(--accent)' : 'var(--border)',
                    opacity: isAchieved ? 0.5 : 1,
                  }}
                />
              )}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 999,
                  background: dotBg,
                  border: `2px solid ${dotBorder}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isAchieved ? '#fff' : 'var(--fg-1)',
                  fontWeight: 600,
                  fontSize: 14,
                  zIndex: 1,
                  position: 'relative',
                  boxShadow: isAchieved ? '0 0 16px var(--accent-glow)' : 'none',
                }}
              >
                {isAchieved ? '✓' : isInProgress ? '…' : i + 1}
              </div>
              <div style={{ marginTop: 14, textAlign: 'center', padding: '0 8px' }}>
                {c.tier && (
                  <div
                    className="t-eyebrow"
                    style={{
                      marginBottom: 8,
                      color: 'var(--fg-2)',
                      fontSize: 10,
                    }}
                  >
                    {c.tier}
                  </div>
                )}
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 4 }}>
                  {c.name}
                </div>
                <div className="t-small mono">{c.issuer}</div>
                <div
                  className="t-eyebrow"
                  style={{
                    marginTop: 8,
                    color: isAchieved
                      ? 'var(--accent)'
                      : isInProgress
                      ? 'var(--warn)'
                      : 'var(--fg-2)',
                  }}
                >
                  {c.year}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
