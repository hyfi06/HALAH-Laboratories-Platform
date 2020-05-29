import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';

function ScheduleForm({ examName }) {
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

  return (
    <>
      {response && response.data ? (
        <Formik
          initialValues={{ value: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.value) {
              errors.value = 'No fields can be empty';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="add-result__form">
              {response.data[0].resultTemplate.map((field) => (
                <div className="input">
                  <label className="input__label">
                    {`Field Name: ${field.fieldName}`}
                    <Field
                      className="input__field"
                      type="value"
                      name="value"
                      disabled={isSubmitting}
                    />
                  </label>
                  <ErrorMessage
                    name="value"
                    component="div"
                    className="input__error"
                  />
                </div>
              ))}
              <button className="btn" type="submit" disabled={isSubmitting}>
                Add new result
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        ''
      )}
    </>
  );
}

ScheduleForm.propTypes = {
  examName: PropTypes.string.isRequired,
};

export default ScheduleForm;
