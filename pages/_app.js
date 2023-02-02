import MainLayout from '@/components/MainLayout';
import '@/styles/globals.css';

import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }) {
  return (
    <MainLayout className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />
    </MainLayout>
  );
}
