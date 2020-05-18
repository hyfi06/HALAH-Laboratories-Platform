/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types';

import Edit from '../assets/icons/edit.svg';
import Delete from '../assets/icons/delete.svg';
import Reactive from '../assets/icons/activate.svg';

import '../assets/styles/components/Table.scss';

export default function Table({ users }) {
  const tableContent = users.map((user) => (
    <tr>
      <td><img alt="user profile pic" src={user.photograph} className="table__image" /></td>
      <td>{user.username}</td>
      <td>{`${user.name} ${user.lastName}`}</td>
      <td>{user.type}</td>
      {user.status === 'active'
        ? (
          <>
            <td><Edit className="logo" /></td>
            <td><Delete className="logo" /></td>
          </>
        )
        : <td><Reactive className="logo" /></td>}
    </tr>
  ));

  return (
    <table className="card table">
      <thead>
        <tr>
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <th />
          <th>Username</th>
          <th>Full Name</th>
          <th>Type</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {tableContent}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  users: PropTypes.arrayOf,
};

Table.defaultProps = {
  users: [
    { name: 'alberto', lastName: 'camarena', username: 'alberto.camarena.1234', photograph: '/default.png', status: 'active' },
    { name: 'luis', lastName: 'flores', username: 'luis.flores.5678', photograph: '/default.png' },
  ],
};
