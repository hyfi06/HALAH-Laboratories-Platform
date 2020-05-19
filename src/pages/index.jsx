import Head from 'next/head';
import '../assets/styles/main.scss';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>HALAH Laboratories</title>
      </Head>

      <main>
        <h1 className="title">Welcome</h1>
      </main>
    </div>
  );
}

export default Home;
