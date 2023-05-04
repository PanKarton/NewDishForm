import Head from 'next/head';
import { Header } from '@/modules/index/Header/Header';

const Home = () => {
  return (
    <>
      <Head>
        <title>Soup &#38; Slice</title>
        <meta name="description" content="Main page of our restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
      </>
    </>
  );
};

export default Home;
