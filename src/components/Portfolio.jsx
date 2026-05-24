'use client';

import { useMode } from '@/lib/ModeContext';
import ModeTransition from './shared/ModeTransition';
import ModeToggle from './shared/ModeToggle';
import TerminalApp from './terminal/TerminalApp';
import CorporateApp from './corporate/CorporateApp';

export default function Portfolio() {
  const { mode } = useMode();

  return (
    <>
      {/* Floating mode toggle — only in Terminal Mode (Corporate keeps its own in the nav) */}
      {mode === 'terminal' && <ModeToggle floating />}

      <ModeTransition>
        {mode === 'terminal' ? <TerminalApp /> : <CorporateApp />}
      </ModeTransition>
    </>
  );
}
