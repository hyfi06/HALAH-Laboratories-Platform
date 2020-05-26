import { useSession } from '../context/SessionContext';
import AddTestForm from '../components/AddTestForm';

function Test() {
  const { session } = useSession();

  return (
    <>
      {session && session.token ? (
        <>
          <AddTestForm />
        </>
      ) : (
        ''
      )}
    </>
  );
}

export default Test;
