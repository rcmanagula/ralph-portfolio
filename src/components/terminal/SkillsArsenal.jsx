'use client';

export default function SkillsArsenal({ skills }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
        gap: 16,
      }}
    >
      {skills.map((cat) => (
        <div
          key={cat.category}
          style={{
            background: 'var(--bg-1)',
            border: '1px solid var(--border)',
            padding: '14px 16px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--accent)',
              marginBottom: 10,
              letterSpacing: '0.06em',
            }}
          >
            $ cat ./skills.txt | grep &quot;{cat.category}&quot;
          </div>
          {cat.items.map((item) => (
            <div
              key={item}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 13,
                color: 'var(--fg-0)',
                display: 'flex',
                gap: 8,
                padding: '2px 0',
              }}
            >
              <span className="accent" style={{ flexShrink: 0 }}>▌</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
