import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/header';

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
        <Header />
        <div>안녕하세요 글꼴 테스트입니다!!!</div>
        {children}
        body 내부 끝
      </body>
    </html>
  );
}
