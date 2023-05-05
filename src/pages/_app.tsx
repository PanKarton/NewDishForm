import { AppProvider } from '@/providers/AppProviders';
import type { AppProps } from 'next/app';
import '../../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <main>
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
