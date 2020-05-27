import Head from 'next/head';
import Router from 'next/router';
import { useEffect } from 'react';
import { useSession } from '../context/SessionContext';
import UsersIcon from '../assets/icons/users.svg';
import UsersTable from '../components/UsersTable';

function Patients() {
  const { session } = useSession();

  useEffect(() => {
    if (session && session.user.typeOfUser !== 'Doctor') {
      if (session.user.typeOfUser !== 'Bacteriologist') {
        Router.push('/');
      }
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>HALAH Laboratories: Patients</title>
      </Head>

      <main className="users">
        <div className="title">
          <UsersIcon className="title__logo" />
          <h1 className="title__text">Patients</h1>
        </div>
        {session && session.token ? (
          <>
            <UsersTable />
          </>
        ) : (
          ''
        )}
      </main>
    </>
  );
}

export default Patients;
