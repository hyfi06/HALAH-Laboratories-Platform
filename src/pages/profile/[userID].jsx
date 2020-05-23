import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSession } from '../../context/SessionContext';
import ProfileComponent from '../../components/Profile';

function Profile() {
  const router = useRouter();
  const { userID } = router.query;
  const { session } = useSession();

  useEffect(() => {
    if (session && session.user.typeOfUser !== 'admin') {
      router.push('/');
    }
  }, [session]);

  return (
    <>
      <Head>
        <title>HALAH Laboratories: Profile</title>
      </Head>
      {session && session.token ? <ProfileComponent userID={userID} /> : ''}
    </>
  );
}

export default Profile;
