'use client';

import { useState } from 'react';
import { RESUME } from '@/lib/resume';
import { useActiveSection } from '@/lib/useActiveSection';
import BootSequence from '../shared/BootSequence';
import TerminalTopNav from './TerminalTopNav';
import PixelHero from './PixelHero';
import SectionHeader from './SectionHeader';
import TerminalWindow from './TerminalWindow';
import ExperienceLog from './ExperienceLog';
import SkillsArsenal from './SkillsArsenal';
import RoadmapTracker from './RoadmapTracker';
import DownloadResumeButton from './DownloadResumeButton';
import ContactLine from './ContactLine';
import KeyboardNav from './KeyboardNav';
import SlimStatusBar from './SlimStatusBar';

const SECTION_IDS = ['whoami', 'experience', 'arsenal', 'roadmap', 'contact'];

export default function TerminalApp() {
  const [booted, setBooted] = useState(false);
  const R = RESUME;
  const activeId = useActiveSection(SECTION_IDS);

  return (
    <>
      {!booted && <BootSequence onDone={() => setBooted(true)} />}
      <KeyboardNav />

      <TerminalTopNav activeId={activeId} />

      <main
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 20px 24px',
          fontFamily: 'var(--font-mono)',
        }}
      >
        <PixelHero identity={R.identity} />

        <section
          style={{
            marginBottom: 56,
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          <DownloadResumeButton />
          <a
            className="btn"
            href={`mailto:${R.identity.email}`}
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            $ contact
          </a>
          <a
            className="btn"
            href={`https://${R.identity.linkedin}`}
            target="_blank"
            rel="noreferrer"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            $ linkedin
          </a>
        </section>

        <section id="whoami" style={{ marginBottom: 56 }}>
          <SectionHeader cmd="whoami." sub="philosophy + posture" />
          <TerminalWindow filename="@whoami.txt">
            <div style={{ marginBottom: 10 }}>{R.about.terminalShort}</div>
            <div style={{ color: 'var(--fg-1)' }}>{R.about.long}</div>
            <div
              style={{
                marginTop: 16,
                paddingTop: 12,
                borderTop: '1px dashed var(--border)',
              }}
            >
              <div style={{ color: 'var(--fg-2)', fontSize: 12, marginBottom: 6 }}>
                # focus areas
              </div>
              {R.focusAreas.map((f) => (
                <div
                  key={f}
                  style={{ display: 'flex', gap: 8, color: 'var(--fg-1)' }}
                >
                  <span className="accent">▌</span> {f}
                </div>
              ))}
            </div>
          </TerminalWindow>
        </section>

        <section id="experience" style={{ marginBottom: 56 }}>
          <SectionHeader
            cmd="tail -f ./experience.log"
            sub="chronological deployment history"
          />
          <ExperienceLog experience={R.experience} />
        </section>

        <section id="arsenal" style={{ marginBottom: 56 }}>
          <SectionHeader
            cmd="cat ./skills.txt"
            sub="technical arsenal · grouped by category"
          />
          <SkillsArsenal skills={R.skills} />
        </section>

        <section id="roadmap" style={{ marginBottom: 56 }}>
          <SectionHeader cmd="roadmap --next" sub="certification progression" />
          <RoadmapTracker certifications={R.certifications} />
        </section>

        <section id="education" style={{ marginBottom: 56 }}>
          <SectionHeader cmd="cat ./education.txt" />
          <TerminalWindow filename="@education.log">
            <div>{R.education.degree}</div>
            <div style={{ color: 'var(--accent)' }}>{R.education.school}</div>
            <div style={{ color: 'var(--fg-2)', fontSize: 12 }}>{R.education.years}</div>
          </TerminalWindow>
        </section>

        <section id="contact" style={{ marginBottom: 24 }}>
          <SectionHeader cmd="contact --all" sub="open inbox · response within 24h" />
          <TerminalWindow filename="@contact.txt">
            <ContactLine label="email" value={R.identity.email} href={`mailto:${R.identity.email}`} />
            <ContactLine label="phone" value={R.identity.phone} href={`tel:${R.identity.phone.replace(/[^0-9+]/g, '')}`} />
            <ContactLine
              label="linkedin"
              value={R.identity.linkedin}
              href={`https://${R.identity.linkedin}`}
              external
            />
            <ContactLine label="location" value={R.identity.location} copyable={false} />
          </TerminalWindow>
        </section>
      </main>

      <SlimStatusBar statusLabel={R.identity.status} activeId={activeId} />
    </>
  );
}
