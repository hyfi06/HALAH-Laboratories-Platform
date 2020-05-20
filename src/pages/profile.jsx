import '../assets/styles/pages/profile.scss';
import DataUser from '../components/DataUser';
import User from '../components/User';

function Profile() {
  return (
    <>
      <User />
      <DataUser className='data-user' />
    </>
  );
}

export default Profile;
