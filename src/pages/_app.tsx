import { AppProvider } from '@/providers/AppProviders';
import type { AppProps } from 'next/app';
import '../../styles/globals.css';
import { openSans } from '@/assets/fonts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main className={openSans.className}>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
