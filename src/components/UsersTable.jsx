import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import UserRecord from './UserRecord';

function UsersTable() {
  const { session } = useSession();
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/users/`,
    1,
  );

  if (loading) {
    return <div className="loader" />;
  }

  return (
    <>
      {response && response.data ? (
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
            {response.data.map((user) => (
              <UserRecord key={user.username} user={user} />
            ))}
          </tbody>
        </table>
      ) : (
        ''
      )}
    </>
  );
}

export default UsersTable;
