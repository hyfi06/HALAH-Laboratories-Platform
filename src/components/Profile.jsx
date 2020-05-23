import PropTypes from 'prop-types';
import useData from '../hooks/useData';
import { useSession } from '../context/SessionContext';
import '../assets/styles/components/Profile.scss';
import User from './User';
import UserData from './UserData';

function Profile({ userID }) {
  const { session } = useSession();
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/users/${userID}`;
  const { data, loading, error } = useData(session.token, URL);

  if (loading) {
    return <div className="loader" />;
  }

  return data && data.data ? (
    <div className="profile">
      <User user={data.data} />
      <section className="profile__user-data">
        <UserData user={data.data} />
      </section>
    </div>
  ) : (
    ''
  );
}

Profile.propTypes = {
  userID: PropTypes.string.isRequired,
};

export default Profile;
