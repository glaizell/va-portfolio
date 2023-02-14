import MainLayout from '@/components/layout/MainLayout';
import '@/styles/globals.css';

import { Poppins } from '@next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: 'font-poppins',
});
export default function App({ Component, pageProps }) {
  return (
    <MainLayout className={poppins.className}>
      <Component {...pageProps} />
    </MainLayout>
  );
}
