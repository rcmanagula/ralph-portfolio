'use client';

export default function CompanyMark({ logo, name, size = 44 }) {
  return (
    <div
      title={name}
      style={{
        width: size,
        height: size,
        flexShrink: 0,
        borderRadius: 'var(--r-md)',
        background: 'var(--bg-2)',
        border: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: size * 0.42,
        color: 'var(--fg-0)',
      }}
    >
      {logo}
    </div>
  );
}
