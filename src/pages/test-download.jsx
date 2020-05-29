import { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import { useSession } from '../context/SessionContext';
import '../assets/styles/pages/TestDownload.scss';
import TestIcon from '../assets/icons/exam.svg';
import TestDownloadComponent from '../components/TestsDownload';

function TestDownload() {
  const { session } = useSession();

  useEffect(() => {
    if (session && session.user.typeOfUser !== 'Patient') {
      Router.push(session.user.defaultPath);
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>HALAH Laboratories: Tests Download</title>
      </Head>

      <main>
        <div className="title">
          <TestIcon className="title__logo" />
          <h1 className="title__text">Tests Download</h1>
        </div>
        <div className="test-download__content">
          {session && session.token ? <TestDownloadComponent /> : ''}
        </div>
      </main>
    </>
  );
}

export default TestDownload;
