import PropTypes from 'prop-types';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import TestIcon from '../assets/icons/exam.svg';
import TestInfo from './TestInfo';
import '../assets/styles/components/DetailTest.scss';

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

  return (
    <main className="test-detail">
      {response && response.data ? (
        <>
          <section className="test-detail__title">
            <TestIcon className="test-detail__title__icon" />
            <div className="test-detail__title__text">
              <h2 className="test-detail__title__text__name">
                {response.data.name}
              </h2>
              <strong className="test-detail__title__text__shortName">
                {response.data.shortName}
              </strong>
            </div>
          </section>
          <TestInfo examName={response.data.shortName} />
        </>
      ) : (
        ''
      )}
    </main>
  );
}

DetailTest.propTypes = {
  testID: PropTypes.string.isRequired,
};

export default DetailTest;
