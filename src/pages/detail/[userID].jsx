import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from '../../context/SessionContext';
import DetailComponent from '../../components/Detail';

function Detail() {
  const router = useRouter();
  const { userID } = router.query;
  const { session } = useSession();

  useEffect(() => {
    if (session && session.user.typeOfUser !== 'Administrator') {
      router.push('/');
    }
  }, [session]);

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
