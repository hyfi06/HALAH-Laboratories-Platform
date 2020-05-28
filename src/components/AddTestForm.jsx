import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import FileIcon from '../assets/icons/file.svg';
import '../assets/styles/components/AddTestForm.scss';

function AddTestForm({ userID }) {
  const { session } = useSession();

  async function addTest(examId) {
    const postData = {
      patientId: userID,
      doctorId: session.user.id,
      examTypeId: examId.exam,
    };
    console.log(postData);
    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;
      const config = {
        headers: { Authorization: `Bearer ${session.token}` },
      };
      const res = await axios.post(URL, postData, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }


  function getUserData(patientId) {
    const { response, loading, error } = useRequest(
      session.token,
      `${process.env.NEXT_PUBLIC_API_URL}/users/${patientId}`,
      1,
    );
    if (error) {
      return <h3>{error.message}</h3>;
    }
    return (
      <div className="add-test-form__user-info">
        { !loading && response.data ? (
          <>
            <img alt="user whose new test is filling" src={response.data.imageURL} />
            <strong>
              {response.data.firstName}
              <br />
              {response.data.lastName}
            </strong>
          </>
        ) : (<div className="loader" />)}
      </div>
    );
  }

  function getExams() {
    const { response, loading, error } = useRequest(
      session.token,
      `${process.env.NEXT_PUBLIC_API_URL}/exams/`,
      1,
    );
    if (error) {
      return <h3>{error.message}</h3>;
    }
    return (
      <>
        <div className="add-test-form__form__container">
          <Formik
            initialValues={{ examId: '', examName: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.exam) {
                errors.exam = 'Required: please select an exam';
              }
              return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
              addTest(values);
              console.log(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <>
                { !loading && response.data ? (
                  <Form className="add-test-form__form lg">
                    <div className="input lg">
                      <label className="input__label lg">
                        Select an test by their ID:
                        <Field
                          as="select"
                          className="input__field lg"
                          type="exam"
                          name="exam"
                          disabled={isSubmitting}
                        >
                          {response.data.map((exam) => <option>{exam._id}</option>)}
                        </Field>
                      </label>
                      <ErrorMessage
                        name="exam"
                        component="div"
                        className="input__error"
                      />
                    </div>
                    <button className="btn lg" type="submit" disabled={isSubmitting}>
                      Add new test
                    </button>
                  </Form>
                ) : (<div className="loader" />)}
              </>
            )}
          </Formik>
        </div>
        <table className="table container__test">
          <thead className="table__head">
            <tr className="table__head__row">
              <th className="table__head__row__cell colum__test">
                <strong>Test ID</strong>
              </th>
              <th className="table__head__row__cell colum__test">
                <strong>Test Name</strong>
              </th>
            </tr>
          </thead>
          <tbody className="table__body">
            {response.data.map((exam) => (
              <tr className="table__body__row">
                <td className="table__body__row__cell">
                  <p>{exam._id}</p>
                </td>
                <td className="table__body__row__cell">
                  <p>{exam.name}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }

  return (
    <main className="add-test-form">
      <div className="add-test-form__title">
        <FileIcon className="add-test-form__title__icon" />
        <h2 className="add-test-form__title__text">Assign a new test to:</h2>
      </div>
      {getUserData(userID)}
      {getExams()}
    </main>
  );
}

AddTestForm.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default AddTestForm;
