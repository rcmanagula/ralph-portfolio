import './globals.css';
import { ModeProvider } from '@/lib/ModeContext';

const SITE_URL = 'https://ralph-portfolio.vercel.app';
const TITLE = 'Ralph Christian Managula · Offensive Security';
const DESCRIPTION =
  'Penetration tester and red team operator. CompTIA PenTest+ certified. VAPT across banking, government, and enterprise — Burp Suite, Frida, Ghidra, Metasploit, Nessus. Based in Metro Manila, open to remote.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'penetration tester',
    'pentester',
    'offensive security',
    'red team',
    'VAPT',
    'CompTIA PenTest+',
    'Burp Suite',
    'OSCP',
    'Philippines',
    'Metro Manila',
    'Ralph Managula',
  ],
  authors: [{ name: 'Ralph Christian Managula' }],
  creator: 'Ralph Christian Managula',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: '/',
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Ralph Christian Managula',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23050607'/%3E%3Ctext x='8' y='44' font-family='monospace' font-size='28' font-weight='700' fill='%2300FF41'%3Ercm%3C/text%3E%3C/svg%3E",
      },
    ],
  },
};

export const viewport = {
  themeColor: '#050607',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-mode="terminal" suppressHydrationWarning>
      <body>
        <ModeProvider initialMode="terminal">{children}</ModeProvider>
      </body>
    </html>
  );
}
