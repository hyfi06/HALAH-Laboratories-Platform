import PropTypes from 'prop-types';
import axios from 'axios';
import Router from 'next/router';
import { useState } from 'react';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import AddIcon from '../assets/icons/add.svg';
import DownloadIcon from '../assets/icons/download.svg';
import ErrorIcon from '../assets/icons/error.svg';
import SuccessIcon from '../assets/icons/success.svg';
import Modal from './Modal';

function TestInfo({ examName, completed, order }) {
  const { session } = useSession();
  const [openModal, setOpenModal] = useState(false);
  const [resultResponse, setResultResponse] = useState({});
  const [resultLoading, setResultLoading] = useState(false);
  const [resultError, setResultError] = useState(null);
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/exams?name=${examName}`,
    1,
  );

  function closeModal() {
    setOpenModal(false);
  }

  function ResponseMessage() {
    if (resultLoading) {
      return (
        <div className="message">
          <div className="loader" />
        </div>
      );
    }

    if (resultError) {
      return (
        <div className="message">
          <ErrorIcon className="message__icon--negative" />
          <strong className="message__text">{resultError.data.message}</strong>
          <button className="btn" type="button" onClick={closeModal}>
            Accept
          </button>
        </div>
      );
    }

    if (resultResponse) {
      return (
        <div className="message">
          <SuccessIcon className="message__icon--positive" />
          <strong className="message__text">{resultResponse.data.message}</strong>
          <button className="btn" type="button" onClick={closeModal}>
            Accept
          </button>
        </div>
      );
    }

    return '';
  }

  if (loading) {
    return <div className="loader" />;
  }

  if (error) {
    return <h3>{error.message}</h3>;
  }

  // PENDING UNTIL THE PART OF DOWNLOAD IS DONE
  async function downloadTest() {
    const orderBody = { orderIds: [order] };
    setOpenModal(true);
    setResultLoading(true);
    setResultError(null);
    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/pdfs`;
      const config = {
        headers: { Authorization: `Bearer ${session.token}` },
        responseType: 'blob',
      };
      const res = await axios.post(URL, orderBody, config);
      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${examName}.pdf`);
      document.body.appendChild(link);
      link.click();
      setResultResponse({ data: { message: 'Exam download successfully!' } });
    } catch (err) {
      setResultError(err);
    }
    setResultLoading(false);
  }
  // PENDING UNTIL THE ASSIGN PAGE IS READY
  function assignResult() {
    Router.push(`/add-result/${order}`);
  }

  return (
    <>
      <section className="test-detail__data">
        <div className="test-detail__data__container--principal">
          <h1 className="test-detail__data__title">Test Information</h1>
          {session.user.typeOfUser === 'Bacteriologist' ? (
            <>
              {!completed ? (
                <button className="test-detail__data__option--button" type="button" onClick={assignResult}>
                  <AddIcon className="test-detail__data__option" />
                </button>
              ) : (
                <SuccessIcon className="test-detail__data__option--done" />
              )}
            </>
          ) : (
            <>
              {completed ? (
                <button className="test-detail__data__option--button" type="button" onClick={downloadTest}>
                  <DownloadIcon className="test-detail__data__option" />
                </button>
              ) : (
                <DownloadIcon className="test-detail__data__option--notReady" />
              )}
            </>
          )}
        </div>
        {response && response.data ? (
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
                <div className="test-detail__data__element large">
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

      <Modal isOpen={openModal}>
        <ResponseMessage />
      </Modal>
    </>
  );
}

TestInfo.propTypes = {
  examName: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  order: PropTypes.string.isRequired,
};

export default TestInfo;
