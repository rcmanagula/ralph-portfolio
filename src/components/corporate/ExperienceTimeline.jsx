'use client';

import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import CompanyMark from './CompanyMark';

export default function ExperienceTimeline({ experience }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 32 }}>
      <div
        style={{
          position: 'absolute',
          left: 11,
          top: 12,
          bottom: 12,
          width: 1,
          background: 'var(--border)',
        }}
      />
      {experience.map((job, i) => (
        <motion.article
          key={job.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{
            duration: 0.32,
            delay: i * 0.06,
            ease: [0.2, 0.7, 0.2, 1],
          }}
          style={{ position: 'relative', marginBottom: 28 }}
        >
          <div
            style={{
              position: 'absolute',
              left: -28,
              top: 22,
              width: 14,
              height: 14,
              borderRadius: 999,
              background: job.current ? 'var(--accent)' : 'var(--bg-2)',
              border: `2px solid ${
                job.current ? 'var(--accent)' : 'var(--border-hi)'
              }`,
              boxShadow: job.current ? '0 0 12px var(--accent-glow)' : 'none',
            }}
          />
          <div className="card" style={{ position: 'relative' }}>
            {job.current && (
              <span
                className="badge badge-accent"
                style={{ position: 'absolute', top: -10, right: 16 }}
              >
                <span className="dot" /> Active Engagement
              </span>
            )}

            {/* Engagement ID strip */}
            {job.engId && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 12,
                  paddingBottom: 12,
                  borderBottom: '1px dashed var(--border)',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    color: 'var(--accent)',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                  }}
                >
                  {job.engId}
                </span>
                {job.tags && job.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 10.5,
                      color: 'var(--fg-2)',
                      border: '1px solid var(--border)',
                      padding: '2px 7px',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div
              style={{
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
                marginBottom: 14,
              }}
            >
              <CompanyMark logo={job.logo} name={job.company} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 500,
                    color: 'var(--fg-0)',
                    marginBottom: 2,
                  }}
                >
                  {job.role}
                </div>
                <div style={{ fontSize: 14, color: 'var(--accent)' }}>
                  {job.company}
                </div>
                <div className="t-small mono" style={{ marginTop: 4 }}>
                  {job.start} — {job.end}
                </div>
              </div>
            </div>

            <div
              className="t-eyebrow"
              style={{ marginBottom: 8, color: 'var(--fg-2)' }}
            >
              Scope
            </div>
            <div
              className="t-lead muted"
              style={{ fontSize: 15, marginBottom: 16, lineHeight: 1.55 }}
            >
              {job.summary}
            </div>

            <div
              className="t-eyebrow"
              style={{ marginBottom: 8, color: 'var(--fg-2)' }}
            >
              Findings &amp; Outcomes
            </div>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
              }}
            >
              {job.bullets.map((b, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    gap: 12,
                    fontSize: 14,
                    color: 'var(--fg-1)',
                    lineHeight: 1.55,
                  }}
                >
                  <ChevronRight
                    size={16}
                    strokeWidth={1.5}
                    color="var(--accent)"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
