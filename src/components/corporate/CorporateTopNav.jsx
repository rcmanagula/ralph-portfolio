'use client';

import ModeToggle from '../shared/ModeToggle';

const LINKS = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['arsenal', 'Arsenal'],
  ['roadmap', 'Roadmap'],
];

export default function CorporateTopNav({ identity }) {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        background: 'rgba(12,14,18,0.75)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--content-max)',
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <a
          href="#"
          style={{
            fontFamily: 'var(--font-mono)',
            fontWeight: 600,
            fontSize: 18,
            color: 'var(--fg-0)',
            textDecoration: 'none',
          }}
        >
          {identity.sigil}
          <span style={{ color: 'var(--accent)' }}>.</span>
        </a>
        <nav style={{ display: 'flex', gap: 22, marginLeft: 12 }}>
          {LINKS.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              style={{
                fontSize: 13.5,
                color: 'var(--fg-1)',
                textDecoration: 'none',
                transition: 'color var(--dur-fast) var(--ease-out-expo-ish)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fg-0)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fg-1)')}
            >
              {label}
            </a>
          ))}
        </nav>
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              color: 'var(--fg-1)',
            }}
          >
            <span className="dot" />
            <span className="hide-sm">{identity.statusLabel}</span>
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
