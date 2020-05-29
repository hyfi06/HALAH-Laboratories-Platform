import PropTypes from 'prop-types';
import axios from 'axios';
import Router from 'next/router';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import AddIcon from '../assets/icons/add.svg';
import DownloadIcon from '../assets/icons/download.svg';

function TestInfo({ examName, completed, order }) {
  const { session } = useSession();
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/exams?name=${examName}`,
    1,
  );
  if (loading) {
    return <div className="loader" />;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  // PENDING UNTIL THE PART OF DOWNLOAD IS DONE
  async function downloadTest(orderId) {
    const orderBody = { orederIds: orderId };
    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/pdfs`;
      const config = {
        headers: { Authorization: `Bearer ${session.token}` },
      };
      const res = await axios.post(URL, orderBody, config);
      // setTestResponse(res);
    } catch (err) {
      // setTestError(err.data.message);
    }
  }
  // PENDING UNTIL THE ASSIGN PAGE IS READY
  function assignResult(orderId) {
    Router.push(`/add-result/${orderId}`);
  }

  return (
    <section className="test-detail__data">
      <div className="test-detail__data__container--principal">
        <h1 className="test-detail__data__title">Test Information</h1>
        {!completed && session.user.typeOfUser === 'Bacteriologist' ? (
          <AddIcon
            className="test-detail__data__option"
            onClick={assignResult(order)}
          />
        ) : (
          <DownloadIcon
            className="test-detail__data__option"
            onClick={downloadTest(order)}
          />
        )}
      </div>
      {completed && response.data ? (
        <>
          {response.data.map((test) => (
            <>
              <div className="test-detail__data__container">
                <div className="test-detail__data__element">
                  <strong className="test-detail__data__element__head">Test name</strong>
                  <span className="test-detail__data__element__body">{test.name}</span>
                </div>
                <div className="test-detail__data__element">
                  <strong className="test-detail__data__element__head">Test short name</strong>
                  <span className="test-detail__data__element__body">{test.shortName}</span>
                </div>
              </div>
              <div className="test-detail__data__element">
                <strong className="test-detail__data__element__head">Description</strong>
                <span className="test-detail__data__element__body">{test.description}</span>
              </div>
              <div className="test-detail__data__container">
                <div className="test-detail__data__element">
                  <strong className="test-detail__data__element__head">Indications</strong>
                  <span className="test-detail__data__element__body">{test.indications}</span>
                </div>
                <div className="test-detail__data__element">
                  <strong className="test-detail__data__element__head">Schedule minimum days</strong>
                  <span className="test-detail__data__element__body">{`${test.scheduledDays} days`}</span>
                </div>
              </div>
            </>
          ))}
        </>
      ) : (
        ''
      )}
    </section>
  );
}

TestInfo.propTypes = {
  examName: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  order: PropTypes.string.isRequired,
};

export default TestInfo;
