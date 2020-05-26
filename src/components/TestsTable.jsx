import PropType from 'prop-types';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import TestRecord from './TestRecord';

function TestsTable({ username }) {
  const { session } = useSession();
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/orders/?username=${username}`,
    1,
  );

  if (loading) {
    return <div className="loader" />;
  }
  if (error) {
    return (
      <h3>
        sorry we could not get your exams...
        <br />
        please try again
      </h3>
    );
  }

  return (
    <>
      {response && response.data ? (
        <table className="table">
          <thead className="table__head">
            <tr className="table__head__row">
              <th className="table__head__row__cell">
                <strong>Folio</strong>
              </th>
              <th className="table__head__row__cell">
                <strong>Test</strong>
              </th>
              <th className="table__head__row__cell">
                <strong>Appointment Date</strong>
              </th>
              <th className="table__head__row__cell" />
            </tr>
          </thead>
          <tbody className="table__body">
            {response.data.map((test) => (
              <TestRecord key={test.name} test={test} />
            ))}
          </tbody>
        </table>
      ) : (
        ''
      )}
    </>
  );
}

TestsTable.propTypes = {
  username: PropType.string.isRequired,
};

export default TestsTable;
