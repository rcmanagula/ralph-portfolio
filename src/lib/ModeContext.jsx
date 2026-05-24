'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';

const ModeContext = createContext({
  mode: 'terminal',
  setMode: () => {},
  transitioning: false,
});

const STORAGE_KEY = 'rcm-mode';

export function ModeProvider({ children, initialMode = 'terminal' }) {
  const [mode, setModeState] = useState(initialMode);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (stored === 'terminal' || stored === 'corporate') setModeState(stored);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-mode', mode);
    }
  }, [mode]);

  const setMode = useCallback((next) => {
    if (next === mode) return;
    setTransitioning(true);
    // glitch jitter (120ms) → fade-cross-dissolve (360ms) → done
    setTimeout(() => {
      setModeState(next);
      if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY, next);
    }, 120);
    setTimeout(() => setTransitioning(false), 480);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode, transitioning }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
