'use client';

import { useState } from 'react';
import { RESUME } from '@/lib/resume';
import CorporateTopNav from './CorporateTopNav';
import CorporateHero from './CorporateHero';
import CorporateSectionHeader from './CorporateSectionHeader';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsGrid from './SkillsGrid';
import RoadmapVisual from './RoadmapVisual';
import CorporateFooter from './CorporateFooter';

const RESUME_HREF = '/Ralph_Christian_Managula_Resume.pdf';

export default function CorporateApp() {
  const [downloading, setDownloading] = useState(false);
  const [pct, setPct] = useState(0);
  const R = RESUME;

  const triggerDownload = () => {
    if (downloading) return;
    setDownloading(true);
    setPct(0);
    let p = 0;
    const tick = () => {
      p += 5 + Math.random() * 10;
      if (p >= 100) {
        setPct(100);
        const a = document.createElement('a');
        a.href = RESUME_HREF;
        a.download = 'Ralph_Christian_Managula_Resume.pdf';
        a.click();
        setTimeout(() => {
          setDownloading(false);
          setPct(0);
        }, 1400);
      } else {
        setPct(p);
        setTimeout(tick, 50 + Math.random() * 40);
      }
    };
    tick();
  };

  return (
    <>
      <CorporateTopNav identity={R.identity} />

      <main>
        <div id="about">
          <CorporateHero
            identity={R.identity}
            about={R.about}
            onDownload={triggerDownload}
          />
        </div>

        <section
          id="experience"
          style={{ padding: '64px 24px', borderTop: '1px solid var(--border)' }}
        >
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <CorporateSectionHeader
              eyebrow="Experience"
              title="Operations across banking, government, and Google-scale engineering."
              kicker="Three roles, one consistent posture: think like an attacker, ship like an engineer, report like a consultant."
            />
            <ExperienceTimeline experience={R.experience} />
          </div>
        </section>

        <section
          id="arsenal"
          style={{
            padding: '64px 24px',
            borderTop: '1px solid var(--border)',
            background: 'var(--bg-0)',
          }}
        >
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <CorporateSectionHeader
              eyebrow="Technical Arsenal"
              title="Tooling, frameworks, and platforms."
              kicker="Hands-on with industry-standard offensive and defensive tools across web, mobile, network, and red-team operations."
            />
            <SkillsGrid skills={R.skills} focusAreas={R.focusAreas} />
          </div>
        </section>

        <section
          id="roadmap"
          style={{ padding: '64px 24px', borderTop: '1px solid var(--border)' }}
        >
          <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
            <CorporateSectionHeader
              eyebrow="Certification Roadmap"
              title="Continual progression toward advanced offensive credentials."
              kicker="From foundational CompTIA certification through specialist practitioner badges into the OSCP+ tier."
            />
            <RoadmapVisual certifications={R.certifications} />
          </div>
        </section>
      </main>

      <CorporateFooter identity={R.identity} education={R.education} />

      {downloading && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(12,14,18,0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            className="card"
            style={{ minWidth: 380, padding: 28, textAlign: 'left' }}
          >
            <div
              className="t-eyebrow"
              style={{ marginBottom: 14, color: 'var(--accent)' }}
            >
              Preparing Download
            </div>
            <div
              style={{
                fontSize: 18,
                marginBottom: 18,
                fontFamily: 'var(--font-mono)',
              }}
            >
              Decrypting secure payload…
            </div>
            <div
              style={{
                height: 6,
                background: 'var(--bg-2)',
                borderRadius: 999,
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${pct}%`,
                  background: 'var(--accent)',
                  boxShadow: '0 0 8px var(--accent-glow)',
                  transition: 'width 80ms linear',
                }}
              />
            </div>
            <div
              className="t-small mono"
              style={{ marginTop: 10, textAlign: 'right' }}
            >
              {Math.floor(pct)}%
            </div>
          </div>
        </div>
      )}
    </>
  );
}
