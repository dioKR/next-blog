import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '내 머리속의 지우개',
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
