import PropTypes from 'prop-types';
import '../assets/styles/components/User.scss';

function User({ user }) {
  return (
    <div className="user">
      <img
        className={`user__img ${user.isActive ? '' : 'disabled'}`}
        src={user.imageURL || 'https://i.imgur.com/oMJFiLX.jpg'}
        alt="user"
      />
      <div className="user__data">
        <h2 className="user__data__name">{`${user.firstName} ${user.lastName}`}</h2>
        <p className="user__data__role">{user.typeOfUser}</p>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired,
};

export default User;
