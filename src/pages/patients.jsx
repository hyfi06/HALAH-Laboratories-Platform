import Router from 'next/router';
import { useEffect } from 'react';
import { useSession } from '../context/SessionContext';
import Filter from '../components/Filter';
import UsersIcon from '../assets/icons/users.svg';
// import UsersTable from '../components/UsersTable';

function Patients() {
  const { session } = useSession();

  useEffect(() => {
    if (session && (session.user.typeOfUser !== ('Doctor' || 'Bacteriologist'))) {
      Router.push('/');
    }
  }, [session]);

  return (
    <main className="users">
      <div className="title">
        <UsersIcon className="title__logo" />
        <h1 className="title__text">Patients</h1>
      </div>
      {session && session.token ? (
        <>
          <Filter typeOfUser={session.user.typeOfUser} />
          {/* <UsersTable /> */}
        </>
      ) : (
        ''
      )}
    </main>
  );
}

export default Patients;
