import Router from 'next/router';
import { useEffect } from 'react';
import { useSession } from '../context/SessionContext';
// import Filter from '../components/Filter';
import UsersIcon from '../assets/icons/users.svg';
import UsersTable from '../components/UsersTable';

function Users() {
  const { session } = useSession();

  useEffect(() => {
    if (session && session.user.typeOfUser !== 'admin') {
      Router.push('/');
    }
  }, [session]);

  return (
    <main className="users">
      <div className="title">
        <UsersIcon className="title__logo" />
        <h1 className="title__text">Users</h1>
      </div>
      {/* <Filter typeOfUser={userType} /> */}
      <UsersTable />
    </main>
  );
}

export default Users;
