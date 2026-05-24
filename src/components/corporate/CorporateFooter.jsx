'use client';

export default function CorporateFooter({ identity, education }) {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        marginTop: 80,
        padding: '40px 24px 32px',
      }}
    >
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
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
