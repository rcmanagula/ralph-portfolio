'use client';

import TerminalWindow from './TerminalWindow';

export default function ExperienceLog({ experience }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {experience.map((job) => (
        <TerminalWindow key={job.id} filename={`@${job.id}.log`}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              gap: 8,
              marginBottom: 8,
            }}
          >
            <div>
              <div style={{ color: 'var(--fg-0)', fontWeight: 700 }}>{job.role}</div>
              <div style={{ color: 'var(--accent)' }}>{job.company}</div>
            </div>
            <div style={{ color: 'var(--fg-2)', fontSize: 12 }}>
              {job.start} — {job.end}{' '}
              {job.current && <span className="accent">●</span>}
            </div>
          </div>
          <div style={{ color: 'var(--fg-2)', fontSize: 12, marginBottom: 10 }}>
            # {job.summary}
          </div>
          {job.bullets.map((b, j) => (
            <div
              key={j}
              style={{
                display: 'flex',
                gap: 8,
                marginBottom: 4,
                color: 'var(--fg-1)',
              }}
            >
              <span className="accent" style={{ flexShrink: 0 }}>▌</span>
              <span>{b}</span>
            </div>
          ))}
        </TerminalWindow>
      ))}
    </div>
  );
}
