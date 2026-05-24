'use client';

import { Download, Mail, Linkedin } from 'lucide-react';

export default function CorporateHero({ identity, brief, onDownload }) {
  return (
    <section className="section--hero" style={{ textAlign: 'left' }}>
      <div className="section--container">
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
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            color: 'var(--fg-1)',
            maxWidth: 760,
            lineHeight: 1.55,
          }}
        >
          {identity.title} · {identity.tagline}
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

        {/* Executive Summary — what a recruiter actually reads */}
        <div
          style={{
            marginTop: 48,
            padding: 'clamp(20px, 3vw, 28px)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-lg)',
            background: 'var(--bg-1)',
            position: 'relative',
          }}
        >
          <div
            className="t-eyebrow"
            style={{
              position: 'absolute',
              top: -10,
              left: 16,
              background: 'var(--bg-0)',
              padding: '0 10px',
              color: 'var(--accent)',
            }}
          >
            Executive Summary
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px, 1.5vw, 17px)',
              lineHeight: 1.65,
              color: 'var(--fg-0)',
              margin: 0,
            }}
          >
            {brief.executiveSummary}
          </p>
        </div>

        {/* Engagement Profile — ID-card-style facts */}
        <div
          style={{
            marginTop: 32,
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-lg)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '10px 20px',
              background: 'var(--bg-1)',
              borderBottom: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: 12,
            }}
          >
            <div className="t-eyebrow" style={{ color: 'var(--accent)' }}>
              Engagement Profile
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                color: 'var(--fg-2)',
                letterSpacing: '0.1em',
              }}
            >
              {brief.docId} · {brief.period}
            </div>
          </div>
          <dl
            style={{
              margin: 0,
              padding: 'clamp(16px, 2vw, 20px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 'clamp(14px, 2vw, 20px)',
            }}
          >
            <ProfileRow label="Candidate" value={identity.name} />
            <ProfileRow label="Target Role" value={identity.title} mono />
            <ProfileRow label="Posture" value={identity.tagline} />
            <ProfileRow label="Certification" value="CompTIA PenTest+" />
            <ProfileRow label="Location" value={identity.location} />
            <ProfileRow
              label="Availability"
              value="Open · Remote-friendly"
              highlight
            />
          </dl>
        </div>
      </div>
    </section>
  );
}

function ProfileRow({ label, value, mono = false, highlight = false }) {
  return (
    <div>
      <dt
        className="t-eyebrow"
        style={{ marginBottom: 6, color: 'var(--fg-2)' }}
      >
        {label}
      </dt>
      <dd
        style={{
          margin: 0,
          fontSize: 15,
          fontWeight: 500,
          fontFamily: mono ? 'var(--font-mono)' : 'var(--font-body)',
          color: highlight ? 'var(--accent)' : 'var(--fg-0)',
        }}
      >
        {value}
      </dd>
    </div>
  );
}
