import Head from 'next/head';
import '../assets/styles/pages/index.scss';
import Login from '../components/Login';

function Home() {
  return (
    <>
      <Head>
        <title>HALAH Laboratories Login</title>
      </Head>

      <main className="home">
        <Login />
      </main>
    </>
  );
}

export default Home;
