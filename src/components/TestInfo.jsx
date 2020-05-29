import PropTypes from 'prop-types';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';

function TestInfo({ examName, option }) {
  const { session } = useSession();
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/exams/?name=${examName}`,
    1,
  );

  if (loading) {
    return <div className="loader" />;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  return (
    <section className="test-detail__data">
      {option}
      <h1 className="test-detail__data__title">Test Information</h1>
      <div className="test-detail__data__container">
        <div className="test-detail__data__element">
          <strong className="test-detail__data__element__head">Test name</strong>
          <span className="test-detail__data__element__body">{response.data.name}</span>
        </div>
        <div className="test-detail__data__element">
          <strong className="test-detail__data__element__head">Test short name</strong>
          <span className="test-detail__data__element__body">{response.data.shortName}</span>
        </div>
      </div>
      <div className="test-detail__data__element">
        <strong className="test-detail__data__element__head">Description</strong>
        <span className="test-detail__data__element__body">{response.data.description}</span>
      </div>
      <div className="test-detail__data__element">
        <strong className="test-detail__data__element__head">Indications</strong>
        <span className="test-detail__data__element__body">{response.data.indications}</span>
      </div>
      <div className="test-detail__data__element">
        <strong className="test-detail__data__element__head">Schedule minimum days</strong>
        <span className="test-detail__data__element__body">{`${response.data.scheduleDays} days`}</span>
      </div>
    </section>
  );
}

TestInfo.propTypes = {
  examName: PropTypes.string.isRequired,
  option: PropTypes.shape.isRequired,
};

export default TestInfo;
