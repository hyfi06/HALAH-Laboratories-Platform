import PropTypes from 'prop-types';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import TestIcon from '../assets/icons/file.svg';
import AddIcon from '../assets/icons/add.svg';
import DownloadIcon from '../assets/icons/download.svg';
import TestInfo from './TestInfo';

function DetailTest({ testID }) {
  const { session } = useSession();
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${testID}`,
    1,
  );

  if (loading) {
    return <div className="loader" />;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  // PENDING UNTIL THE PART OF DOWNLOAD IS DONE
  function downloadTest() {

  }
  // PENDING UNTIL THE ASSIGN PAGE IS READY
  function assignResult() {

  }

  function displayOptions() {
    if (session.user.typeOfUser === 'Bacteriologist') {
      if (response.data.isComplete) {
        return (
          <AddIcon className="test-detail__data__option" onClick={assignResult} />
        );
      }
    }
    return (
      <DownloadIcon className="test-detail__data__option" onClick={downloadTest} />
    );
  }

  return (
    <main className="test-detail">
      <section className="test-detail__title">
        <TestIcon className="test-detail__title__icon" />
        <div className="test-detail__title__text">
          <h2 className="test-detail__title__text__name">{response.data.name}</h2>
          <strong className="test-detail__title__text__shortName">{response.data.shortName}</strong>
        </div>
      </section>
      <TestInfo option={displayOptions} />
    </main>
  );
}

DetailTest.propTypes = {
  testID: PropTypes.string.isRequired,
};

export default DetailTest;
