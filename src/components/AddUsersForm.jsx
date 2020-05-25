import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../assets/styles/components/AddUsersForm.scss';

function AddUsersForm() {
  return (
    <>
      <div className='add-users-form'>
        <Formik>
          <Form className='add-users-form__container lg'>
            <div className='add-users-form__content input gl'>
              <strong className='add-users-form__title  input__label'>
                Select a CSV file:
              </strong>
              <Field className=' add-users-form__input input__field lg' />

              <ErrorMessage
                name='upload'
                component='div'
                className='input__error'
              />
            </div>
            <button className='add-users-form__button' type='submit'>
              Upload
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
export default AddUsersForm;
