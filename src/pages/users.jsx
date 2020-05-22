import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import UsersIcon from '../assets/icons/users.svg';
import UsersTable from '../components/UsersTable';

function Users({ userType }) {
  return (
    <main className="users">
      <div className="title">
        <UsersIcon className="title__logo" />
        <h1 className="title__text">Users</h1>
      </div>
      <Filter typeOfUser={userType} />
      <UsersTable />
    </main>
  );
}

Users.propTypes = {
  userType: PropTypes.string,
};

Users.defaultProps = {
  userType: '',
};

export default Users;
