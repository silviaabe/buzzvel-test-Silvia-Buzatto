import '../styles/globals.css';
import { Roboto } from 'next/font/google';

import type { Metadata } from 'next';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Buzzvel Test | Silvia Abe',
  description: 'Teste técnico desenvolvido por Silvia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
