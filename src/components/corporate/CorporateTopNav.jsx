'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ModeToggle from '../shared/ModeToggle';

const LINKS = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['arsenal', 'Arsenal'],
  ['roadmap', 'Roadmap'],
  ['contact', 'Contact'],
];

export default function CorporateTopNav({ identity, activeId }) {
  const [open, setOpen] = useState(false);

  // Close menu when section in viewport changes (user clicked a link)
  useEffect(() => {
    setOpen(false);
  }, [activeId]);

  // Lock body scroll while drawer open
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    const prev = document.body.style.overflow;
    if (open) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

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
          padding: '14px clamp(16px, 4vw, 24px)',
          display: 'flex',
          alignItems: 'center',
          gap: 24,
        }}
      >
        <a
          href="#"
          aria-label="Home"
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

        <nav
          aria-label="Primary"
          className="nav-inline"
          style={{ display: 'flex', gap: 22, marginLeft: 12 }}
        >
          {LINKS.map(([id, label]) => {
            const isActive = activeId === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={`nav-link${isActive ? ' is-active' : ''}`}
                style={{ fontSize: 13.5, fontFamily: 'var(--font-body)' }}
              >
                {label}
              </a>
            );
          })}
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
            className="hide-sm"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              color: 'var(--fg-1)',
            }}
          >
            <span className="dot" />
            <span>{identity.statusLabel}</span>
          </div>
          <ModeToggle />

          <button
            type="button"
            className="nav-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{
              border: '1px solid var(--border)',
              background: 'var(--bg-1)',
              color: 'var(--fg-0)',
              width: 36,
              height: 36,
              borderRadius: 'var(--r-md)',
              cursor: 'pointer',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="nav-drawer"
          onClick={() => setOpen(false)}
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            aria-label="Primary mobile"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              padding: '16px clamp(16px, 4vw, 24px)',
              background: 'rgba(12,14,18,0.98)',
              borderBottom: '1px solid var(--border)',
            }}
          >
            {LINKS.map(([id, label]) => {
              const isActive = activeId === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                  className={`nav-link${isActive ? ' is-active' : ''}`}
                  style={{
                    fontSize: 16,
                    fontFamily: 'var(--font-body)',
                    padding: '14px 8px',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {label}
                </a>
              );
            })}
            <div
              style={{
                marginTop: 12,
                paddingTop: 12,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                color: 'var(--fg-1)',
                fontSize: 13,
              }}
            >
              <span className="dot" />
              <span>{identity.statusLabel}</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
