import Head from 'next/head';
import '../assets/styles/pages/index.scss';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>HALAH Laboratories Login</title>
      </Head>

      <main className="home">
        <Navbar />
      </main>
    </>
  );
}

export default Home;
