'use client';

import { useEffect, useState } from 'react';

const JUMP_KEYS = {
  w: 'whoami',
  e: 'experience',
  a: 'arsenal',
  r: 'roadmap',
  c: 'contact',
};

const SHORTCUTS = [
  { keys: 'g w', label: 'jump to whoami' },
  { keys: 'g e', label: 'jump to experience' },
  { keys: 'g a', label: 'jump to arsenal' },
  { keys: 'g r', label: 'jump to roadmap' },
  { keys: 'g c', label: 'jump to contact' },
  { keys: 'g g', label: 'jump to top' },
  { keys: 'G',   label: 'jump to bottom' },
  { keys: '?',   label: 'toggle this help' },
  { keys: 'esc', label: 'close help' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function KeyboardNav() {
  const [help, setHelp] = useState(false);
  const [pendingG, setPendingG] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Ignore when user is typing in a form field
      const t = e.target;
      const tag = t && t.tagName;
      const editable = t && (t.isContentEditable || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT');
      if (editable) return;

      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setHelp((h) => !h);
        return;
      }
      if (e.key === 'Escape') {
        if (help) {
          e.preventDefault();
          setHelp(false);
        }
        setPendingG(false);
        return;
      }

      if (e.key === 'G' && e.shiftKey) {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        setPendingG(false);
        return;
      }

      if (pendingG) {
        if (e.key === 'g') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setPendingG(false);
          return;
        }
        const id = JUMP_KEYS[e.key.toLowerCase()];
        if (id) {
          e.preventDefault();
          scrollToId(id);
          setPendingG(false);
          return;
        }
        setPendingG(false);
        return;
      }

      if (e.key === 'g') {
        setPendingG(true);
        setTimeout(() => setPendingG(false), 900);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [help, pendingG]);

  return (
    <>
      {pendingG && (
        <div
          aria-hidden="true"
          style={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 90,
            padding: '6px 10px',
            border: '1px solid var(--accent)',
            background: 'rgba(0,255,65,0.06)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.08em',
          }}
        >
          g_
        </div>
      )}

      {help && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Keyboard shortcuts"
          onClick={() => setHelp(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 150,
            background: 'rgba(5,6,7,0.78)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--bg-1)',
              border: '1px solid var(--accent)',
              boxShadow: '0 0 32px var(--accent-glow)',
              padding: 24,
              maxWidth: 420,
              width: '100%',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
            }}
          >
            <div
              style={{
                color: 'var(--accent)',
                marginBottom: 14,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: 11,
              }}
            >
              $ keymap --list
            </div>
            <div style={{ display: 'grid', gap: 6 }}>
              {SHORTCUTS.map((s) => (
                <div
                  key={s.keys}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: 16,
                    color: 'var(--fg-1)',
                  }}
                >
                  <span style={{ color: 'var(--accent)', minWidth: 60 }}>
                    {s.keys}
                  </span>
                  <span style={{ flex: 1, textAlign: 'left' }}>{s.label}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 16,
                paddingTop: 12,
                borderTop: '1px dashed var(--border)',
                color: 'var(--fg-2)',
                fontSize: 11,
              }}
            >
              click anywhere or press <span style={{ color: 'var(--fg-1)' }}>esc</span> to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
