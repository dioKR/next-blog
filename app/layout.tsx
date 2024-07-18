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
      <body className="bg-body flex justify-center text-white">
        <main
          className="border-strokedark flex h-screen w-full max-w-2xl flex-col rounded border
            border-t-4 bg-black"
        >
          <Header />
          123
          <div className="flex-1">{children}</div>
        </main>
      </body>
    </html>
  );
}
