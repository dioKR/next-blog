import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header';
import { Providers } from './providers';

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  variable: '--font-pretendard',
});

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
    <html lang="kr" className={`${pretendard.variable}`}>
      <body>
        <Providers>
          <main
            className="flex h-screen w-full max-w-2xl flex-col rounded border border-t-4
              border-strokedark bg-black"
          >
            <Header />
            <div className="flex-1">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
