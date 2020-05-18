import Head from 'next/head';

import Logo from '../assets/icons/logo.svg';
import Title from '../components/Title';
import '../assets/styles/pages/index.scss';

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
