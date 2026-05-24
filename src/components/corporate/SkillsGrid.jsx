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

const ICONS = { Radar, Smartphone, Code2, Wifi, ShieldCheck, Terminal, Monitor };

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
                  <span key={it} className="badge">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
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
