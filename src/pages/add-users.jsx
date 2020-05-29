import Head from 'next/head';
import UsersAddIcon from '../assets/icons/users-add.svg';
import AddUsersForm from '../components/AddUsersForm';

function AddUsers() {
  return (
    <>
      <Head>
        <title>HALAH Laboratories: Add Users</title>
      </Head>

      <main>
        <div className="title">
          <UsersAddIcon className="title__logo" />
          <h1 className="title__text">Add Users</h1>
        </div>
        <AddUsersForm />
      </main>
    </>
  );
}

export default AddUsers;
