import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import '../assets/styles/components/TestsDownload.scss';
import ErrorIcon from '../assets/icons/error.svg';
import SuccessIcon from '../assets/icons/success.svg';
import Modal from './Modal';

function TestsDownload() {
  const { session } = useSession();
  const [openModal, setOpenModal] = useState(false);
  const [errorArray, setErrorArray] = useState(false);
  const [loadingTests, setLoadingTests] = useState(false);
  const [tests, setTests] = useState({});
  const [errorTests, setErrorTests] = useState(null);
  const testSelected = [];
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/orders/?username=${session.user.username}&isComplete=true`,
    1,
  );

  function checkTest(testID) {
    if (testSelected.includes(testID)) {
      const indexDelete = testSelected.indexOf(testID);
      testSelected.splice(indexDelete, 1);
    } else {
      testSelected.push(testID);
    }
  }

  async function downloadTests() {
    if (!testSelected.length) {
      setErrorArray(true);
    } else {
      setOpenModal(true);
      setErrorArray(false);
      setLoadingTests(true);
      setErrorTests(null);
      try {
        const URL = `${process.env.NEXT_PUBLIC_API_URL}/pdfs`;
        const object = {
          orderIds: testSelected,
        };
        const config = {
          headers: { Authorization: `Bearer ${session.token}` },
          responseType: 'blob',
        };
        const res = await axios.post(URL, object, config);
        setTests(true);
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'file.pdf');
        document.body.appendChild(link);
        link.click();
      } catch (err) {
        setErrorTests(err.response.data);
      }
      setLoadingTests(false);
    }
  }

  function closeModal() {
    Router.reload();
  }

  function ResponseMessage() {
    if (loadingTests) {
      return (
        <div className="message">
          <div className="loader" />
        </div>
      );
    }

    if (errorTests) {
      return (
        <div className="message">
          <ErrorIcon className="message__icon--negative" />
          <strong className="message__text">{errorTests.message}</strong>
          <button className="btn" type="button" onClick={closeModal}>
            Accept
          </button>
        </div>
      );
    }

    if (tests) {
      return (
        <div className="message">
          <SuccessIcon className="message__icon--positive" />
          <strong className="message__text">Results downloaded</strong>
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
    return <h3>{error.response.data.message}</h3>;
  }

  return (
    <>
      {response && response.data ? (
        <div className="tests-download">
          <div className="tests-download__options">
            <span className="input__error">
              {errorArray ? 'Check tests to download' : ''}
            </span>
            <button className="btn" type="button" onClick={downloadTests}>
              Download select tests
            </button>
          </div>
          <table className="table">
            <thead className="table__head">
              <tr className="table__head__row">
                <th className="table__head__row__cell">
                  <strong>Select</strong>
                </th>
                <th className="table__head__row__cell">
                  <strong>Test</strong>
                </th>
                <th className="table__head__row__cell">
                  <strong>Result Date</strong>
                </th>
              </tr>
            </thead>

            <tbody className="table__body">
              {response.data.map((test) => (
                <tr key={test._id} className="table__body__row">
                  <td className="table__body__row__cell__user">
                    {test.isComplete ? (
                      <input
                        name="check"
                        type="checkbox"
                        onChange={() => {
                          checkTest(test._id);
                        }}
                      />
                    ) : (
                      ''
                    )}
                  </td>
                  <td className="table__body__row__cell">
                    <span>{test.name}</span>
                  </td>
                  <td className="table__body__row__cell">
                    <span>{test.resultDate}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Modal isOpen={openModal}>
            <ResponseMessage />
          </Modal>
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default TestsDownload;
