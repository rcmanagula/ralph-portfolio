'use client';

export default function CorporateFooter({ identity, education, brief }) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        marginTop: 80,
        padding: 'clamp(24px, 5vw, 40px) clamp(16px, 4vw, 24px) clamp(20px, 4vw, 32px)',
      }}
    >
      <div className="section--container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 8 }}>
              Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <a
                href={`mailto:${identity.email}`}
                style={{
                  color: 'var(--fg-0)',
                  textDecoration: 'none',
                  fontSize: 14,
                }}
              >
                {identity.email}
              </a>
              <span style={{ color: 'var(--fg-1)', fontSize: 14 }}>
                {identity.phone}
              </span>
              <a
                href={`https://${identity.linkedin}`}
                style={{
                  color: 'var(--fg-0)',
                  textDecoration: 'none',
                  fontSize: 14,
                }}
                target="_blank"
                rel="noreferrer"
              >
                {identity.linkedin}
              </a>
            </div>
          </div>
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 8 }}>
              Education
            </div>
            <div style={{ fontSize: 14, color: 'var(--fg-0)' }}>{education.degree}</div>
            <div style={{ fontSize: 14, color: 'var(--fg-1)' }}>{education.school}</div>
            <div className="t-small mono">{education.years}</div>
          </div>
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 8 }}>
              Location
            </div>
            <div style={{ fontSize: 14, color: 'var(--fg-0)' }}>
              {identity.location}
            </div>
            <div className="t-small">Open to remote engagements</div>
          </div>
        </div>
        {brief && (
          <div
            style={{
              marginTop: 8,
              marginBottom: 24,
              padding: '18px 20px',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-md)',
              background: 'var(--bg-1)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: 16,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
            }}
          >
            <div>
              <div className="t-eyebrow" style={{ marginBottom: 4 }}>
                Prepared by
              </div>
              <div style={{ color: 'var(--fg-0)' }}>{brief.preparedBy}</div>
            </div>
            <div>
              <div className="t-eyebrow" style={{ marginBottom: 4 }}>
                Document
              </div>
              <div style={{ color: 'var(--fg-0)' }}>
                {brief.docId} · {brief.version}
              </div>
            </div>
            <div>
              <div className="t-eyebrow" style={{ marginBottom: 4 }}>
                Period
              </div>
              <div style={{ color: 'var(--fg-0)' }}>{brief.period}</div>
            </div>
            <div>
              <div className="t-eyebrow" style={{ marginBottom: 4 }}>
                Classification
              </div>
              <div style={{ color: 'var(--accent)' }}>{brief.classification}</div>
            </div>
          </div>
        )}

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 12,
            color: 'var(--fg-2)',
            borderTop: '1px solid var(--border)',
            paddingTop: 24,
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <div style={{ fontFamily: 'var(--font-mono)' }}>
            {identity.sigil}
            <span style={{ color: 'var(--accent)' }}>.</span> &nbsp; © 2026 Ralph
            Christian Managula
          </div>
          <div className="mono">v1.0 · last updated 2026.05</div>
        </div>
      </div>
    </footer>
  );
}
