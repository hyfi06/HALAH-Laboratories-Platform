import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import '../assets/styles/components/TemplateForm.scss';
import ErrorIcon from '../assets/icons/error.svg';
import SuccessIcon from '../assets/icons/success.svg';
import Modal from './Modal';

function ScheduleForm({ examName }) {
  const { session } = useSession();
  const [openModal, setOpenModal] = useState(false);
  const [resultLoading, setResultLoading] = useState(false);
  const [resultError, setResultError] = useState(null);
  const [resultResponse, setResultResponse] = useState({});
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/exams?name=${examName}`,
    1,
  );
  const router = useRouter();
  const { orderID } = router.query;

  async function addResult(obj) {
    setOpenModal(true);
    setResultLoading(true);
    setResultError(null);
    const array = [];
    response.data[0].resultTemplate.map((param) => {
      const nameField = param.fieldName;
      const element = {
        fieldName: nameField,
        value: obj.nameField,
      };
      array.push(element);
    });
    const objValues = Object.values(obj);
    for (let index = 0; index < array.length; index++) {
      if (objValues[index]) {
        array[index].value = objValues[index];
      } else {
        array[index].value = 0;
      }
    }

    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/results`;
      const objBody = {
        orderId: orderID,
        bacteriologistId: session.user.id,
        results: array,
      };
      const config = {
        headers: { Authorization: `Bearer ${session.token}` },
      };
      console.log(objBody);
      const res = await axios.post(URL, objBody, config);
      setResultResponse(res.data);
    } catch (err) {
      setResultError(err.data);
    }
    setResultError(null);
    setResultLoading(false);
  }

  function closeModal() {
    setOpenModal(false);
  }

  function redirectModal() {
    router.push(`/testDetail/${orderID}`);
  }

  function ResultMessage() {
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
          <strong className="message__text">{resultError.message}</strong>
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
          <strong className="message__text">{resultResponse.message}</strong>
          <button className="btn" type="button" onClick={redirectModal}>
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

  return (
    <>
      {response && response.data ? (
        <>
          <Formik
            initialValues={{}}
            onSubmit={async (values, { setSubmitting }) => {
              await addResult(values);
              setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="template-form">
                <h3 className="template-form__title">
                  {response.data[0].name}
                </h3>
                {response.data[0].resultTemplate.map((param) => (
                  <div className="input" key={param.fieldName}>
                    <label className="input__label">
                      {param.fieldName}
                      <Field
                        className="input__field"
                        type="number"
                        name={param.fieldName}
                        disabled={isSubmitting}
                      />
                    </label>
                    <ErrorMessage
                      name="firstName"
                      component="span"
                      className="input__error"
                    />
                  </div>
                ))}
                <br />
                <button className="btn" type="submit" disabled={isSubmitting}>
                  Add result
                </button>
              </Form>
            )}
          </Formik>
          <Modal isOpen={openModal}>
            <ResultMessage />
          </Modal>
        </>
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
