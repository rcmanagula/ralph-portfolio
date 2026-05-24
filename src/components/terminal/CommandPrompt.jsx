'use client';

import { useEffect, useRef, useState } from 'react';

const COMMANDS = {
  help: () => [
    'available commands:',
    '  help              ─ show this menu',
    '  whoami            ─ identity + current role',
    '  certs             ─ list certifications',
    '  skills            ─ dump technical arsenal',
    '  contact           ─ email / phone / linkedin',
    '  download-resume   ─ save Ralph\'s resume.pdf',
    '  clear             ─ clear terminal',
  ],
  whoami: () => [
    'ralph christian managula',
    'offensive security professional · penetration tester',
    'comptia pentest+ certified | based in PH-MNL',
    'open to new offensive-security roles',
  ],
  certs: () => [
    '[ ✓ ] CompTIA PenTest+ (achieved)',
    '[ … ] Hack The Box CPTS (in progress)',
    '[   ] Burp Suite Certified Practitioner (planned)',
    '[   ] OSCP+ (planned)',
  ],
  skills: () => [
    'VAPT & Recon       :: Burp Suite, Metasploit, Nmap, Nessus, Qualys, sqlmap, OWASP ZAP, hydra',
    'Mobile / RE        :: Frida, MobSF, Ghidra, IDA Pro',
    'SAST               :: Fortify Scanner',
    'Network / Wireless :: Wireshark, aircrack-ng',
    'Frameworks         :: OWASP Top 10, NIST, CVSS, PTES, Secure SDLC',
    'Programming        :: Python, Bash, Java',
  ],
  contact: () => [
    'email    :: rcmanagula@yahoo.com',
    'phone    :: 0918-333-9163',
    'linkedin :: linkedin.com/in/rcmanagula',
    'location :: Taguig City, Metro Manila, Philippines',
  ],
};

const QUICK = ['help', 'whoami', 'certs', 'skills', 'contact', 'download-resume', 'clear'];

export default function CommandPrompt({ onDownload }) {
  const [history, setHistory] = useState([
    { type: 'sys', text: "session established. type 'help' to begin." },
  ]);
  const [input, setInput] = useState('');
  const logRef = useRef(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [history]);

  const exec = (raw) => {
    const cmd = raw.trim().toLowerCase();
    const entries = [{ type: 'in', text: raw }];
    if (!cmd) {
      // noop
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'download-resume' || cmd === 'download resume') {
      entries.push({ type: 'out', text: 'decrypting secure payload...' });
      onDownload?.();
    } else if (COMMANDS[cmd]) {
      COMMANDS[cmd]().forEach((t) => entries.push({ type: 'out', text: t }));
    } else {
      entries.push({ type: 'err', text: `command not found: ${cmd}. type 'help'.` });
    }
    setHistory((h) => [...h, ...entries]);
    setInput('');
  };

  return (
    <div
      style={{
        position: 'sticky',
        bottom: 0,
        marginTop: 48,
        background: 'rgba(11,13,16,0.92)',
        backdropFilter: 'blur(8px)',
        borderTop: '1px solid var(--border)',
        zIndex: 40,
      }}
    >
      <div
        ref={logRef}
        style={{
          maxHeight: 200,
          overflow: 'auto',
          padding: '12px 18px',
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          lineHeight: 1.6,
        }}
      >
        {history.map((e, i) => {
          if (e.type === 'in')
            return (
              <div key={i}>
                <span className="accent">ralph@offensive-sec</span>
                <span style={{ color: 'var(--fg-1)' }}>:</span>
                <span style={{ color: '#5b9bff' }}>~</span>
                <span style={{ color: 'var(--fg-1)' }}>$ </span>
                {e.text}
              </div>
            );
          if (e.type === 'out')
            return (
              <div key={i} style={{ color: 'var(--fg-0)' }}>
                {e.text}
              </div>
            );
          if (e.type === 'err')
            return (
              <div key={i} style={{ color: 'var(--danger)' }}>
                {e.text}
              </div>
            );
          return (
            <div key={i} style={{ color: 'var(--fg-2)' }}>
              # {e.text}
            </div>
          );
        })}
      </div>

      <div
        style={{
          display: 'flex',
          gap: 6,
          padding: '8px 18px',
          borderTop: '1px solid var(--border)',
          flexWrap: 'wrap',
        }}
      >
        {QUICK.map((c) => (
          <button
            key={c}
            onClick={() => exec(c)}
            style={{
              padding: '4px 10px',
              fontSize: 11,
              fontFamily: 'var(--font-mono)',
              background: 'var(--bg-2)',
              color: 'var(--fg-1)',
              border: '1px solid var(--border)',
              cursor: 'pointer',
              transition: 'all var(--dur-fast) var(--ease-out-expo-ish)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.borderColor = 'var(--accent)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--fg-1)';
              e.currentTarget.style.borderColor = 'var(--border)';
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          exec(input);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '10px 18px',
          borderTop: '1px solid var(--border)',
          fontFamily: 'var(--font-mono)',
          fontSize: 14,
        }}
      >
        <span className="accent">ralph@offensive-sec</span>
        <span style={{ color: 'var(--fg-1)' }}>:</span>
        <span style={{ color: '#5b9bff' }}>~</span>
        <span style={{ color: 'var(--fg-1)' }}>$</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="type a command, e.g. help"
          style={{
            flex: 1,
            background: 'transparent',
            border: 0,
            outline: 'none',
            color: 'var(--fg-0)',
            fontFamily: 'inherit',
            fontSize: 'inherit',
            padding: 0,
          }}
        />
      </form>
    </div>
  );
}
