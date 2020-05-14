import Head from 'next/head';
import '../assets/styles/pages/index.scss';
import Logo from '../assets/icons/logo.svg';
import Title from '../components/Title';

export default function Home() {
  return (
    <>
      <Head>
        <title>HALAH Laboratories</title>
      </Head>
      <main>
        <Logo className="logo" />
        <Title title="HALAH Laboratories" />
      </main>
    </>
  );
}
