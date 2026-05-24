'use client';

import { useState } from 'react';
import { RESUME } from '@/lib/resume';
import { useActiveSection } from '@/lib/useActiveSection';
import CorporateTopNav from './CorporateTopNav';
import CorporateHero from './CorporateHero';
import CorporateSectionHeader from './CorporateSectionHeader';
import ExperienceTimeline from './ExperienceTimeline';
import SkillsGrid from './SkillsGrid';
import RoadmapVisual from './RoadmapVisual';
import CorporateFooter from './CorporateFooter';
import DocumentHeader from './DocumentHeader';

const RESUME_HREF = '/Ralph_Christian_Managula_Resume.pdf';
const CORP_SECTION_IDS = ['about', 'experience', 'arsenal', 'roadmap', 'contact'];

export default function CorporateApp() {
  const [downloading, setDownloading] = useState(false);
  const [pct, setPct] = useState(0);
  const R = RESUME;
  const activeId = useActiveSection(CORP_SECTION_IDS);

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
      <DocumentHeader brief={R.brief} />
      <CorporateTopNav identity={R.identity} activeId={activeId} />

      <main>
        <div id="about">
          <CorporateHero
            identity={R.identity}
            brief={R.brief}
            onDownload={triggerDownload}
          />
        </div>

        <section
          id="experience"
          className="section"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="section--container">
            <CorporateSectionHeader
              eyebrow="§ 01 · Engagement Log"
              title="Operations across banking, government, and Google-scale engineering."
              kicker="Three engagements, one consistent posture: think like an attacker, ship like an engineer, communicate like a consultant."
            />
            <ExperienceTimeline experience={R.experience} />
          </div>
        </section>

        <section
          id="arsenal"
          className="section"
          style={{
            borderTop: '1px solid var(--border)',
            background: 'var(--bg-0)',
          }}
        >
          <div className="section--container">
            <CorporateSectionHeader
              eyebrow="§ 02 · Methodology & Toolchain"
              title="Tooling, frameworks, and platforms."
              kicker="Industry-standard offensive and defensive tools across web, mobile, network, cloud, and red-team operations — annotated with usage frequency and tenure."
            />
            <SkillsGrid skills={R.skills} focusAreas={R.focusAreas} />
          </div>
        </section>

        <section
          id="roadmap"
          className="section"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="section--container">
            <CorporateSectionHeader
              eyebrow="§ 03 · Continuing Education Pipeline"
              title="Continual progression toward advanced offensive credentials."
              kicker="From foundational certification through specialist practitioner badges into the OSCP+ expert tier."
            />
            <RoadmapVisual certifications={R.certifications} />
          </div>
        </section>

        <section
          id="contact"
          className="section"
          style={{
            borderTop: '1px solid var(--border)',
            background: 'var(--bg-0)',
          }}
        >
          <div className="section--container">
            <CorporateSectionHeader
              eyebrow="§ 04 · Contact"
              title="Open inbox. Response within 24 hours."
              kicker="Available for VAPT engagements, red-team operations, AppSec consulting, and full-time roles."
            />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 16,
              }}
            >
              <a className="card contact-card" href={`mailto:${R.identity.email}`}>
                <div className="t-eyebrow" style={{ marginBottom: 6 }}>Email</div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg-0)' }}>
                  {R.identity.email}
                </div>
              </a>
              <a
                className="card contact-card"
                href={`tel:${R.identity.phone.replace(/[^0-9+]/g, '')}`}
              >
                <div className="t-eyebrow" style={{ marginBottom: 6 }}>Phone</div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg-0)' }}>
                  {R.identity.phone}
                </div>
              </a>
              <a
                className="card contact-card"
                href={`https://${R.identity.linkedin}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="t-eyebrow" style={{ marginBottom: 6 }}>LinkedIn</div>
                <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--fg-0)' }}>
                  {R.identity.linkedin}
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <CorporateFooter identity={R.identity} education={R.education} brief={R.brief} />

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
