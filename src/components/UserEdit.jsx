import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserIcon from '../assets/icons/user.svg';
import '../assets/styles/components/UserEdit.scss';

function UserEdit() {
  // eslint-disable-next-line prefer-const
  let [status, setStatus] = useState({
    loading: false,
    error: false,
    success: false,
  });

  if (status.loading) {
    return <h3>Loading...</h3>;
  }

  if (status.error) {
    return <h3>Sorry we could not update the user info, please try again</h3>;
  }

  if (status.success) {
    return <h3>User info updated successfully</h3>;
  }

  return (
    <div className="user-edit">
      <div className="user-edit__title">
        <UserIcon className="user-edit__title__icon" />
        <h2 className="user-edit__title__text">Edit User</h2>
      </div>
      <Formik
        initialValues={{ profileImage: '', email: '', phoneNumber: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.profileImage) {
            errors.profileImage = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          }
          if (!values.phoneNumber) {
            errors.phoneNumber = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          const result = new Promise((res, rej) => {
            setTimeout(() => {
              res(values);
            }, 400);
          });
          result.then((data) => {
            alert(JSON.stringify(data, null, 2));
            setSubmitting(false);
            setStatus(status = {
              loading: false,
              error: false,
              success: true,
            });
          })
            .catch(() => {
              setStatus(status = {
                loading: false,
                error: true,
                success: false,
              });
            });
          setStatus(status = {
            loading: true,
            error: false,
            success: false,
          });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="user-edit__form">
            <div className="user-edit__form__input input lg">
              <strong className="user-edit__form__input__text input__label">Profile Image</strong>
              <Field
                className="user-edit__form__input__field input__field lg"
                type="profileImage"
                name="profileImage"
              />
              <ErrorMessage
                className="user-edit__form__input__error input__error"
                component="div"
                name="profileImage"
              />
            </div>
            <div className="user-edit__form__input input lg">
              <strong className="user-edit__form__input__text input__label">Email</strong>
              <Field
                className="user-edit__form__input__field input__field lg"
                type="email"
                name="email"
              />
              <ErrorMessage
                className="user-edit__form__input__error input__error"
                component="div"
                name="email"
              />
            </div>
            <div className="user-edit__form__input input lg">
              <strong className="user-edit__form__input__text input__label">Phone Number</strong>
              <Field
                className="user-edit__form__input__field input__field lg"
                type="phoneNumber"
                name="phoneNumber"
              />
              <ErrorMessage
                className="user-edit__form__input__error input__error"
                component="div"
                name="phoneNumber"
              />
            </div>
            <button
              className="user-edit__form__button btn lg"
              type="submit"
              disabled={isSubmitting}
            >
              Update user
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserEdit;
