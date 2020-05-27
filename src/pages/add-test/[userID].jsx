import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from '../../context/SessionContext';
import useRequest from '../../hooks/useRequest';
import '../../assets/styles/pages/EditUser.scss';
import TestIcon from '../../assets/icons/file.svg';
import AddTestForm from '../../components/AddTestForm';

function AddTest() {
  const router = useRouter();
  const { userID } = router.query;
  const { session } = useSession();

  const { response, loading, error } = useRequest(
    session.token,
    `${process.env.NEXT_PUBLIC_API_URL}/user/${userID}`,
    1,
  );

  return (
    <>
      <Head>
        <title>HALAH Laboratories: Add Test</title>
      </Head>

      <main>
        <div className="title">
          <TestIcon className="title__logo" />
          <h1 className="title__text">Add Test</h1>
        </div>
        <div className="add-test__content">
          {loading ? <AddTestForm userData={response.data} /> : <div className="loader" />}
        </div>
      </main>
    </>
  );
}

export default AddTest;
