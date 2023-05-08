import { openSans } from '@/assets/fonts';
import { AppProvider } from '@/providers/AppProviders';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
        :root {
          --open-sans: ${openSans.style.fontFamily};
        }`,
          }}
        />
      </Head>
      <AppProvider>
        <main>
          <Component {...pageProps} />
        </main>
      </AppProvider>
    </>
  );
}
