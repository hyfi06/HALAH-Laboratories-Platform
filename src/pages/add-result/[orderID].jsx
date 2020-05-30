import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from '../../context/SessionContext';
import AddResultForm from '../../components/AddResultForm';
import TestIcon from '../../assets/icons/exam.svg';
import '../../assets/styles/pages/AddResult.scss';

function AddResult() {
  const router = useRouter();
  const { orderID } = router.query;
  const { session } = useSession();

  return (
    <>
      <Head>
        <title>HALAH Laboratories: Add Result</title>
      </Head>
      <main>
        <div className="title">
          <TestIcon className="title__logo" />
          <h1 className="title__text">Add Result</h1>
        </div>
        <div className="add-result__container">
          {session && session.token ? <AddResultForm orderId={orderID} /> : ''}
        </div>
      </main>
    </>
  );
}

export default AddResult;
