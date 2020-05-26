import Router from 'next/router';
import PropTypes from 'prop-types';

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
          className={`table__body__row__cell__user__image${
            user.isActive ? '' : '--disabled'
          }`}
        />
      </td>
      <td className="table__body__row__cell">
        <span>{user.username}</span>
      </td>
      <td className="table__body__row__cell">
        <span>{`${user.firstName} ${user.lastName}`}</span>
      </td>
      <td className="table__body__row__cell">
        <span>{user.typeOfUser}</span>
      </td>
    </tr>
  );
}

UserRecord.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserRecord;
