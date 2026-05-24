'use client';

import {
  Radar,
  Smartphone,
  Code2,
  Wifi,
  ShieldCheck,
  Terminal,
  Monitor,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FREQ_COLOR, FREQ_LABEL, formatYears } from '@/lib/proficiency';

const ICONS = { Radar, Smartphone, Code2, Wifi, ShieldCheck, Terminal, Monitor };

function SkillBadge({ item }) {
  const isObj = typeof item !== 'string';
  const name = isObj ? item.name : item;
  const freq = isObj ? item.freq : null;
  const years = isObj ? item.years : null;
  const dotColor = freq ? FREQ_COLOR[freq] : 'var(--fg-2)';

  return (
    <span
      className="badge"
      title={freq ? `${FREQ_LABEL[freq]} · ${formatYears(years)}` : name}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
    >
      {freq && (
        <span
          aria-hidden="true"
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            background: dotColor,
            boxShadow: freq === 'daily' ? `0 0 6px ${dotColor}` : 'none',
            flexShrink: 0,
          }}
        />
      )}
      <span>{name}</span>
      {years != null && (
        <span style={{ color: 'var(--fg-2)', fontWeight: 400 }}>
          · {formatYears(years)}
        </span>
      )}
    </span>
  );
}

export default function SkillsGrid({ skills, focusAreas }) {
  return (
    <>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 16,
        }}
      >
        {skills.map((cat, i) => {
          const IconCmp = ICONS[cat.icon] || Terminal;
          return (
            <motion.div
              key={cat.category}
              className="card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.32,
                delay: (i % 4) * 0.06,
                ease: [0.2, 0.7, 0.2, 1],
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 'var(--r-md)',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                  }}
                >
                  <IconCmp size={16} strokeWidth={1.5} color="var(--accent)" />
                </span>
                <div style={{ fontSize: 14, fontWeight: 500 }}>{cat.category}</div>
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {cat.items.map((it) => (
                  <SkillBadge key={typeof it === 'string' ? it : it.name} item={it} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div
        style={{
          marginTop: 28,
          padding: '14px 20px',
          border: '1px dashed var(--border)',
          borderRadius: 'var(--r-md)',
          display: 'flex',
          gap: 22,
          flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          color: 'var(--fg-2)',
          alignItems: 'center',
        }}
      >
        <span>Legend:</span>
        <LegendDot color="var(--accent)" label="daily" glow />
        <LegendDot color="var(--accent)" label="weekly" />
        <LegendDot color="var(--warn)" label="occasional" />
        <LegendDot color="var(--fg-2)" label="learning" />
      </div>

      <div
        style={{
          marginTop: 32,
          padding: 24,
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-lg)',
        }}
      >
        <div className="t-eyebrow" style={{ marginBottom: 12 }}>
          Focus Areas
        </div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {focusAreas.map((f) => (
            <span key={f} className="badge">
              {f}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

function LegendDot({ color, label, glow }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: 999,
          background: color,
          boxShadow: glow ? `0 0 6px ${color}` : 'none',
        }}
      />
      <span>{label}</span>
    </span>
  );
}
