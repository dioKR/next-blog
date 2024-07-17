import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '개발 기록 일지',
  description: '개발 기록 일지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
