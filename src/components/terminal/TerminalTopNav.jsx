'use client';

const LINKS = [
  ['#whoami', 'whoami'],
  ['#experience', 'experience'],
  ['#arsenal', 'arsenal'],
  ['#contact', 'contact'],
];

export default function TerminalTopNav() {
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
          style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: 32,
            fontSize: 13,
          }}
        >
          {LINKS.map(([h, l]) => (
            <a
              key={l}
              href={h}
              style={{
                color: 'var(--fg-1)',
                textDecoration: 'none',
                transition: 'color var(--dur-fast) var(--ease-out-expo-ish)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.textShadow = '0 0 8px var(--accent-glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--fg-1)';
                e.currentTarget.style.textShadow = 'none';
              }}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
