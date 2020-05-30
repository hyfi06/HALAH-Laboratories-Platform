import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import '../assets/styles/components/EditUserForm.scss';
import ErrorIcon from '../assets/icons/error.svg';
import SuccessIcon from '../assets/icons/success.svg';
import Modal from './Modal';

function EditUserForm({ userID }) {
  const { session } = useSession();
  const [prevImg, setPrevImg] = useState('');
  const [errorImg, setErrorImg] = useState(null);
  const [updateResponse, setUpdateResponse] = useState({});
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateError, setUpdateError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/users/${userID}`;
  const { response, loading, error } = useRequest(session.token, URL, 1);

  async function updateUser(userData) {
    setUpdateLoading(true);
    try {
      const config = {
        headers: { Authorization: `Bearer ${session.token}` }
      };
      const res = await axios.patch(URL, userData, config);
      setUpdateResponse(res);
      setModalContent(<AddUserSuccess />);
    } catch (err) {
      setUpdateError(err);
      setModalContent(<AddUserError />);
    }
    setUpdateLoading(false);
    setOpenModal(true);
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
        formData
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

  function AddUserSuccess() {
    return (
      <div className='message'>
        <SuccessIcon className='message__icon--positive' />
        <strong className='message__text'>User updated successfully</strong>
        <button
          className='btn'
          type='button'
          onClick={() => {
            Router.push(`/detail/${userID}`);
          }}
        >
          Accept
        </button>
      </div>
    );
  }

  function AddUserError() {
    return (
      <div className='message'>
        <ErrorIcon className='message__icon--negative' />
        <strong className='message__text'>
          An error occurred while updating the user
        </strong>
        <button className='btn' type='button' onClick={closeModal}>
          Accept
        </button>
      </div>
    );
  }

  function AvatarForm() {
    return response && response.data ? (
      <form className='avatar-form'>
        {response.data.imageURL ? (
          <figure className='avatar-form__preview'>
            <img
              className='avatar-form__preview__img'
              src={prevImg || response.data.imageURL}
              alt='Avatar'
            />
          </figure>
        ) : (
          ''
        )}
        <div className='input'>
          <label className='input__label'>
            Profile Image
            <input
              className='input__field--img'
              type='file'
              onChange={uploadImg}
            />
          </label>
          {errorImg ? <span className='input__error'>{errorImg}</span> : ''}
        </div>
      </form>
    ) : (
      ''
    );
  }

  function UserForm() {
    return response && response.data ? (
      <Formik
        initialValues={{
          imageURL: prevImg || response.data.imageURL,
          email: response.data.email,
          contactNumber: response.data.contactNumber
        }}
        validate={(values) => {
          const errors = {};
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
          await updateUser(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form data-testid='useredit' className='edit-user-form'>
            <h2 className='edit-user-form__title'>Contact</h2>
            <section className='edit-user-form__section'>
              <div className='input'>
                <label className='input__label'>
                  email
                  <Field
                    className='input__field'
                    type='email'
                    name='email'
                    disabled={isSubmitting}
                  />
                </label>
                <ErrorMessage
                  name='email'
                  component='span'
                  className='input__error'
                />
              </div>
              <div className='input'>
                <label className='input__label'>
                  Phone Number
                  <Field
                    className='input__field'
                    type='number'
                    name='contactNumber'
                    disabled={isSubmitting}
                  />
                </label>
                <ErrorMessage
                  name='contactNumber'
                  component='span'
                  className='input__error'
                />
              </div>
            </section>
            <button
              data-testid='button-submited'
              className='btn'
              type='submit'
              disabled={isSubmitting}
            >
              Update User
            </button>
            {updateLoading ? (
              <span className='edit-user-form__load'>Updating user...</span>
            ) : (
              ''
            )}
          </Form>
        )}
      </Formik>
    ) : (
      ''
    );
  }

  EditUserForm.propTypes = {
    userID: PropTypes.string.isRequired
  };

  return (
    <>
      <AvatarForm />
      <UserForm />
      <Modal isOpen={openModal} onClose={closeModal}>
        {modalContent}
      </Modal>
    </>
  );
}
export default EditUserForm;
