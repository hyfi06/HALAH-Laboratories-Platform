import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../assets/styles/components/Login.scss';
import Logo from '../assets/icons/logo.svg';

function Login() {
  return (
    <div className="login">
      <figure className="login__logo">
        <Logo className="login__logo__icon" />
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
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="login__form lg">
            <div className="input lg">
              <strong className="input__label">Username / email</strong>
              <Field
                className="input__field lg"
                type="username"
                name="username"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="input__error"
              />
            </div>
            <div className="input lg">
              <strong className="input__label">Password</strong>
              <Field
                className="input__field lg"
                type="password"
                name="password"
              />
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
