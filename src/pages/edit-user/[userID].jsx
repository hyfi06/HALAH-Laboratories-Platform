import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from '../../context/SessionContext';
import '../../assets/styles/pages/EditUser.scss';
import UserIcon from '../../assets/icons/user.svg';
import EditUserForm from '../../components/EditUserForm';

function EditUser() {
  const router = useRouter();
  const { userID } = router.query;
  const { session } = useSession();

  return (
    <>
      <Head>
        <title>HALAH Laboratories: Edit User</title>
      </Head>

      <main>
        <div className="title">
          <UserIcon className="title__logo" />
          <h1 className="title__text">Edit User</h1>
        </div>
        <div className="edit-user__content">
          {session && session.token ? <EditUserForm userID={userID} /> : ''}
        </div>
      </main>
    </>
  );
}

export default EditUser;
