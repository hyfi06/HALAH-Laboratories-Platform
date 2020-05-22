import PropTypes from 'prop-types';
import UserRecordOptions from './UserRecordOptions';

function UserRecord({ user }) {
  return (
    <tr className="table__body__row">
      <td className="table__body__row__cell__user">
        <img
          alt="user profile pic"
          src={user.imageURL}
          className="table__body__row__cell__user__image"
        />
      </td>
      <td className="table__body__row__cell">
        <p>{user.username}</p>
      </td>
      <td className="table__body__row__cell">
        <p>{`${user.firstName} ${user.lastName}`}</p>
      </td>
      <td className="table__body__row__cell">
        <p>{user.type}</p>
      </td>
      <UserRecordOptions active={user.isActive} />
    </tr>
  );
}

UserRecord.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserRecord;
