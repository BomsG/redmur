import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'REDMUR',
  description: 'Nigeri&apos;s first virtual influencer and the beacon of digital fashion',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
