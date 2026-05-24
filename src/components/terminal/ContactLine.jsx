'use client';

import { useState } from 'react';

export default function ContactLine({ label, value, href, external = false, copyable = true }) {
  const [copied, setCopied] = useState(false);

  const copy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* silent — clipboard may be unavailable */
    }
  };

  const body = (
    <>
      <span
        style={{
          color: 'var(--fg-2)',
          minWidth: 90,
          display: 'inline-block',
        }}
      >
        {label}
      </span>
      <span style={{ color: 'var(--fg-1)' }}>::</span>
      <span style={{ color: 'var(--fg-0)', flex: 1 }}>{value}</span>
      {copyable && (
        <button
          type="button"
          onClick={copy}
          aria-label={`Copy ${label}`}
          className="copy-btn"
          style={{
            background: 'transparent',
            border: '1px solid var(--border)',
            color: copied ? 'var(--accent)' : 'var(--fg-2)',
            fontFamily: 'inherit',
            fontSize: 11,
            padding: '2px 8px',
            cursor: 'pointer',
            letterSpacing: '0.04em',
          }}
        >
          {copied ? '[ ✓ copied ]' : '[ copy ]'}
        </button>
      )}
    </>
  );

  const baseStyle = {
    display: 'flex',
    gap: 10,
    alignItems: 'center',
    padding: '4px 0',
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
  };

  if (!href) return <div style={baseStyle}>{body}</div>;

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="contact-line"
      style={{ ...baseStyle, textDecoration: 'none', color: 'inherit' }}
    >
      {body}
    </a>
  );
}
