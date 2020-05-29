import { useState } from 'react';
import axios from 'axios';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import '../assets/styles/components/TestsDownload.scss';

function TestsDownload() {
  const { session } = useSession();
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
        };
        const res = await axios.post(URL, object, config);
        setTests(res);
      } catch (err) {
        setErrorTests(err);
      }
      setLoadingTests(false);
    }
  }

  if (loading) {
    return <div className="loader" />;
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
        </div>
      ) : (
        ''
      )}
    </>
  );
}

export default TestsDownload;
