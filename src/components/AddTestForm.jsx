import PropTypes from 'prop-types';
import Router from 'next/router';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import ErrorIcon from '../assets/icons/error.svg';
import SuccessIcon from '../assets/icons/success.svg';
import Modal from './Modal';
import '../assets/styles/components/AddTestForm.scss';

function AddTestForm({ userID }) {
  const { session } = useSession();
  const [openModal, setOpenModal] = useState(false);
  const [testResponse, setTestResponse] = useState({});
  const [testLoading, setTestLoading] = useState(false);
  const [testError, setTestError] = useState(null);

  function closeModal() {
    setOpenModal(false);
  }

  function redirectModal() {
    closeModal();
    Router.push(`/detail/${userID}`);
  }

  function ResponseMessage() {
    if (testLoading) {
      return (
        <div className="message">
          <div className="loader" />
        </div>
      );
    }

    if (testError) {
      return (
        <div className="message">
          <ErrorIcon className="message__icon--negative" />
          <strong className="message__text">{testError.data.message}</strong>
          <button className="btn" type="button" onClick={closeModal}>
            Accept
          </button>
        </div>
      );
    }

    if (testResponse) {
      return (
        <div className="message">
          <SuccessIcon className="message__icon--positive" />
          <strong className="message__text">{testResponse.data.message}</strong>
          <button className="btn" type="button" onClick={redirectModal}>
            Accept
          </button>
        </div>
      );
    }

    return '';
  }

  async function addTest(examId) {
    const postData = {
      patientId: userID,
      doctorId: session.user.id,
      examTypeId: examId.exam,
    };
    setTestLoading(true);
    setOpenModal(true);
    setTestError(null);
    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;
      const config = {
        headers: { Authorization: `Bearer ${session.token}` },
      };
      const res = await axios.post(URL, postData, config);
      setTestResponse(res);
    } catch (err) {
      setTestError(err.data.message);
    }
    setTestLoading(false);
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
        {!loading && response.data ? (
          <>
            <img
              alt="user whose new test is filling"
              src={response.data.imageURL}
            />
            <strong>
              {response.data.firstName}
              <br />
              {response.data.lastName}
            </strong>
          </>
        ) : (
          <div className="loader" />
        )}
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
      <div className="add-test-form__form__container">
        <Formik
          initialValues={{ examId: '', examName: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.exam) {
              errors.exam = 'Please select a test';
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            addTest(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <>
              {!loading && response.data ? (
                <Form className="add-test-form__form">
                  <div className="input">
                    <label className="input__label">
                      Select a test:
                      <Field
                        as="select"
                        className="input__field"
                        type="exam"
                        name="exam"
                        disabled={isSubmitting}
                      >
                        <option defaultValue="" />
                        {response.data.map((exam) => (
                          <option key={exam._id} value={exam._id}>
                            {exam.name}
                          </option>
                        ))}
                      </Field>
                    </label>
                    <ErrorMessage
                      name="exam"
                      component="div"
                      className="input__error"
                    />
                  </div>
                  <button className="btn" type="submit" disabled={isSubmitting}>
                    Add new test
                  </button>
                </Form>
              ) : (
                <div className="loader" />
              )}
            </>
          )}
        </Formik>
      </div>
    );
  }

  return (
    <>
      <main className="add-test-form">
        {getUserData(userID)}
        {getExams()}
      </main>

      <Modal isOpen={openModal}>
        <ResponseMessage />
      </Modal>
    </>
  );
}

AddTestForm.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default AddTestForm;
