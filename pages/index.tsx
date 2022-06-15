import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <Head>
        <title>Twitter-clone</title>
      </Head>

      <h1>Hello World!!</h1>
    </div>
  );
};

export default Home;
