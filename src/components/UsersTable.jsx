/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';

import EditIcon from '../assets/icons/edit.svg';
import DeleteIcon from '../assets/icons/delete.svg';
import ActivateIcon from '../assets/icons/activate.svg';

import '../assets/styles/components/UsersTable.scss';

function UsersTable({ data }) {
  const tableContent = data.map((user) => (
    <tr className="table__body__row">
      <td className="table__body__row__cell">
        <img alt="user profile pic" src={user.imageURL} className="table__body__row__cell__image" />
      </td>
      <td className="table__body__row__cell"><p>{user.username}</p></td>
      <td className="table__body__row__cell"><p>{`${user.firstName} ${user.lastName}`}</p></td>
      <td className="table__body__row__cell"><p>{user.type}</p></td>
      {user.isActive === true
        ? (
          <>
            <td className="table__body__row__cell">
              <EditIcon className="table__body__row__cell__icon" />
            </td>
            <td className="table__body__row__cell">
              <DeleteIcon className="table__body__row__cell__icon" />
            </td>
          </>
        )
        : (
          <td className="table__body__row__cell">
            <ActivateIcon className="table__body__row__cell__icon" />
          </td>
        )}
    </tr>
  ));

  return (
    <main className="table__container">
      <table className="table">
        <thead className="table__head">
          <tr className="table__head__row">
            <th className="table__head__row__cell" />
            <th className="table__head__row__cell"><strong>Username</strong></th>
            <th className="table__head__row__cell"><strong>Full Name</strong></th>
            <th className="table__head__row__cell"><strong>Type</strong></th>
            <th className="table__head__row__cell" />
            <th className="table__head__row__cell" />
          </tr>
        </thead>
        <tbody className="table__body">
          {tableContent}
        </tbody>
      </table>
    </main>
  );
}

UsersTable.propTypes = {
  data: PropTypes.arrayOf,
};

UsersTable.defaultProps = {
  data: [
    { firstName: 'alberto', lastName: 'camarena', username: 'alberto.camarena.1234', imageURL: '/default.png', isActive: true, type: 'Doctor' },
    { firstName: 'luis', lastName: 'flores', username: 'luis.flores.5678', imageURL: '/default.png', type: 'Administrator' },
  ],
};

export default UsersTable;
