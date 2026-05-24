'use client';

import { forwardRef, useImperativeHandle, useState } from 'react';

const RESUME_HREF = '/Ralph_Christian_Managula_Resume.pdf';

const DownloadResumeButton = forwardRef(function DownloadResumeButton(
  { label = './download_resume.pdf' },
  ref
) {
  const [state, setState] = useState('idle');
  const [pct, setPct] = useState(0);

  const trigger = () => {
    if (state !== 'idle') return;
    setState('decrypting');
    setPct(0);
    let p = 0;
    const tick = () => {
      p += 4 + Math.random() * 9;
      if (p >= 100) {
        setPct(100);
        setState('done');
        const a = document.createElement('a');
        a.href = RESUME_HREF;
        a.download = 'Ralph_Christian_Managula_Resume.pdf';
        a.click();
        setTimeout(() => {
          setState('idle');
          setPct(0);
        }, 1800);
      } else {
        setPct(p);
        setTimeout(tick, 60 + Math.random() * 40);
      }
    };
    tick();
  };

  useImperativeHandle(ref, () => ({ trigger }), [state]);

  if (state === 'idle') {
    return (
      <button className="btn btn-primary" onClick={trigger}>
        {label}
      </button>
    );
  }
  if (state === 'decrypting') {
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '10px 16px',
          border: '1px solid var(--accent)',
          background: 'rgba(0,255,65,0.06)',
          color: 'var(--accent)',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          minWidth: 360,
        }}
      >
        <span>decrypting secure payload...</span>
        <span
          style={{
            flex: 1,
            height: 8,
            background: 'var(--bg-2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              position: 'absolute',
              inset: 0,
              width: `${pct}%`,
              background: 'var(--accent)',
              boxShadow: '0 0 8px var(--accent-glow)',
            }}
          />
        </span>
        <span style={{ minWidth: 40, textAlign: 'right' }}>{Math.floor(pct)}%</span>
      </div>
    );
  }
  return (
    <div
      style={{
        display: 'inline-flex',
        gap: 8,
        alignItems: 'center',
        padding: '10px 16px',
        border: '1px solid var(--accent)',
        color: 'var(--accent)',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
      }}
    >
      [ ✓ ] payload delivered.
    </div>
  );
});

export default DownloadResumeButton;
