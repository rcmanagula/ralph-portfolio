import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Ralph Christian Managula · Offensive Security';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background:
            'radial-gradient(ellipse at top left, #0b3a14 0%, #050607 60%)',
          color: '#e6edf3',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 22,
            color: '#00FF41',
            letterSpacing: '0.08em',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 14,
              height: 14,
              borderRadius: 999,
              background: '#00FF41',
            }}
          />
          ralph@offensive-sec:~$
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: '#00FF41',
              lineHeight: 1,
              letterSpacing: '-0.02em',
            }}
          >
            RALPH MANAGULA
          </div>
          <div style={{ fontSize: 34, color: '#e6edf3' }}>
            Penetration Tester · Red Team Operator
          </div>
          <div
            style={{
              display: 'flex',
              gap: 14,
              flexWrap: 'wrap',
              fontSize: 20,
              color: '#9aa4ad',
            }}
          >
            <span>CompTIA PenTest+</span>
            <span>·</span>
            <span>VAPT · Red Team · AppSec</span>
            <span>·</span>
            <span>Metro Manila, PH</span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 18,
            color: '#5a6470',
          }}
        >
          <span>portfolio.v1 · 2026</span>
          <span>linkedin.com/in/rcmanagula</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
