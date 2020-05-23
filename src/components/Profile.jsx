import PropTypes from 'prop-types';
import useRequest from '../hooks/useRequest';
import { useSession } from '../context/SessionContext';
import '../assets/styles/components/Profile.scss';
import User from './User';
import UserData from './UserData';

function Profile({ userID }) {
  const { session } = useSession();
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/users/${userID}`;
  const { response, loading, error } = useRequest(session.token, URL);

  if (loading) {
    return <div className="loader" />;
  }

  return response && response.data ? (
    <div className="profile">
      <User user={response.data} />
      <section className="profile__user-data">
        <UserData user={response.data} />
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
