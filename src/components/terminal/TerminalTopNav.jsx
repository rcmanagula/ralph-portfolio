'use client';

const LINKS = [
  ['#whoami', 'whoami'],
  ['#experience', 'experience'],
  ['#arsenal', 'arsenal'],
  ['#roadmap', 'roadmap'],
  ['#contact', 'contact'],
];

export default function TerminalTopNav({ activeId }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid var(--accent)',
        background: 'rgba(5,6,7,0.85)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
        }}
      >
        <div
          style={{
            color: 'var(--accent)',
            textShadow: '0 0 8px var(--accent-glow)',
          }}
        >
          ralph@offensive-sec:~$
        </div>
        <nav
          aria-label="Primary"
          style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: 28,
            fontSize: 13,
          }}
        >
          {LINKS.map(([h, l]) => {
            const id = h.slice(1);
            const isActive = activeId === id;
            return (
              <a
                key={l}
                href={h}
                aria-current={isActive ? 'true' : undefined}
                className={`nav-link${isActive ? ' is-active' : ''}`}
                style={{ fontSize: 13 }}
              >
                {l}
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
