import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from '../../context/SessionContext';
import DetailTestComponent from '../../components/DetailTest';

function TestDetail() {
  const router = useRouter();
  const { testID } = router.query;
  const { session } = useSession();

  return (
    <>
      <Head>
        <title>HALAH Laboratories: TestDetail</title>
      </Head>
      {session && session.token ? <DetailTestComponent testID={testID} /> : ''}
    </>
  );
}

export default TestDetail;