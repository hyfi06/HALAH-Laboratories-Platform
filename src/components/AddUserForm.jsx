import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useSession } from '../context/SessionContext';
import '../assets/styles/components/AddUserForm.scss';
import ErrorIcon from '../assets/icons/error.svg';
import SuccessIcon from '../assets/icons/success.svg';
import Modal from './Modal';

function AddUserForm() {
  const { session } = useSession();
  const [prevImg, setPrevImg] = useState(
    'https://res.cloudinary.com/alexisaraujoapp1/image/upload/v1590279706/alexisapp/ou8drr0g7poddnoqprmb.jpg',
  );
  const [errorImg, setErrorImg] = useState(null);
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  async function createUser(userData) {
    setOpenModal(true);
    setLoading(true);
    try {
      const URL = `${process.env.NEXT_PUBLIC_API_URL}/users`;
      const config = {
        headers: { Authorization: `Bearer ${session.token}` },
      };
      const res = await axios.post(URL, userData, config);
      setResponse(res.data);
    } catch (err) {
      setError(err.data);
    }
    setLoading(false);
  }

  async function uploadImg() {
    setErrorImg('Loading image...');
    const imagedata = document.querySelector('input[type="file"]').files[0];
    if (imagedata.type.includes('image')) {
      const formData = new FormData();
      formData.append('file', imagedata);
      formData.append('upload_preset', 'alexisapp');
      const res = await axios.post(
        'https://api.cloudinary.com/v1_1/alexisaraujoapp1/image/upload',
        formData,
      );
      const { data } = res;
      setPrevImg(data.secure_url);
      setErrorImg(null);
    } else {
      setErrorImg('The selected file is not an image');
    }
  }

  function closeModal() {
    setOpenModal(false);
  }

  function AddMessage() {
    if (loading) {
      return (
        <div className="message">
          <div className="loader" />
        </div>
      );
    }

    if (error) {
      return (
        <div className="message">
          <ErrorIcon className="message__icon--negative" />
          <strong className="message__text">{error.message}</strong>
          <button className="btn" type="button" onClick={closeModal}>
            Accept
          </button>
        </div>
      );
    }

    if (response) {
      return (
        <div className="message">
          <SuccessIcon className="message__icon--positive" />
          <strong className="message__text">{response.message}</strong>
          <button
            className="btn"
            type="button"
            onClick={() => {
              Router.push(`/detail/${response.data._id}`);
            }}
          >
            Accept
          </button>
        </div>
      );
    }

    return '';
  }

  function AvatarForm() {
    return (
      <form className="avatar-form">
        {prevImg ? (
          <figure className="avatar-form__preview">
            <img
              className="avatar-form__preview__img"
              src={prevImg}
              alt="Avatar"
            />
          </figure>
        ) : (
          ''
        )}
        <div className="input">
          <label className="input__label">
            Profile Image
            <input
              className="input__field--img"
              type="file"
              onChange={uploadImg}
            />
          </label>
          {errorImg ? <span className="input__error">{errorImg}</span> : ''}
        </div>
      </form>
    );
  }

  function UserForm() {
    return (
      <Formik
        initialValues={{
          imageURL: prevImg,
          typeOfUser: 'Patient',
          firstName: '',
          lastName: '',
          documentID: '',
          email: '',
          contactNumber: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.typeOfUser) {
            errors.typeOfUser = 'Please choose a type';
          }
          if (!values.firstName) {
            errors.firstName = 'Please enter a first name';
          }
          if (!values.lastName) {
            errors.lastName = 'Please enter a last name';
          }
          if (!values.documentID) {
            errors.documentID = 'Please enter a document id';
          }
          if (!values.email) {
            errors.email = 'Please enter a email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          if (!values.contactNumber) {
            errors.contactNumber = 'Please enter a phone number';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await createUser(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="user-add-form">
            <section className="user-add-form__section">
              <div className="input">
                <label className="input__label">
                  Type
                  <Field
                    className="input__field"
                    as="select"
                    name="typeOfUser"
                    disabled={isSubmitting}
                  >
                    <option disabled="disabled">Choose a type</option>
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Bacteriologist">Bacteriologist</option>
                    <option value="Administrator">Administrator</option>
                  </Field>
                </label>
                <ErrorMessage
                  name="typeOfUser"
                  component="span"
                  className="input__error"
                />
              </div>
            </section>
            <h2 className="user-add-form__title">User Information</h2>
            <section className="user-add-form__section">
              <div className="input">
                <label className="input__label">
                  First Name
                  <Field
                    className="input__field"
                    type="text"
                    name="firstName"
                    disabled={isSubmitting}
                  />
                </label>
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="input__error"
                />
              </div>
              <div className="input">
                <label className="input__label">
                  Last Name
                  <Field
                    className="input__field"
                    type="text"
                    name="lastName"
                    disabled={isSubmitting}
                  />
                </label>
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="input__error"
                />
              </div>
              <div className="input">
                <label className="input__label">
                  Document ID
                  <Field
                    className="input__field"
                    type="number"
                    name="documentID"
                    disabled={isSubmitting}
                  />
                </label>
                <ErrorMessage
                  name="documentID"
                  component="span"
                  className="input__error"
                />
              </div>
            </section>
            <h2 className="user-add-form__title">Contact</h2>
            <section className="user-add-form__section">
              <div className="input">
                <label className="input__label">
                  email
                  <Field
                    className="input__field"
                    type="email"
                    name="email"
                    disabled={isSubmitting}
                  />
                </label>
                <ErrorMessage
                  name="email"
                  component="span"
                  className="input__error"
                />
              </div>
              <div className="input">
                <label className="input__label">
                  Phone Number
                  <Field
                    className="input__field"
                    type="number"
                    name="contactNumber"
                    disabled={isSubmitting}
                  />
                </label>
                <ErrorMessage
                  name="contactNumber"
                  component="span"
                  className="input__error"
                />
              </div>
            </section>
            <button className="btn" type="submit" disabled={isSubmitting}>
              Add User
            </button>
            {loading ? (
              <span className="user-add-form__load">Creating user...</span>
            ) : (
              ''
            )}
          </Form>
        )}
      </Formik>
    );
  }

  return (
    <>
      <AvatarForm />
      <UserForm />
      <Modal isOpen={openModal} onClose={closeModal}>
        <AddMessage />
      </Modal>
    </>
  );
}
export default AddUserForm;
