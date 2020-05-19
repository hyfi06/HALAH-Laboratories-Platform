import Head from 'next/head';
import '../assets/styles/main.scss';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome
        </h1>
      </main>
    </div>
  );
}
