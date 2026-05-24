'use client';

import TerminalWindow from './TerminalWindow';

const STATUS_GLYPH = {
  achieved: <span className="accent">[ ✓ ]</span>,
  'in-progress': <span style={{ color: 'var(--warn)' }}>[ … ]</span>,
  planned: <span style={{ color: 'var(--fg-2)' }}>[   ]</span>,
};

export default function RoadmapTracker({ certifications }) {
  return (
    <TerminalWindow filename="@roadmap.tree">
      <div style={{ color: 'var(--fg-1)', marginBottom: 8 }}>
        # offensive security certification path
      </div>
      {certifications.map((c, i) => {
        const last = i === certifications.length - 1;
        return (
          <div
            key={c.id}
            style={{
              display: 'flex',
              gap: 8,
              padding: '6px 0',
              color: 'var(--fg-0)',
            }}
          >
            <span style={{ color: 'var(--fg-2)' }}>{last ? '└─' : '├─'}</span>
            {STATUS_GLYPH[c.status]}
            <span style={{ flex: 1 }}>{c.name}</span>
            <span style={{ color: 'var(--fg-2)', fontSize: 12 }}>{c.year}</span>
          </div>
        );
      })}
    </TerminalWindow>
  );
}
