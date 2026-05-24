import './globals.css';
import { ModeProvider } from '@/lib/ModeContext';

export const metadata = {
  title: 'Ralph Christian Managula · Offensive Security',
  description:
    'Penetration tester, red team operator, and CompTIA PenTest+ certified offensive security professional based in Metro Manila.',
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23050607'/%3E%3Ctext x='8' y='44' font-family='monospace' font-size='28' font-weight='700' fill='%2300FF41'%3Ercm%3C/text%3E%3C/svg%3E",
      },
    ],
  },
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
