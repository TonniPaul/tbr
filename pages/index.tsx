import Hero from '@/components/Hero/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Thrifts By Ronn Store</title>
        <meta
          name="description"
          content="The best thrift clothing and accessories are handpicked especially for you."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.jpg" />
      </Head>
      <main>
        <Hero />
      </main>
    </>
  );
}
