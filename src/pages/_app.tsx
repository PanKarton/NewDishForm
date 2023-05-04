import { AppProvider } from '@/providers/AppProviders';
import type { AppProps } from 'next/app';
import '../../styles/globals.css';

import { Open_Sans, Baskervville } from 'next/font/google';

const openSans = Open_Sans({ subsets: ['latin'] });
const baskervile = Baskervville({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main className={`${openSans.className} ${baskervile.className}`}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
