import { Formik, Form, Field, ErrorMessage, isNaN } from 'formik';
import { useState, useEffect } from 'react';
import { useSession } from '../context/SessionContext';
import useRequest from '../hooks/useRequest';
import '../assets/styles/components/UsersTable.scss';
import UserRecord from './UserRecord';

function UsersTable() {
  const [requestCount, setRequestCount] = useState(1);
  const [filter, setFilter] = useState('');
  const { session } = useSession();
  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/users${filter}`,
    requestCount,
  );

  useEffect(() => {
    if (
      session.user.typeOfUser === 'Doctor' ||
      session.user.typeOfUser === 'Bacteriologist'
    ) {
      setFilter('?typeOfUser=Patient&isActive=true');
    }
  }, []);

  function searchUser(values) {
    setRequestCount(requestCount + 1);
    if (session.user.typeOfUser === 'Administrator' && values.type) {
      if (isNaN(parseInt(values.documentID, 10)) && values.documentID) {
        setFilter(`?name=${values.documentID}&typeOfUser=${values.type}`);
      } else if (values.type && values.documentID) {
        setFilter(`?documentID=${values.documentID}&typeOfUser=${values.type}`);
      } else if (values.type) {
        setFilter(`?typeOfUser=${values.type}`);
      }
    } else if (session.user.typeOfUser === 'Administrator') {
      if (values.documentID && isNaN(parseInt(values.documentID, 10))) {
        setFilter(`?name=${values.documentID}`);
      } else if (values.documentID) {
        setFilter(`?documentID=${values.documentID}`);
      } else {
        setFilter('');
      }
    } else {
      setFilter(
        `?documentID=${values.documentID}&typeOfUser=Patient&isActive=true`,
      );
    }
  }

  function UsersSearch() {
    return (
      <Formik
        initialValues={{
          documentID: '',
          type: '',
        }}
        validate={(values) => {
          const errors = {};
          if (
            !values.documentID &&
            session.user.typeOfUser !== 'Administrator'
          ) {
            errors.documentID = 'Enter a document id';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          searchUser(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="users-search">
            <div className="input">
              <label className="input__label">
                {session.user.typeOfUser === 'Administrator'
                  ? 'Document ID / Name'
                  : 'Document ID'}
                <Field
                  className="input__field"
                  type="text"
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
            {session.user.typeOfUser === 'Administrator' ? (
              <div className="input">
                <label className="input__label">
                  Type
                  <Field
                    className="input__field"
                    as="select"
                    name="type"
                    disabled={isSubmitting}
                  >
                    <option value="">All</option>
                    <option value="Patient">Patient</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Bacteriologist">Bacteriologist</option>
                    <option value="Administrator">Administrator</option>
                  </Field>
                </label>
                <ErrorMessage
                  name="type"
                  component="span"
                  className="input__error"
                />
              </div>
            ) : (
              ''
            )}
            <button className="btn" type="submit" disabled={isSubmitting}>
              Search
            </button>
            {session.user.typeOfUser === 'Administrator' && filter ? (
              <button
                className="btn"
                type="button"
                onClick={() => {
                  setFilter('');
                }}
              >
                Show all users
              </button>
            ) : (
              ''
            )}
          </Form>
        )}
      </Formik>
    );
  }

  function Table() {
    if (loading) {
      return <div className="loader" />;
    }

    if (error) {
      return <h3>{error.response.data.message}</h3>;
    }

    return (
      <table className="table">
        <thead className="table__head">
          <tr className="table__head__row">
            <th className="table__head__row__cell" />
            <th className="table__head__row__cell">
              <strong>Username</strong>
            </th>
            <th className="table__head__row__cell">
              <strong>Full Name</strong>
            </th>
            <th className="table__head__row__cell">
              <strong>Type</strong>
            </th>
          </tr>
        </thead>

        <tbody className="table__body">
          {response.data.map((user) => (
            <UserRecord key={user._id} user={user} />
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <>
      <UsersSearch />
      {response && response.data ? <Table /> : ''}
    </>
  );
}

export default UsersTable;
