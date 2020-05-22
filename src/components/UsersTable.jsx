import { useSession } from '../context/SessionContext';
import useUsers from '../hooks/useUsers';
import UserRecord from './UserRecord';

function UsersTable() {
  const { session } = useSession();
  const { users, loading, error } = useUsers(session.token);

  if (loading) {
    return <div className="loader" />;
  }

  return (
    <main className="table__container">
      <table className="table">
        <thead className="table__head">
          <tr className="table__head__row">
            <th className="table__head__row__cell" />
            <th className="table__head__row__cell">
              <strong>Username</strong>
            </th>
            <th className="table__head__row__cell">
              <strong>Full Name</strong>
            </th>
            <th className="table__head__row__cell">
              <strong>Type</strong>
            </th>
            <th className="table__head__row__cell" />
            <th className="table__head__row__cell" />
          </tr>
        </thead>
        <tbody className="table__body">
          {users && users.data
            ? users.data.map((user) => (
                <UserRecord key={user.username} user={user} />
              ))
            : ''}
        </tbody>
      </table>
    </main>
  );
}

export default UsersTable;
