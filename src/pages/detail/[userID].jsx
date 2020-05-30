import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from '../../context/SessionContext';
import DetailComponent from '../../components/Detail';

function Detail() {
  const router = useRouter();
  const { userID } = router.query;
  const { session } = useSession();

  return (
    <>
      <Head>
        <title>HALAH Laboratories: Detail</title>
      </Head>
      {session && session.token ? <DetailComponent userID={userID} /> : ''}
    </>
  );
}

export default Detail;
