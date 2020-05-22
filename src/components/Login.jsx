import { useState } from 'react';
import Router from 'next/router';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../assets/styles/components/Login.scss';
import Logo from '../assets/icons/logo.svg';

function Login() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const handleLoginSubmit = async (values) => {
    setLoading(true);
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`;
    try {
      const response = await axios.post(
        URL,
        {
          apiKeyToken: process.env.NEXT_PUBLIC_API_KEY,
        },
        {
          auth: {
            username: values.username,
            password: values.password,
          },
        },
      );
      document.cookie = `session=${JSON.stringify(response.data)};max-age=${
        60 * 15
      }`;
      Router.push('/users');
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="login">
      <figure className="login__logo">
        {loading ? (
          <div className="loader loader--white" />
        ) : (
          <Logo className="login__logo__icon" />
        )}
      </figure>
      <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = 'Required';
          }
          if (!values.password) {
            errors.password = 'Required';
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          await handleLoginSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="login__form lg">
            <div className="input lg">
              <label className="input__label">
                Username / email
                <Field
                  className="input__field lg"
                  type="username"
                  name="username"
                  disabled={isSubmitting}
                />
              </label>
              <ErrorMessage
                name="username"
                component="div"
                className="input__error"
              />
            </div>
            <div className="input lg">
              <label className="input__label">
                Password
                <Field
                  className="input__field lg"
                  type="password"
                  name="password"
                  disabled={isSubmitting}
                />
              </label>
              <ErrorMessage
                name="password"
                component="div"
                className="input__error"
              />
            </div>
            <button className="btn lg" type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
