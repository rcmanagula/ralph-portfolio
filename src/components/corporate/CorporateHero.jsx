'use client';

import { Download, Mail, Linkedin } from 'lucide-react';

export default function CorporateHero({ identity, about, onDownload }) {
  const stats = [
    { label: 'Focus', value: identity.title, sub: identity.tagline },
    { label: 'Certification', value: 'CompTIA PenTest+', sub: 'Achieved' },
    { label: 'Based in', value: 'Metro Manila, PH', sub: 'Available remote' },
    { label: 'Status', value: 'Open to roles', sub: 'VAPT · Red Team · AppSec' },
  ];

  return (
    <section style={{ padding: '96px 24px 64px', textAlign: 'left' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
        <div className="t-eyebrow" style={{ marginBottom: 20 }}>
          <span
            className="dot"
            style={{ marginRight: 8, verticalAlign: 'middle' }}
          />
          {identity.statusLabel} · {identity.location}
        </div>
        <h1 style={{ maxWidth: 900, marginBottom: 24 }}>{identity.name}</h1>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 20,
            color: 'var(--fg-1)',
            maxWidth: 720,
            lineHeight: 1.55,
          }}
        >
          {about.headline}{' '}
          <span style={{ color: 'var(--fg-0)' }}>{about.long}</span>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 12,
            marginTop: 36,
            flexWrap: 'wrap',
          }}
        >
          <button className="btn btn-primary" onClick={onDownload}>
            <Download size={16} strokeWidth={1.5} /> Download Resume
          </button>
          <a className="btn" href={`mailto:${identity.email}`}>
            <Mail size={16} strokeWidth={1.5} /> Contact
          </a>
          <a
            className="btn btn-ghost"
            href={`https://${identity.linkedin}`}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} strokeWidth={1.5} /> LinkedIn
          </a>
        </div>

        <div
          style={{
            marginTop: 56,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="card" style={{ padding: 16 }}>
              <div className="t-eyebrow" style={{ marginBottom: 6 }}>
                {s.label}
              </div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>{s.value}</div>
              <div className="t-small">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
