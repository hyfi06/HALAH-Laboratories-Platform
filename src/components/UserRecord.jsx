import Router from 'next/router';
import PropTypes from 'prop-types';
import UserRecordOptions from './UserRecordOptions';

function UserRecord({ user }) {
  function userDetail() {
    Router.push(`/detail/${user._id}`);
  }

  return (
    <tr className="table__body__row" onClick={userDetail}>
      <td className="table__body__row__cell__user">
        <img
          alt="user profile pic"
          src={
            user.imageURL ? user.imageURL : 'https://i.imgur.com/oMJFiLX.jpg'
          }
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
        <p>{user.typeOfUser}</p>
      </td>
      <UserRecordOptions active={user.isActive} />
    </tr>
  );
}

UserRecord.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserRecord;
