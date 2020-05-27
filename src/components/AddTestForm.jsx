import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import FileIcon from '../assets/icons/file.svg';
import '../assets/styles/components/AddTestForm.scss';

function AddTestForm({ userData }) {
  const { session } = useSession();
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/exams/`,
    1,
  );

  async function addTest(examId) {
    const postData = {
      patientId: userData._id,
      doctorId: session.user._id,
      examTypeId: examId,
    };
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

  return (
    <main className="add-test-form">
      <div className="add-test-form__title">
        <FileIcon className="add-test-form__title__icon" />
        <h2 className="add-test-form__title__text">Assign a new exam</h2>
      </div>
      <div className="add-test-form__user-info">
        <img alt="user whose new test is filling" src={userData.imageURL} />
        <strong>
          {userData.name}
          <br />
          {userData.lastName}
        </strong>
      </div>
      <div className="add-test-form__form__container">
        <Formik
          initialValues={{ exam: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.exam) {
              errors.exam = 'Required: please select an exam';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            addTest(values)
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <>
              { !loading && response.data ? (
                <Form className="add-test-form__form lg">
                  <div className="input lg">
                    <label className="input__label lg">
                      Select an exam
                      <Field
                        as="select"
                        className="input__field lg"
                        type="exam"
                        name="exam"
                        disabled={isSubmitting}
                      >
                        {response.data.map((exam) => {
                          console.log(exam.name);
                          return <option>{exam._id}</option>;
                        })}
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
    </main>
  );
}

AddTestForm.propTypes = {
  userData: PropTypes.object.isRequired,
};

export default AddTestForm;
