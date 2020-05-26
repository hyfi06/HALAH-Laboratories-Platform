import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest'
import FileIcon from '../assets/icons/file.svg';
import '../assets/styles/components/AddTestForm.scss';

function AddTestForm({ imageURL, name, lastName}) {
  const { session } = useSession();
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/exams/`,
    1,
  );

  return (
    <main className="add-test-form">
      <div className="add-test-form__title">
        <FileIcon className="add-test-form__title__icon" />
        <h2 className="add-test-form__title__text">Assign a new exam</h2>
      </div>
      <div className="add-test-form__user-info">
        <img alt="user whose new test is filling" src={imageURL} />
        <strong>
          {name}
          <br />
          {lastName}
        </strong>
      </div>
      <div className="add-test-form__form__container">
        <Formik
          initialValues={{ exam: '', appointment: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.exam) {
              errors.exam = 'Required: please select an exam';
            }
            if (!values.appointment) {
              errors.appointment = 'Required: please select an appointment date';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            alert(JSON.stringify(values));
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
                          return <option>{exam.name}</option>;
                        })}
                      </Field>
                    </label>
                    <ErrorMessage
                      name="exam"
                      component="div"
                      className="input__error"
                    />
                  </div>
                  <div className="input lg">
                    <label className="input__label lg">
                      Appointment date
                      <Field
                        className="input__field lg"
                        type="appointment"
                        name="appointment"
                        disabled={isSubmitting}
                      />
                    </label>
                    <ErrorMessage
                      name="appointment"
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
  imageURL: PropTypes.string,
  name: PropTypes.string,
  lastName: PropTypes.string,
};

AddTestForm.defaultProps = {
  imageURL: 'https://i.imgur.com/oMJFiLX.jpg',
  name: 'Catalina',
  lastName: 'Flores',
};

export default AddTestForm;
