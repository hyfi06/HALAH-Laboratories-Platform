import Router from 'next/router';
import { useEffect } from 'react';
import { useSession } from '../context/SessionContext';
import FileIcon from '../assets/icons/file.svg';
import TestsTable from '../components/TestsTable';
import '../assets/styles/pages/tests.scss';

function Test() {
  const { session } = useSession();

  useEffect(() => {
    if (session && session.user.typeOfUser !== 'Patient') {
      Router.push('/');
    }
  }, [session]);

  return (
    <main className="exams">
      <div className="title">
        <FileIcon className="title__logo" />
        <h1 className="title__text">My tests</h1>
      </div>
      {session && session.token ? (
        <>
          <div className="downloads">
            <button type="submit" className="btn">
              <strong>Download multiple tests</strong>
            </button>
          </div>
          <TestsTable username={session.user.username} />
        </>
      ) : (
        ''
      )}
    </main>
  );
}

export default Test;
