import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from '../../context/SessionContext';
import AddResultForm from '../../components/AddResultForm';

function AddResult() {
  const router = useRouter();
  const { orderID } = router.query;
  const { session } = useSession();

  return (
    <>
      <Head>
        <title>HALAH Laboratories: Add Result</title>
      </Head>
      {session && session.token ? <AddResultForm orderId={orderID} /> : ''}
    </>
  );
}

export default AddResult;
