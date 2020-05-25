import Head from 'next/head';
import UserAddIcon from '../assets/icons/user-add.svg';
import '../assets/styles/pages/AddUser.scss';
import AddUserForm from '../components/AddUserForm';

function AddUser() {
  return (
    <>
      <Head>
        <title>HALAH Laboratories: Add User</title>
      </Head>

      <main>
        <div className="title">
          <UserAddIcon className="title__logo" />
          <h1 className="title__text">Add User</h1>
        </div>
        <div className="add-user__content">
          <AddUserForm />
        </div>
      </main>
    </>
  );
}

export default AddUser;
