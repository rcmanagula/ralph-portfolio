'use client';

import { freqBar, formatYears, FREQ_COLOR } from '@/lib/proficiency';

const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export default function SkillsArsenal({ skills }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
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
            $ cat ./skills/{slugify(cat.category)}.txt
          </div>
          {cat.items.map((item) => {
            const name = typeof item === 'string' ? item : item.name;
            const freq = typeof item === 'string' ? null : item.freq;
            const years = typeof item === 'string' ? null : item.years;
            const barColor = freq ? FREQ_COLOR[freq] : 'var(--fg-2)';

            return (
              <div
                key={name}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 13,
                  color: 'var(--fg-0)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '3px 0',
                }}
              >
                <span className="accent" style={{ flexShrink: 0 }}>▌</span>
                <span style={{ flex: 1, minWidth: 0 }}>{name}</span>
                {freq && (
                  <>
                    <span
                      aria-label={`${freq}, ${formatYears(years)}`}
                      style={{
                        color: barColor,
                        letterSpacing: '0.5px',
                        flexShrink: 0,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {freqBar(freq)}
                    </span>
                    <span
                      style={{
                        color: 'var(--fg-2)',
                        minWidth: 32,
                        textAlign: 'right',
                        flexShrink: 0,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {formatYears(years)}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      ))}
      <ProficiencyLegend />
    </div>
  );
}

function ProficiencyLegend() {
  return (
    <div
      style={{
        gridColumn: '1 / -1',
        marginTop: 4,
        padding: '10px 14px',
        border: '1px dashed var(--border)',
        background: 'var(--bg-1)',
        display: 'flex',
        gap: 18,
        flexWrap: 'wrap',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--fg-2)',
      }}
    >
      <span style={{ color: 'var(--fg-2)' }}># legend:</span>
      <span><span style={{ color: 'var(--accent)' }}>▰▰▰▰▰</span> daily</span>
      <span><span style={{ color: 'var(--accent)' }}>▰▰▰▰▱</span> weekly</span>
      <span><span style={{ color: 'var(--warn)' }}>▰▰▰▱▱</span> occasional</span>
      <span><span style={{ color: 'var(--fg-2)' }}>▰▰▱▱▱</span> learning</span>
    </div>
  );
}
